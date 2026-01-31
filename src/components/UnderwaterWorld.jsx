import { useEffect, useState, useRef } from 'react';
import oceanSurface from '../assets/ocean-surface.jpg';
import coralReef from '../assets/coral-reef.jpg';
import deepOcean from '../assets/deep-ocean.jpg';

// Bubble component
function Bubble({ delay, duration, left, size }) {
  return (
    <div
      className="absolute rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-bubble"
      style={{
        left: `${left}%`,
        bottom: '-20px',
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

// Light ray component
function LightRay({ left, width, delay }) {
  return (
    <div
      className="absolute top-0 animate-light-ray"
      style={{
        left: `${left}%`,
        width: `${width}px`,
        height: '60vh',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        transform: 'skewX(-5deg)',
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
      }}
    />
  );
}

// Jellyfish component
function Jellyfish({ style, color = 'purple' }) {
  const colors = {
    purple: 'from-purple-400/60 to-pink-400/40',
    cyan: 'from-cyan-400/60 to-teal-400/40',
    pink: 'from-pink-400/60 to-rose-400/40',
  };
  
  return (
    <div
      className="absolute animate-jellyfish pointer-events-none"
      style={style}
    >
      <div className={`w-16 h-12 rounded-t-full bg-gradient-to-b ${colors[color]} blur-[1px]`} />
      <div className="flex justify-center gap-1 -mt-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-1 h-16 rounded-full bg-gradient-to-b ${colors[color]} animate-sway opacity-70`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}

// Fish component
function Fish({ top, delay, direction = 1 }) {
  return (
    <div
      className="absolute text-2xl animate-fish pointer-events-none"
      style={{
        top: `${top}%`,
        animationDelay: `${delay}s`,
        animationDirection: direction === -1 ? 'reverse' : 'normal',
      }}
    >
      <svg width="40" height="24" viewBox="0 0 40 24" className="fill-cyan-300/50">
        <ellipse cx="20" cy="12" rx="15" ry="8" />
        <polygon points="35,12 45,4 45,20" />
        <circle cx="12" cy="10" r="2" className="fill-white/80" />
      </svg>
    </div>
  );
}

export default function UnderwaterWorld() {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate bubbles
  const bubbles = [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 8 + Math.random() * 8,
    size: `${8 + Math.random() * 16}px`,
  }));

  // Generate light rays
  const lightRays = [...Array(6)].map((_, i) => ({
    id: i,
    left: 10 + i * 15,
    width: 30 + Math.random() * 40,
    delay: i * 0.8,
  }));

  const maxScroll = 1000;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Light rays from surface */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: 1 - scrollProgress * 0.8 }}
      >
        {lightRays.map((ray) => (
          <LightRay key={ray.id} {...ray} />
        ))}
      </div>

      {/* Ocean surface layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(${oceanSurface})`,
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0, 1 - scrollProgress * 1.5),
        }}
      />

      {/* Coral reef layer - mid depth */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(${coralReef})`,
          transform: `translateY(${-scrollY * 0.05 + 200}px)`,
          opacity: Math.max(0, Math.min(1, scrollProgress * 2 - 0.3)),
        }}
      />

      {/* Deep ocean layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300"
        style={{
          backgroundImage: `url(${deepOcean})`,
          transform: `translateY(${-scrollY * 0.02 + 400}px)`,
          opacity: Math.max(0, scrollProgress - 0.5) * 2,
        }}
      />

      {/* Jellyfish decorations */}
      <Jellyfish 
        color="purple" 
        style={{ 
          top: '30%', 
          left: '10%',
          opacity: Math.max(0, scrollProgress - 0.2),
          transform: `translateY(${-scrollY * 0.15}px)`,
        }} 
      />
      <Jellyfish 
        color="cyan" 
        style={{ 
          top: '50%', 
          right: '15%',
          opacity: Math.max(0, scrollProgress - 0.4),
          transform: `translateY(${-scrollY * 0.1}px)`,
        }} 
      />
      <Jellyfish 
        color="pink" 
        style={{ 
          top: '70%', 
          left: '20%',
          opacity: Math.max(0, scrollProgress - 0.6),
          transform: `translateY(${-scrollY * 0.08}px)`,
        }} 
      />

      {/* Swimming fish */}
      <Fish top={25} delay={0} direction={1} />
      <Fish top={45} delay={5} direction={-1} />
      <Fish top={65} delay={10} direction={1} />

      {/* Rising bubbles */}
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} {...bubble} />
      ))}

      {/* Depth gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, 
            transparent 0%, 
            rgba(10, 30, 50, ${0.2 + scrollProgress * 0.4}) 50%,
            rgba(5, 15, 30, ${0.3 + scrollProgress * 0.5}) 100%
          )`,
        }}
      />

      {/* Bioluminescent particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${30 + Math.random() * 60}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(0,255,255,0.8) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(255,100,255,0.8) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(100,255,200,0.8) 0%, transparent 70%)',
              animationDelay: `${i * 0.3}s`,
              opacity: scrollProgress > 0.3 ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
