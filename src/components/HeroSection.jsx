import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: -20, duration: 0.6 })
        .from(".hero-title-line", {
          opacity: 0, y: 60, skewY: 2, stagger: 0.1, duration: 0.8,
        }, "-=0.2")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".hero-stat", { opacity: 0, y: 20, stagger: 0.06, duration: 0.4 }, "-=0.3")
        .from(".hero-divider", {
          scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power2.inOut"
        }, "-=0.4");

      // Pulso continuo en el dot rojo
      gsap.to(".dot-red", {
        scale: 1.5, opacity: 0.5,
        duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, { scope: heroRef });

  return (
    <header ref={heroRef} className="pt-12 pb-8 lg:pt-20 lg:pb-12">
      {/* Badge top */}
      <div className="hero-badge flex items-center gap-2 mb-6">
        <div className="flex gap-1.5 items-center">
          <span className="dot-red w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-400 opacity-70" />
          <span className="w-2 h-2 rounded-full bg-green-500 opacity-70" />
        </div>
        <span className="font-mono text-[11px] text-white/35 tracking-[0.3em] uppercase">
          Sistema Nuzlocke · Gen. VI+
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-[10px] text-green-400/60">ONLINE</span>
        </div>
      </div>

      {/* Título */}
      <div className="overflow-hidden mb-1">
        <h1 className="hero-title-line text-6xl sm:text-8xl lg:text-[9rem] font-black tracking-tighter leading-none">
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(125deg, #F8D030 0%, #F08030 45%, #FF4466 100%)' }}>
            POKELOCKE
          </span>
        </h1>
      </div>
      <div className="overflow-hidden mb-7">
        <p className="hero-title-line text-2xl sm:text-4xl lg:text-5xl font-black tracking-widest text-white/60 leading-none">
          NUZLOCKE TOOLS
        </p>
      </div>

      <p className="hero-subtitle text-white/35 text-sm sm:text-base max-w-md leading-relaxed mb-8 font-mono">
        Calcula tipos, revisa líderes de gimnasio y encuentra Pokémon para entrenar EVs
        por juego o generación.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 sm:gap-10 mb-8">
        {[
          { v: '18', l: 'Tipos' },
          { v: '9', l: 'Gens' },
          { v: 'EV', l: 'Training' },
          { v: 'N', l: 'Locke' },
        ].map(({ v, l }) => (
          <div key={l} className="hero-stat">
            <div className="text-2xl sm:text-3xl font-black text-white font-mono"
              style={{ textShadow: '0 0 20px rgba(248,208,48,0.4)' }}>{v}</div>
            <div className="text-[10px] text-white/25 tracking-widest uppercase mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      <div className="hero-divider h-px bg-gradient-to-r from-yellow-500/50 via-orange-500/20 to-transparent" />
    </header>
  );
}
