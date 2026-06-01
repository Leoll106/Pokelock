import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  TYPE_COLORS, TYPE_POKEMON,
  getDualOffensiveMatchups, getDefensiveMatchups
} from "../data/typeData";
import TypeBadge from "./TypeBadge";

// -------------------------------------------------------
// Configuración de secciones
// -------------------------------------------------------
const OFFENSIVE_SECTIONS = [
  {
    key: "superEffective",
    label: "Súper eficaz contra",
    sublabel: "Daño ×2",
    icon: "⚔️",
    multiplier: "×2",
    accentColor: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
  },
  {
    key: "notVeryEffective",
    label: "Poco eficaz contra",
    sublabel: "Daño ×0.5",
    icon: "🛡️",
    multiplier: "×½",
    accentColor: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
  },
  {
    key: "immune",
    label: "No afecta",
    sublabel: "Daño ×0",
    icon: "🚫",
    multiplier: "×0",
    accentColor: "#f87171",
    bg: "rgba(248,113,113,0.07)",
    border: "rgba(248,113,113,0.2)",
  },
];

const DEFENSIVE_SECTIONS = [
  {
    key: "weakX4",
    label: "Muy débil contra",
    sublabel: "Recibe ×4",
    icon: "💀",
    multiplier: "×4",
    accentColor: "#ff3355",
    bg: "rgba(255,51,85,0.1)",
    border: "rgba(255,51,85,0.3)",
    highlight: true,
  },
  {
    key: "weakX2",
    label: "Débil contra",
    sublabel: "Recibe ×2",
    icon: "💥",
    multiplier: "×2",
    accentColor: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
  },
  {
    key: "resistX025",
    label: "Muy resistente a",
    sublabel: "Recibe ×¼",
    icon: "🔰",
    multiplier: "×¼",
    accentColor: "#22d3ee",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.25)",
    highlight: true,
  },
  {
    key: "resistX05",
    label: "Resiste a",
    sublabel: "Recibe ×½",
    icon: "🛡",
    multiplier: "×½",
    accentColor: "#60a5fa",
    bg: "rgba(96,165,250,0.07)",
    border: "rgba(96,165,250,0.18)",
  },
  {
    key: "immunities",
    label: "Inmune a",
    sublabel: "Recibe ×0",
    icon: "⛔",
    multiplier: "×0",
    accentColor: "#a78bfa",
    bg: "rgba(167,139,250,0.07)",
    border: "rgba(167,139,250,0.2)",
  },
];

