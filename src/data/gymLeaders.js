// ============================================================
// DATA: Líderes, Altos Mandos y Campeón por JUEGO específico
// Pensado para Nuzlocke — niveles exactos por versión
// ============================================================

export const GAMES = [
  // GEN I
  { id: "rb",    name: "Rojo / Azul",      region: "Kanto",  gen: 1, color: "#E74C3C", badge: "🔴" },
  { id: "yellow",name: "Amarillo",          region: "Kanto",  gen: 1, color: "#F1C40F", badge: "🟡" },
  // GEN II
  { id: "gs",    name: "Oro / Plata",       region: "Johto",  gen: 2, color: "#F39C12", badge: "🥇" },
  { id: "crystal",name:"Cristal",           region: "Johto",  gen: 2, color: "#1ABC9C", badge: "💎" },
  // GEN III
  { id: "rs",    name: "Rubí / Zafiro",     region: "Hoenn",  gen: 3, color: "#3498DB", badge: "💎" },
  { id: "emerald",name:"Esmeralda",         region: "Hoenn",  gen: 3, color: "#2ECC71", badge: "💚" },
  { id: "frlg",  name: "Rojo Fuego / Verde Hoja", region:"Kanto", gen:3, color:"#E67E22", badge:"🍃" },
  // GEN IV
  { id: "dp",    name: "Diamante / Perla",  region: "Sinnoh", gen: 4, color: "#9B59B6", badge: "💠" },
  { id: "pt",    name: "Platino",           region: "Sinnoh", gen: 4, color: "#BDC3C7", badge: "⬜" },
  { id: "hgss",  name: "Oro HeartGold / Plata SoulSilver", region:"Johto", gen:4, color:"#F39C12", badge:"🌟" },
  // GEN V
  { id: "bw",    name: "Negro / Blanco",    region: "Unova",  gen: 5, color: "#7F8C8D", badge: "⬛" },
  { id: "b2w2",  name: "Negro 2 / Blanco 2",region: "Unova",  gen: 5, color: "#2980B9", badge: "🔷" },
  // GEN VI
  { id: "xy",    name: "X / Y",             region: "Kalos",  gen: 6, color: "#E91E8C", badge: "🩷" },
  { id: "oras",  name: "Rojo Omega / Zafiro Alfa", region:"Hoenn", gen:6, color:"#E74C3C", badge:"🔴" },
  // GEN VII
  { id: "sm",    name: "Sol / Luna",        region: "Alola",  gen: 7, color: "#FF9800", badge: "☀️" },
  { id: "usum",  name: "Ultra Sol / Ultra Luna", region:"Alola", gen:7, color:"#FF5722", badge:"🌟" },
  // GEN VIII
  { id: "swsh",  name: "Espada / Escudo",   region: "Galar",  gen: 8, color: "#607D8B", badge: "⚔️" },
  // GEN IX
  { id: "sv",    name: "Escarlata / Púrpura",region:"Paldea", gen: 9, color: "#C0392B", badge: "🟥" },
];

// -------------------------------------------------------
// Estructura por juego: { leaders[], eliteFour[], champion }
// leader/elite: { name, type, team:[{name,nameEs,level,types[]}] }
// -------------------------------------------------------

