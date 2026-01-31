import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export default function OceanPanel({ 
  children, 
  className, 
  variant = 'default',
  delay = 0,
  glow = true 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const variants = {
    default: 'glass-panel',
    coral: 'bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-pink-400/30 rounded-3xl',
    shipwreck: 'bg-gradient-to-br from-amber-900/30 to-stone-800/30 backdrop-blur-xl border border-amber-600/20 rounded-2xl',
    treasure: 'bg-gradient-to-br from-yellow-500/20 to-amber-600/20 backdrop-blur-xl border border-yellow-400/30 rounded-3xl',
    abyss: 'bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl',
  };

  const glowColors = {
    default: 'shadow-[0_0_60px_-15px_rgba(0,255,255,0.4)]',
    coral: 'shadow-[0_0_60px_-15px_rgba(255,100,150,0.4)]',
    shipwreck: 'shadow-[0_0_40px_-15px_rgba(180,130,70,0.3)]',
    treasure: 'shadow-[0_0_60px_-15px_rgba(255,200,50,0.4)]',
    abyss: 'shadow-[0_0_80px_-15px_rgba(150,100,255,0.4)]',
  };

  return (
    <div
      ref={panelRef}
      className={cn(
        'p-6 md:p-8 transition-all duration-700 ease-out',
        variants[variant],
        glow && glowColors[variant],
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}

// Underwater sign post component
export function UnderwaterSign({ title, children, direction = 'left' }) {
  const [isVisible, setIsVisible] = useState(false);
  const signRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (signRef.current) {
      observer.observe(signRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={signRef}
      className={cn(
        'relative transition-all duration-700 ease-out',
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : direction === 'left' 
            ? 'opacity-0 -translate-x-12' 
            : 'opacity-0 translate-x-12'
      )}
    >
      {/* Sign post */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-3 h-16 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full" />
      
      {/* Sign board */}
      <div className="glass-panel p-6 animate-sway origin-top">
        {title && (
          <h3 className="text-xl font-bold mb-3 bioluminescent text-cyan-300">{title}</h3>
        )}
        <div className="text-foreground/90">{children}</div>
      </div>
    </div>
  );
}

// Coral reef section wrapper
export function CoralSection({ children, className }) {
  return (
    <div className={cn('relative', className)}>
      {/* Coral decorations */}
      <div className="absolute -left-4 bottom-0 w-24 h-32 opacity-60">
        <div className="absolute bottom-0 left-0 w-8 h-20 bg-gradient-to-t from-pink-500 to-pink-300 rounded-t-full" />
        <div className="absolute bottom-0 left-6 w-6 h-16 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-full" />
        <div className="absolute bottom-0 left-10 w-10 h-24 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t-full" />
      </div>
      
      <div className="absolute -right-4 bottom-0 w-24 h-32 opacity-60">
        <div className="absolute bottom-0 right-0 w-10 h-24 bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-full" />
        <div className="absolute bottom-0 right-8 w-6 h-16 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-t-full" />
        <div className="absolute bottom-0 right-12 w-8 h-20 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-full" />
      </div>

      {children}
    </div>
  );
}

// Treasure chest component for CTAs
export function TreasureChest({ children, className }) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-2xl blur-xl animate-glow" />
      <div className="relative glass-panel p-8 border-2 border-yellow-500/30 rounded-2xl overflow-hidden">
        {/* Gold particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
        {children}
      </div>
    </div>
  );
}
