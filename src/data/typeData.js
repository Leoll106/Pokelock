// ============================================================
// DATA: Matriz completa de efectividades de tipos Pokémon
// Fuente: Generación VI+ (18 tipos)
// ============================================================

export const TYPE_COLORS = {
  Normal:    { bg: '#A8A878', dark: '#6D6D4E', text: '#fff', glow: 'rgba(168,168,120,0.5)' },
  Fuego:     { bg: '#F08030', dark: '#9C531F', text: '#fff', glow: 'rgba(240,128,48,0.7)' },
  Agua:      { bg: '#6890F0', dark: '#445E9C', text: '#fff', glow: 'rgba(104,144,240,0.7)' },
  Eléctrico: { bg: '#F8D030', dark: '#A1871F', text: '#111', glow: 'rgba(248,208,48,0.7)' },
  Planta:    { bg: '#78C850', dark: '#4E8234', text: '#fff', glow: 'rgba(120,200,80,0.7)' },
  Hielo:     { bg: '#98D8D8', dark: '#638D8D', text: '#111', glow: 'rgba(152,216,216,0.6)' },
  Lucha:     { bg: '#C03028', dark: '#7D1F1A', text: '#fff', glow: 'rgba(192,48,40,0.7)' },
  Veneno:    { bg: '#A040A0', dark: '#682A68', text: '#fff', glow: 'rgba(160,64,160,0.7)' },
  Tierra:    { bg: '#E0C068', dark: '#927D44', text: '#111', glow: 'rgba(224,192,104,0.6)' },
  Volador:   { bg: '#A890F0', dark: '#6D5E9C', text: '#fff', glow: 'rgba(168,144,240,0.6)' },
  Psíquico:  { bg: '#F85888', dark: '#A13959', text: '#fff', glow: 'rgba(248,88,136,0.7)' },
  Bicho:     { bg: '#A8B820', dark: '#6D7815', text: '#fff', glow: 'rgba(168,184,32,0.6)' },
  Roca:      { bg: '#B8A038', dark: '#786824', text: '#fff', glow: 'rgba(184,160,56,0.6)' },
  Fantasma:  { bg: '#705898', dark: '#493963', text: '#fff', glow: 'rgba(112,88,152,0.7)' },
  Dragón:    { bg: '#7038F8', dark: '#4924A1', text: '#fff', glow: 'rgba(112,56,248,0.8)' },
  Siniestro: { bg: '#705848', dark: '#49392F', text: '#fff', glow: 'rgba(112,88,72,0.6)' },
  Acero:     { bg: '#B8B8D0', dark: '#787887', text: '#111', glow: 'rgba(184,184,208,0.6)' },
  Hada:      { bg: '#EE99AC', dark: '#9B6470', text: '#111', glow: 'rgba(238,153,172,0.7)' },
};

export const ALL_TYPES = Object.keys(TYPE_COLORS);

export const TYPE_POKEMON = {
  Normal: '⭕', Fuego: '🔥', Agua: '💧', Eléctrico: '⚡',
  Planta: '🌿', Hielo: '❄️', Lucha: '👊', Veneno: '☠️',
  Tierra: '🌍', Volador: '🦅', Psíquico: '🔮', Bicho: '🐛',
  Roca: '🪨', Fantasma: '👻', Dragón: '🐉', Siniestro: '🌑',
  Acero: '⚙️', Hada: '✨',
};

// Tabla de efectividad ofensiva: attackingType → { defendingType: multiplier }
export const ATTACK_CHART = {
  Normal:    { Roca: 0.5, Acero: 0.5, Fantasma: 0 },
  Fuego:     { Fuego: 0.5, Agua: 0.5, Roca: 0.5, Dragón: 0.5, Planta: 2, Hielo: 2, Bicho: 2, Acero: 2 },
  Agua:      { Fuego: 2, Tierra: 2, Roca: 2, Agua: 0.5, Planta: 0.5, Dragón: 0.5 },
  Eléctrico: { Agua: 2, Volador: 2, Eléctrico: 0.5, Planta: 0.5, Dragón: 0.5, Tierra: 0 },
  Planta:    { Agua: 2, Tierra: 2, Roca: 2, Fuego: 0.5, Planta: 0.5, Veneno: 0.5, Volador: 0.5, Bicho: 0.5, Dragón: 0.5, Acero: 0.5 },
  Hielo:     { Planta: 2, Tierra: 2, Volador: 2, Dragón: 2, Fuego: 0.5, Agua: 0.5, Hielo: 0.5, Acero: 0.5 },
  Lucha:     { Normal: 2, Hielo: 2, Roca: 2, Siniestro: 2, Acero: 2, Veneno: 0.5, Bicho: 0.5, Psíquico: 0.5, Volador: 0.5, Hada: 0.5, Fantasma: 0 },
  Veneno:    { Planta: 2, Hada: 2, Veneno: 0.5, Tierra: 0.5, Roca: 0.5, Fantasma: 0.5, Acero: 0 },
  Tierra:    { Fuego: 2, Eléctrico: 2, Veneno: 2, Roca: 2, Acero: 2, Planta: 0.5, Bicho: 0.5, Volador: 0 },
  Volador:   { Planta: 2, Lucha: 2, Bicho: 2, Eléctrico: 0.5, Roca: 0.5, Acero: 0.5 },
  Psíquico:  { Lucha: 2, Veneno: 2, Psíquico: 0.5, Acero: 0.5, Siniestro: 0 },
  Bicho:     { Planta: 2, Psíquico: 2, Siniestro: 2, Fuego: 0.5, Lucha: 0.5, Volador: 0.5, Fantasma: 0.5, Acero: 0.5, Hada: 0.5 },
  Roca:      { Fuego: 2, Hielo: 2, Volador: 2, Bicho: 2, Lucha: 0.5, Tierra: 0.5, Acero: 0.5 },
  Fantasma:  { Fantasma: 2, Psíquico: 2, Normal: 0, Siniestro: 0 },
  Dragón:    { Dragón: 2, Acero: 0.5, Hada: 0 },
  Siniestro: { Psíquico: 2, Fantasma: 2, Siniestro: 0.5, Lucha: 0.5, Hada: 0.5 },
  Acero:     { Hielo: 2, Roca: 2, Hada: 2, Fuego: 0.5, Agua: 0.5, Eléctrico: 0.5, Acero: 0.5 },
  Hada:      { Lucha: 2, Dragón: 2, Siniestro: 2, Fuego: 0.5, Veneno: 0.5, Acero: 0.5 },
};

