import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ALL_TYPES, TYPE_COLORS, TYPE_POKEMON } from "../data/typeData";

export default function TypeGrid({ selectedTypes, onTypeSelect, onClear }) {
  const gridRef = useRef(null);

  // Animación de entrada staggered
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".type-btn",
        { opacity: 0, scale: 0.75, y: 24 },
        {
          opacity: 1, scale: 1, y: 0,
          stagger: { each: 0.035, from: "start" },
          duration: 0.5,
          ease: "back.out(1.4)",
          delay: 0.6,
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, { scope: gridRef });

  const handleMouseEnter = (e, type) => {
    const color = TYPE_COLORS[type];
    gsap.to(e.currentTarget, {
      scale: 1.1,
      y: -4,
      boxShadow: `0 8px 32px ${color.glow}, 0 0 0 1px ${color.bg}60`,
      duration: 0.18,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e, isSelected) => {
    gsap.to(e.currentTarget, {
      scale: isSelected ? 1.04 : 1,
      y: 0,
      boxShadow: isSelected ? undefined : "none",
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleClick = (e, type) => {
    gsap.timeline()
      .to(e.currentTarget, { scale: 0.9, duration: 0.07 })
      .to(e.currentTarget, { scale: 1.08, duration: 0.14, ease: "back.out(3)" })
      .to(e.currentTarget, { scale: 1.04, duration: 0.1 });
    onTypeSelect(type);
  };

  const type1 = selectedTypes[0];
  const type2 = selectedTypes[1];

  return (
    <div ref={gridRef}>
      {/* Header con selección activa */}
      <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
        <div>
          <h3 className="text-white/70 text-xs font-mono tracking-[0.25em] uppercase mb-1.5">
            — Elige tipo (máx. 2)
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            {selectedTypes.length === 0 ? (
              <span className="text-white/25 text-xs font-mono">
                Haz clic en un tipo para analizar sus matchups
              </span>
            ) : (
              <>
                {/* Slot tipo 1 */}
                <SelectedTypeSlot type={type1} slot={1} />
                <span className="text-white/20 text-xs font-mono">+</span>
                {/* Slot tipo 2 */}
                <SelectedTypeSlot type={type2} slot={2} />
                {type2 && (
                  <span className="text-white/30 text-xs font-mono ml-1">= doble tipo</span>
                )}
              </>
            )}
          </div>
        </div>

        {selectedTypes.length > 0 && (
          <button
            onClick={onClear}
            className="text-white/30 hover:text-white/60 text-xs font-mono tracking-wider border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            ✕ LIMPIAR
          </button>
        )}
      </div>

      {/* Grid de tipos — visible y con color real */}
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-2.5">
        {ALL_TYPES.map((type) => {
          const colors = TYPE_COLORS[type];
          const isSelected = selectedTypes.includes(type);
          const isType1 = type1 === type;
          const isType2 = type2 === type;
          const isDisabled = selectedTypes.length >= 2 && !isSelected;

          return (
            <button
              key={type}
              className="type-btn relative flex flex-col items-center justify-center gap-1.5 py-3 px-1.5 rounded-xl cursor-pointer border-2 transition-colors duration-150 select-none"
              style={{
                // VISIBLE: color real del tipo como fondo
                background: isSelected
                  ? `linear-gradient(145deg, ${colors.bg}55, ${colors.bg}30)`
                  : `linear-gradient(145deg, ${colors.bg}20, ${colors.bg}10)`,
                borderColor: isSelected ? colors.bg : `${colors.bg}50`,
                boxShadow: isSelected
                  ? `0 0 20px ${colors.glow}, 0 4px 16px ${colors.bg}30, inset 0 1px 0 ${colors.bg}40`
                  : `inset 0 1px 0 ${colors.bg}20`,
                opacity: isDisabled ? 0.4 : 1,
              }}
              onMouseEnter={(e) => !isDisabled && handleMouseEnter(e, type)}
              onMouseLeave={(e) => handleMouseLeave(e, isSelected)}
              onClick={(e) => !isDisabled && handleClick(e, type)}
              aria-pressed={isSelected}
              aria-label={`Tipo ${type}`}
              disabled={isDisabled}
            >
              {/* Número de slot si está seleccionado */}
              {isSelected && (
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black z-10"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                    boxShadow: `0 0 10px ${colors.glow}`,
                  }}
                >
                  {isType1 ? '1' : '2'}
                </div>
              )}

              {/* Emoji */}
              <span className="text-lg sm:text-xl leading-none drop-shadow-sm">
                {TYPE_POKEMON[type]}
              </span>

              {/* Nombre del tipo */}
              <span
                className="text-[9px] sm:text-[11px] font-black tracking-wide leading-tight text-center uppercase"
                style={{
                  color: isSelected ? colors.text : colors.bg,
                  textShadow: isSelected ? `0 1px 4px rgba(0,0,0,0.5)` : 'none',
                }}
              >
                {type}
              </span>
            </button>
          );
        })}
      </div>

      {/* Hint cuando hay 2 seleccionados */}
      {selectedTypes.length === 2 && (
        <p className="mt-3 text-white/20 text-xs font-mono text-center">
          ↑ Tipos bloqueados — haz clic en uno seleccionado para cambiarlo, o en LIMPIAR para reiniciar
        </p>
      )}
    </div>
  );
}

function SelectedTypeSlot({ type, slot }) {
  const colors = type ? TYPE_COLORS[type] : null;
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all duration-300"
      style={colors ? {
        backgroundColor: `${colors.bg}25`,
        borderColor: `${colors.bg}60`,
        color: colors.bg,
        boxShadow: `0 0 10px ${colors.glow}`,
      } : {
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.12)',
        color: 'rgba(255,255,255,0.2)',
      }}
    >
      {type ? (
        <><span>{TYPE_POKEMON[type]}</span><span>{type}</span></>
      ) : (
        <span className="font-mono tracking-wider">Tipo {slot} —</span>
      )}
    </div>
  );
}
