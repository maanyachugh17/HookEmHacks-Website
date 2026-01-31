import { useEffect, useState } from "react";
import citySkyline from "@/assets/city-skyline.jpg";

export function ParallaxCity() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate fade based on scroll - fade out the city as user scrolls
  const fadeOpacity = Math.max(0, 1 - scrollY / 900);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main city skyline background - displayed prominently */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${citySkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${50 + scrollY * 0.03}%`,
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.2}px) scale(${1 + scrollY * 0.0001})`,
          opacity: fadeOpacity,
        }}
      />

      {/* Subtle animated clouds/atmosphere */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: fadeOpacity * 0.4 }}
      >
        <div 
          className="absolute w-96 h-48 rounded-full bg-white/20 blur-3xl"
          style={{
            top: '5%',
            left: '5%',
            transform: `translateX(${scrollY * 0.1}px) translateY(${Math.sin(scrollY * 0.005) * 10}px)`,
          }}
        />
        <div 
          className="absolute w-80 h-40 rounded-full bg-white/15 blur-3xl"
          style={{
            top: '8%',
            right: '10%',
            transform: `translateX(${-scrollY * 0.08}px) translateY(${Math.sin(scrollY * 0.005 + 1) * 8}px)`,
          }}
        />
        <div 
          className="absolute w-64 h-32 rounded-full bg-white/10 blur-3xl"
          style={{
            top: '15%',
            left: '35%',
            transform: `translateX(${scrollY * 0.05}px) translateY(${Math.sin(scrollY * 0.005 + 2) * 6}px)`,
          }}
        />
      </div>

      {/* Bottom gradient fade to content background */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none"
        style={{
          background: `linear-gradient(to top, var(--background) 0%, var(--background) 30%, transparent 100%)`,
        }}
      />

      {/* Very subtle vignette for depth - not too dark */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center 30%, transparent 20%, var(--background) 150%)`,
          opacity: 0.3,
        }}
      />
    </div>
  );
}