// -------------------------------------------------------
// Tarjeta de matchup
// -------------------------------------------------------
function MatchupCard({ config, items, isDual }) {
  const isEmpty = items.length === 0;

  return (
    <div
      className="matchup-card rounded-2xl p-4 border backdrop-blur-sm relative overflow-hidden"
      style={{
        background: config.bg,
        borderColor: config.border,
        boxShadow: !isEmpty && config.highlight
          ? `0 0 24px ${config.accentColor}20, inset 0 0 16px ${config.accentColor}08`
          : 'none',
      }}
    >
      {/* Brillo de esquina si es destacado */}
      {config.highlight && !isEmpty && (
        <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl opacity-20"
          style={{ background: `radial-gradient(circle at top right, ${config.accentColor}, transparent)` }} />
      )}

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-base leading-none">{config.icon}</span>
          <div>
            <div className="text-white/80 text-sm font-bold leading-tight">{config.label}</div>
            <div className="text-white/30 text-[10px] font-mono">{config.sublabel}</div>
          </div>
        </div>
        <span
          className="px-2 py-0.5 rounded-full text-xs font-black font-mono"
          style={{
            backgroundColor: `${config.accentColor}18`,
            color: config.accentColor,
            border: `1px solid ${config.accentColor}35`,
          }}
        >
          {config.multiplier}
        </span>
      </div>

      {isEmpty ? (
        <p className="text-white/15 text-xs font-mono py-1">— Ninguno</p>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {items.map((item) => {
            const type = typeof item === 'string' ? item : item.type;
            const mult = typeof item === 'object' ? item.mult : null;
            return (
              <div key={type} className="relative">
                <TypeBadge type={type} size="sm" />
                {mult && mult > 2 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 text-[8px] font-black px-0.5 rounded"
                    style={{ backgroundColor: config.accentColor, color: '#000' }}
                  >
                    ×{mult}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-2 text-right text-[10px] font-mono" style={{ color: `${config.accentColor}50` }}>
          {items.length} tipo{items.length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------
// Componente principal
// -------------------------------------------------------
export default function TypeDetail({ type1, type2 }) {
  const detailRef = useRef(null);
  const c1 = TYPE_COLORS[type1];
  const c2 = type2 ? TYPE_COLORS[type2] : null;
  const isDual = !!type2;

  const offensive = useMemo(
    () => getDualOffensiveMatchups(type1, type2),
    [type1, type2]
  );
  const defensive = useMemo(
    () => getDefensiveMatchups(type1, type2),
    [type1, type2]
  );

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Panel entrada
      gsap.fromTo(detailRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
      );
      // Header
      gsap.fromTo(".detail-header",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
      );
      // Tarjetas stagger
      gsap.fromTo(".matchup-card",
        { opacity: 0, scale: 0.88, y: 28 },
        {
          opacity: 1, scale: 1, y: 0,
          stagger: { each: 0.06, from: "start" },
          duration: 0.45, ease: "back.out(1.3)", delay: 0.2,
        }
      );
      // Divisores
      gsap.fromTo(".section-bar",
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left", duration: 0.9, ease: "power2.inOut", delay: 0.25, stagger: 0.15 }
      );
    }, detailRef);
    return () => ctx.revert();
  }, { scope: detailRef, dependencies: [type1, type2] });

  if (!c1) return null;

  // Gradiente del header según mono/dual tipo
  const headerGradient = isDual
    ? `linear-gradient(135deg, ${c1.bg}30 0%, ${c1.bg}10 40%, ${c2.bg}20 70%, ${c2.bg}08 100%)`
    : `linear-gradient(135deg, ${c1.bg}25, ${c1.bg}08, transparent)`;

  const headerBorder = isDual ? `${c1.bg}50` : `${c1.bg}40`;
  const headerGlow = isDual
    ? `0 0 60px ${c1.glow}, 0 0 40px ${c2.glow}`
    : `0 0 60px ${c1.glow}`;

  return (
    <div ref={detailRef} className="mt-4">

      {/* Header de tipos seleccionados */}
      <div
        className="detail-header relative overflow-hidden rounded-2xl p-5 sm:p-7 mb-6 border"
        style={{
          background: headerGradient,
          borderColor: headerBorder,
          boxShadow: headerGlow,
        }}
      >
        {/* Decoración de fondo */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 pointer-events-none select-none" aria-hidden>
          <span className="text-[80px] sm:text-[110px] opacity-[0.04] font-black leading-none"
            style={{ color: c1.bg }}>{type1[0]}</span>
          {type2 && <span className="text-[80px] sm:text-[110px] opacity-[0.04] font-black leading-none"
            style={{ color: c2.bg }}>{type2[0]}</span>}
        </div>

        <div className="relative flex items-center gap-4 flex-wrap">
          {/* Tipo 1 */}
          <TypeIconBig type={type1} colors={c1} />

          {isDual && (
            <>
              <div className="text-white/20 text-2xl font-black">+</div>
              <TypeIconBig type={type2} colors={c2} />
              <div
                className="ml-1 px-3 py-1 rounded-full text-xs font-black font-mono"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                DOBLE TIPO
              </div>
            </>
          )}
        </div>
      </div>

      {/* OFENSIVA */}
      <SectionHeader label="Efectividad ofensiva" icon="⚔" note={isDual ? "Usando ambos tipos" : ""} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mb-8">
        {OFFENSIVE_SECTIONS.map(cfg => (
          <MatchupCard
            key={cfg.key}
            config={cfg}
            isDual={isDual}
            items={
              cfg.key === "superEffective" ? offensive.superEffective :
              cfg.key === "notVeryEffective" ? offensive.notVeryEffective :
              offensive.immune
            }
          />
        ))}
      </div>

      {/* DEFENSIVA */}
      <SectionHeader
        label="Efectividad defensiva"
        icon="🛡"
        note={isDual ? "Multiplicadores combinados" : ""}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {DEFENSIVE_SECTIONS.map(cfg => (
          <MatchupCard
            key={cfg.key}
            config={cfg}
            isDual={isDual}
            items={
              cfg.key === "weakX4" ? defensive.weakX4 :
              cfg.key === "weakX2" ? defensive.weakX2 :
              cfg.key === "resistX025" ? defensive.resistX025 :
              cfg.key === "resistX05" ? defensive.resistX05 :
              defensive.immunities
            }
          />
        ))}
      </div>

      {/* Resumen */}
      <div className="mt-5 rounded-xl p-3.5 border border-white/5 bg-white/[0.02] font-mono text-xs text-white/25 flex flex-wrap gap-x-4 gap-y-1">
        <span><span className="text-white/40">TIPO</span> {type1}{type2 ? ` / ${type2}` : ''}</span>
        <span><span className="text-white/40">DEBILIDADES</span> {defensive.weakX4.length + defensive.weakX2.length}</span>
        <span><span className="text-white/40">RESISTENCIAS</span> {defensive.resistX025.length + defensive.resistX05.length}</span>
        <span><span className="text-white/40">INMUNIDADES</span> {defensive.immunities.length}</span>
        {isDual && defensive.weakX4.length > 0 && (
          <span className="text-red-400/60">⚠ {defensive.weakX4.length} debilidad×4</span>
        )}
        {isDual && defensive.resistX025.length > 0 && (
          <span className="text-cyan-400/60">★ {defensive.resistX025.length} resistencia×0.25</span>
        )}
      </div>
    </div>
  );
}

function TypeIconBig({ type, colors }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{
          backgroundColor: `${colors.bg}25`,
          border: `2px solid ${colors.bg}70`,
          boxShadow: `0 0 20px ${colors.glow}`,
        }}
      >
        <span role="img" aria-label={type}>{TYPE_POKEMON[type]}</span>
      </div>
      <div>
        <div className="text-white/30 text-[10px] font-mono tracking-widest uppercase">Tipo</div>
        <div
          className="text-2xl sm:text-3xl font-black tracking-tight"
          style={{ color: colors.bg, textShadow: `0 0 16px ${colors.glow}` }}
        >
          {type.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, icon, note }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-white/40 text-xs font-mono tracking-[0.22em] uppercase whitespace-nowrap">
        {icon} {label}
      </span>
      {note && <span className="text-white/20 text-xs font-mono">· {note}</span>}
      <div className="section-bar flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}
