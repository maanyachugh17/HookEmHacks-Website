import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  MapPin,
  Sparkles,
} from "lucide-react";

import hookemLogo from "@/assets/hookem-logo.png";
import { Button } from "@/components/ui/button";
import { BillboardPanel } from "./BillboardPanel";

export function ImmersiveHero({ site, scrollToId }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-primary/60 blur-sm"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-accent/60 blur-sm"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-[30%] left-[20%] w-4 h-4 rounded-full bg-primary/40 blur-sm"
          style={{ animation: "float 6s ease-in-out infinite 2s" }}
        />
      </div>

      {/* Main hero content - floating billboard */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-4xl mx-auto"
      >
        <BillboardPanel 
          className="p-8 md:p-12 lg:p-16 text-center glow-effect"
          animate={false}
        >
          {/* Sparkle badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            <Sparkles className="size-4" />
            <span>UT Austin Hackathon</span>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <img
              src={hookemLogo}
              alt="Hook 'Em Hacks Logo"
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto select-none drop-shadow-[0_0_30px_var(--glow)]"
              draggable={false}
            />
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-heading text-balance text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4"
          >
            {site.tagline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto text-pretty text-base md:text-lg leading-relaxed text-muted-foreground mb-8"
          >
            {site.subtag}
          </motion.p>

          {/* Date/Location pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
              <Calendar className="size-4 text-primary" />
              <span>{site.dateLine}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
              <MapPin className="size-4 text-accent" />
              <span>{site.location}</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              onClick={() => scrollToId("register")}
            >
              I'm Interested
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium"
              onClick={() => scrollToId("about")}
            >
              Explore
              <ChevronDown className="ml-2 size-5" />
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-border"
          >
            {site.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                aria-label={s.name}
              >
                {s.name}
              </a>
            ))}
          </motion.div>
        </BillboardPanel>

        {/* Floating shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-8 rounded-full bg-foreground/10 blur-2xl" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToId("about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="size-5 animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
}
