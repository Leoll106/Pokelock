import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Search, Sparkles } from "lucide-react";
import { fetchPokemonEvolutionLine, fetchPokemonThroughGeneration } from "../services/pokeApi";
import {
  getDefensiveMatchups,
  getDualOffensiveMatchups,
  TYPE_COLORS,
} from "../data/typeData";

const STAT_OPTIONS = [
  { id: "hp", label: "HP", short: "HP", color: "#EF4444" },
  { id: "attack", label: "Ataque", short: "ATK", color: "#F97316" },
  { id: "defense", label: "Defensa", short: "DEF", color: "#38BDF8" },
  { id: "special-attack", label: "At. Especial", short: "SPA", color: "#A855F7" },
  { id: "special-defense", label: "Def. Especial", short: "SPD", color: "#22C55E" },
  { id: "speed", label: "Velocidad", short: "SPE", color: "#FACC15" },
];

const TYPE_NAME_ES = {
  normal: "Normal",
  fire: "Fuego",
  water: "Agua",
  electric: "Eléctrico",
  grass: "Planta",
  ice: "Hielo",
  fighting: "Lucha",
  poison: "Veneno",
  ground: "Tierra",
  flying: "Volador",
  psychic: "Psíquico",
  bug: "Bicho",
  rock: "Roca",
  ghost: "Fantasma",
  dragon: "Dragón",
  dark: "Siniestro",
  steel: "Acero",
  fairy: "Hada",
};

const formatPokemonName = (name) =>
  name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const normalizeSearch = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

const toDisplayType = (type) => TYPE_NAME_ES[type] || type;

const getPokemonEvYields = (pokemon) =>
  STAT_OPTIONS
    .map((stat) => ({
      ...stat,
      effort: pokemon.evs?.[stat.id] || 0,
    }))
    .filter((stat) => stat.effort > 0);

const getTotalStats = (pokemon) =>
  STAT_OPTIONS.reduce((total, stat) => total + (pokemon.baseStats?.[stat.id] || 0), 0);

function TypePill({ type, multiplier }) {
  const label = toDisplayType(type);
  const colors = TYPE_COLORS[label] || { bg: "#888" };

  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-lg inline-flex items-center gap-1"
      style={{
        color: colors.bg,
        backgroundColor: `${colors.bg}18`,
        border: `1px solid ${colors.bg}40`,
      }}
    >
      {label}
      {multiplier && <span className="font-mono opacity-70">x{multiplier}</span>}
    </span>
  );
}

function StatBar({ stat, value }) {
  const percent = Math.min(100, Math.round((value / 180) * 100));

  return (
    <div className="grid grid-cols-[88px_42px_1fr] items-center gap-2">
      <span className="text-white/45 text-[11px] font-black">{stat.label}</span>
      <span className="text-white text-xs font-mono text-right">{value}</span>
      <div className="h-2 rounded-full bg-white/8 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            backgroundColor: stat.color,
            boxShadow: `0 0 12px ${stat.color}55`,
          }}
        />
      </div>
    </div>
  );
}

function SearchResult({ pokemon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl border p-3 flex items-center gap-3 text-left transition-all duration-200 hover:-translate-y-0.5"
      style={{
        backgroundColor: isActive ? "rgba(248,208,48,0.12)" : "rgba(255,255,255,0.025)",
        borderColor: isActive ? "rgba(248,208,48,0.65)" : "rgba(255,255,255,0.08)",
      }}
    >
      <div className="w-14 h-14 rounded-lg bg-white/[0.035] border border-white/8 flex items-center justify-center flex-shrink-0">
        {pokemon.sprite ? (
          <img src={pokemon.sprite} alt={pokemon.name} loading="lazy" className="w-12 h-12 object-contain" />
        ) : (
          <span className="text-white/25 font-mono text-xs">#{pokemon.id}</span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-white/25 text-[10px] font-mono">#{String(pokemon.id).padStart(4, "0")}</p>
        <h3 className="text-white font-black text-lg leading-tight truncate">{formatPokemonName(pokemon.name)}</h3>
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {pokemon.types.map((type) => (
            <TypePill key={type} type={type} />
          ))}
        </div>
      </div>
      <div className="text-right flex-shrink-0">
        <p className="text-white font-black text-lg font-mono">{getTotalStats(pokemon)}</p>
        <p className="text-white/25 text-[10px] font-mono">TOTAL</p>
      </div>
    </button>
  );
}

function MatchupGroup({ title, types, tone, emptyText }) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
      <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest mb-2">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {types.length > 0 ? (
          types.map((entry) => {
            const type = typeof entry === "string" ? entry : entry.type;
            const mult = typeof entry === "string" ? null : entry.mult;
            return <TypePill key={`${type}-${mult || tone}`} type={type} multiplier={mult} />;
          })
        ) : (
          <span className="text-white/25 text-[10px] font-mono">{emptyText}</span>
        )}
      </div>
    </div>
  );
}

