import { useEffect, useState } from "react";
import citySkyline from "@/assets/city-skyline.jpg";
import cityMidground from "@/assets/city-midground.jpg";
import cityForeground from "@/assets/city-foreground.jpg";

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
  const fadeOpacity = Math.max(0, 1 - scrollY / 800);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient sky base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            var(--sky-top) 0%,
            var(--sky-mid) 35%,
            var(--sky-bottom) 65%,
            var(--background) 100%
          )`,
        }}
      />

      {/* Far background - skyline (slowest) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${citySkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${50 + scrollY * 0.02}%`,
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: fadeOpacity * 0.95,
        }}
      />

      {/* Mid layer - buildings (medium speed) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${cityMidground})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${60 + scrollY * 0.03}%`,
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.25}px)`,
          opacity: fadeOpacity * 0.85,
          top: '15%',
        }}
      />

      {/* Foreground layer - trees/houses (fastest) */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${cityForeground})`,
          backgroundSize: 'cover',
          backgroundPosition: `center ${70 + scrollY * 0.04}%`,
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: fadeOpacity * 0.75,
          top: '30%',
        }}
      />

      {/* Animated floating elements */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: fadeOpacity }}
      >
        <div 
          className="absolute w-64 h-32 rounded-full bg-foreground/5 blur-3xl"
          style={{
            top: '10%',
            left: '10%',
            transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
          }}
        />
        <div 
          className="absolute w-48 h-24 rounded-full bg-foreground/5 blur-3xl"
          style={{
            top: '15%',
            right: '20%',
            transform: `translateY(${Math.sin(scrollY * 0.01 + 1) * 15}px)`,
          }}
        />
        <div 
          className="absolute w-32 h-16 rounded-full bg-foreground/5 blur-3xl"
          style={{
            top: '25%',
            left: '40%',
            transform: `translateY(${Math.sin(scrollY * 0.01 + 2) * 10}px)`,
          }}
        />
      </div>

      {/* Bottom gradient fade to content */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        style={{
          background: `linear-gradient(to top, var(--background) 0%, var(--background) 20%, transparent 100%)`,
        }}
      />

      {/* Subtle vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center top, transparent 30%, var(--background) 120%)`,
          opacity: 0.5,
        }}
      />
    </div>
  );
}
