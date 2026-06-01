import { useEffect, useMemo, useState } from "react";
import { filterPokemonByEvStat, fetchPokemonThroughGeneration } from "../services/pokeApi";
import { TYPE_COLORS } from "../data/typeData";

const STAT_OPTIONS = [
  { id: "hp", label: "HP", short: "HP", color: "#EF4444" },
  { id: "attack", label: "Ataque", short: "ATK", color: "#F97316" },
  { id: "defense", label: "Defensa", short: "DEF", color: "#38BDF8" },
  { id: "special-attack", label: "At. Especial", short: "SPA", color: "#A855F7" },
  { id: "special-defense", label: "Def. Especial", short: "SPD", color: "#22C55E" },
  { id: "speed", label: "Velocidad", short: "SPE", color: "#FACC15" },
];

const GAME_OPTIONS = [
  { id: "gen-1", label: "Generacion 1", sublabel: "Rojo / Azul / Amarillo", generation: 1 },
  { id: "gen-2", label: "Generacion 2", sublabel: "Oro / Plata / Cristal", generation: 2 },
  { id: "gen-3", label: "Generacion 3", sublabel: "Rubi / Zafiro / Esmeralda", generation: 3 },
  { id: "gen-4", label: "Generacion 4", sublabel: "Diamante / Perla / Platino", generation: 4 },
  { id: "gen-5", label: "Generacion 5", sublabel: "Negro / Blanco", generation: 5 },
  { id: "gen-6", label: "Generacion 6", sublabel: "X / Y / ROZA", generation: 6 },
  { id: "gen-7", label: "Generacion 7", sublabel: "Sol / Luna", generation: 7 },
  { id: "gen-8", label: "Generacion 8", sublabel: "Espada / Escudo", generation: 8 },
  { id: "gen-9", label: "Generacion 9", sublabel: "Escarlata / Purpura", generation: 9 },
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

const getPokemonEvYields = (pokemon) =>
  STAT_OPTIONS
    .map((stat) => ({
      ...stat,
      effort: pokemon.evs?.[stat.id] || 0,
    }))
    .filter((stat) => stat.effort > 0);

function GenerationButton({ option, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 rounded-xl border text-left transition-all duration-200 min-w-[160px]"
      style={{
        backgroundColor: isActive ? "rgba(248,208,48,0.13)" : "rgba(255,255,255,0.025)",
        borderColor: isActive ? "rgba(248,208,48,0.75)" : "rgba(255,255,255,0.08)",
        boxShadow: isActive ? "0 0 18px rgba(248,208,48,0.18)" : "none",
      }}
    >
      <div className="text-white font-black text-sm leading-tight">{option.label}</div>
      <div className="text-white/30 text-[10px] font-mono mt-0.5">{option.sublabel}</div>
    </button>
  );
}

function StatButton({ stat, isActive, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-xl border-2 transition-all duration-200"
      style={{
        backgroundColor: isActive ? `${stat.color}24` : `${stat.color}0F`,
        borderColor: isActive ? stat.color : `${stat.color}55`,
        color: isActive ? "#fff" : `${stat.color}`,
        boxShadow: isActive ? `0 0 18px ${stat.color}30` : "0 1px 4px rgba(0,0,0,0.2)",
      }}
    >
      <span
        className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-[11px] font-mono"
        style={{ backgroundColor: `${stat.color}26`, color: stat.color }}
      >
        {stat.short}
      </span>
      <span className="font-black text-sm whitespace-nowrap">{stat.label}</span>
      <span className="text-[10px] font-mono opacity-60">{count}</span>
    </button>
  );
}

function TypePill({ type }) {
  const label = TYPE_NAME_ES[type] || type;
  const colors = TYPE_COLORS[label] || { bg: "#888" };

  return (
    <span
      className="text-[10px] font-bold px-2 py-0.5 rounded-lg"
      style={{
        color: colors.bg,
        backgroundColor: `${colors.bg}18`,
        border: `1px solid ${colors.bg}40`,
      }}
    >
      {label}
    </span>
  );
}

function PokemonEvCard({ pokemon, stat, showAllEvs = false }) {
  const evYields = getPokemonEvYields(pokemon);
  const accent = showAllEvs ? evYields[0] || stat : stat;

  return (
    <article
      className="rounded-2xl border p-3 flex gap-3 items-center min-h-[104px] transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(135deg, ${accent.color}14, rgba(255,255,255,0.025))`,
        borderColor: `${accent.color}38`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
      }}
    >
      <div
        className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
        style={{
          backgroundColor: `${accent.color}12`,
          border: `1px solid ${accent.color}28`,
        }}
      >
        {pokemon.sprite ? (
          <img
            src={pokemon.sprite}
            alt={pokemon.name}
            loading="lazy"
            className="w-16 h-16 object-contain"
          />
        ) : (
          <span className="text-white/25 font-black text-xl">#{pokemon.id}</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-white/25 text-[10px] font-mono">#{String(pokemon.id).padStart(4, "0")}</p>
            <h3 className="text-white font-black text-lg leading-tight truncate">
              {formatPokemonName(pokemon.name)}
            </h3>
          </div>
          {!showAllEvs && (
            <div
              className="px-2.5 py-1 rounded-lg font-black font-mono text-sm flex-shrink-0"
              style={{
                backgroundColor: `${stat.color}24`,
                border: `1px solid ${stat.color}60`,
                color: stat.color,
              }}
            >
              +{pokemon.effort}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {pokemon.types.map((type) => (
            <TypePill key={type} type={type} />
          ))}
        </div>

        {showAllEvs ? (
          <div className="flex flex-wrap gap-1.5 mt-2">
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
        ) : (
          <p className="text-white/20 text-[10px] font-mono mt-2">
            Gen {pokemon.generation} · EV {stat.label}
          </p>
        )}
      </div>
    </article>
  );
}

export default function EvTrainingFinder() {
  const [selectedGame, setSelectedGame] = useState(GAME_OPTIONS[4]);
  const [selectedStat, setSelectedStat] = useState(STAT_OPTIONS[1]);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState({ completed: 0, total: 0 });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError("");
    setProgress({ completed: 0, total: 0 });

    fetchPokemonThroughGeneration(selectedGame.generation, (nextProgress) => {
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
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [selectedGame]);

  const statCounts = useMemo(() => {
    return STAT_OPTIONS.reduce((acc, stat) => {
      acc[stat.id] = filterPokemonByEvStat(pokemonList, stat.id).length;
      return acc;
    }, {});
  }, [pokemonList]);

  const filteredPokemon = useMemo(
    () => filterPokemonByEvStat(pokemonList, selectedStat.id),
    [pokemonList, selectedStat]
  );

  const trimmedSearch = searchQuery.trim();
  const searchResults = useMemo(() => {
    const query = normalizeSearch(trimmedSearch);
    if (!query) return [];

    return pokemonList
      .filter((pokemon) => normalizeSearch(pokemon.name).includes(query))
      .sort((a, b) => a.id - b.id);
  }, [pokemonList, trimmedSearch]);

  const isSearching = trimmedSearch.length > 0;
  const visiblePokemon = isSearching ? searchResults : filteredPokemon;

  const progressPercent = progress.total
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  return (
    <section className="py-6 pb-20">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            EV Training Finder
          </h2>
          <p className="text-white/30 text-sm font-mono mt-1">
            Filtra Pokemon por puntos de esfuerzo hasta la generacion elegida
          </p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
      </div>

      <div className="space-y-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">Juego / Generacion</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-wrap gap-2">
            {GAME_OPTIONS.map((option) => (
              <GenerationButton
                key={option.id}
                option={option}
                isActive={option.id === selectedGame.id}
                onClick={() => setSelectedGame(option)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">Estadistica EV</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-wrap gap-2">
            {STAT_OPTIONS.map((stat) => (
              <StatButton
                key={stat.id}
                stat={stat}
                isActive={stat.id === selectedStat.id}
                count={statCounts[stat.id] || 0}
                onClick={() => setSelectedStat(stat)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">Buscar Pokemon</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Ej. meloetta, zubat, basculin"
              className="min-w-[260px] flex-1 rounded-xl border px-4 py-3 bg-white/[0.035] text-white placeholder:text-white/20 font-mono text-sm outline-none transition-all duration-200"
              style={{
                borderColor: isSearching ? `${selectedStat.color}85` : "rgba(255,255,255,0.09)",
                boxShadow: isSearching ? `0 0 18px ${selectedStat.color}18` : "none",
              }}
            />
            {isSearching && (
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-3 rounded-xl border border-white/10 text-white/45 hover:text-white/75 hover:border-white/20 transition-all duration-200 font-black text-sm"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        <div
          className="rounded-2xl border p-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.025)",
            borderColor: `${selectedStat.color}35`,
          }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <div>
              <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest">
                Resultados
              </p>
              <h3 className="text-white font-black text-xl leading-tight">
                {isSearching ? `Busqueda: ${trimmedSearch}` : `${selectedStat.label} · ${selectedGame.label}`}
              </h3>
            </div>
            <div className="ml-auto text-right">
              <p className="text-white font-black text-2xl font-mono">{visiblePokemon.length}</p>
              <p className="text-white/25 text-[10px] font-mono uppercase tracking-widest">Pokemon</p>
            </div>
          </div>

          {loading && (
            <div className="mt-4">
              <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                <div
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${progressPercent}%`,
                    backgroundColor: selectedStat.color,
                    boxShadow: `0 0 14px ${selectedStat.color}70`,
                  }}
                />
              </div>
              <p className="text-white/25 text-xs font-mono mt-2">
                Cargando datos desde PokeAPI {progress.completed}/{progress.total || "..."}
              </p>
            </div>
          )}

          {error && (
            <div className="mt-4 px-4 py-3 rounded-xl border border-red-400/30 bg-red-500/10 text-red-200 text-sm font-mono">
              {error}
            </div>
          )}
        </div>

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {visiblePokemon.map((pokemon) => (
              <PokemonEvCard
                key={`${pokemon.id}-${isSearching ? "search" : selectedStat.id}`}
                pokemon={pokemon}
                stat={selectedStat}
                showAllEvs={isSearching}
              />
            ))}
          </div>
        )}

        {!loading && !error && visiblePokemon.length === 0 && (
          <div className="px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] text-white/25 text-xs font-mono">
            {isSearching
              ? "No encontre Pokemon con ese nombre en el rango seleccionado."
              : "No hay Pokemon con EVs para esta estadistica en el rango seleccionado."}
          </div>
        )}
      </div>
    </section>
  );
}