function MatchupsPanel({ pokemon }) {
  const [type1, type2] = pokemon.types.map(toDisplayType);
  const defensive = getDefensiveMatchups(type1, type2);
  const offensive = getDualOffensiveMatchups(type1, type2);

  const weak = [
    ...defensive.weakX4.map((type) => ({ type, mult: 4 })),
    ...defensive.weakX2.map((type) => ({ type, mult: 2 })),
  ];
  const resist = [
    ...defensive.resistX025.map((type) => ({ type, mult: 0.25 })),
    ...defensive.resistX05.map((type) => ({ type, mult: 0.5 })),
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <MatchupGroup title="Debilidades" types={weak} tone="weak" emptyText="Sin debilidades relevantes" />
      <MatchupGroup title="Resistencias" types={resist} tone="resist" emptyText="Sin resistencias" />
      <MatchupGroup title="Inmunidades" types={defensive.immunities} tone="immune" emptyText="Sin inmunidades" />
      <MatchupGroup
        title="STAB super efectivo"
        types={offensive.superEffective}
        tone="effective"
        emptyText="Sin cobertura super efectiva por tipo"
      />
    </div>
  );
}

function EvolutionLine({ evolutionLine, selectedPokemonName, loading, error, onSelect }) {
  if (loading) {
    return (
      <div className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-white/30 text-xs font-mono">
        Cargando linea evolutiva...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-200 text-xs font-mono">
        {error}
      </div>
    );
  }

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {evolutionLine.map((entry, index) => {
        const isActive = entry.name === selectedPokemonName;

        return (
          <div key={`${entry.name}-${index}`} className="flex items-center gap-2 flex-shrink-0">
            {index > 0 && <ChevronRight className="w-4 h-4 text-white/18" />}
            <button
              onClick={() => onSelect(entry.pokemon)}
              className="w-[132px] rounded-xl border p-3 text-center transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: isActive ? "rgba(248,208,48,0.12)" : "rgba(255,255,255,0.025)",
                borderColor: isActive ? "rgba(248,208,48,0.65)" : "rgba(255,255,255,0.08)",
              }}
            >
              <div className="h-16 flex items-center justify-center">
                {entry.pokemon?.sprite ? (
                  <img
                    src={entry.pokemon.sprite}
                    alt={entry.name}
                    loading="lazy"
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-white/25 font-mono text-xs">#{entry.id}</span>
                )}
              </div>
              <p className="text-white font-black leading-tight truncate">{formatPokemonName(entry.name)}</p>
              <p className="text-white/30 text-[10px] font-mono mt-1 min-h-[28px]">{entry.requirement}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function PokemonDetailPanel({ pokemon, evolutionLine, evolutionLoading, evolutionError, onEvolutionSelect }) {
  const evYields = getPokemonEvYields(pokemon);
  const totalStats = getTotalStats(pokemon);

  return (
    <article className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <div className="w-36 h-36 rounded-2xl bg-white/[0.035] border border-white/8 flex items-center justify-center flex-shrink-0">
          {pokemon.sprite ? (
            <img src={pokemon.sprite} alt={pokemon.name} className="w-32 h-32 object-contain" />
          ) : (
            <span className="text-white/25 font-mono">#{pokemon.id}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white/25 text-[11px] font-mono">#{String(pokemon.id).padStart(4, "0")}</p>
          <h3 className="text-white font-black text-4xl sm:text-5xl leading-none mt-1">
            {formatPokemonName(pokemon.name)}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {pokemon.types.map((type) => (
              <TypePill key={type} type={type} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-[#F8D030]/35 bg-[#F8D030]/10 px-4 py-3 text-center">
          <p className="text-[#F8D030] font-black text-3xl font-mono">{totalStats}</p>
          <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest">Total base</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-4 mt-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-4 h-4 text-[#F8D030]" />
            <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">Stats base</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="space-y-2">
            {STAT_OPTIONS.map((stat) => (
              <StatBar key={stat.id} stat={stat} value={pokemon.baseStats?.[stat.id] || 0} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest mb-3">EVs al derrotarlo</p>
          <div className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3">
            <div className="flex flex-wrap gap-1.5">
              {evYields.map((ev) => (
                <span
                  key={ev.id}
                  className="text-[10px] font-black font-mono px-2 py-0.5 rounded-lg"
                  style={{
                    color: ev.color,
                    backgroundColor: `${ev.color}1C`,
                    border: `1px solid ${ev.color}55`,
                  }}
                >
                  +{ev.effort} {ev.short}
                </span>
              ))}
              {evYields.length === 0 && (
                <span className="text-white/25 text-[10px] font-mono">Sin EVs registrados</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">Linea evolutiva</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>
        <EvolutionLine
          evolutionLine={evolutionLine}
          selectedPokemonName={pokemon.name}
          loading={evolutionLoading}
          error={evolutionError}
          onSelect={onEvolutionSelect}
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">Eficacias y debilidades</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>
        <MatchupsPanel pokemon={pokemon} />
      </div>
    </article>
  );
}

export default function EvTrainingFinder() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [evolutionLine, setEvolutionLine] = useState([]);
  const [loading, setLoading] = useState(true);
  const [evolutionLoading, setEvolutionLoading] = useState(false);
  const [error, setError] = useState("");
  const [evolutionError, setEvolutionError] = useState("");
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError("");
    setProgress({ completed: 0, total: 0 });

    fetchPokemonThroughGeneration(9, (nextProgress) => {
      if (alive) setProgress(nextProgress);
    })
      .then((pokemon) => {
        if (!alive) return;
        setPokemonList(pokemon);
        setLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setError("No se pudo conectar con PokeAPI. Revisa tu conexion e intenta de nuevo.");
        setPokemonList([]);
        setSelectedPokemon(null);
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedPokemon) {
      setEvolutionLine([]);
      return;
    }

    let alive = true;
    setEvolutionLoading(true);
    setEvolutionError("");

    fetchPokemonEvolutionLine(selectedPokemon.name)
      .then((line) => {
        if (!alive) return;
        setEvolutionLine(line);
        setEvolutionLoading(false);
      })
      .catch(() => {
        if (!alive) return;
        setEvolutionLine([]);
        setEvolutionError("No se pudo cargar la linea evolutiva.");
        setEvolutionLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [selectedPokemon]);

  const trimmedSearch = searchQuery.trim();
  const searchResults = useMemo(() => {
    const query = normalizeSearch(trimmedSearch);
    if (!query) return [];

    return pokemonList
      .filter((pokemon) => normalizeSearch(pokemon.name).includes(query))
      .sort((a, b) => a.id - b.id)
      .slice(0, 30);
  }, [pokemonList, trimmedSearch]);

  useEffect(() => {
    if (!trimmedSearch) {
      setSelectedPokemon(null);
      return;
    }

    if (searchResults.length === 0) {
      setSelectedPokemon(null);
      return;
    }

    if (selectedPokemon && searchResults.some((pokemon) => pokemon.id === selectedPokemon.id)) return;
    setSelectedPokemon(searchResults[0]);
  }, [searchResults, selectedPokemon, trimmedSearch]);

  const progressPercent = progress.total
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  const handleEvolutionSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
    setSearchQuery(pokemon.name);
  };

  return (
    <section className="py-6 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ficha Pokemon
          </h2>
          <p className="text-white/30 text-sm font-mono mt-1">
            Busca un Pokemon para ver stats, EVs, evolucion y matchups
          </p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar por nombre: charizard, gardevoir, lucario..."
              className="w-full rounded-xl border border-white/10 pl-10 pr-4 py-3 bg-white/[0.035] text-white placeholder:text-white/20 font-mono text-sm outline-none transition-all duration-200 focus:border-[#F8D030]/70"
            />
          </div>

          {loading && (
            <div className="mt-4">
              <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                <div
                  className="h-full transition-all duration-300 bg-[#F8D030]"
                  style={{
                    width: `${progressPercent}%`,
                    boxShadow: "0 0 14px rgba(248,208,48,0.6)",
                  }}
                />
              </div>
              <p className="text-white/25 text-xs font-mono mt-2">
                Cargando Pokedex {progress.completed}/{progress.total || "..."}
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 px-4 py-3 rounded-xl border border-red-400/30 bg-red-500/10 text-red-200 text-sm font-mono">
              {error}
            </div>
          )}
        </div>

        {!loading && !error && trimmedSearch && (
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] gap-4 items-start">
            <aside className="rounded-2xl border border-white/8 bg-white/[0.02] p-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest">Resultados</p>
                <p className="text-white/25 text-[10px] font-mono">{searchResults.length}</p>
              </div>

              {searchResults.length > 0 ? (
                <div className="max-h-[620px] overflow-y-auto pr-1 space-y-2">
                  {searchResults.map((pokemon) => (
                    <SearchResult
                      key={pokemon.id}
                      pokemon={pokemon}
                      isActive={selectedPokemon?.id === pokemon.id}
                      onClick={() => setSelectedPokemon(pokemon)}
                    />
                  ))}
                </div>
              ) : (
                <div className="px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] text-white/25 text-xs font-mono">
                  No encontre Pokemon con ese nombre.
                </div>
              )}
            </aside>

            {selectedPokemon ? (
              <PokemonDetailPanel
                pokemon={selectedPokemon}
                evolutionLine={evolutionLine}
                evolutionLoading={evolutionLoading}
                evolutionError={evolutionError}
                onEvolutionSelect={handleEvolutionSelect}
              />
            ) : (
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] min-h-[360px] flex items-center justify-center text-white/25 text-sm font-mono">
                Selecciona un Pokemon de los resultados.
              </div>
            )}
          </div>
        )}

        {!loading && !error && !trimmedSearch && (
          <div className="rounded-2xl border border-white/8 bg-white/[0.02] min-h-[260px] flex items-center justify-center text-white/25 text-sm font-mono">
            Escribe un nombre para abrir su ficha.
          </div>
        )}
      </div>
    </section>
  );
}
