import React from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    ChevronDown,
    MapPin,
} from "lucide-react";

import hookemLogo from "@/assets/hookem-logo.png";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

function SocialIcon({ name }) {
    const map = {
        Instagram: "IG",
        Facebook: "f",
        "Twitter/X": "X",
        TikTok: "t",
    };
    return (
        <span
            aria-hidden
            className="grid size-10 place-items-center rounded-full border border-border bg-secondary text-sm font-semibold"
        >
            {map[name] ?? "@"}
        </span>
    );
}

export function SplineHero({ site, scrollToId }) {
    return (
        <div className="relative min-h-[85vh] overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="hsl(var(--primary))"
            />

            <div className="flex flex-col lg:flex-row min-h-[85vh]">
                {/* Left content - Hero text and CTAs */}
                <div className="flex-1 px-6 md:px-12 lg:px-16 py-8 relative z-10 flex flex-col justify-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="space-y-5"
                    >
                        {/* Logo */}
                        <motion.img
                            src={hookemLogo}
                            alt="Hook 'Em Hacks Logo"
                            className="h-28 md:h-36 lg:h-44 w-auto select-none drop-shadow-[0_0_24px_hsl(var(--primary)/0.6)]"
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
                            transition={{
                                opacity: { duration: 0.55 },
                                y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.55 },
                            }}
                            draggable={false}
                        />

                        {/* Tagline */}
                        <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                            {site.tagline}
                        </h1>

                        {/* Subtitle */}
                        <p className="max-w-xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
                            {site.subtag}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
                            <Button
                                className="rounded-2xl px-7 py-6 text-base"
                                onClick={() => scrollToId("register")}
                            >
                                I'm Interested
                                <ArrowRight className="ml-2 size-5" />
                            </Button>
                            <Button
                                variant="secondary"
                                className="rounded-2xl px-6 py-6 text-base"
                                onClick={() => scrollToId("about")}
                            >
                                Learn more
                                <ChevronDown className="ml-2 size-5" />
                            </Button>
                        </div>

                        {/* Date/Location badges */}
                        <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-2 rounded-full border bg-secondary/50 backdrop-blur-sm px-4 py-2">
                                <Calendar className="size-4" /> {site.dateLine}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border bg-secondary/50 backdrop-blur-sm px-4 py-2">
                                <MapPin className="size-4" /> {site.location}
                            </span>
                        </div>

                        {/* Social links */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            {site.socials.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    className="group inline-flex items-center gap-2 rounded-2xl px-2 py-2 transition hover:bg-secondary"
                                    aria-label={s.name}
                                >
                                    <SocialIcon name={s.name} />
                                    <span className="hidden text-sm md:inline">{s.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right content - Spline 3D scene - wider and unrestricted */}
                <div className="flex-[1.4] relative min-h-[400px] lg:min-h-0 lg:-mr-20">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full scale-110 lg:scale-125"
                    />
                </div>
            </div>
        </div>
    );
}