// -------------------------------------------------------
// OFENSIVA: qué daño hace un tipo ATACANTE
// -------------------------------------------------------
export function getOffensiveMatchups(attackingType) {
  const chart = ATTACK_CHART[attackingType] || {};
  const superEffective = [], notVeryEffective = [], immune = [];
  ALL_TYPES.forEach(def => {
    const m = chart[def] ?? 1;
    if (m === 2) superEffective.push(def);
    else if (m === 0.5) notVeryEffective.push(def);
    else if (m === 0) immune.push(def);
  });
  return { superEffective, notVeryEffective, immune };
}

// -------------------------------------------------------
// DEFENSIVA MONO-TIPO: qué recibe un tipo defensor
// Retorna mapa completo { tipo: multiplicador }
// -------------------------------------------------------
export function getDefensiveMultipliers(defendingType) {
  const result = {};
  ALL_TYPES.forEach(atk => {
    const chart = ATTACK_CHART[atk] || {};
    result[atk] = chart[defendingType] ?? 1;
  });
  return result;
}

// -------------------------------------------------------
// DEFENSIVA DOBLE-TIPO: multiplica los multiplicadores de ambos tipos
// -------------------------------------------------------
export function getDualDefensiveMultipliers(type1, type2) {
  const m1 = getDefensiveMultipliers(type1);
  const m2 = type2 ? getDefensiveMultipliers(type2) : null;
  const result = {};
  ALL_TYPES.forEach(atk => {
    result[atk] = (m1[atk] ?? 1) * (m2 ? (m2[atk] ?? 1) : 1);
  });
  return result;
}

// -------------------------------------------------------
// DEFENSIVA COMPLETA: clasifica en debilidades, resistencias, inmunidades
// Soporta doble tipo con multiplicadores x4 / x0.25
// -------------------------------------------------------
export function getDefensiveMatchups(type1, type2 = null) {
  const mults = getDualDefensiveMultipliers(type1, type2);
  const weakX4 = [], weakX2 = [], resistX025 = [], resistX05 = [], immunities = [];

  ALL_TYPES.forEach(atk => {
    const m = mults[atk];
    if (m === 0)    immunities.push(atk);
    else if (m === 4)    weakX4.push(atk);
    else if (m === 2)    weakX2.push(atk);
    else if (m === 0.25) resistX025.push(atk);
    else if (m === 0.5)  resistX05.push(atk);
  });

  return { weakX4, weakX2, resistX025, resistX05, immunities };
}

// -------------------------------------------------------
// OFENSIVA DOBLE-TIPO: unión de ambos tipos atacantes
// Para doble tipo, el Pokémon puede usar cualquiera de los dos
// Los movimientos de ambos tipos cuentan como STAB
// -------------------------------------------------------
export function getDualOffensiveMatchups(type1, type2 = null) {
  const t1 = getOffensiveMatchups(type1);
  if (!type2) return t1;
  const t2 = getOffensiveMatchups(type2);

  // Unión: super efectivo si alguno de los dos lo es
  // Pero si uno es inmune, la inmunidad prevalece (a menos que el otro tipo lo cubra)
  const allTypes = new Set([...t1.superEffective, ...t2.superEffective,
                             ...t1.notVeryEffective, ...t2.notVeryEffective,
                             ...t1.immune, ...t2.immune]);

  const superEffective = [], notVeryEffective = [], immune = [], normal = [];

  allTypes.forEach(def => {
    const chart1 = ATTACK_CHART[type1] || {};
    const chart2 = ATTACK_CHART[type2] || {};
    const m1 = chart1[def] ?? 1;
    const m2 = chart2[def] ?? 1;
    // Mejor multiplicador alcanzable entre los dos tipos
    const best = Math.max(m1, m2);
    if (best >= 2) superEffective.push({ type: def, mult: best });
    else if (best === 0 && Math.min(m1, m2) === 0) immune.push({ type: def });
    else if (best < 1) notVeryEffective.push({ type: def, mult: best });
  });

  return {
    superEffective: superEffective.sort((a,b) => b.mult - a.mult),
    notVeryEffective: notVeryEffective.sort((a,b) => a.mult - b.mult),
    immune,
  };
}
