import { motion } from 'framer-motion';
import { Shell, Anchor, HelpCircle, Heart } from 'lucide-react';

// Clickable jellyfish navigation
export function NavJellyfish({ label, onClick, color = 'cyan', style, delay = 0 }) {
  const colors = {
    cyan: {
      body: 'from-cyan-400/80 to-teal-500/60',
      glow: 'shadow-cyan-400/50',
      text: 'text-cyan-100',
    },
    purple: {
      body: 'from-purple-400/80 to-pink-500/60',
      glow: 'shadow-purple-400/50',
      text: 'text-purple-100',
    },
    pink: {
      body: 'from-pink-400/80 to-rose-500/60',
      glow: 'shadow-pink-400/50',
      text: 'text-pink-100',
    },
    gold: {
      body: 'from-amber-400/80 to-orange-500/60',
      glow: 'shadow-amber-400/50',
      text: 'text-amber-100',
    },
  };

  const c = colors[color];

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow effect */}
        <div className={`absolute inset-0 blur-xl bg-gradient-to-b ${c.body} opacity-50 group-hover:opacity-80 transition-opacity scale-150`} />
        
        {/* Jellyfish body */}
        <div className={`relative w-20 h-14 rounded-t-full bg-gradient-to-b ${c.body} backdrop-blur-sm border border-white/30 shadow-lg ${c.glow} group-hover:scale-110 transition-transform`}>
          {/* Label inside */}
          <div className={`absolute inset-0 flex items-center justify-center font-medium text-xs ${c.text} drop-shadow-lg`}>
            {label}
          </div>
        </div>
        
        {/* Tentacles */}
        <div className="flex justify-center gap-1 -mt-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scaleY: [1, 1.1, 1],
                x: [0, i % 2 === 0 ? 2 : -2, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
              className={`w-1 h-10 rounded-full bg-gradient-to-b ${c.body} opacity-70`}
            />
          ))}
        </div>
      </motion.div>
    </motion.button>
  );
}

// Clickable shell navigation
export function NavShell({ label, onClick, style, delay = 0 }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Shell glow */}
        <div className="absolute inset-0 bg-pink-400/40 blur-xl rounded-full scale-150 group-hover:bg-pink-400/60 transition-colors" />
        
        {/* Shell body */}
        <div className="relative w-24 h-20 bg-gradient-to-br from-pink-300/90 via-coral-400/80 to-orange-400/70 rounded-t-full border-2 border-white/40 shadow-lg shadow-pink-400/30 group-hover:scale-110 transition-transform flex items-center justify-center">
          <Shell className="w-6 h-6 text-white/80 absolute top-2" />
          <span className="text-xs font-medium text-white drop-shadow-lg mt-4">{label}</span>
        </div>
      </motion.div>
    </motion.button>
  );
}

// Underwater sign post
export function NavSign({ label, icon: Icon, onClick, style, delay = 0, direction = 'right' }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: direction === 'right' ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Sign board */}
        <div className={`relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-800/90 to-amber-900/80 rounded-lg border-2 border-amber-600/50 shadow-lg group-hover:scale-105 transition-transform ${direction === 'left' ? 'flex-row-reverse' : ''}`}>
          {Icon && <Icon className="w-4 h-4 text-amber-200" />}
          <span className="text-sm font-medium text-amber-100 drop-shadow">{label}</span>
          {/* Arrow */}
          <div className={`text-amber-200 ${direction === 'left' ? 'rotate-180' : ''}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
        {/* Rope/chain */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-transparent via-amber-700/50 to-amber-800/70 rounded-full" />
      </motion.div>
    </motion.button>
  );
}

// Treasure chest for sponsors
export function NavTreasure({ label, onClick, style, delay = 0 }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Gold glow */}
        <div className="absolute inset-0 bg-amber-400/40 blur-2xl rounded-full scale-150 group-hover:bg-amber-400/60 transition-colors" />
        
        {/* Chest */}
        <div className="relative">
          {/* Chest lid */}
          <motion.div
            animate={{ rotateX: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-8 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-lg border-2 border-amber-600 origin-bottom"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-x-0 top-1/2 h-1 bg-amber-500/50" />
          </motion.div>
          {/* Chest body */}
          <div className="w-20 h-10 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-lg border-2 border-t-0 border-amber-700 flex items-center justify-center">
            <span className="text-xs font-medium text-amber-200 drop-shadow">{label}</span>
          </div>
          {/* Lock */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-5 bg-amber-500 rounded-full border border-amber-400">
            <div className="w-2 h-2 bg-amber-900 rounded-full mx-auto mt-1" />
          </div>
        </div>
        
        {/* Sparkles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              y: [-5, -15, -5],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-amber-300 rounded-full"
            style={{
              top: -10,
              left: `${20 + i * 20}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.button>
  );
}

