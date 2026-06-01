import { TYPE_COLORS, TYPE_POKEMON } from "../data/typeData";

export default function TypeBadge({ type, size = "md", showEmoji = true }) {
  const colors = TYPE_COLORS[type] || { bg: '#888', text: '#fff', glow: 'rgba(136,136,136,0.4)' };
  const sizes = {
    sm:  "px-2.5 py-1   text-xs   gap-1.5 rounded-lg",
    md:  "px-3.5 py-1.5 text-sm   gap-2   rounded-xl",
    lg:  "px-4   py-2   text-base gap-2   rounded-xl",
  };

  return (
    <span
      className={`inline-flex items-center font-bold tracking-wide ${sizes[size]}`}
      style={{
        backgroundColor: `${colors.bg}28`,
        border: `1.5px solid ${colors.bg}60`,
        color: colors.bg,
        boxShadow: `0 2px 8px ${colors.bg}18`,
      }}
    >
      {showEmoji && <span className="text-base leading-none">{TYPE_POKEMON[type]}</span>}
      <span>{type}</span>
    </span>
  );
}
