import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TYPE_COLORS } from "../data/typeData";

// Partículas flotantes de fondo — animadas continuamente con GSAP
export default function ParticleField({ activeTypes }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Crear partículas
    const count = Math.min(60, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      drift: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      colorIndex: i % Math.max(activeTypes.length, 1),
    }));

    const getColor = (particle) => {
      if (activeTypes.length > 0) {
        const t = activeTypes[particle.colorIndex % activeTypes.length];
        return TYPE_COLORS[t]?.bg || '#6890F0';
      }
      return '#6890F0';
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      particlesRef.current.forEach((p, i) => {
        // Movimiento
        p.y -= p.speed;
        p.x += p.drift + Math.sin(frame * 0.01 + i) * 0.2;
        p.opacity = 0.1 + Math.abs(Math.sin(frame * 0.02 + i * 0.5)) * 0.4;

        // Wrap
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        const color = getColor(p);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [activeTypes]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
