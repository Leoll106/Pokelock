const API_BASE = "https://pokeapi.co/api/v2";
const MEMORY_CACHE = new Map();
const GENERATION_CACHE = new Map();

const fetchJson = async (url) => {
  const cached = MEMORY_CACHE.get(url);
  if (cached) return cached;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`PokeAPI request failed: ${response.status}`);
  }

  const data = await response.json();
  MEMORY_CACHE.set(url, data);
  return data;
};

const getSessionCache = (key) => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const setSessionCache = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Cache is optional; if storage is full/private, the app still works.
  }
};

const runConcurrent = async (items, limit, worker, onProgress) => {
  const results = new Array(items.length);
  let cursor = 0;
  let completed = 0;

  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;

      results[index] = await worker(items[index], index);
      completed += 1;
      onProgress?.({ completed, total: items.length });
    }
  });

  await Promise.all(runners);
  return results;
};

const getPokemonIdFromUrl = (url) => {
  const match = url.match(/\/pokemon\/(\d+)\//);
  return match ? Number(match[1]) : 0;
};

const fetchDefaultPokemonFromSpecies = async (speciesName) => {
  try {
    return await fetchJson(`${API_BASE}/pokemon/${speciesName}/`);
  } catch {
    const species = await fetchJson(`${API_BASE}/pokemon-species/${speciesName}/`);
    const defaultVariety = species.varieties?.find((entry) => entry.is_default)?.pokemon;
    const fallbackVariety = species.varieties?.[0]?.pokemon;
    const pokemonUrl = defaultVariety?.url || fallbackVariety?.url;

    if (!pokemonUrl) throw new Error(`No Pokemon variety found for ${speciesName}`);
    return fetchJson(pokemonUrl);
  }
};

const normalizePokemon = (pokemon, generation) => ({
  id: pokemon.id,
  name: pokemon.name,
  generation,
  sprite:
    pokemon.sprites?.other?.["official-artwork"]?.front_default ||
    pokemon.sprites?.front_default ||
    null,
  types: pokemon.types.map((entry) => entry.type.name),
  evs: pokemon.stats.reduce((acc, entry) => {
    acc[entry.stat.name] = entry.effort || 0;
    return acc;
  }, {}),
});

export async function fetchGenerationSpecies(generationId) {
  const generation = await fetchJson(`${API_BASE}/generation/${generationId}/`);
  return generation.pokemon_species
    .map((species) => ({
      name: species.name,
      url: species.url,
      id: Number(species.url.match(/\/pokemon-species\/(\d+)\//)?.[1] || 0),
      generation: generationId,
    }))
    .sort((a, b) => a.id - b.id);
}

export async function fetchPokemonForGeneration(generationId, onProgress) {
  if (GENERATION_CACHE.has(generationId)) return GENERATION_CACHE.get(generationId);

  const sessionKey = `ev-generation-${generationId}`;
  const sessionData = getSessionCache(sessionKey);
  if (sessionData) {
    GENERATION_CACHE.set(generationId, sessionData);
    return sessionData;
  }

  const species = await fetchGenerationSpecies(generationId);
  const pokemon = await runConcurrent(
    species,
    18,
    async (entry) => normalizePokemon(await fetchDefaultPokemonFromSpecies(entry.name), generationId),
    onProgress
  );

  const sortedPokemon = pokemon
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);

  GENERATION_CACHE.set(generationId, sortedPokemon);
  setSessionCache(sessionKey, sortedPokemon);
  return sortedPokemon;
}

export async function fetchPokemonThroughGeneration(generationId, onProgress) {
  const generations = Array.from({ length: generationId }, (_, index) => index + 1);
  const buckets = [];
  let completed = 0;
  let total = 0;

  for (const id of generations) {
    const species = await fetchGenerationSpecies(id);
    total += species.length;
  }

  for (const id of generations) {
    const bucket = await fetchPokemonForGeneration(id, (progress) => {
      onProgress?.({
        completed: completed + progress.completed,
        total,
      });
    });
    completed += bucket.length;
    buckets.push(bucket);
  }

  const byId = new Map();
  buckets.flat().forEach((pokemon) => byId.set(pokemon.id || getPokemonIdFromUrl(pokemon.url), pokemon));

  return [...byId.values()].sort((a, b) => a.id - b.id);
}

export function filterPokemonByEvStat(pokemonList, statName) {
  return pokemonList
    .filter((pokemon) => (pokemon.evs?.[statName] || 0) > 0)
    .map((pokemon) => ({
      ...pokemon,
      effort: pokemon.evs[statName],
    }))
    .sort((a, b) => b.effort - a.effort || a.id - b.id);
}