const GAME_DATA = {

  // ═══════════════════════════════════════════════
  // KANTO — Rojo / Azul
  // ═══════════════════════════════════════════════
  rb: {
    leaders: [
      { name:"Brock",    nameEs:"Brock",    city:"Plateada",   type:"Roca",      badge:"Roca",       team:[{name:"geodude",nameEs:"Geodude",level:12,types:["Roca","Tierra"]},{name:"onix",nameEs:"Onix",level:14,types:["Roca","Tierra"]}] },
      { name:"Misty",    nameEs:"Misty",    city:"Celeste",    type:"Agua",      badge:"Cascada",    team:[{name:"staryu",nameEs:"Staryu",level:18,types:["Agua"]},{name:"starmie",nameEs:"Starmie",level:21,types:["Agua","Psíquico"]}] },
      { name:"Lt. Surge",nameEs:"Gerardo",  city:"Carmín",     type:"Eléctrico", badge:"Trueno",     team:[{name:"voltorb",nameEs:"Voltorb",level:21,types:["Eléctrico"]},{name:"pikachu",nameEs:"Pikachu",level:18,types:["Eléctrico"]},{name:"raichu",nameEs:"Raichu",level:24,types:["Eléctrico"]}] },
      { name:"Erika",    nameEs:"Erika",    city:"Azulona",    type:"Planta",    badge:"Arco Iris",  team:[{name:"victreebel",nameEs:"Victreebel",level:29,types:["Planta","Veneno"]},{name:"tangela",nameEs:"Tangela",level:24,types:["Planta"]},{name:"vileplume",nameEs:"Vileplume",level:29,types:["Planta","Veneno"]}] },
      { name:"Koga",     nameEs:"Koga",     city:"Fucsia",     type:"Veneno",    badge:"Alma",       team:[{name:"koffing",nameEs:"Koffing",level:37,types:["Veneno"]},{name:"muk",nameEs:"Muk",level:39,types:["Veneno"]},{name:"koffing",nameEs:"Koffing",level:37,types:["Veneno"]},{name:"weezing",nameEs:"Weezing",level:43,types:["Veneno"]}] },
      { name:"Sabrina",  nameEs:"Sabrina",  city:"Azafrán",    type:"Psíquico",  badge:"Pantano",    team:[{name:"kadabra",nameEs:"Kadabra",level:38,types:["Psíquico"]},{name:"mr-mime",nameEs:"Mr. Mime",level:37,types:["Psíquico","Hada"]},{name:"venomoth",nameEs:"Venomoth",level:38,types:["Veneno","Bicho"]},{name:"alakazam",nameEs:"Alakazam",level:43,types:["Psíquico"]}] },
      { name:"Blaine",   nameEs:"Blaine",   city:"Isla Canela",type:"Fuego",     badge:"Volcán",     team:[{name:"growlithe",nameEs:"Growlithe",level:42,types:["Fuego"]},{name:"ponyta",nameEs:"Ponyta",level:40,types:["Fuego"]},{name:"rapidash",nameEs:"Rapidash",level:42,types:["Fuego"]},{name:"arcanine",nameEs:"Arcanine",level:47,types:["Fuego"]}] },
      { name:"Giovanni", nameEs:"Giovanni", city:"Verde",      type:"Tierra",    badge:"Tierra",     team:[{name:"rhyhorn",nameEs:"Rhyhorn",level:45,types:["Tierra","Roca"]},{name:"dugtrio",nameEs:"Dugtrio",level:42,types:["Tierra"]},{name:"nidoqueen",nameEs:"Nidoqueen",level:44,types:["Veneno","Tierra"]},{name:"nidoking",nameEs:"Nidoking",level:45,types:["Veneno","Tierra"]},{name:"rhydon",nameEs:"Rhydon",level:50,types:["Tierra","Roca"]}] },
    ],
    eliteFour: [
      { name:"Lorelei",  nameEs:"Lorelei",  type:"Hielo",     team:[{name:"dewgong",nameEs:"Dewgong",level:54,types:["Agua","Hielo"]},{name:"cloyster",nameEs:"Cloyster",level:53,types:["Agua","Hielo"]},{name:"slowbro",nameEs:"Slowbro",level:54,types:["Agua","Psíquico"]},{name:"jynx",nameEs:"Jynx",level:56,types:["Hielo","Psíquico"]},{name:"lapras",nameEs:"Lapras",level:56,types:["Agua","Hielo"]}] },
      { name:"Bruno",    nameEs:"Bruno",    type:"Lucha",     team:[{name:"onix",nameEs:"Onix",level:53,types:["Roca","Tierra"]},{name:"hitmonchan",nameEs:"Hitmonchan",level:55,types:["Lucha"]},{name:"hitmonlee",nameEs:"Hitmonlee",level:55,types:["Lucha"]},{name:"onix",nameEs:"Onix",level:54,types:["Roca","Tierra"]},{name:"machamp",nameEs:"Machamp",level:58,types:["Lucha"]}] },
      { name:"Agatha",   nameEs:"Agatha",   type:"Fantasma",  team:[{name:"gengar",nameEs:"Gengar",level:54,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:53,types:["Fantasma","Veneno"]},{name:"gengar",nameEs:"Gengar",level:58,types:["Fantasma","Veneno"]},{name:"arbok",nameEs:"Arbok",level:54,types:["Veneno"]},{name:"gengar",nameEs:"Gengar",level:58,types:["Fantasma","Veneno"]}] },
      { name:"Lance",    nameEs:"Lanza",    type:"Dragón",    team:[{name:"gyarados",nameEs:"Gyarados",level:56,types:["Agua","Volador"]},{name:"dragonair",nameEs:"Dragonair",level:54,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:54,types:["Dragón"]},{name:"aerodactyl",nameEs:"Aerodactyl",level:58,types:["Roca","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:60,types:["Dragón","Volador"]}] },
    ],
    champion: { name:"Blue",nameEs:"Azul",team:[{name:"pidgeot",nameEs:"Pidgeot",level:59,types:["Normal","Volador"]},{name:"alakazam",nameEs:"Alakazam",level:57,types:["Psíquico"]},{name:"rhydon",nameEs:"Rhydon",level:59,types:["Tierra","Roca"]},{name:"gyarados",nameEs:"Gyarados",level:61,types:["Agua","Volador"]},{name:"arcanine",nameEs:"Arcanine",level:61,types:["Fuego"]},{name:"venusaur",nameEs:"Venusaur",level:65,types:["Planta","Veneno"]}] },
  },

  // ═══════════════════════════════════════════════
  // KANTO — Rojo Fuego / Verde Hoja
  // ═══════════════════════════════════════════════
  frlg: {
    leaders: [
      { name:"Brock",    nameEs:"Brock",    city:"Plateada",   type:"Roca",      badge:"Roca",    team:[{name:"geodude",nameEs:"Geodude",level:12,types:["Roca","Tierra"]},{name:"onix",nameEs:"Onix",level:14,types:["Roca","Tierra"]}] },
      { name:"Misty",    nameEs:"Misty",    city:"Celeste",    type:"Agua",      badge:"Cascada", team:[{name:"staryu",nameEs:"Staryu",level:18,types:["Agua"]},{name:"starmie",nameEs:"Starmie",level:21,types:["Agua","Psíquico"]}] },
      { name:"Lt. Surge",nameEs:"Gerardo",  city:"Carmín",     type:"Eléctrico", badge:"Trueno",  team:[{name:"voltorb",nameEs:"Voltorb",level:21,types:["Eléctrico"]},{name:"pikachu",nameEs:"Pikachu",level:18,types:["Eléctrico"]},{name:"raichu",nameEs:"Raichu",level:24,types:["Eléctrico"]}] },
      { name:"Erika",    nameEs:"Erika",    city:"Azulona",    type:"Planta",    badge:"Arco Iris",team:[{name:"victreebel",nameEs:"Victreebel",level:29,types:["Planta","Veneno"]},{name:"tangela",nameEs:"Tangela",level:24,types:["Planta"]},{name:"vileplume",nameEs:"Vileplume",level:29,types:["Planta","Veneno"]}] },
      { name:"Koga",     nameEs:"Koga",     city:"Fucsia",     type:"Veneno",    badge:"Alma",    team:[{name:"koffing",nameEs:"Koffing",level:37,types:["Veneno"]},{name:"muk",nameEs:"Muk",level:39,types:["Veneno"]},{name:"koffing",nameEs:"Koffing",level:37,types:["Veneno"]},{name:"weezing",nameEs:"Weezing",level:43,types:["Veneno"]}] },
      { name:"Sabrina",  nameEs:"Sabrina",  city:"Azafrán",    type:"Psíquico",  badge:"Pantano", team:[{name:"kadabra",nameEs:"Kadabra",level:38,types:["Psíquico"]},{name:"mr-mime",nameEs:"Mr. Mime",level:37,types:["Psíquico","Hada"]},{name:"venomoth",nameEs:"Venomoth",level:38,types:["Veneno","Bicho"]},{name:"alakazam",nameEs:"Alakazam",level:43,types:["Psíquico"]}] },
      { name:"Blaine",   nameEs:"Blaine",   city:"Isla Canela",type:"Fuego",     badge:"Volcán",  team:[{name:"growlithe",nameEs:"Growlithe",level:42,types:["Fuego"]},{name:"ponyta",nameEs:"Ponyta",level:40,types:["Fuego"]},{name:"rapidash",nameEs:"Rapidash",level:42,types:["Fuego"]},{name:"arcanine",nameEs:"Arcanine",level:47,types:["Fuego"]}] },
      { name:"Giovanni", nameEs:"Giovanni", city:"Verde",      type:"Tierra",    badge:"Tierra",  team:[{name:"rhyhorn",nameEs:"Rhyhorn",level:45,types:["Tierra","Roca"]},{name:"dugtrio",nameEs:"Dugtrio",level:42,types:["Tierra"]},{name:"nidoqueen",nameEs:"Nidoqueen",level:44,types:["Veneno","Tierra"]},{name:"nidoking",nameEs:"Nidoking",level:45,types:["Veneno","Tierra"]},{name:"rhydon",nameEs:"Rhydon",level:50,types:["Tierra","Roca"]}] },
    ],
    eliteFour: [
      { name:"Lorelei",nameEs:"Lorelei",type:"Hielo",  team:[{name:"dewgong",nameEs:"Dewgong",level:52,types:["Agua","Hielo"]},{name:"cloyster",nameEs:"Cloyster",level:51,types:["Agua","Hielo"]},{name:"slowbro",nameEs:"Slowbro",level:52,types:["Agua","Psíquico"]},{name:"jynx",nameEs:"Jynx",level:54,types:["Hielo","Psíquico"]},{name:"lapras",nameEs:"Lapras",level:54,types:["Agua","Hielo"]}] },
      { name:"Bruno",  nameEs:"Bruno",  type:"Lucha", team:[{name:"onix",nameEs:"Onix",level:51,types:["Roca","Tierra"]},{name:"hitmonchan",nameEs:"Hitmonchan",level:53,types:["Lucha"]},{name:"hitmonlee",nameEs:"Hitmonlee",level:53,types:["Lucha"]},{name:"onix",nameEs:"Onix",level:54,types:["Roca","Tierra"]},{name:"machamp",nameEs:"Machamp",level:56,types:["Lucha"]}] },
      { name:"Agatha", nameEs:"Agatha", type:"Fantasma",team:[{name:"gengar",nameEs:"Gengar",level:54,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:53,types:["Fantasma","Veneno"]},{name:"gengar",nameEs:"Gengar",level:58,types:["Fantasma","Veneno"]},{name:"arbok",nameEs:"Arbok",level:54,types:["Veneno"]},{name:"gengar",nameEs:"Gengar",level:58,types:["Fantasma","Veneno"]}] },
      { name:"Lance",  nameEs:"Lanza",  type:"Dragón", team:[{name:"gyarados",nameEs:"Gyarados",level:56,types:["Agua","Volador"]},{name:"dragonair",nameEs:"Dragonair",level:54,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:54,types:["Dragón"]},{name:"aerodactyl",nameEs:"Aerodactyl",level:58,types:["Roca","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:60,types:["Dragón","Volador"]}] },
    ],
    champion: { name:"Blue",nameEs:"Azul",team:[{name:"pidgeot",nameEs:"Pidgeot",level:59,types:["Normal","Volador"]},{name:"alakazam",nameEs:"Alakazam",level:57,types:["Psíquico"]},{name:"rhydon",nameEs:"Rhydon",level:59,types:["Tierra","Roca"]},{name:"gyarados",nameEs:"Gyarados",level:61,types:["Agua","Volador"]},{name:"arcanine",nameEs:"Arcanine",level:61,types:["Fuego"]},{name:"venusaur",nameEs:"Venusaur",level:65,types:["Planta","Veneno"]}] },
  },

  // ═══════════════════════════════════════════════
  // JOHTO — Oro / Plata
  // ═══════════════════════════════════════════════
  gs: {
    leaders: [
      { name:"Falkner", nameEs:"Audino",  city:"Violeta",    type:"Volador",   badge:"Céfiro",   team:[{name:"pidgey",nameEs:"Pidgey",level:7,types:["Normal","Volador"]},{name:"pidgeotto",nameEs:"Pidgeotto",level:9,types:["Normal","Volador"]}] },
      { name:"Bugsy",   nameEs:"Antón",   city:"Azalea",     type:"Bicho",     badge:"Colmena",  team:[{name:"metapod",nameEs:"Metapod",level:14,types:["Bicho"]},{name:"kakuna",nameEs:"Kakuna",level:14,types:["Bicho","Veneno"]},{name:"scyther",nameEs:"Scyther",level:16,types:["Bicho","Volador"]}] },
      { name:"Whitney", nameEs:"Blanca",  city:"Dorada",     type:"Normal",    badge:"Llanura",  team:[{name:"clefairy",nameEs:"Clefairy",level:18,types:["Hada"]},{name:"miltank",nameEs:"Miltank",level:20,types:["Normal"]}] },
      { name:"Morty",   nameEs:"Morti",   city:"Hojarasca",  type:"Fantasma",  badge:"Niebla",   team:[{name:"gastly",nameEs:"Gastly",level:21,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:21,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:23,types:["Fantasma","Veneno"]},{name:"gengar",nameEs:"Gengar",level:25,types:["Fantasma","Veneno"]}] },
      { name:"Chuck",   nameEs:"Berto",   city:"Azulmar",    type:"Lucha",     badge:"Tormenta", team:[{name:"primeape",nameEs:"Primeape",level:27,types:["Lucha"]},{name:"poliwrath",nameEs:"Poliwrath",level:30,types:["Agua","Lucha"]}] },
      { name:"Jasmine", nameEs:"Petra",   city:"Olivina",    type:"Acero",     badge:"Mineral",  team:[{name:"magnemite",nameEs:"Magnemite",level:30,types:["Eléctrico","Acero"]},{name:"magnemite",nameEs:"Magnemite",level:30,types:["Eléctrico","Acero"]},{name:"steelix",nameEs:"Steelix",level:35,types:["Acero","Tierra"]}] },
      { name:"Pryce",   nameEs:"Fredo",   city:"Caoba",      type:"Hielo",     badge:"Glaciar",  team:[{name:"seel",nameEs:"Seel",level:27,types:["Agua"]},{name:"dewgong",nameEs:"Dewgong",level:29,types:["Agua","Hielo"]},{name:"piloswine",nameEs:"Piloswine",level:31,types:["Hielo","Tierra"]}] },
      { name:"Clair",   nameEs:"Violeta", city:"Malva",      type:"Dragón",    badge:"Ascenso",  team:[{name:"dragonair",nameEs:"Dragonair",level:37,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:37,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:37,types:["Dragón"]},{name:"kingdra",nameEs:"Kingdra",level:40,types:["Agua","Dragón"]}] },
    ],
    eliteFour: [
      { name:"Will",    nameEs:"Will",   type:"Psíquico", team:[{name:"xatu",nameEs:"Xatu",level:40,types:["Psíquico","Volador"]},{name:"jynx",nameEs:"Jynx",level:41,types:["Hielo","Psíquico"]},{name:"exeggutor",nameEs:"Exeggutor",level:41,types:["Planta","Psíquico"]},{name:"slowbro",nameEs:"Slowbro",level:41,types:["Agua","Psíquico"]},{name:"xatu",nameEs:"Xatu",level:42,types:["Psíquico","Volador"]}] },
      { name:"Koga",    nameEs:"Koga",   type:"Veneno",   team:[{name:"ariados",nameEs:"Ariados",level:40,types:["Bicho","Veneno"]},{name:"venomoth",nameEs:"Venomoth",level:41,types:["Bicho","Veneno"]},{name:"muk",nameEs:"Muk",level:42,types:["Veneno"]},{name:"forretress",nameEs:"Forretress",level:43,types:["Bicho","Acero"]},{name:"crobat",nameEs:"Crobat",level:44,types:["Veneno","Volador"]}] },
      { name:"Bruno",   nameEs:"Bruno",  type:"Lucha",    team:[{name:"hitmontop",nameEs:"Hitmontop",level:42,types:["Lucha"]},{name:"hitmonlee",nameEs:"Hitmonlee",level:42,types:["Lucha"]},{name:"hitmonchan",nameEs:"Hitmonchan",level:42,types:["Lucha"]},{name:"onix",nameEs:"Onix",level:43,types:["Roca","Tierra"]},{name:"machamp",nameEs:"Machamp",level:46,types:["Lucha"]}] },
      { name:"Karen",   nameEs:"Karen",  type:"Siniestro",team:[{name:"umbreon",nameEs:"Umbreon",level:42,types:["Siniestro"]},{name:"vileplume",nameEs:"Vileplume",level:42,types:["Planta","Veneno"]},{name:"gengar",nameEs:"Gengar",level:45,types:["Fantasma","Veneno"]},{name:"murkrow",nameEs:"Murkrow",level:44,types:["Siniestro","Volador"]},{name:"houndoom",nameEs:"Houndoom",level:47,types:["Siniestro","Fuego"]}] },
    ],
    champion: { name:"Lance",nameEs:"Lanza",team:[{name:"gyarados",nameEs:"Gyarados",level:44,types:["Agua","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:47,types:["Dragón","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:47,types:["Dragón","Volador"]},{name:"aerodactyl",nameEs:"Aerodactyl",level:46,types:["Roca","Volador"]},{name:"charizard",nameEs:"Charizard",level:46,types:["Fuego","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:50,types:["Dragón","Volador"]}] },
  },

  // ═══════════════════════════════════════════════
  // JOHTO — HeartGold / SoulSilver (niveles remasterizados)
  // ═══════════════════════════════════════════════
  hgss: {
    leaders: [
      { name:"Falkner", nameEs:"Audino",  city:"Violeta",   type:"Volador",  badge:"Céfiro",  team:[{name:"pidgey",nameEs:"Pidgey",level:9,types:["Normal","Volador"]},{name:"pidgeotto",nameEs:"Pidgeotto",level:13,types:["Normal","Volador"]}] },
      { name:"Bugsy",   nameEs:"Antón",   city:"Azalea",    type:"Bicho",    badge:"Colmena", team:[{name:"scyther",nameEs:"Scyther",level:17,types:["Bicho","Volador"]},{name:"metapod",nameEs:"Metapod",level:15,types:["Bicho"]},{name:"kakuna",nameEs:"Kakuna",level:15,types:["Bicho","Veneno"]}] },
      { name:"Whitney", nameEs:"Blanca",  city:"Dorada",    type:"Normal",   badge:"Llanura", team:[{name:"clefairy",nameEs:"Clefairy",level:17,types:["Hada"]},{name:"miltank",nameEs:"Miltank",level:19,types:["Normal"]}] },
      { name:"Morty",   nameEs:"Morti",   city:"Hojarasca", type:"Fantasma", badge:"Niebla",  team:[{name:"gastly",nameEs:"Gastly",level:21,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:21,types:["Fantasma","Veneno"]},{name:"haunter",nameEs:"Haunter",level:23,types:["Fantasma","Veneno"]},{name:"gengar",nameEs:"Gengar",level:25,types:["Fantasma","Veneno"]}] },
      { name:"Chuck",   nameEs:"Berto",   city:"Azulmar",   type:"Lucha",    badge:"Tormenta",team:[{name:"primeape",nameEs:"Primeape",level:29,types:["Lucha"]},{name:"poliwrath",nameEs:"Poliwrath",level:31,types:["Agua","Lucha"]}] },
      { name:"Jasmine", nameEs:"Petra",   city:"Olivina",   type:"Acero",    badge:"Mineral", team:[{name:"magnemite",nameEs:"Magnemite",level:30,types:["Eléctrico","Acero"]},{name:"magnemite",nameEs:"Magnemite",level:30,types:["Eléctrico","Acero"]},{name:"steelix",nameEs:"Steelix",level:35,types:["Acero","Tierra"]}] },
      { name:"Pryce",   nameEs:"Fredo",   city:"Caoba",     type:"Hielo",    badge:"Glaciar", team:[{name:"seel",nameEs:"Seel",level:30,types:["Agua"]},{name:"dewgong",nameEs:"Dewgong",level:32,types:["Agua","Hielo"]},{name:"piloswine",nameEs:"Piloswine",level:34,types:["Hielo","Tierra"]}] },
      { name:"Clair",   nameEs:"Violeta", city:"Malva",     type:"Dragón",   badge:"Ascenso", team:[{name:"dragonair",nameEs:"Dragonair",level:38,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:38,types:["Dragón"]},{name:"dragonair",nameEs:"Dragonair",level:38,types:["Dragón"]},{name:"gyarados",nameEs:"Gyarados",level:38,types:["Agua","Volador"]},{name:"kingdra",nameEs:"Kingdra",level:41,types:["Agua","Dragón"]}] },
    ],
    eliteFour: [
      { name:"Will",  nameEs:"Will",  type:"Psíquico",  team:[{name:"xatu",nameEs:"Xatu",level:40,types:["Psíquico","Volador"]},{name:"jynx",nameEs:"Jynx",level:41,types:["Hielo","Psíquico"]},{name:"slowbro",nameEs:"Slowbro",level:41,types:["Agua","Psíquico"]},{name:"exeggutor",nameEs:"Exeggutor",level:41,types:["Planta","Psíquico"]},{name:"xatu",nameEs:"Xatu",level:42,types:["Psíquico","Volador"]}] },
      { name:"Koga",  nameEs:"Koga",  type:"Veneno",    team:[{name:"ariados",nameEs:"Ariados",level:40,types:["Bicho","Veneno"]},{name:"venomoth",nameEs:"Venomoth",level:41,types:["Bicho","Veneno"]},{name:"muk",nameEs:"Muk",level:42,types:["Veneno"]},{name:"forretress",nameEs:"Forretress",level:43,types:["Bicho","Acero"]},{name:"crobat",nameEs:"Crobat",level:44,types:["Veneno","Volador"]}] },
      { name:"Bruno", nameEs:"Bruno", type:"Lucha",     team:[{name:"hitmontop",nameEs:"Hitmontop",level:42,types:["Lucha"]},{name:"hitmonlee",nameEs:"Hitmonlee",level:42,types:["Lucha"]},{name:"hitmonchan",nameEs:"Hitmonchan",level:42,types:["Lucha"]},{name:"onix",nameEs:"Onix",level:43,types:["Roca","Tierra"]},{name:"machamp",nameEs:"Machamp",level:46,types:["Lucha"]}] },
      { name:"Karen", nameEs:"Karen", type:"Siniestro", team:[{name:"umbreon",nameEs:"Umbreon",level:42,types:["Siniestro"]},{name:"vileplume",nameEs:"Vileplume",level:42,types:["Planta","Veneno"]},{name:"gengar",nameEs:"Gengar",level:45,types:["Fantasma","Veneno"]},{name:"murkrow",nameEs:"Murkrow",level:44,types:["Siniestro","Volador"]},{name:"houndoom",nameEs:"Houndoom",level:47,types:["Siniestro","Fuego"]}] },
    ],
    champion: { name:"Lance",nameEs:"Lanza",team:[{name:"gyarados",nameEs:"Gyarados",level:46,types:["Agua","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:49,types:["Dragón","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:49,types:["Dragón","Volador"]},{name:"aerodactyl",nameEs:"Aerodactyl",level:48,types:["Roca","Volador"]},{name:"charizard",nameEs:"Charizard",level:48,types:["Fuego","Volador"]},{name:"dragonite",nameEs:"Dragonite",level:50,types:["Dragón","Volador"]}] },
  },

  // ═══════════════════════════════════════════════
  // HOENN — Rubí / Zafiro
  // ═══════════════════════════════════════════════
  rs: {
    leaders: [
      { name:"Roxanne",  nameEs:"Petra",    city:"Férrica",   type:"Roca",     badge:"Piedra",      team:[{name:"geodude",nameEs:"Geodude",level:14,types:["Roca","Tierra"]},{name:"geodude",nameEs:"Geodude",level:14,types:["Roca","Tierra"]},{name:"nosepass",nameEs:"Nosepass",level:15,types:["Roca"]}] },
      { name:"Brawly",   nameEs:"Marcial",  city:"Escualo",   type:"Lucha",    badge:"Nudillo",     team:[{name:"machop",nameEs:"Machop",level:17,types:["Lucha"]},{name:"meditite",nameEs:"Meditite",level:17,types:["Lucha","Psíquico"]},{name:"makuhita",nameEs:"Makuhita",level:19,types:["Lucha"]}] },
      { name:"Wattson",  nameEs:"Voltonio", city:"Mauville",  type:"Eléctrico",badge:"Dínamo",      team:[{name:"voltorb",nameEs:"Voltorb",level:20,types:["Eléctrico"]},{name:"electrike",nameEs:"Electrike",level:20,types:["Eléctrico"]},{name:"magneton",nameEs:"Magneton",level:22,types:["Eléctrico","Acero"]},{name:"manectric",nameEs:"Manectric",level:24,types:["Eléctrico"]}] },
      { name:"Flannery", nameEs:"Candela",  city:"Lavacalda", type:"Fuego",    badge:"Calor",       team:[{name:"slugma",nameEs:"Slugma",level:26,types:["Fuego"]},{name:"slugma",nameEs:"Slugma",level:26,types:["Fuego"]},{name:"torkoal",nameEs:"Torkoal",level:28,types:["Fuego"]}] },
      { name:"Norman",   nameEs:"Ernesto",  city:"Petalia",   type:"Normal",   badge:"Equilibrio",  team:[{name:"spinda",nameEs:"Spinda",level:27,types:["Normal"]},{name:"vigoroth",nameEs:"Vigoroth",level:27,types:["Normal"]},{name:"linoone",nameEs:"Linoone",level:29,types:["Normal"]},{name:"slaking",nameEs:"Slaking",level:31,types:["Normal"]}] },
      { name:"Winona",   nameEs:"Alicia",   city:"Fortree",   type:"Volador",  badge:"Pluma",       team:[{name:"swablu",nameEs:"Swablu",level:29,types:["Normal","Volador"]},{name:"tropius",nameEs:"Tropius",level:29,types:["Planta","Volador"]},{name:"pelipper",nameEs:"Pelipper",level:30,types:["Agua","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:31,types:["Acero","Volador"]},{name:"altaria",nameEs:"Altaria",level:33,types:["Dragón","Volador"]}] },
      { name:"Tate & Liza",nameEs:"Telma & Marco",city:"Mossdeep",type:"Psíquico",badge:"Mente",  team:[{name:"lunatone",nameEs:"Lunatone",level:42,types:["Roca","Psíquico"]},{name:"solrock",nameEs:"Solrock",level:42,types:["Roca","Psíquico"]}] },
      { name:"Wallace",  nameEs:"Plubio",   city:"Celeste",   type:"Agua",     badge:"Lluvia",      team:[{name:"luvdisc",nameEs:"Luvdisc",level:40,types:["Agua"]},{name:"whiscash",nameEs:"Whiscash",level:42,types:["Agua","Tierra"]},{name:"sealeo",nameEs:"Sealeo",level:40,types:["Hielo","Agua"]},{name:"seaking",nameEs:"Seaking",level:42,types:["Agua"]},{name:"milotic",nameEs:"Milotic",level:43,types:["Agua"]}] },
    ],
    eliteFour: [
      { name:"Sidney",  nameEs:"Sixto",  type:"Siniestro",team:[{name:"mightyena",nameEs:"Mightyena",level:46,types:["Siniestro"]},{name:"shiftry",nameEs:"Shiftry",level:48,types:["Planta","Siniestro"]},{name:"cacturne",nameEs:"Cacturne",level:46,types:["Planta","Siniestro"]},{name:"crawdaunt",nameEs:"Crawdaunt",level:48,types:["Agua","Siniestro"]},{name:"absol",nameEs:"Absol",level:49,types:["Siniestro"]}] },
      { name:"Phoebe",  nameEs:"Febe",   type:"Fantasma", team:[{name:"dusclops",nameEs:"Dusclops",level:48,types:["Fantasma"]},{name:"banette",nameEs:"Banette",level:49,types:["Fantasma"]},{name:"shuppet",nameEs:"Shuppet",level:49,types:["Fantasma"]},{name:"dusclops",nameEs:"Dusclops",level:51,types:["Fantasma"]},{name:"sableye",nameEs:"Sableye",level:50,types:["Siniestro","Fantasma"]}] },
      { name:"Glacia",  nameEs:"Glacia", type:"Hielo",    team:[{name:"sealeo",nameEs:"Sealeo",level:50,types:["Hielo","Agua"]},{name:"glalie",nameEs:"Glalie",level:50,types:["Hielo"]},{name:"sealeo",nameEs:"Sealeo",level:52,types:["Hielo","Agua"]},{name:"glalie",nameEs:"Glalie",level:52,types:["Hielo"]},{name:"walrein",nameEs:"Walrein",level:53,types:["Hielo","Agua"]}] },
      { name:"Drake",   nameEs:"Drake",  type:"Dragón",   team:[{name:"shelgon",nameEs:"Shelgon",level:52,types:["Dragón"]},{name:"altaria",nameEs:"Altaria",level:54,types:["Dragón","Volador"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"salamence",nameEs:"Salamence",level:55,types:["Dragón","Volador"]}] },
    ],
    champion: { name:"Steven",nameEs:"César",team:[{name:"skarmory",nameEs:"Skarmory",level:57,types:["Acero","Volador"]},{name:"claydol",nameEs:"Claydol",level:55,types:["Tierra","Psíquico"]},{name:"aggron",nameEs:"Aggron",level:56,types:["Acero","Roca"]},{name:"cradily",nameEs:"Cradily",level:56,types:["Roca","Planta"]},{name:"armaldo",nameEs:"Armaldo",level:56,types:["Roca","Bicho"]},{name:"metagross",nameEs:"Metagross",level:58,types:["Acero","Psíquico"]}] },
  },

  // ═══════════════════════════════════════════════
  // HOENN — Esmeralda
  // ═══════════════════════════════════════════════
  emerald: {
    leaders: [
      { name:"Roxanne",  nameEs:"Petra",    city:"Férrica",  type:"Roca",     badge:"Piedra",     team:[{name:"geodude",nameEs:"Geodude",level:14,types:["Roca","Tierra"]},{name:"geodude",nameEs:"Geodude",level:14,types:["Roca","Tierra"]},{name:"nosepass",nameEs:"Nosepass",level:15,types:["Roca"]}] },
      { name:"Brawly",   nameEs:"Marcial",  city:"Escualo",  type:"Lucha",    badge:"Nudillo",    team:[{name:"meditite",nameEs:"Meditite",level:17,types:["Lucha","Psíquico"]},{name:"machop",nameEs:"Machop",level:17,types:["Lucha"]},{name:"makuhita",nameEs:"Makuhita",level:19,types:["Lucha"]}] },
      { name:"Wattson",  nameEs:"Voltonio", city:"Mauville", type:"Eléctrico",badge:"Dínamo",     team:[{name:"voltorb",nameEs:"Voltorb",level:20,types:["Eléctrico"]},{name:"electrike",nameEs:"Electrike",level:20,types:["Eléctrico"]},{name:"magneton",nameEs:"Magneton",level:22,types:["Eléctrico","Acero"]},{name:"manectric",nameEs:"Manectric",level:24,types:["Eléctrico"]}] },
      { name:"Flannery", nameEs:"Candela",  city:"Lavacalda",type:"Fuego",    badge:"Calor",      team:[{name:"slugma",nameEs:"Slugma",level:26,types:["Fuego"]},{name:"slugma",nameEs:"Slugma",level:26,types:["Fuego"]},{name:"camerupt",nameEs:"Camerupt",level:28,types:["Fuego","Tierra"]},{name:"torkoal",nameEs:"Torkoal",level:29,types:["Fuego"]}] },
      { name:"Norman",   nameEs:"Ernesto",  city:"Petalia",  type:"Normal",   badge:"Equilibrio", team:[{name:"spinda",nameEs:"Spinda",level:27,types:["Normal"]},{name:"vigoroth",nameEs:"Vigoroth",level:27,types:["Normal"]},{name:"linoone",nameEs:"Linoone",level:29,types:["Normal"]},{name:"slaking",nameEs:"Slaking",level:31,types:["Normal"]}] },
      { name:"Winona",   nameEs:"Alicia",   city:"Fortree",  type:"Volador",  badge:"Pluma",      team:[{name:"swablu",nameEs:"Swablu",level:29,types:["Normal","Volador"]},{name:"pelipper",nameEs:"Pelipper",level:30,types:["Agua","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:31,types:["Acero","Volador"]},{name:"altaria",nameEs:"Altaria",level:33,types:["Dragón","Volador"]}] },
      { name:"Tate & Liza",nameEs:"Telma & Marco",city:"Mossdeep",type:"Psíquico",badge:"Mente", team:[{name:"lunatone",nameEs:"Lunatone",level:42,types:["Roca","Psíquico"]},{name:"solrock",nameEs:"Solrock",level:42,types:["Roca","Psíquico"]}] },
      { name:"Juan",     nameEs:"Juan",     city:"Celeste",  type:"Agua",     badge:"Lluvia",     team:[{name:"luvdisc",nameEs:"Luvdisc",level:41,types:["Agua"]},{name:"whiscash",nameEs:"Whiscash",level:41,types:["Agua","Tierra"]},{name:"sealeo",nameEs:"Sealeo",level:43,types:["Hielo","Agua"]},{name:"crawdaunt",nameEs:"Crawdaunt",level:43,types:["Agua","Siniestro"]},{name:"kingdra",nameEs:"Kingdra",level:46,types:["Agua","Dragón"]}] },
    ],
    eliteFour: [
      { name:"Sidney",  nameEs:"Sixto",  type:"Siniestro",team:[{name:"mightyena",nameEs:"Mightyena",level:46,types:["Siniestro"]},{name:"shiftry",nameEs:"Shiftry",level:48,types:["Planta","Siniestro"]},{name:"cacturne",nameEs:"Cacturne",level:46,types:["Planta","Siniestro"]},{name:"crawdaunt",nameEs:"Crawdaunt",level:48,types:["Agua","Siniestro"]},{name:"absol",nameEs:"Absol",level:49,types:["Siniestro"]}] },
      { name:"Phoebe",  nameEs:"Febe",   type:"Fantasma", team:[{name:"dusclops",nameEs:"Dusclops",level:48,types:["Fantasma"]},{name:"banette",nameEs:"Banette",level:49,types:["Fantasma"]},{name:"shuppet",nameEs:"Shuppet",level:49,types:["Fantasma"]},{name:"dusclops",nameEs:"Dusclops",level:51,types:["Fantasma"]},{name:"sableye",nameEs:"Sableye",level:50,types:["Siniestro","Fantasma"]}] },
      { name:"Glacia",  nameEs:"Glacia", type:"Hielo",    team:[{name:"sealeo",nameEs:"Sealeo",level:50,types:["Hielo","Agua"]},{name:"glalie",nameEs:"Glalie",level:50,types:["Hielo"]},{name:"sealeo",nameEs:"Sealeo",level:52,types:["Hielo","Agua"]},{name:"glalie",nameEs:"Glalie",level:52,types:["Hielo"]},{name:"walrein",nameEs:"Walrein",level:53,types:["Hielo","Agua"]}] },
      { name:"Drake",   nameEs:"Drake",  type:"Dragón",   team:[{name:"shelgon",nameEs:"Shelgon",level:52,types:["Dragón"]},{name:"altaria",nameEs:"Altaria",level:54,types:["Dragón","Volador"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"salamence",nameEs:"Salamence",level:55,types:["Dragón","Volador"]}] },
    ],
    champion: { name:"Wallace",nameEs:"Plubio",team:[{name:"tentacruel",nameEs:"Tentacruel",level:55,types:["Agua","Veneno"]},{name:"wailord",nameEs:"Wailord",level:57,types:["Agua"]},{name:"ludicolo",nameEs:"Ludicolo",level:56,types:["Agua","Planta"]},{name:"whiscash",nameEs:"Whiscash",level:56,types:["Agua","Tierra"]},{name:"gyarados",nameEs:"Gyarados",level:56,types:["Agua","Volador"]},{name:"milotic",nameEs:"Milotic",level:58,types:["Agua"]}] },
  },

  // ═══════════════════════════════════════════════
  // SINNOH — Diamante / Perla
  // ═══════════════════════════════════════════════
  dp: {
    leaders: [
      { name:"Roark",       nameEs:"Roco",     city:"Mina",       type:"Roca",     badge:"Carbón",     team:[{name:"geodude",nameEs:"Geodude",level:12,types:["Roca","Tierra"]},{name:"onix",nameEs:"Onix",level:12,types:["Roca","Tierra"]},{name:"cranidos",nameEs:"Cranidos",level:14,types:["Roca"]}] },
      { name:"Gardenia",    nameEs:"Gardenia", city:"Eterna",     type:"Planta",   badge:"Bosque",     team:[{name:"turtwig",nameEs:"Turtwig",level:19,types:["Planta"]},{name:"cherrim",nameEs:"Cherrim",level:19,types:["Planta"]},{name:"roserade",nameEs:"Roserade",level:22,types:["Planta","Veneno"]}] },
      { name:"Maylene",     nameEs:"Malva",    city:"Vetusta",    type:"Lucha",    badge:"Adoquín",    team:[{name:"meditite",nameEs:"Meditite",level:27,types:["Lucha","Psíquico"]},{name:"machoke",nameEs:"Machoke",level:27,types:["Lucha"]},{name:"lucario",nameEs:"Lucario",level:30,types:["Lucha","Acero"]}] },
      { name:"Crasher Wake",nameEs:"Oleando",  city:"Pantano",    type:"Agua",     badge:"Pantano",    team:[{name:"gyarados",nameEs:"Gyarados",level:27,types:["Agua","Volador"]},{name:"quagsire",nameEs:"Quagsire",level:27,types:["Agua","Tierra"]},{name:"floatzel",nameEs:"Floatzel",level:30,types:["Agua"]}] },
      { name:"Fantina",     nameEs:"Fantasía", city:"Corazón",    type:"Fantasma", badge:"Reliquia",   team:[{name:"duskull",nameEs:"Duskull",level:32,types:["Fantasma"]},{name:"haunter",nameEs:"Haunter",level:34,types:["Fantasma","Veneno"]},{name:"mismagius",nameEs:"Mismagius",level:36,types:["Fantasma"]}] },
      { name:"Byron",       nameEs:"Acerón",   city:"Aguada",     type:"Acero",    badge:"Mina",       team:[{name:"magneton",nameEs:"Magneton",level:37,types:["Eléctrico","Acero"]},{name:"steelix",nameEs:"Steelix",level:38,types:["Acero","Tierra"]},{name:"bastiodon",nameEs:"Bastiodon",level:41,types:["Roca","Acero"]}] },
      { name:"Candice",     nameEs:"Escarcha", city:"Nevado",     type:"Hielo",    badge:"Carámbano",  team:[{name:"sneasel",nameEs:"Sneasel",level:38,types:["Siniestro","Hielo"]},{name:"piloswine",nameEs:"Piloswine",level:38,types:["Hielo","Tierra"]},{name:"abomasnow",nameEs:"Abomasnow",level:40,types:["Planta","Hielo"]},{name:"froslass",nameEs:"Froslass",level:42,types:["Hielo","Fantasma"]}] },
      { name:"Volkner",     nameEs:"Lectro",   city:"Soleada",    type:"Eléctrico",badge:"Faro",       team:[{name:"jolteon",nameEs:"Jolteon",level:46,types:["Eléctrico"]},{name:"raichu",nameEs:"Raichu",level:46,types:["Eléctrico"]},{name:"luxray",nameEs:"Luxray",level:48,types:["Eléctrico"]},{name:"electivire",nameEs:"Electivire",level:50,types:["Eléctrico"]}] },
    ],
    eliteFour: [
      { name:"Aaron",  nameEs:"Aarón",  type:"Bicho",    team:[{name:"yanmega",nameEs:"Yanmega",level:49,types:["Bicho","Volador"]},{name:"scizor",nameEs:"Scizor",level:49,types:["Bicho","Acero"]},{name:"vespiquen",nameEs:"Vespiquen",level:50,types:["Bicho","Volador"]},{name:"heracross",nameEs:"Heracross",level:51,types:["Bicho","Lucha"]},{name:"drapion",nameEs:"Drapion",level:53,types:["Veneno","Siniestro"]}] },
      { name:"Bertha", nameEs:"Berta",  type:"Tierra",   team:[{name:"whiscash",nameEs:"Whiscash",level:50,types:["Agua","Tierra"]},{name:"gliscor",nameEs:"Gliscor",level:53,types:["Tierra","Volador"]},{name:"golem",nameEs:"Golem",level:52,types:["Roca","Tierra"]},{name:"rhyperior",nameEs:"Rhyperior",level:52,types:["Tierra","Roca"]},{name:"hippowdon",nameEs:"Hippowdon",level:54,types:["Tierra"]}] },
      { name:"Flint",  nameEs:"Ignacio",type:"Fuego",    team:[{name:"houndoom",nameEs:"Houndoom",level:52,types:["Siniestro","Fuego"]},{name:"flareon",nameEs:"Flareon",level:55,types:["Fuego"]},{name:"rapidash",nameEs:"Rapidash",level:53,types:["Fuego"]},{name:"infernape",nameEs:"Infernape",level:55,types:["Fuego","Lucha"]},{name:"magmortar",nameEs:"Magmortar",level:57,types:["Fuego"]}] },
      { name:"Lucian", nameEs:"Luciano",type:"Psíquico", team:[{name:"mr-mime",nameEs:"Mr. Mime",level:53,types:["Psíquico","Hada"]},{name:"espeon",nameEs:"Espeon",level:55,types:["Psíquico"]},{name:"bronzong",nameEs:"Bronzong",level:54,types:["Acero","Psíquico"]},{name:"alakazam",nameEs:"Alakazam",level:56,types:["Psíquico"]},{name:"gallade",nameEs:"Gallade",level:59,types:["Psíquico","Lucha"]}] },
    ],
    champion: { name:"Cynthia",nameEs:"Cynthia",team:[{name:"spiritomb",nameEs:"Spiritomb",level:58,types:["Fantasma","Siniestro"]},{name:"roserade",nameEs:"Roserade",level:58,types:["Planta","Veneno"]},{name:"togekiss",nameEs:"Togekiss",level:60,types:["Hada","Volador"]},{name:"lucario",nameEs:"Lucario",level:60,types:["Lucha","Acero"]},{name:"milotic",nameEs:"Milotic",level:58,types:["Agua"]},{name:"garchomp",nameEs:"Garchomp",level:62,types:["Dragón","Tierra"]}] },
  },

  // ═══════════════════════════════════════════════
  // SINNOH — Platino (niveles actualizados)
  // ═══════════════════════════════════════════════
  pt: {
    leaders: [
      { name:"Roark",       nameEs:"Roco",     city:"Mina",     type:"Roca",     badge:"Carbón",    team:[{name:"geodude",nameEs:"Geodude",level:12,types:["Roca","Tierra"]},{name:"onix",nameEs:"Onix",level:12,types:["Roca","Tierra"]},{name:"cranidos",nameEs:"Cranidos",level:14,types:["Roca"]}] },
      { name:"Gardenia",    nameEs:"Gardenia", city:"Eterna",   type:"Planta",   badge:"Bosque",    team:[{name:"turtwig",nameEs:"Turtwig",level:20,types:["Planta"]},{name:"cherrim",nameEs:"Cherrim",level:20,types:["Planta"]},{name:"roserade",nameEs:"Roserade",level:23,types:["Planta","Veneno"]}] },
      { name:"Fantina",     nameEs:"Fantasía", city:"Corazón",  type:"Fantasma", badge:"Reliquia",  team:[{name:"duskull",nameEs:"Duskull",level:24,types:["Fantasma"]},{name:"haunter",nameEs:"Haunter",level:24,types:["Fantasma","Veneno"]},{name:"mismagius",nameEs:"Mismagius",level:26,types:["Fantasma"]}] },
      { name:"Maylene",     nameEs:"Malva",    city:"Vetusta",  type:"Lucha",    badge:"Adoquín",   team:[{name:"meditite",nameEs:"Meditite",level:28,types:["Lucha","Psíquico"]},{name:"machoke",nameEs:"Machoke",level:29,types:["Lucha"]},{name:"lucario",nameEs:"Lucario",level:32,types:["Lucha","Acero"]}] },
      { name:"Crasher Wake",nameEs:"Oleando",  city:"Pantano",  type:"Agua",     badge:"Pantano",   team:[{name:"gyarados",nameEs:"Gyarados",level:33,types:["Agua","Volador"]},{name:"quagsire",nameEs:"Quagsire",level:34,types:["Agua","Tierra"]},{name:"floatzel",nameEs:"Floatzel",level:37,types:["Agua"]}] },
      { name:"Byron",       nameEs:"Acerón",   city:"Aguada",   type:"Acero",    badge:"Mina",      team:[{name:"magneton",nameEs:"Magneton",level:39,types:["Eléctrico","Acero"]},{name:"steelix",nameEs:"Steelix",level:39,types:["Acero","Tierra"]},{name:"bastiodon",nameEs:"Bastiodon",level:42,types:["Roca","Acero"]}] },
      { name:"Candice",     nameEs:"Escarcha", city:"Nevado",   type:"Hielo",    badge:"Carámbano", team:[{name:"sneasel",nameEs:"Sneasel",level:40,types:["Siniestro","Hielo"]},{name:"piloswine",nameEs:"Piloswine",level:40,types:["Hielo","Tierra"]},{name:"abomasnow",nameEs:"Abomasnow",level:42,types:["Planta","Hielo"]},{name:"froslass",nameEs:"Froslass",level:44,types:["Hielo","Fantasma"]}] },
      { name:"Volkner",     nameEs:"Lectro",   city:"Soleada",  type:"Eléctrico",badge:"Faro",      team:[{name:"jolteon",nameEs:"Jolteon",level:46,types:["Eléctrico"]},{name:"raichu",nameEs:"Raichu",level:46,types:["Eléctrico"]},{name:"ambipom",nameEs:"Ambipom",level:47,types:["Normal"]},{name:"luxray",nameEs:"Luxray",level:49,types:["Eléctrico"]},{name:"electivire",nameEs:"Electivire",level:50,types:["Eléctrico"]}] },
    ],
    eliteFour: [
      { name:"Aaron",  nameEs:"Aarón",   type:"Bicho",   team:[{name:"yanmega",nameEs:"Yanmega",level:49,types:["Bicho","Volador"]},{name:"scizor",nameEs:"Scizor",level:51,types:["Bicho","Acero"]},{name:"vespiquen",nameEs:"Vespiquen",level:50,types:["Bicho","Volador"]},{name:"heracross",nameEs:"Heracross",level:51,types:["Bicho","Lucha"]},{name:"drapion",nameEs:"Drapion",level:53,types:["Veneno","Siniestro"]}] },
      { name:"Bertha", nameEs:"Berta",   type:"Tierra",  team:[{name:"whiscash",nameEs:"Whiscash",level:50,types:["Agua","Tierra"]},{name:"gliscor",nameEs:"Gliscor",level:53,types:["Tierra","Volador"]},{name:"golem",nameEs:"Golem",level:52,types:["Roca","Tierra"]},{name:"rhyperior",nameEs:"Rhyperior",level:52,types:["Tierra","Roca"]},{name:"hippowdon",nameEs:"Hippowdon",level:54,types:["Tierra"]}] },
      { name:"Flint",  nameEs:"Ignacio", type:"Fuego",   team:[{name:"houndoom",nameEs:"Houndoom",level:52,types:["Siniestro","Fuego"]},{name:"flareon",nameEs:"Flareon",level:55,types:["Fuego"]},{name:"rapidash",nameEs:"Rapidash",level:53,types:["Fuego"]},{name:"infernape",nameEs:"Infernape",level:55,types:["Fuego","Lucha"]},{name:"magmortar",nameEs:"Magmortar",level:57,types:["Fuego"]}] },
      { name:"Lucian", nameEs:"Luciano", type:"Psíquico",team:[{name:"mr-mime",nameEs:"Mr. Mime",level:53,types:["Psíquico","Hada"]},{name:"espeon",nameEs:"Espeon",level:55,types:["Psíquico"]},{name:"bronzong",nameEs:"Bronzong",level:54,types:["Acero","Psíquico"]},{name:"alakazam",nameEs:"Alakazam",level:56,types:["Psíquico"]},{name:"gallade",nameEs:"Gallade",level:59,types:["Psíquico","Lucha"]}] },
    ],
    champion: { name:"Cynthia",nameEs:"Cynthia",team:[{name:"spiritomb",nameEs:"Spiritomb",level:61,types:["Fantasma","Siniestro"]},{name:"roserade",nameEs:"Roserade",level:60,types:["Planta","Veneno"]},{name:"togekiss",nameEs:"Togekiss",level:62,types:["Hada","Volador"]},{name:"lucario",nameEs:"Lucario",level:63,types:["Lucha","Acero"]},{name:"milotic",nameEs:"Milotic",level:63,types:["Agua"]},{name:"garchomp",nameEs:"Garchomp",level:66,types:["Dragón","Tierra"]}] },
  },

  // ═══════════════════════════════════════════════
  // UNOVA — Negro / Blanco
  // ═══════════════════════════════════════════════
  bw: {
    leaders: [
      { name:"Cilan/Chili/Cress",nameEs:"Millo/Mostaza/Carda",city:"Trineva",type:"Planta/Fuego/Agua",badge:"Trío",team:[{name:"lillipup",nameEs:"Lillipup",level:12,types:["Normal"]},{name:"pansage",nameEs:"Pansage",level:14,types:["Planta"]}] },
      { name:"Lenora",    nameEs:"Aloe",    city:"Nacarena",   type:"Normal",   badge:"Básica",    team:[{name:"herdier",nameEs:"Herdier",level:18,types:["Normal"]},{name:"watchog",nameEs:"Watchog",level:20,types:["Normal"]}] },
      { name:"Burgh",     nameEs:"Arty",    city:"Porcelana",  type:"Bicho",    badge:"Insecto",   team:[{name:"whirlipede",nameEs:"Whirlipede",level:21,types:["Veneno","Bicho"]},{name:"dwebble",nameEs:"Dwebble",level:21,types:["Bicho","Roca"]},{name:"leavanny",nameEs:"Leavanny",level:23,types:["Bicho","Planta"]}] },
      { name:"Elesa",     nameEs:"Camille", city:"Nimbasa",    type:"Eléctrico",badge:"Rayo",      team:[{name:"emolga",nameEs:"Emolga",level:25,types:["Eléctrico","Volador"]},{name:"emolga",nameEs:"Emolga",level:25,types:["Eléctrico","Volador"]},{name:"zebstrika",nameEs:"Zebstrika",level:27,types:["Eléctrico"]}] },
      { name:"Clay",      nameEs:"Yarrow",  city:"Fiordo",     type:"Tierra",   badge:"Sismo",     team:[{name:"krokorok",nameEs:"Krokorok",level:29,types:["Tierra","Siniestro"]},{name:"palpitoad",nameEs:"Palpitoad",level:29,types:["Agua","Tierra"]},{name:"excadrill",nameEs:"Excadrill",level:31,types:["Tierra","Acero"]}] },
      { name:"Skyla",     nameEs:"Aura",    city:"Mistral",    type:"Volador",  badge:"Propulsión",team:[{name:"swoobat",nameEs:"Swoobat",level:33,types:["Psíquico","Volador"]},{name:"unfezant",nameEs:"Unfezant",level:33,types:["Normal","Volador"]},{name:"swanna",nameEs:"Swanna",level:35,types:["Agua","Volador"]}] },
      { name:"Brycen",    nameEs:"Aquilio", city:"Hielo",      type:"Hielo",    badge:"Congelada", team:[{name:"vanillish",nameEs:"Vanillish",level:37,types:["Hielo"]},{name:"cryogonal",nameEs:"Cryogonal",level:37,types:["Hielo"]},{name:"beartic",nameEs:"Beartic",level:39,types:["Hielo"]}] },
      { name:"Drayden/Iris",nameEs:"Lirio/Iris",city:"Dragociel",type:"Dragón",badge:"Leyenda",  team:[{name:"fraxure",nameEs:"Fraxure",level:41,types:["Dragón"]},{name:"fraxure",nameEs:"Fraxure",level:41,types:["Dragón"]},{name:"haxorus",nameEs:"Haxorus",level:43,types:["Dragón"]}] },
    ],
    eliteFour: [
      { name:"Shauntal", nameEs:"Camelia",  type:"Fantasma", team:[{name:"cofagrigus",nameEs:"Cofagrigus",level:48,types:["Fantasma"]},{name:"drifblim",nameEs:"Drifblim",level:50,types:["Fantasma","Volador"]},{name:"golurk",nameEs:"Golurk",level:50,types:["Tierra","Fantasma"]},{name:"chandelure",nameEs:"Chandelure",level:52,types:["Fantasma","Fuego"]}] },
      { name:"Marshal",  nameEs:"Marcelo",  type:"Lucha",   team:[{name:"throh",nameEs:"Throh",level:48,types:["Lucha"]},{name:"sawk",nameEs:"Sawk",level:48,types:["Lucha"]},{name:"conkeldurr",nameEs:"Conkeldurr",level:52,types:["Lucha"]},{name:"mienshao",nameEs:"Mienshao",level:50,types:["Lucha"]}] },
      { name:"Grimsley", nameEs:"Grimsley", type:"Siniestro",team:[{name:"scrafty",nameEs:"Scrafty",level:48,types:["Siniestro","Lucha"]},{name:"liepard",nameEs:"Liepard",level:48,types:["Siniestro"]},{name:"krookodile",nameEs:"Krookodile",level:52,types:["Tierra","Siniestro"]},{name:"bisharp",nameEs:"Bisharp",level:50,types:["Siniestro","Acero"]}] },
      { name:"Caitlin",  nameEs:"Catleya",  type:"Psíquico",team:[{name:"musharna",nameEs:"Musharna",level:48,types:["Psíquico"]},{name:"sigilyph",nameEs:"Sigilyph",level:48,types:["Psíquico","Volador"]},{name:"reuniclus",nameEs:"Reuniclus",level:52,types:["Psíquico"]},{name:"gothitelle",nameEs:"Gothitelle",level:50,types:["Psíquico"]}] },
    ],
    champion: { name:"Alder",nameEs:"Mirto",team:[{name:"accelgor",nameEs:"Accelgor",level:54,types:["Bicho"]},{name:"vanilluxe",nameEs:"Vanilluxe",level:54,types:["Hielo"]},{name:"escavalier",nameEs:"Escavalier",level:54,types:["Bicho","Acero"]},{name:"bouffalant",nameEs:"Bouffalant",level:54,types:["Normal"]},{name:"druddigon",nameEs:"Druddigon",level:54,types:["Dragón"]},{name:"volcarona",nameEs:"Volcarona",level:54,types:["Bicho","Fuego"]}] },
  },

  // ═══════════════════════════════════════════════
  // UNOVA — Negro 2 / Blanco 2 ★ NUZLOCKE POPULAR
  // ═══════════════════════════════════════════════
  b2w2: {
    leaders: [
      { name:"Cheren",    nameEs:"Cheren",   city:"Aspertia",   type:"Normal",   badge:"Básica",     team:[{name:"patrat",nameEs:"Patrat",level:11,types:["Normal"]},{name:"lillipup",nameEs:"Lillipup",level:13,types:["Normal"]}] },
      { name:"Roxie",     nameEs:"Roxie",    city:"Virbank",    type:"Veneno",   badge:"Tóxica",     team:[{name:"koffing",nameEs:"Koffing",level:16,types:["Veneno"]},{name:"whirlipede",nameEs:"Whirlipede",level:18,types:["Veneno","Bicho"]}] },
      { name:"Burgh",     nameEs:"Arty",     city:"Porcelana",  type:"Bicho",    badge:"Insecto",    team:[{name:"swadloon",nameEs:"Swadloon",level:20,types:["Bicho","Planta"]},{name:"dwebble",nameEs:"Dwebble",level:20,types:["Bicho","Roca"]},{name:"leavanny",nameEs:"Leavanny",level:22,types:["Bicho","Planta"]}] },
      { name:"Elesa",     nameEs:"Camille",  city:"Nimbasa",    type:"Eléctrico",badge:"Rayo",       team:[{name:"flaaffy",nameEs:"Flaaffy",level:28,types:["Eléctrico"]},{name:"flaaffy",nameEs:"Flaaffy",level:28,types:["Eléctrico"]},{name:"emolga",nameEs:"Emolga",level:28,types:["Eléctrico","Volador"]},{name:"zebstrika",nameEs:"Zebstrika",level:30,types:["Eléctrico"]}] },
      { name:"Clay",      nameEs:"Yarrow",   city:"Fiordo",     type:"Tierra",   badge:"Sismo",      team:[{name:"krokorok",nameEs:"Krokorok",level:31,types:["Tierra","Siniestro"]},{name:"sandslash",nameEs:"Sandslash",level:31,types:["Tierra"]},{name:"excadrill",nameEs:"Excadrill",level:33,types:["Tierra","Acero"]}] },
      { name:"Skyla",     nameEs:"Aura",     city:"Mistral",    type:"Volador",  badge:"Propulsión", team:[{name:"swoobat",nameEs:"Swoobat",level:35,types:["Psíquico","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:35,types:["Acero","Volador"]},{name:"swanna",nameEs:"Swanna",level:37,types:["Agua","Volador"]}] },
      { name:"Drayden",   nameEs:"Lirio",    city:"Dragociel",  type:"Dragón",   badge:"Leyenda",    team:[{name:"druddigon",nameEs:"Druddigon",level:41,types:["Dragón"]},{name:"flygon",nameEs:"Flygon",level:41,types:["Tierra","Dragón"]},{name:"haxorus",nameEs:"Haxorus",level:43,types:["Dragón"]}] },
      { name:"Marlon",    nameEs:"Marlon",   city:"Humilau",    type:"Agua",     badge:"Wave",       team:[{name:"wailord",nameEs:"Wailord",level:49,types:["Agua"]},{name:"mantine",nameEs:"Mantine",level:49,types:["Agua","Volador"]},{name:"jellicent",nameEs:"Jellicent",level:51,types:["Agua","Fantasma"]}] },
    ],
    eliteFour: [
      { name:"Shauntal", nameEs:"Camelia",  type:"Fantasma",  team:[{name:"cofagrigus",nameEs:"Cofagrigus",level:56,types:["Fantasma"]},{name:"drifblim",nameEs:"Drifblim",level:56,types:["Fantasma","Volador"]},{name:"golurk",nameEs:"Golurk",level:56,types:["Tierra","Fantasma"]},{name:"chandelure",nameEs:"Chandelure",level:58,types:["Fantasma","Fuego"]}] },
      { name:"Marshal",  nameEs:"Marcelo",  type:"Lucha",     team:[{name:"throh",nameEs:"Throh",level:56,types:["Lucha"]},{name:"sawk",nameEs:"Sawk",level:56,types:["Lucha"]},{name:"conkeldurr",nameEs:"Conkeldurr",level:58,types:["Lucha"]},{name:"mienshao",nameEs:"Mienshao",level:56,types:["Lucha"]},{name:"lucario",nameEs:"Lucario",level:56,types:["Lucha","Acero"]}] },
      { name:"Grimsley", nameEs:"Grimsley", type:"Siniestro", team:[{name:"liepard",nameEs:"Liepard",level:56,types:["Siniestro"]},{name:"scrafty",nameEs:"Scrafty",level:56,types:["Siniestro","Lucha"]},{name:"krookodile",nameEs:"Krookodile",level:58,types:["Tierra","Siniestro"]},{name:"bisharp",nameEs:"Bisharp",level:56,types:["Siniestro","Acero"]},{name:"absol",nameEs:"Absol",level:56,types:["Siniestro"]}] },
      { name:"Caitlin",  nameEs:"Catleya",  type:"Psíquico",  team:[{name:"musharna",nameEs:"Musharna",level:56,types:["Psíquico"]},{name:"sigilyph",nameEs:"Sigilyph",level:56,types:["Psíquico","Volador"]},{name:"reuniclus",nameEs:"Reuniclus",level:58,types:["Psíquico"]},{name:"gothitelle",nameEs:"Gothitelle",level:56,types:["Psíquico"]},{name:"bronzong",nameEs:"Bronzong",level:56,types:["Acero","Psíquico"]}] },
    ],
    champion: { name:"Iris",nameEs:"Iris",team:[{name:"hydreigon",nameEs:"Hydreigon",level:57,types:["Siniestro","Dragón"]},{name:"aggron",nameEs:"Aggron",level:57,types:["Acero","Roca"]},{name:"lapras",nameEs:"Lapras",level:57,types:["Agua","Hielo"]},{name:"archeops",nameEs:"Archeops",level:57,types:["Roca","Volador"]},{name:"haxorus",nameEs:"Haxorus",level:57,types:["Dragón"]},{name:"druddigon",nameEs:"Druddigon",level:57,types:["Dragón"]}] },
  },

  // ═══════════════════════════════════════════════
  // KALOS — X / Y
  // ═══════════════════════════════════════════════
  xy: {
    leaders: [
      { name:"Viola",   nameEs:"Viola",   city:"Escolopendra",type:"Bicho",    badge:"Insecto",   team:[{name:"surskit",nameEs:"Surskit",level:10,types:["Agua","Bicho"]},{name:"vivillon",nameEs:"Vivillon",level:12,types:["Bicho","Volador"]}] },
      { name:"Grant",   nameEs:"Costo",   city:"Cantos",      type:"Roca",     badge:"Acantilado",team:[{name:"amaura",nameEs:"Amaura",level:25,types:["Roca","Hielo"]},{name:"tyrunt",nameEs:"Tyrunt",level:25,types:["Roca","Dragón"]}] },
      { name:"Korrina", nameEs:"Corelia", city:"Shalour",     type:"Lucha",    badge:"Estruendo", team:[{name:"mienfoo",nameEs:"Mienfoo",level:29,types:["Lucha"]},{name:"machoke",nameEs:"Machoke",level:28,types:["Lucha"]},{name:"hawlucha",nameEs:"Hawlucha",level:32,types:["Lucha","Volador"]}] },
      { name:"Ramos",   nameEs:"Herberto",city:"Coumarín",    type:"Planta",   badge:"Planta",    team:[{name:"jumpluff",nameEs:"Jumpluff",level:30,types:["Planta","Volador"]},{name:"weepinbell",nameEs:"Weepinbell",level:31,types:["Planta","Veneno"]},{name:"gogoat",nameEs:"Gogoat",level:34,types:["Planta"]}] },
      { name:"Clemont", nameEs:"Lem",     city:"Luminalia",   type:"Eléctrico",badge:"Voltaje",   team:[{name:"emolga",nameEs:"Emolga",level:35,types:["Eléctrico","Volador"]},{name:"magneton",nameEs:"Magneton",level:35,types:["Eléctrico","Acero"]},{name:"heliolisk",nameEs:"Heliolisk",level:37,types:["Eléctrico","Normal"]}] },
      { name:"Valerie", nameEs:"Valeria", city:"Laverre",     type:"Hada",     badge:"Hada",      team:[{name:"mawile",nameEs:"Mawile",level:38,types:["Acero","Hada"]},{name:"mr-mime",nameEs:"Mr. Mime",level:39,types:["Psíquico","Hada"]},{name:"sylveon",nameEs:"Sylveon",level:42,types:["Hada"]}] },
      { name:"Olympia", nameEs:"Olympia", city:"Anistar",     type:"Psíquico", badge:"Psíquica",  team:[{name:"sigilyph",nameEs:"Sigilyph",level:44,types:["Psíquico","Volador"]},{name:"slowking",nameEs:"Slowking",level:45,types:["Agua","Psíquico"]},{name:"meowstic",nameEs:"Meowstic",level:48,types:["Psíquico"]}] },
      { name:"Wulfric", nameEs:"Wulfric", city:"Nevalanda",   type:"Hielo",    badge:"Iceberg",   team:[{name:"abomasnow",nameEs:"Abomasnow",level:56,types:["Planta","Hielo"]},{name:"cryogonal",nameEs:"Cryogonal",level:55,types:["Hielo"]},{name:"avalugg",nameEs:"Avalugg",level:59,types:["Hielo"]}] },
    ],
    eliteFour: [
      { name:"Malva",   nameEs:"Malva",   type:"Fuego",    team:[{name:"pyroar",nameEs:"Pyroar",level:63,types:["Fuego","Normal"]},{name:"torkoal",nameEs:"Torkoal",level:63,types:["Fuego"]},{name:"chandelure",nameEs:"Chandelure",level:63,types:["Fantasma","Fuego"]},{name:"talonflame",nameEs:"Talonflame",level:65,types:["Fuego","Volador"]}] },
      { name:"Siebold", nameEs:"Siebold", type:"Agua",     team:[{name:"clawitzer",nameEs:"Clawitzer",level:63,types:["Agua"]},{name:"gyarados",nameEs:"Gyarados",level:63,types:["Agua","Volador"]},{name:"barbaracle",nameEs:"Barbaracle",level:63,types:["Roca","Agua"]},{name:"starmie",nameEs:"Starmie",level:65,types:["Agua","Psíquico"]}] },
      { name:"Wikstrom",nameEs:"Wikstrom",type:"Acero",    team:[{name:"klefki",nameEs:"Klefki",level:63,types:["Acero","Hada"]},{name:"probopass",nameEs:"Probopass",level:63,types:["Roca","Acero"]},{name:"scizor",nameEs:"Scizor",level:63,types:["Bicho","Acero"]},{name:"aegislash",nameEs:"Aegislash",level:65,types:["Acero","Fantasma"]}] },
      { name:"Drasna",  nameEs:"Drasna",  type:"Dragón",   team:[{name:"dragalge",nameEs:"Dragalge",level:63,types:["Veneno","Dragón"]},{name:"druddigon",nameEs:"Druddigon",level:63,types:["Dragón"]},{name:"altaria",nameEs:"Altaria",level:63,types:["Dragón","Volador"]},{name:"noivern",nameEs:"Noivern",level:65,types:["Volador","Dragón"]}] },
    ],
    champion: { name:"Diantha",nameEs:"Diantha",team:[{name:"hawlucha",nameEs:"Hawlucha",level:64,types:["Lucha","Volador"]},{name:"tyrantrum",nameEs:"Tyrantrum",level:65,types:["Roca","Dragón"]},{name:"aurorus",nameEs:"Aurorus",level:65,types:["Roca","Hielo"]},{name:"gourgeist",nameEs:"Gourgeist",level:65,types:["Fantasma","Planta"]},{name:"goodra",nameEs:"Goodra",level:66,types:["Dragón"]},{name:"gardevoir",nameEs:"Gardevoir",level:68,types:["Psíquico","Hada"]}] },
  },

  // ═══════════════════════════════════════════════
  // ALOLA — Sol / Luna
  // ═══════════════════════════════════════════════
  sm: {
    leaders: [
      { name:"Ilima (Trial)",  nameEs:"Ilima",    city:"Iki Town → Melemele",  type:"Normal",  badge:"Normalio Z",  team:[{name:"smeargle",nameEs:"Smeargle",level:11,types:["Normal"]},{name:"yungoos",nameEs:"Yungoos",level:11,types:["Normal"]}] },
      { name:"Lana (Trial)",   nameEs:"Lana",     city:"Brooklet Hill",        type:"Agua",    badge:"Aguario Z",   team:[{name:"wishiwashi",nameEs:"Wishiwashi",level:20,types:["Agua"]}] },
      { name:"Kiawe (Trial)",  nameEs:"Kiawe",    city:"Wela Volcano",         type:"Fuego",   badge:"Ignifugio Z", team:[{name:"marowak",nameEs:"Marowak",level:22,types:["Fuego","Fantasma"]}] },
      { name:"Mallow (Trial)", nameEs:"Mallow",   city:"Lush Jungle",          type:"Planta",  badge:"Herbario Z",  team:[{name:"lurantis",nameEs:"Lurantis",level:24,types:["Planta"]}] },
      { name:"Olivia (Kahuna)",nameEs:"Olivia",   city:"Akala Island",         type:"Roca",    badge:"Gran Prueba", team:[{name:"nosepass",nameEs:"Nosepass",level:26,types:["Roca"]},{name:"boldore",nameEs:"Boldore",level:26,types:["Roca"]},{name:"lycanroc",nameEs:"Lycanroc",level:27,types:["Roca"]}] },
      { name:"Sophocles (Trial)",nameEs:"Mimo",   city:"Hokulani Observatory", type:"Eléctrico",badge:"Electrio Z",  team:[{name:"togedemaru",nameEs:"Togedemaru",level:33,types:["Eléctrico","Acero"]},{name:"vikavolt",nameEs:"Vikavolt",level:34,types:["Bicho","Eléctrico"]}] },
      { name:"Hapu (Kahuna)",  nameEs:"Hapu",     city:"Poni Island",          type:"Tierra",  badge:"Gran Prueba", team:[{name:"golurk",nameEs:"Golurk",level:51,types:["Tierra","Fantasma"]},{name:"gastrodon",nameEs:"Gastrodon",level:51,types:["Agua","Tierra"]},{name:"flygon",nameEs:"Flygon",level:51,types:["Tierra","Dragón"]},{name:"mudsdale",nameEs:"Mudsdale",level:53,types:["Tierra"]}] },
    ],
    eliteFour: [
      { name:"Hala",    nameEs:"Hala",    type:"Lucha",    team:[{name:"hariyama",nameEs:"Hariyama",level:54,types:["Lucha"]},{name:"primeape",nameEs:"Primeape",level:54,types:["Lucha"]},{name:"crabominable",nameEs:"Crabominable",level:54,types:["Lucha","Hielo"]},{name:"poliwrath",nameEs:"Poliwrath",level:54,types:["Agua","Lucha"]},{name:"bewear",nameEs:"Bewear",level:55,types:["Normal","Lucha"]}] },
      { name:"Olivia",  nameEs:"Olivia",  type:"Roca",     team:[{name:"armaldo",nameEs:"Armaldo",level:54,types:["Roca","Bicho"]},{name:"cradily",nameEs:"Cradily",level:54,types:["Roca","Planta"]},{name:"relicanth",nameEs:"Relicanth",level:54,types:["Agua","Roca"]},{name:"carbink",nameEs:"Carbink",level:54,types:["Roca","Hada"]},{name:"golem",nameEs:"Golem",level:55,types:["Roca","Eléctrico"]}] },
      { name:"Acerola", nameEs:"Acerola", type:"Fantasma", team:[{name:"sableye",nameEs:"Sableye",level:54,types:["Siniestro","Fantasma"]},{name:"drifblim",nameEs:"Drifblim",level:54,types:["Fantasma","Volador"]},{name:"froslass",nameEs:"Froslass",level:54,types:["Hielo","Fantasma"]},{name:"dhelmise",nameEs:"Dhelmise",level:54,types:["Fantasma","Planta"]},{name:"palossand",nameEs:"Palossand",level:55,types:["Fantasma","Tierra"]}] },
      { name:"Kahili",  nameEs:"Kahili",  type:"Volador",  team:[{name:"crobat",nameEs:"Crobat",level:54,types:["Veneno","Volador"]},{name:"oricorio",nameEs:"Oricorio",level:54,types:["Fuego","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:54,types:["Acero","Volador"]},{name:"mandibuzz",nameEs:"Mandibuzz",level:54,types:["Siniestro","Volador"]},{name:"toucannon",nameEs:"Toucannon",level:55,types:["Normal","Volador"]}] },
    ],
    champion: { name:"Professor Kukui",nameEs:"Prof. Kukui",team:[{name:"lycanroc",nameEs:"Lycanroc",level:57,types:["Roca"]},{name:"ninetales",nameEs:"Ninetales",level:57,types:["Hielo","Hada"]},{name:"braviary",nameEs:"Braviary",level:57,types:["Normal","Volador"]},{name:"magnezone",nameEs:"Magnezone",level:57,types:["Eléctrico","Acero"]},{name:"snorlax",nameEs:"Snorlax",level:57,types:["Normal"]},{name:"incineroar",nameEs:"Incineroar",level:58,types:["Fuego","Siniestro"]}] },
  },

  // ═══════════════════════════════════════════════
  // ALOLA — Ultra Sol / Ultra Luna ★ NUZLOCKE POPULAR
  // ═══════════════════════════════════════════════
  usum: {
    leaders: [
      { name:"Ilima (Trial)",   nameEs:"Ilima",   city:"Melemele",           type:"Normal",   badge:"Normalio Z",  team:[{name:"smeargle",nameEs:"Smeargle",level:11,types:["Normal"]},{name:"yungoos",nameEs:"Yungoos",level:11,types:["Normal"]}] },
      { name:"Lana (Trial)",    nameEs:"Lana",    city:"Brooklet Hill",      type:"Agua",     badge:"Aguario Z",   team:[{name:"wishiwashi",nameEs:"Wishiwashi",level:20,types:["Agua"]}] },
      { name:"Kiawe (Trial)",   nameEs:"Kiawe",   city:"Wela Volcano",       type:"Fuego",    badge:"Ignifugio Z", team:[{name:"marowak",nameEs:"Marowak",level:22,types:["Fuego","Fantasma"]}] },
      { name:"Mallow (Trial)",  nameEs:"Mallow",  city:"Lush Jungle",        type:"Planta",   badge:"Herbario Z",  team:[{name:"lurantis",nameEs:"Lurantis",level:24,types:["Planta"]}] },
      { name:"Olivia (Kahuna)", nameEs:"Olivia",  city:"Akala Island",       type:"Roca",     badge:"Gran Prueba", team:[{name:"nosepass",nameEs:"Nosepass",level:26,types:["Roca"]},{name:"boldore",nameEs:"Boldore",level:26,types:["Roca"]},{name:"lycanroc",nameEs:"Lycanroc",level:27,types:["Roca"]}] },
      { name:"Sophocles (Trial)",nameEs:"Mimo",   city:"Hokulani Observatory",type:"Eléctrico",badge:"Electrio Z", team:[{name:"togedemaru",nameEs:"Togedemaru",level:33,types:["Eléctrico","Acero"]},{name:"vikavolt",nameEs:"Vikavolt",level:34,types:["Bicho","Eléctrico"]}] },
      { name:"Hapu (Kahuna)",   nameEs:"Hapu",    city:"Poni Island",        type:"Tierra",   badge:"Gran Prueba", team:[{name:"golurk",nameEs:"Golurk",level:51,types:["Tierra","Fantasma"]},{name:"gastrodon",nameEs:"Gastrodon",level:51,types:["Agua","Tierra"]},{name:"flygon",nameEs:"Flygon",level:51,types:["Tierra","Dragón"]},{name:"mudsdale",nameEs:"Mudsdale",level:53,types:["Tierra"]}] },
    ],
    eliteFour: [
      { name:"Hala",    nameEs:"Hala",    type:"Lucha",    team:[{name:"hariyama",nameEs:"Hariyama",level:55,types:["Lucha"]},{name:"primeape",nameEs:"Primeape",level:55,types:["Lucha"]},{name:"crabominable",nameEs:"Crabominable",level:55,types:["Lucha","Hielo"]},{name:"poliwrath",nameEs:"Poliwrath",level:55,types:["Agua","Lucha"]},{name:"bewear",nameEs:"Bewear",level:56,types:["Normal","Lucha"]}] },
      { name:"Olivia",  nameEs:"Olivia",  type:"Roca",     team:[{name:"armaldo",nameEs:"Armaldo",level:55,types:["Roca","Bicho"]},{name:"cradily",nameEs:"Cradily",level:55,types:["Roca","Planta"]},{name:"relicanth",nameEs:"Relicanth",level:55,types:["Agua","Roca"]},{name:"carbink",nameEs:"Carbink",level:55,types:["Roca","Hada"]},{name:"golem",nameEs:"Golem",level:56,types:["Roca","Eléctrico"]}] },
      { name:"Acerola", nameEs:"Acerola", type:"Fantasma", team:[{name:"sableye",nameEs:"Sableye",level:55,types:["Siniestro","Fantasma"]},{name:"drifblim",nameEs:"Drifblim",level:55,types:["Fantasma","Volador"]},{name:"froslass",nameEs:"Froslass",level:55,types:["Hielo","Fantasma"]},{name:"dhelmise",nameEs:"Dhelmise",level:55,types:["Fantasma","Planta"]},{name:"palossand",nameEs:"Palossand",level:56,types:["Fantasma","Tierra"]}] },
      { name:"Kahili",  nameEs:"Kahili",  type:"Volador",  team:[{name:"crobat",nameEs:"Crobat",level:55,types:["Veneno","Volador"]},{name:"oricorio",nameEs:"Oricorio",level:55,types:["Fuego","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:55,types:["Acero","Volador"]},{name:"mandibuzz",nameEs:"Mandibuzz",level:55,types:["Siniestro","Volador"]},{name:"toucannon",nameEs:"Toucannon",level:56,types:["Normal","Volador"]}] },
    ],
    champion: { name:"Professor Kukui",nameEs:"Prof. Kukui",team:[{name:"lycanroc",nameEs:"Lycanroc",level:58,types:["Roca"]},{name:"ninetales",nameEs:"Ninetales",level:58,types:["Hielo","Hada"]},{name:"braviary",nameEs:"Braviary",level:58,types:["Normal","Volador"]},{name:"magnezone",nameEs:"Magnezone",level:58,types:["Eléctrico","Acero"]},{name:"snorlax",nameEs:"Snorlax",level:58,types:["Normal"]},{name:"incineroar",nameEs:"Incineroar",level:60,types:["Fuego","Siniestro"]}] },
  },

  // ═══════════════════════════════════════════════
  // GALAR — Espada / Escudo
  // ═══════════════════════════════════════════════
  swsh: {
    leaders: [
      { name:"Milo",     nameEs:"Avena",   city:"Turffield",    type:"Planta",   badge:"Planta",    team:[{name:"gossifleur",nameEs:"Gossifleur",level:19,types:["Planta"]},{name:"eldegoss",nameEs:"Eldegoss",level:20,types:["Planta"]}] },
      { name:"Nessa",    nameEs:"Nessa",   city:"Hulbury",      type:"Agua",     badge:"Agua",      team:[{name:"goldeen",nameEs:"Goldeen",level:22,types:["Agua"]},{name:"arrokuda",nameEs:"Arrokuda",level:23,types:["Agua"]},{name:"drednaw",nameEs:"Drednaw",level:24,types:["Agua","Roca"]}] },
      { name:"Kabu",     nameEs:"Naboru",  city:"Motostoke",    type:"Fuego",    badge:"Fuego",     team:[{name:"ninetales",nameEs:"Ninetales",level:25,types:["Fuego"]},{name:"arcanine",nameEs:"Arcanine",level:25,types:["Fuego"]},{name:"centiskorch",nameEs:"Centiskorch",level:27,types:["Fuego","Bicho"]}] },
      { name:"Bea",      nameEs:"Judith",  city:"Crestalia",    type:"Lucha",    badge:"Lucha",     team:[{name:"hitmontop",nameEs:"Hitmontop",level:34,types:["Lucha"]},{name:"pangoro",nameEs:"Pangoro",level:34,types:["Lucha","Siniestro"]},{name:"sirfetchd",nameEs:"Sirfetch'd",level:35,types:["Lucha"]},{name:"machamp",nameEs:"Machamp",level:36,types:["Lucha"]}] },
      { name:"Allister", nameEs:"Ayesha",  city:"Crestalia",    type:"Fantasma", badge:"Fantasma",  team:[{name:"yamask",nameEs:"Yamask",level:34,types:["Fantasma"]},{name:"mimikyu",nameEs:"Mimikyu",level:34,types:["Fantasma","Hada"]},{name:"cursola",nameEs:"Cursola",level:35,types:["Fantasma"]},{name:"gengar",nameEs:"Gengar",level:36,types:["Fantasma","Veneno"]}] },
      { name:"Opal",     nameEs:"Opal",    city:"Ballolea",     type:"Hada",     badge:"Hada",      team:[{name:"weezing",nameEs:"Weezing",level:36,types:["Veneno","Hada"]},{name:"mawile",nameEs:"Mawile",level:36,types:["Acero","Hada"]},{name:"togekiss",nameEs:"Togekiss",level:38,types:["Hada","Volador"]},{name:"alcremie",nameEs:"Alcremie",level:38,types:["Hada"]}] },
      { name:"Gordie",   nameEs:"Landis",  city:"Circhester",   type:"Roca",     badge:"Roca",      team:[{name:"barbaracle",nameEs:"Barbaracle",level:40,types:["Roca","Agua"]},{name:"shuckle",nameEs:"Shuckle",level:40,types:["Bicho","Roca"]},{name:"stonjourner",nameEs:"Stonjourner",level:41,types:["Roca"]},{name:"coalossal",nameEs:"Coalossal",level:42,types:["Roca","Fuego"]}] },
      { name:"Melony",   nameEs:"Melony",  city:"Circhester",   type:"Hielo",    badge:"Hielo",     team:[{name:"frosmoth",nameEs:"Frosmoth",level:40,types:["Hielo","Bicho"]},{name:"eiscue",nameEs:"Eiscue",level:40,types:["Hielo"]},{name:"darmanitan",nameEs:"Darmanitan",level:41,types:["Hielo"]},{name:"lapras",nameEs:"Lapras",level:42,types:["Agua","Hielo"]}] },
      { name:"Piers",    nameEs:"Nero",    city:"Spikemuth",    type:"Siniestro",badge:"Siniestro", team:[{name:"scrafty",nameEs:"Scrafty",level:44,types:["Siniestro","Lucha"]},{name:"malamar",nameEs:"Malamar",level:45,types:["Siniestro","Psíquico"]},{name:"skuntank",nameEs:"Skuntank",level:45,types:["Veneno","Siniestro"]},{name:"obstagoon",nameEs:"Obstagoon",level:46,types:["Siniestro","Normal"]}] },
      { name:"Raihan",   nameEs:"Raihan",  city:"Hammerlocke",  type:"Dragón",   badge:"Dragón",    team:[{name:"duraludon",nameEs:"Duraludon",level:46,types:["Acero","Dragón"]},{name:"flygon",nameEs:"Flygon",level:47,types:["Tierra","Dragón"]},{name:"sandaconda",nameEs:"Sandaconda",level:46,types:["Tierra"]},{name:"turtonator",nameEs:"Turtonator",level:48,types:["Fuego","Dragón"]}] },
    ],
    eliteFour: [],
    champion: { name:"Leon",nameEs:"León",team:[{name:"aegislash",nameEs:"Aegislash",level:62,types:["Acero","Fantasma"]},{name:"haxorus",nameEs:"Haxorus",level:63,types:["Dragón"]},{name:"dragapult",nameEs:"Dragapult",level:62,types:["Dragón","Fantasma"]},{name:"mr-rime",nameEs:"Mr. Rime",level:62,types:["Hielo","Psíquico"]},{name:"seismitoad",nameEs:"Seismitoad",level:62,types:["Agua","Tierra"]},{name:"charizard",nameEs:"Charizard",level:65,types:["Fuego","Volador"]}] },
  },

  // ═══════════════════════════════════════════════
  // PALDEA — Escarlata / Púrpura
  // ═══════════════════════════════════════════════
  sv: {
    leaders: [
      { name:"Katy",     nameEs:"Katy",    city:"Cortondo",    type:"Bicho",    badge:"Insecto",  team:[{name:"nymble",nameEs:"Nymble",level:14,types:["Bicho"]},{name:"tarountula",nameEs:"Tarountula",level:14,types:["Bicho"]},{name:"teddiursa",nameEs:"Teddiursa",level:15,types:["Normal"]}] },
      { name:"Brassius",nameEs:"Brassius", city:"Artazon",     type:"Planta",   badge:"Planta",   team:[{name:"petilil",nameEs:"Petilil",level:16,types:["Planta"]},{name:"smoliv",nameEs:"Smoliv",level:16,types:["Planta","Normal"]},{name:"sudowoodo",nameEs:"Sudowoodo",level:17,types:["Roca"]}] },
      { name:"Iono",     nameEs:"Iono",    city:"Levincia",    type:"Eléctrico",badge:"Eléctrico",team:[{name:"wattrel",nameEs:"Wattrel",level:23,types:["Eléctrico","Volador"]},{name:"bellibolt",nameEs:"Bellibolt",level:23,types:["Eléctrico"]},{name:"luxio",nameEs:"Luxio",level:23,types:["Eléctrico"]},{name:"mismagius",nameEs:"Mismagius",level:24,types:["Fantasma"]}] },
      { name:"Kofu",     nameEs:"Kofu",    city:"Cascarrafa",  type:"Agua",     badge:"Agua",     team:[{name:"veluza",nameEs:"Veluza",level:29,types:["Agua","Psíquico"]},{name:"wugtrio",nameEs:"Wugtrio",level:29,types:["Agua"]},{name:"crabominable",nameEs:"Crabominable",level:30,types:["Lucha","Hielo"]}] },
      { name:"Larry",    nameEs:"Larry",   city:"Medali",      type:"Normal",   badge:"Normal",   team:[{name:"komala",nameEs:"Komala",level:35,types:["Normal"]},{name:"dudunsparce",nameEs:"Dudunsparce",level:35,types:["Normal"]},{name:"staraptor",nameEs:"Staraptor",level:36,types:["Normal","Volador"]}] },
      { name:"Ryme",     nameEs:"Ryme",    city:"Montenevera", type:"Fantasma", badge:"Fantasma", team:[{name:"mimikyu",nameEs:"Mimikyu",level:41,types:["Fantasma","Hada"]},{name:"houndstone",nameEs:"Houndstone",level:41,types:["Fantasma"]},{name:"banette",nameEs:"Banette",level:41,types:["Fantasma"]},{name:"toxtricity",nameEs:"Toxtricity",level:42,types:["Eléctrico","Veneno"]}] },
      { name:"Tulip",    nameEs:"Tulip",   city:"Alfornada",   type:"Psíquico", badge:"Psíquico", team:[{name:"farigiraf",nameEs:"Farigiraf",level:44,types:["Normal","Psíquico"]},{name:"espathra",nameEs:"Espathra",level:44,types:["Psíquico"]},{name:"gardevoir",nameEs:"Gardevoir",level:44,types:["Psíquico","Hada"]},{name:"florges",nameEs:"Florges",level:45,types:["Hada"]}] },
      { name:"Grusha",   nameEs:"Grusha",  city:"Glaseado",    type:"Hielo",    badge:"Hielo",    team:[{name:"frosmoth",nameEs:"Frosmoth",level:47,types:["Hielo","Bicho"]},{name:"beartic",nameEs:"Beartic",level:47,types:["Hielo"]},{name:"cetitan",nameEs:"Cetitan",level:47,types:["Hielo"]},{name:"altaria",nameEs:"Altaria",level:48,types:["Dragón","Volador"]}] },
    ],
    eliteFour: [
      { name:"Rika",   nameEs:"Rika",   type:"Tierra",    team:[{name:"clodsire",nameEs:"Clodsire",level:57,types:["Veneno","Tierra"]},{name:"whiscash",nameEs:"Whiscash",level:57,types:["Agua","Tierra"]},{name:"donphan",nameEs:"Donphan",level:57,types:["Tierra"]},{name:"dugtrio",nameEs:"Dugtrio",level:57,types:["Tierra"]},{name:"camerupt",nameEs:"Camerupt",level:58,types:["Fuego","Tierra"]}] },
      { name:"Poppy",  nameEs:"Poppy",  type:"Acero",     team:[{name:"copperajah",nameEs:"Copperajah",level:58,types:["Acero"]},{name:"magnezone",nameEs:"Magnezone",level:58,types:["Eléctrico","Acero"]},{name:"corviknight",nameEs:"Corviknight",level:58,types:["Volador","Acero"]},{name:"bronzong",nameEs:"Bronzong",level:58,types:["Acero","Psíquico"]},{name:"tinkaton",nameEs:"Tinkaton",level:59,types:["Hada","Acero"]}] },
      { name:"Larry",  nameEs:"Larry",  type:"Volador",   team:[{name:"tropius",nameEs:"Tropius",level:59,types:["Planta","Volador"]},{name:"oricorio",nameEs:"Oricorio",level:59,types:["Fuego","Volador"]},{name:"altaria",nameEs:"Altaria",level:59,types:["Dragón","Volador"]},{name:"staraptor",nameEs:"Staraptor",level:59,types:["Normal","Volador"]},{name:"flamigo",nameEs:"Flamigo",level:60,types:["Volador","Lucha"]}] },
      { name:"Hassel", nameEs:"Hassel", type:"Dragón",    team:[{name:"noivern",nameEs:"Noivern",level:60,types:["Volador","Dragón"]},{name:"flapple",nameEs:"Flapple",level:60,types:["Planta","Dragón"]},{name:"dragalge",nameEs:"Dragalge",level:60,types:["Veneno","Dragón"]},{name:"haxorus",nameEs:"Haxorus",level:60,types:["Dragón"]},{name:"baxcalibur",nameEs:"Baxcalibur",level:61,types:["Dragón","Hielo"]}] },
    ],
    champion: { name:"Geeta",nameEs:"Geeta",team:[{name:"espathra",nameEs:"Espathra",level:61,types:["Psíquico"]},{name:"avalugg",nameEs:"Avalugg",level:61,types:["Hielo"]},{name:"gogoat",nameEs:"Gogoat",level:61,types:["Planta"]},{name:"veluza",nameEs:"Veluza",level:61,types:["Agua","Psíquico"]},{name:"kingambit",nameEs:"Kingambit",level:61,types:["Siniestro","Acero"]},{name:"glimmora",nameEs:"Glimmora",level:62,types:["Roca","Veneno"]}] },
  },

};

GAME_DATA.yellow = {
  leaders: [
    { name:"Brock",    nameEs:"Brock",    city:"Plateada",   type:"Roca",      badge:"Roca",       team:[{name:"geodude",nameEs:"Geodude",level:10,types:["Roca","Tierra"]},{name:"onix",nameEs:"Onix",level:12,types:["Roca","Tierra"]}] },
    { name:"Misty",    nameEs:"Misty",    city:"Celeste",    type:"Agua",      badge:"Cascada",    team:[{name:"staryu",nameEs:"Staryu",level:18,types:["Agua"]},{name:"starmie",nameEs:"Starmie",level:21,types:["Agua","Psíquico"]}] },
    { name:"Lt. Surge",nameEs:"Gerardo",  city:"Carmín",     type:"Eléctrico", badge:"Trueno",     team:[{name:"raichu",nameEs:"Raichu",level:28,types:["Eléctrico"]}] },
    { name:"Erika",    nameEs:"Erika",    city:"Azulona",    type:"Planta",    badge:"Arco Iris",  team:[{name:"tangela",nameEs:"Tangela",level:30,types:["Planta"]},{name:"weepinbell",nameEs:"Weepinbell",level:32,types:["Planta","Veneno"]},{name:"gloom",nameEs:"Gloom",level:32,types:["Planta","Veneno"]}] },
    { name:"Koga",     nameEs:"Koga",     city:"Fucsia",     type:"Veneno",    badge:"Alma",       team:[{name:"venonat",nameEs:"Venonat",level:44,types:["Bicho","Veneno"]},{name:"venonat",nameEs:"Venonat",level:46,types:["Bicho","Veneno"]},{name:"venonat",nameEs:"Venonat",level:48,types:["Bicho","Veneno"]},{name:"venomoth",nameEs:"Venomoth",level:50,types:["Bicho","Veneno"]}] },
    { name:"Sabrina",  nameEs:"Sabrina",  city:"Azafrán",    type:"Psíquico",  badge:"Pantano",    team:[{name:"abra",nameEs:"Abra",level:50,types:["Psíquico"]},{name:"kadabra",nameEs:"Kadabra",level:50,types:["Psíquico"]},{name:"alakazam",nameEs:"Alakazam",level:50,types:["Psíquico"]}] },
    { name:"Blaine",   nameEs:"Blaine",   city:"Isla Canela",type:"Fuego",     badge:"Volcán",     team:[{name:"ninetales",nameEs:"Ninetales",level:48,types:["Fuego"]},{name:"rapidash",nameEs:"Rapidash",level:50,types:["Fuego"]},{name:"arcanine",nameEs:"Arcanine",level:54,types:["Fuego"]}] },
    { name:"Giovanni", nameEs:"Giovanni", city:"Verde",      type:"Tierra",    badge:"Tierra",     team:[{name:"dugtrio",nameEs:"Dugtrio",level:50,types:["Tierra"]},{name:"persian",nameEs:"Persian",level:53,types:["Normal"]},{name:"nidoqueen",nameEs:"Nidoqueen",level:53,types:["Veneno","Tierra"]},{name:"nidoking",nameEs:"Nidoking",level:55,types:["Veneno","Tierra"]},{name:"rhydon",nameEs:"Rhydon",level:55,types:["Tierra","Roca"]}] },
  ],
  eliteFour: GAME_DATA.rb.eliteFour,
  champion: GAME_DATA.rb.champion,
};

GAME_DATA.crystal = {
  leaders: GAME_DATA.gs.leaders,
  eliteFour: GAME_DATA.gs.eliteFour,
  champion: GAME_DATA.gs.champion,
};

GAME_DATA.oras = {
  leaders: [
    { name:"Roxanne",  nameEs:"Petra",    city:"Férrica",   type:"Roca",      badge:"Piedra",      team:[{name:"geodude",nameEs:"Geodude",level:12,types:["Roca","Tierra"]},{name:"nosepass",nameEs:"Nosepass",level:14,types:["Roca"]}] },
    { name:"Brawly",   nameEs:"Marcial",  city:"Escualo",   type:"Lucha",     badge:"Nudillo",     team:[{name:"machop",nameEs:"Machop",level:14,types:["Lucha"]},{name:"makuhita",nameEs:"Makuhita",level:16,types:["Lucha"]}] },
    { name:"Wattson",  nameEs:"Voltonio", city:"Malvalona", type:"Eléctrico", badge:"Dínamo",      team:[{name:"magnemite",nameEs:"Magnemite",level:19,types:["Eléctrico","Acero"]},{name:"voltorb",nameEs:"Voltorb",level:19,types:["Eléctrico"]},{name:"magneton",nameEs:"Magneton",level:21,types:["Eléctrico","Acero"]}] },
    { name:"Flannery", nameEs:"Candela",  city:"Lavacalda", type:"Fuego",     badge:"Calor",       team:[{name:"slugma",nameEs:"Slugma",level:26,types:["Fuego"]},{name:"numel",nameEs:"Numel",level:26,types:["Fuego","Tierra"]},{name:"torkoal",nameEs:"Torkoal",level:28,types:["Fuego"]}] },
    { name:"Norman",   nameEs:"Norman",   city:"Petalia",   type:"Normal",    badge:"Equilibrio",  team:[{name:"slaking",nameEs:"Slaking",level:28,types:["Normal"]},{name:"vigoroth",nameEs:"Vigoroth",level:28,types:["Normal"]},{name:"slaking",nameEs:"Slaking",level:30,types:["Normal"]}] },
    { name:"Winona",   nameEs:"Alana",    city:"Arborada",  type:"Volador",   badge:"Pluma",       team:[{name:"swellow",nameEs:"Swellow",level:33,types:["Normal","Volador"]},{name:"pelipper",nameEs:"Pelipper",level:33,types:["Agua","Volador"]},{name:"skarmory",nameEs:"Skarmory",level:33,types:["Acero","Volador"]},{name:"altaria",nameEs:"Altaria",level:35,types:["Dragón","Volador"]}] },
    { name:"Tate & Liza",nameEs:"Vito & Leti",city:"Algaria",type:"Psíquico",  badge:"Mente",       team:[{name:"lunatone",nameEs:"Lunatone",level:45,types:["Roca","Psíquico"]},{name:"solrock",nameEs:"Solrock",level:45,types:["Roca","Psíquico"]}] },
    { name:"Wallace",  nameEs:"Plubio",   city:"Arrecípolis",type:"Agua",     badge:"Lluvia",      team:[{name:"luvdisc",nameEs:"Luvdisc",level:44,types:["Agua"]},{name:"sealeo",nameEs:"Sealeo",level:44,types:["Hielo","Agua"]},{name:"seaking",nameEs:"Seaking",level:44,types:["Agua"]},{name:"whiscash",nameEs:"Whiscash",level:44,types:["Agua","Tierra"]},{name:"milotic",nameEs:"Milotic",level:46,types:["Agua"]}] },
  ],
  eliteFour: [
    { name:"Sidney", nameEs:"Sixto", type:"Siniestro", team:[{name:"mightyena",nameEs:"Mightyena",level:50,types:["Siniestro"]},{name:"shiftry",nameEs:"Shiftry",level:50,types:["Planta","Siniestro"]},{name:"cacturne",nameEs:"Cacturne",level:50,types:["Planta","Siniestro"]},{name:"sharpedo",nameEs:"Sharpedo",level:50,types:["Agua","Siniestro"]},{name:"absol",nameEs:"Absol",level:52,types:["Siniestro"]}] },
    { name:"Phoebe", nameEs:"Fátima", type:"Fantasma", team:[{name:"dusclops",nameEs:"Dusclops",level:51,types:["Fantasma"]},{name:"banette",nameEs:"Banette",level:51,types:["Fantasma"]},{name:"sableye",nameEs:"Sableye",level:51,types:["Siniestro","Fantasma"]},{name:"banette",nameEs:"Banette",level:51,types:["Fantasma"]},{name:"dusknoir",nameEs:"Dusknoir",level:53,types:["Fantasma"]}] },
    { name:"Glacia", nameEs:"Glacia", type:"Hielo", team:[{name:"glalie",nameEs:"Glalie",level:52,types:["Hielo"]},{name:"froslass",nameEs:"Froslass",level:52,types:["Hielo","Fantasma"]},{name:"glalie",nameEs:"Glalie",level:52,types:["Hielo"]},{name:"froslass",nameEs:"Froslass",level:52,types:["Hielo","Fantasma"]},{name:"walrein",nameEs:"Walrein",level:54,types:["Hielo","Agua"]}] },
    { name:"Drake", nameEs:"Drake", type:"Dragón", team:[{name:"altaria",nameEs:"Altaria",level:53,types:["Dragón","Volador"]},{name:"kingdra",nameEs:"Kingdra",level:53,types:["Agua","Dragón"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"flygon",nameEs:"Flygon",level:53,types:["Tierra","Dragón"]},{name:"salamence",nameEs:"Salamence",level:55,types:["Dragón","Volador"]}] },
  ],
  champion: { name:"Steven",nameEs:"Máximo",team:[{name:"skarmory",nameEs:"Skarmory",level:57,types:["Acero","Volador"]},{name:"claydol",nameEs:"Claydol",level:57,types:["Tierra","Psíquico"]},{name:"aggron",nameEs:"Aggron",level:57,types:["Acero","Roca"]},{name:"cradily",nameEs:"Cradily",level:57,types:["Roca","Planta"]},{name:"armaldo",nameEs:"Armaldo",level:57,types:["Roca","Bicho"]},{name:"metagross",nameEs:"Metagross",level:59,types:["Acero","Psíquico"]}] },
};

export default GAME_DATA;
