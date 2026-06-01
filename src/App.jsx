import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TYPE_COLORS } from "./data/typeData";
import TypeGrid from "./components/TypeGrid";
import TypeDetail from "./components/TypeDetail";
import HeroSection from "./components/HeroSection";
import ParticleField from "./components/ParticleField";
import GymLeaders from "./components/GymLeaders";
import EvTrainingFinder from "./components/EvTrainingFinder";
import { prewarmPokemonEvCache } from "./services/pokeApi";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Tabs de navegación principal
const TABS = [
  { id: "types",    label: "Tipos",     icon: "⚡" },
  { id: "gyms",     label: "Gimnasios", icon: "🏟" },
  { id: "evs",      label: "EVs",       icon: "EV" },
];

export default function App() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [activeTab, setActiveTab] = useState("types");

  useEffect(() => {
    const startPrewarm = () => {
      prewarmPokemonEvCache(9).catch(() => {
        // If PokeAPI is unavailable, the EV tab will retry when opened.
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(startPrewarm, { timeout: 3500 });
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timerId = window.setTimeout(startPrewarm, 1500);
    return () => window.clearTimeout(timerId);
  }, []);

  const handleTypeSelect = (type) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) return prev.filter(t => t !== type);
      if (prev.length >= 2) return [prev[0], type];
      return [...prev, type];
    });
  };

  const clearSelection = () => setSelectedTypes([]);

  const type1 = selectedTypes[0] || null;
  const type2 = selectedTypes[1] || null;

  const bgGradient = type1 && activeTab === "types"
    ? `radial-gradient(ellipse at 15% 40%, ${TYPE_COLORS[type1]?.bg}18 0%, transparent 55%),
       radial-gradient(ellipse at 85% 60%, ${type2 ? TYPE_COLORS[type2]?.bg + "14" : TYPE_COLORS[type1]?.bg + "08"} 0%, transparent 50%)`
    : "radial-gradient(ellipse at 20% 50%, rgba(16,32,80,0.45) 0%, transparent 60%)";

  return (
    <div className="min-h-screen bg-[#060d1a] text-white overflow-x-hidden relative">
      <ParticleField activeTypes={activeTab === "types" ? selectedTypes : []} />

      {/* Gradiente reactivo */}
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-1000 z-[1]"
        style={{ background: bgGradient }}
      />

      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[2] opacity-[0.022]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,1) 3px, rgba(255,255,255,1) 4px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        {/* ── Navegación de tabs ── */}
        <nav className="flex gap-2 mb-8 border-b border-white/8 pb-0">
          {TABS.map(tab => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 px-5 py-3 text-sm font-black tracking-wide border-b-2 transition-all duration-200 -mb-px"
                style={{
                  borderBottomColor: isActive ? "#F8D030" : "transparent",
                  color: isActive ? "#F8D030" : "rgba(255,255,255,0.35)",
                  backgroundColor: "transparent",
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* ── Tab: Tipos ── */}
        {activeTab === "types" && (
          <>
            <section className="pb-6">
              <TypeGrid
                selectedTypes={selectedTypes}
                onTypeSelect={handleTypeSelect}
                onClear={clearSelection}
              />
            </section>

            {selectedTypes.length > 0 && (
              <section className="pb-20">
                <TypeDetail type1={type1} type2={type2} />
              </section>
            )}
          </>
        )}

        {/* ── Tab: Gimnasios ── */}
        {activeTab === "gyms" && <GymLeaders />}

        {/* ── Tab: EV Training ── */}
        {activeTab === "evs" && <EvTrainingFinder />}
      </div>

      <footer className="relative z-10 border-t border-white/5 mt-8 py-6 text-center text-white/15 text-xs tracking-widest font-mono">
        POKELOCKE · NUZLOCKE TOOLS · POKEMON © NINTENDO / GAME FREAK
      </footer>
    </div>
  );
}
