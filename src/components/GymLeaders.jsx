import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GAME_DATA, { GAMES } from "../data/gymLeaders";
import { TYPE_COLORS, TYPE_POKEMON } from "../data/typeData";

gsap.registerPlugin(ScrollTrigger);

// ─── Cache de sprites ────────────────────────────────────
const spriteCache = {};
async function fetchSprite(pokemonName) {
  const key = pokemonName.toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (spriteCache[key] !== undefined) return spriteCache[key];
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    const url =
      data.sprites?.other?.["official-artwork"]?.front_default ||
      data.sprites?.front_default || null;
    spriteCache[key] = url;
    return url;
  } catch {
    spriteCache[key] = null;
    return null;
  }
}

// ─── Sprite individual con lazy load ─────────────────────
function PokemonSprite({ name, nameEs, level, types }) {
  const [url, setUrl]       = useState(undefined); // undefined = cargando
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    setUrl(undefined);
    setLoaded(false);
    fetchSprite(name).then(u => { if (alive) setUrl(u); });
    return () => { alive = false; };
  }, [name]);

  const mainType = types[0];
  const colors   = TYPE_COLORS[mainType] || { bg: "#888", glow: "rgba(136,136,136,0.4)" };

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="relative w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-110"
        style={{
          background: `radial-gradient(circle at center, ${colors.bg}30, ${colors.bg}08)`,
          border: `1.5px solid ${colors.bg}45`,
          boxShadow: `0 2px 12px ${colors.bg}18`,
        }}
      >
        {/* Skeleton mientras carga */}
        {url === undefined && (
          <div className="w-10 h-10 rounded-lg animate-pulse"
            style={{ backgroundColor: `${colors.bg}20` }} />
        )}
        {/* Imagen cargada */}
        {url && (
          <img
            src={url}
            alt={nameEs}
            className={`w-14 h-14 object-contain transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            loading="lazy"
          />
        )}
        {/* Fallback si no hay imagen */}
        {url === null && (
          <span className="text-2xl opacity-40">{TYPE_POKEMON[mainType] || "❓"}</span>
        )}
        {/* Badge de nivel */}
        <span
          className="absolute bottom-0.5 right-0.5 text-[9px] font-black px-1.5 py-0.5 rounded-md leading-none"
          style={{ backgroundColor: colors.bg, color: "#000", opacity: 0.92 }}
        >
          Nv.{level}
        </span>
      </div>
      <span className="text-[10px] text-white/40 font-mono text-center leading-tight max-w-[62px] truncate">
        {nameEs}
      </span>
    </div>
  );
}

// ─── Sección (Líderes / Alto Mando / Campeón) ────────────
function Section({ title, icon, accentColor, children }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-lg">{icon}</span>
        <span
          className="text-xs font-black tracking-[0.2em] uppercase font-mono"
          style={{ color: accentColor }}
        >
          {title}
        </span>
        <div
          className="flex-1 h-px"
          style={{ background: `linear-gradient(to right, ${accentColor}40, transparent)` }}
        />
      </div>
      {children}
    </div>
  );
}

// ─── Tarjeta de un entrenador ─────────────────────────────
function TrainerCard({ trainer, isChampion }) {
  const rawType  = trainer.type?.split(" / ")[0] || "Normal";
  const colors   = TYPE_COLORS[rawType] || { bg: "#888", glow: "rgba(136,136,136,0.4)" };
  const emoji    = TYPE_POKEMON[rawType] || "🏅";
  const maxLevel = Math.max(...trainer.team.map(p => p.level));

  return (
    <div
      className="trainer-card rounded-2xl border p-4 flex flex-col gap-3 relative overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:-translate-y-0.5"
      style={{
        background: isChampion
          ? `linear-gradient(145deg, ${colors.bg}28, ${colors.bg}10, rgba(255,215,0,0.06))`
          : `linear-gradient(145deg, ${colors.bg}20, ${colors.bg}06)`,
        borderColor: isChampion ? `${colors.bg}70` : `${colors.bg}38`,
        boxShadow: isChampion
          ? `0 0 30px ${colors.bg}22, 0 4px 20px rgba(0,0,0,0.3)`
          : `0 2px 12px rgba(0,0,0,0.2)`,
      }}
    >
      {/* Fondo decorativo */}
      <div
        className="absolute -right-3 -top-3 text-[80px] opacity-[0.05] font-black pointer-events-none select-none leading-none"
        style={{ color: colors.bg }}
        aria-hidden
      >
        {emoji}
      </div>

      {/* Encabezado */}
      <div className="relative flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            {isChampion && <span className="text-yellow-400 text-xs">👑</span>}
            <h4 className="text-white font-black text-base leading-tight">
              {trainer.nameEs || trainer.name}
            </h4>
          </div>
          {trainer.city && (
            <p className="text-white/30 text-[11px] font-mono">{trainer.city}</p>
          )}
        </div>

        {/* Badge de tipo */}
        <div
          className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
          style={{
            backgroundColor: `${colors.bg}22`,
            border: `1px solid ${colors.bg}50`,
            color: colors.bg,
          }}
        >
          <span>{emoji}</span>
          <span className="hidden sm:inline">{trainer.type}</span>
        </div>
      </div>

      {/* Insignia */}
      {trainer.badge && (
        <div className="flex items-center gap-1.5">
          <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">Insignia</span>
          <span
            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: `${colors.bg}18`, color: colors.bg, border: `1px solid ${colors.bg}35` }}
          >
            {trainer.badge || trainer.badgeEs}
          </span>
          <span
            className="ml-auto text-[10px] font-mono opacity-40"
            style={{ color: colors.bg }}
          >
            máx Nv.{maxLevel}
          </span>
        </div>
      )}

      {/* Equipo */}
      <div>
        <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase mb-2">Equipo</p>
        <div className="flex flex-wrap gap-2">
          {trainer.team.map((poke, i) => (
            <PokemonSprite
              key={`${poke.name}-${i}`}
              name={poke.name}
              nameEs={poke.nameEs}
              level={poke.level}
              types={poke.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Selector de juego — botón visible ───────────────────
function GameButton({ game, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border-2 whitespace-nowrap"
      style={{
        // VISIBLE siempre: fondo con color real del juego
        backgroundColor: isActive ? `${game.color}30` : `${game.color}12`,
        borderColor:     isActive ? game.color          : `${game.color}50`,
        color:           isActive ? game.color          : `${game.color}cc`,
        boxShadow: isActive
          ? `0 0 16px ${game.color}35, 0 2px 8px rgba(0,0,0,0.3)`
          : `0 1px 4px rgba(0,0,0,0.2)`,
      }}
    >
      <span className="text-sm">{game.badge}</span>
      <span className="hidden sm:inline">{game.name}</span>
      <span
        className="text-[10px] font-mono px-1.5 py-0.5 rounded"
        style={{
          backgroundColor: isActive ? `${game.color}25` : `${game.color}15`,
          color: isActive ? game.color : `${game.color}99`,
        }}
      >
        Gen {game.gen}
      </span>
    </button>
  );
}

// ─── Componente principal ─────────────────────────────────
export default function GymLeaders() {
  const [activeGame, setActiveGame] = useState("b2w2");
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Entrada inicial
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gym-section-title", {
        opacity: 0, y: 24, duration: 0.6, ease: "power3.out",
      });
      gsap.from(".game-btn-row", {
        opacity: 0, y: 16, duration: 0.5, ease: "power2.out", delay: 0.15,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, { scope: sectionRef });

  // Animación al cambiar juego
  const handleGameChange = (gameId) => {
    if (gameId === activeGame) return;
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0, y: -12, duration: 0.18, ease: "power2.in",
        onComplete: () => {
          setActiveGame(gameId);
          gsap.fromTo(contentRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
          );
        },
      });
    } else {
      setActiveGame(gameId);
    }
  };

  // Animar tarjetas al montar contenido nuevo
  useEffect(() => {
    if (!contentRef.current) return;
    const cards = contentRef.current.querySelectorAll(".trainer-card");
    gsap.fromTo(cards,
      { opacity: 0, y: 22, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.38, ease: "back.out(1.3)" }
    );
  }, [activeGame]);

  const game     = GAMES.find(g => g.id === activeGame);
  const gameData = GAME_DATA[activeGame] || {};
  const leaders  = gameData.leaders   || [];
  const elite4   = gameData.eliteFour || [];
  const champ    = gameData.champion  || null;

  // Agrupar juegos por generación para el selector
  const byGen = GAMES.reduce((acc, g) => {
    if (!acc[g.gen]) acc[g.gen] = [];
    acc[g.gen].push(g);
    return acc;
  }, {});

  return (
    <section ref={sectionRef} className="py-6">

      {/* ── Título ── */}
      <div className="gym-section-title flex items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            🏟 Guía Nuzlocke
          </h2>
          <p className="text-white/30 text-sm font-mono mt-1">
            Líderes · Alto Mando · Campeón — niveles exactos por juego
          </p>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-2" />
      </div>

      {/* ── Selector de juego por generación ── */}
      <div className="game-btn-row space-y-3 mb-6">
        {Object.entries(byGen).map(([gen, games]) => (
          <div key={gen} className="flex items-center gap-2 flex-wrap">
            <span className="text-white/20 text-[10px] font-mono tracking-widest w-10 text-right flex-shrink-0">
              GEN {gen}
            </span>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex flex-wrap gap-1.5">
              {games.map(g => (
                <GameButton
                  key={g.id}
                  game={g}
                  isActive={activeGame === g.id}
                  onClick={() => handleGameChange(g.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Info del juego activo ── */}
      {game && (
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl border mb-6 flex-wrap"
          style={{
            backgroundColor: `${game.color}12`,
            borderColor:     `${game.color}35`,
          }}
        >
          <span className="text-xl">{game.badge}</span>
          <div>
            <span className="font-black text-white text-sm sm:text-base">{game.name}</span>
            <span className="text-white/30 text-xs font-mono ml-2">· {game.region}</span>
          </div>
          <div className="ml-auto flex gap-3 text-xs font-mono">
            <span style={{ color: `${game.color}cc` }}>
              {leaders.length} líderes
            </span>
            {elite4.length > 0 && (
              <span style={{ color: `${game.color}cc` }}>
                {elite4.length} Alto Mando
              </span>
            )}
            {champ && <span style={{ color: `${game.color}cc` }}>1 Campeón</span>}
          </div>
        </div>
      )}

      {/* ── Contenido animado ── */}
      <div ref={contentRef}>

        {/* LÍDERES */}
        {leaders.length > 0 && (
          <Section title="Líderes de Gimnasio" icon="🏅" accentColor={game?.color || "#F8D030"}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {leaders.map((l, i) => (
                <TrainerCard key={`leader-${i}`} trainer={l} isChampion={false} />
              ))}
            </div>
          </Section>
        )}

        {/* ALTO MANDO */}
        {elite4.length > 0 && (
          <Section title="Alto Mando" icon="⚔️" accentColor="#a78bfa">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {elite4.map((e, i) => (
                <TrainerCard key={`elite-${i}`} trainer={e} isChampion={false} />
              ))}
            </div>
          </Section>
        )}

        {/* CAMPEÓN */}
        {champ && (
          <Section title="Campeón de la Liga" icon="👑" accentColor="#F8D030">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <TrainerCard trainer={champ} isChampion={true} />
              {/* Panel de resumen del campeón */}
              <div
                className="rounded-2xl border p-5 flex flex-col justify-center gap-4"
                style={{
                  backgroundColor: "rgba(248,208,48,0.04)",
                  borderColor: "rgba(248,208,48,0.15)",
                }}
              >
                <div>
                  <p className="text-yellow-400/60 text-[10px] font-mono tracking-widest uppercase mb-1">
                    Campeón
                  </p>
                  <h3 className="text-white font-black text-2xl leading-tight">
                    {champ.nameEs || champ.name}
                  </h3>
                  <p className="text-white/30 text-xs font-mono mt-1">{game?.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-2xl font-black text-white font-mono">
                      {Math.max(...champ.team.map(p => p.level))}
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">Nv. máx</div>
                  </div>
                  <div className="rounded-xl p-3 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="text-2xl font-black text-white font-mono">
                      {champ.team.length}
                    </div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">Pokémon</div>
                  </div>
                </div>

                <div>
                  <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase mb-2">Tipos del equipo</p>
                  <div className="flex flex-wrap gap-1.5">
                    {[...new Set(champ.team.flatMap(p => p.types))].map(t => {
                      const c = TYPE_COLORS[t] || { bg: "#888" };
                      return (
                        <span key={t}
                          className="text-[11px] px-2 py-0.5 rounded-lg font-bold flex items-center gap-1"
                          style={{ backgroundColor: `${c.bg}22`, border: `1px solid ${c.bg}50`, color: c.bg }}
                        >
                          {TYPE_POKEMON[t]} {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Section>
        )}

        {/* Nota Galar (sin Alto Mando tradicional) */}
        {activeGame === "swsh" && (
          <div className="mt-2 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] text-white/25 text-xs font-mono">
            ℹ Galar no tiene Alto Mando tradicional — el torneo de la Liga Pokémon reemplaza esa mecánica.
          </div>
        )}

        {/* Nota Alola (sin gimnasios) */}
        {(activeGame === "sm" || activeGame === "usum") && (
          <div className="mt-2 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.02] text-white/25 text-xs font-mono">
            ℹ Alola no tiene Líderes de Gimnasio — usa Pruebas de Isla con Capitanes y Kahuna como jefes de zona.
          </div>
        )}
      </div>

      <p className="mt-8 text-center text-white/12 text-xs font-mono">
        Sprites: PokéAPI · Datos de niveles: fuentes oficiales de cada juego
      </p>
    </section>
  );
}