// Coral cluster nav
export function NavCoral({ label, onClick, style, delay = 0 }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-coral-400/30 blur-xl rounded-full scale-150 group-hover:bg-coral-400/50 transition-colors" />
        
        {/* Coral branches */}
        <div className="relative flex items-end justify-center gap-1">
          <div className="w-3 h-12 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-full" />
          <div className="w-4 h-16 bg-gradient-to-t from-coral-600 to-coral-400 rounded-t-full" />
          <div className="w-3 h-14 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-full" />
          <div className="w-4 h-12 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t-full" />
        </div>
        
        {/* Label bubble */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-white group-hover:bg-white/30 transition-colors">
          {label}
        </div>
      </motion.div>
    </motion.button>
  );
}

// Floating fish nav
export function NavFish({ label, onClick, style, delay = 0, color = 'cyan' }) {
  const colors = {
    cyan: 'fill-cyan-400/80',
    orange: 'fill-orange-400/80',
    purple: 'fill-purple-400/80',
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      onClick={onClick}
      className="group cursor-pointer absolute"
      style={style}
      aria-label={`Navigate to ${label}`}
    >
      <motion.div
        animate={{ 
          x: [0, 10, 0],
          y: [0, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow */}
        <div className={`absolute inset-0 blur-lg rounded-full scale-150 opacity-50 group-hover:opacity-80 transition-opacity ${color === 'cyan' ? 'bg-cyan-400/50' : color === 'orange' ? 'bg-orange-400/50' : 'bg-purple-400/50'}`} />
        
        {/* Fish SVG */}
        <svg width="60" height="36" viewBox="0 0 60 36" className={`${colors[color]} drop-shadow-lg group-hover:scale-110 transition-transform`}>
          <ellipse cx="25" cy="18" rx="20" ry="12" />
          <polygon points="45,18 60,6 60,30" />
          <circle cx="14" cy="14" r="4" className="fill-white/90" />
          <circle cx="15" cy="13" r="2" className="fill-slate-800" />
        </svg>
        
        {/* Label */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-medium text-white group-hover:bg-white/30 transition-colors">
          {label}
        </div>
      </motion.div>
    </motion.button>
  );
}

// Main navigation component that places creatures around the hero
export function SeaCreatureNavigation({ onNavigate }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* About - Jellyfish on left */}
      <div className="pointer-events-auto">
        <NavJellyfish
          label="About"
          color="cyan"
          onClick={() => onNavigate('about')}
          style={{ top: '25%', left: '5%' }}
          delay={0.8}
        />
      </div>

      {/* Register - Shell on right */}
      <div className="pointer-events-auto">
        <NavJellyfish
          label="Register"
          color="purple"
          onClick={() => onNavigate('register')}
          style={{ top: '30%', right: '5%' }}
          delay={1.0}
        />
      </div>

      {/* FAQ - Fish on left lower */}
      <div className="pointer-events-auto">
        <NavFish
          label="FAQ"
          color="orange"
          onClick={() => onNavigate('faq')}
          style={{ top: '55%', left: '8%' }}
          delay={1.2}
        />
      </div>

      {/* Sponsors - Treasure on right lower */}
      <div className="pointer-events-auto">
        <NavTreasure
          label="Sponsors"
          onClick={() => onNavigate('sponsors')}
          style={{ top: '60%', right: '8%' }}
          delay={1.4}
        />
      </div>
    </div>
  );
}
