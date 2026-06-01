# 🎮 Pokédex Type Analyzer

Una SPA de análisis de tipos Pokémon construida con **React 18 + Tailwind CSS + GSAP 3**.

![Pokédex Type Analyzer](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss)

## ✨ Características

- **18 tipos Pokémon** con datos de efectividad completos (Gen VI+)
- **Análisis ofensivo y defensivo** instantáneo sin llamadas a API externa
- **Animaciones GSAP** con `useGSAP` (cleanup automático, sin memory leaks)
- **Dark mode** estilo Pokédex futurista con glassmorphism
- **Totalmente responsive** — mobile, tablet y desktop
- **Sin dependencias externas de datos** — todo el cálculo es local

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## 📦 Build para producción

```bash
npm run build
npm run preview
```

## 🗂️ Estructura del proyecto

```
src/
├── components/
│   ├── HeroSection.jsx    # Sección hero con animación de entrada GSAP
│   ├── TypeGrid.jsx       # Grid interactivo de los 18 tipos
│   ├── TypeDetail.jsx     # Panel de análisis de matchups con stagger
│   └── TypeBadge.jsx      # Badge reutilizable de tipo Pokémon
├── data/
│   └── typeData.js        # Matriz de efectividades + colores oficiales
├── App.jsx                # Componente raíz
├── main.jsx               # Entry point
└── index.css              # Estilos globales + Tailwind
```

## 🧠 Arquitectura de datos

La efectividad de tipos se calcula localmente usando una tabla de ataque (`ATTACK_CHART`) que mapea cada tipo atacante con sus multiplicadores defensivos. Las funciones `getOffensiveMatchups` y `getDefensiveMatchups` calculan en tiempo real:

- **Ofensivo**: Súper eficaz (×2), Poco eficaz (×0.5), Inmunidad (×0)  
- **Defensivo**: Debilidades (×2), Resistencias (×0.5), Inmunidades (×0)

## ⚡ Animaciones GSAP

Se usa `useGSAP` del paquete `@gsap/react` para:
- ✅ Cleanup automático al desmontar componentes
- ✅ Re-ejecución controlada con el array `dependencies`
- ✅ Scope de contexto para evitar conflictos entre instancias

## 📄 Licencia

MIT — Pokémon y todos los tipos son propiedad de Nintendo / Game Freak.
