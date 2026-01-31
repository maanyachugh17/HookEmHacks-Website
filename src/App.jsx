import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Download,
  Mail,
  MapPin,
  Anchor,
  Waves,
  Fish,
  Shell,
} from "lucide-react";

import hookemLogo from "@/assets/hookem-logo.png";
import sponsorshipPdf from "@/assets/Sponsorship.pdf";
import lovableLogo from "@/assets/lovable-icon-bg-dark.png";
import featherlessLogo from "@/assets/featherless-color.png";
import bookpeopleLogo from "@/assets/BookPeople_Logo.png";
import auntieanneLogo from "@/assets/Auntie_Anne.png";
import vercelLogo from "@/assets/vercelLogo.png";
import tiffstreatsLogo from "@/assets/tiffs-treats.png";

// shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import UnderwaterWorld from "@/components/UnderwaterWorld";
import OceanPanel, { TreasureChest, CoralSection } from "@/components/OceanPanel";
import { RegistrationHub } from "@/components/RegistrationHub";
import { SeaCreatureNavigation } from "@/components/SeaCreatureNav";

const SITE = {
  name: "Hook 'Em Hacks",
  tagline: "Dive into innovation at UT Austin's premier hackathon",
  subtag:
    "Follow our socials for updates and tell us what you're interested in for the next UT Austin hackathon.",
  dateLine: "April 18–19, 2026",
  email: "hookemhacks@gmail.com",
  location: "UT Austin Campus",
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/hookemhacks/" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hook-em-hacks/?viewAsMember=true",
    },
  ],
};

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Feature card component
function FeatureCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <OceanPanel className="h-full" glow>
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-teal-500/30 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-cyan-300" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </OceanPanel>
    </motion.div>
  );
}

export default function App() {
  const nav = [
    { id: "about", label: "About" },
    { id: "register", label: "Register" },
    { id: "faq", label: "FAQ" },
    { id: "sponsors", label: "Sponsors" },
  ];
  
  const sponsors = [
    {
      name: "Featherless AI",
      logo: featherlessLogo,
      description:
        "A high-performance inference platform that lets you run any open-source model via API with zero cold starts.",
    },
    {
      name: "Vercel",
      logo: vercelLogo,
      description:
        "The frontend cloud for developers, providing speed and tools to deploy high-performance websites.",
    },
    {
      name: "Lovable",
      logo: lovableLogo,
      description:
        "An AI full-stack engineer that turns natural language into production-ready web apps.",
    },
    {
      name: "BookPeople",
      logo: bookpeopleLogo,
      description:
        "A legendary Austin landmark and Texas' largest independent bookstore.",
    },
    {
      name: "Auntie Anne's",
      logo: auntieanneLogo,
      description:
        "The gold standard of snack perfection with hand-rolled soft pretzels.",
    },
    {
      name: "Tiff's Treats",
      logo: tiffstreatsLogo,
      description:
        "The original warm-cookie delivery service, bringing fresh treats to your door.",
    },
  ];

  const features = [
    {
      icon: Waves,
      title: "24 Hours of Building",
      description: "Dive deep into your project with round-the-clock hacking, workshops, and mentorship from industry experts.",
    },
    {
      icon: Fish,
      title: "Find Your School",
      description: "Team up with fellow hackers or find your crew at the event. All skill levels welcome in these waters.",
    },
    {
      icon: Shell,
      title: "Prizes & Swag",
      description: "Surface with amazing prizes, swag, and memories. Every participant leaves with something special.",
    },
    {
      icon: Anchor,
      title: "Free Food & Fun",
      description: "Stay fueled with free meals, snacks, and drinks throughout the event. We've got you covered.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Underwater world background */}
      <UnderwaterWorld />



      {/* Main content */}
      <main id="top" className="relative z-10">
        {/* Hero - Ocean Surface */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Floating logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 animate-float"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-3xl animate-glow" />
                <img
                  src={hookemLogo}
                  alt="Hook 'Em Hacks"
                  className="relative h-32 md:h-40 w-auto mx-auto"
                  draggable={false}
                />
              </div>
            </motion.div>

            {/* Title with bioluminescent glow */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bioluminescent text-cyan-100"
            >
              {SITE.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-foreground/80 mb-4 text-balance"
            >
              {SITE.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-cyan-300/80 mb-8"
            >
              {SITE.dateLine} • {SITE.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white shadow-lg shadow-cyan-500/30 px-8"
                onClick={() => scrollToId("register")}
              >
                Dive In
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200 px-8"
                onClick={() => scrollToId("about")}
              >
                Explore
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2 text-cyan-300/60">
                <span className="text-sm">Scroll to dive deeper</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Waves className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About - Coral Reef Zone */}
        <section id="about" className="relative py-24 md:py-32 px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm font-medium text-cyan-300 mb-4">
                <Shell className="size-4" />
                <span>Explore the depths</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
                A weekend of building, learning, and discovery
              </h2>
              <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-muted-foreground">
                Hack with friends (or find a team on-site), learn from mentors, and demo your project — all in a supportive, beginner-friendly environment.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Register - Shipwreck Treasure */}
        <section id="register" className="relative py-24 md:py-32 px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-sm font-medium text-purple-300 mb-4">
                <ClipboardList className="size-4" />
                <span>Get Involved</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-4 bioluminescent-purple text-purple-200">
                Join Hook 'Em Hacks 2026
              </h2>
              <p className="max-w-xl mx-auto text-base leading-relaxed text-muted-foreground">
                Whether you want to build, mentor, judge, or help run the event — we'd love to have you aboard.
              </p>
            </motion.div>

            <TreasureChest>
              <RegistrationHub defaultRole="participant" />
            </TreasureChest>
          </div>
        </section>

        {/* FAQ - Deep Sea Zone */}
        <section id="faq" className="relative py-24 md:py-32 px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="block text-xs font-medium uppercase tracking-wider text-cyan-400/70 mb-2">
                FAQ
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Questions from the deep
              </h2>
            </motion.div>

            <OceanPanel variant="abyss" glow>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    Who can participate? Do I need experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Hook 'Em Hacks is open to students of all skill levels.
                    Beginners are welcome, and no prior hackathon experience is
                    required. We'll have workshops and mentors to help you get
                    started.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    What is the hackathon format?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Hook 'Em Hacks is a 24-hour, in-person hackathon on the UT
                    Austin campus. Teams build over the weekend and demo
                    projects in a science-fair-style expo.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    What can I build? Is there a theme?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    There is no required theme. You're free to build anything —
                    web apps, mobile apps, AI projects, games, or experimental
                    ideas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    How does judging work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Teams demo their projects live to judges in short, casual
                    conversations. Judges focus on creativity, execution,
                    impact, and clear explanations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    What do mentors and volunteers do?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Mentors help teams with technical questions, ideas, and
                    demos. Volunteers support check-in, workshops, logistics,
                    and overall event operations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-purple-500/20">
                  <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-cyan-300">
                    How can companies sponsor or get involved?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sponsors can support the event through funding, prizes,
                    workshops, or APIs. To get involved, email
                    hookemhacks@gmail.com.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </OceanPanel>
          </div>
        </section>

        {/* Sponsors - Ocean Floor */}
        <section id="sponsors" className="relative py-24 md:py-32 px-4">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="block text-xs font-medium uppercase tracking-wider text-pink-400/70 mb-2">
                Sponsors
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3 text-foreground">
                Partner with UT Austin builders
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Sponsor to support student innovation, meet talent, run a workshop, or provide APIs and prizes.
              </p>
            </motion.div>

            {/* Sponsor logos grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <OceanPanel variant="coral" className="relative p-6 flex flex-col items-center justify-center text-center group h-full transition-all hover:scale-[1.02]">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="mb-4 h-14 w-auto object-contain brightness-110"
                      draggable={false}
                    />
                    <div className="text-sm font-medium text-foreground">{sponsor.name}</div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500/95 to-orange-500/95 text-white opacity-0 transition-opacity group-hover:opacity-100 p-4 rounded-3xl text-sm leading-relaxed">
                      {sponsor.description}
                    </div>
                  </OceanPanel>
                </motion.div>
              ))}
            </div>

            {/* Sponsor info cards */}
            <div className="grid gap-6 lg:grid-cols-2">
              <OceanPanel variant="default" glow delay={100}>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
                  Why sponsor
                </h3>
                <ul className="list-inside space-y-3 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Recruiting: meet motivated engineers, designers, and product thinkers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Brand: showcase your tools to hundreds of builders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Impact: help fund a free, inclusive student event</span>
                  </li>
                </ul>
                <div className="border-t border-cyan-500/20 pt-5">
                  <div className="font-medium mb-2 text-foreground">Sponsor packet</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download our sponsor packet to learn about sponsorship
                    levels, benefits, and audience statistics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={sponsorshipPdf}
                      download="Sponsorship.pdf"
                      className="inline-flex"
                    >
                      <Button className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white">
                        Download PDF
                        <Download className="ml-2 size-4" />
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="rounded-xl border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10"
                      onClick={() => scrollToId("register")}
                    >
                      Get in touch
                      <ArrowRight className="ml-2 size-4" />
                    </Button>
                  </div>
                </div>
              </OceanPanel>

              <OceanPanel variant="default" glow delay={200}>
                <h3 className="font-heading text-lg font-semibold mb-4 text-foreground">
                  Sponsor contact
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Email us at{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-cyan-300 font-medium hover:underline"
                  >
                    {SITE.email}
                  </a>{" "}
                  with your name, company, and what kind of partnership you're
                  interested in.
                </p>
                <div className="border-t border-cyan-500/20 pt-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-4">
                      <div className="text-sm font-medium mb-1 text-foreground">Workshop sponsor</div>
                      <p className="text-sm text-muted-foreground">
                        Lead a hands-on session and provide APIs/credits.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-purple-400/10 border border-purple-400/20 p-4">
                      <div className="text-sm font-medium mb-1 text-foreground">Prize sponsor</div>
                      <p className="text-sm text-muted-foreground">
                        Fund a category and help judge the winners.
                      </p>
                    </div>
                  </div>
                </div>
              </OceanPanel>
            </div>
          </div>
        </section>

        {/* Footer - Ocean Floor */}
        <footer className="relative border-t border-cyan-500/20 bg-[hsl(220_50%_8%/80%)] backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={hookemLogo}
                    alt="Hook 'Em Hacks logo"
                    className="h-10 w-auto"
                    draggable={false}
                  />
                  <div className="text-lg font-semibold text-foreground">{SITE.name}</div>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  UT Austin collegiate hackathon • April 18–19, 2026
                </div>
                <div className="flex items-center gap-4">
                  {SITE.socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="text-sm text-cyan-300/70 hover:text-cyan-300 transition-colors underline-offset-4 hover:underline"
                      aria-label={s.name}
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium mb-3 text-foreground">Quick links</div>
                <div className="grid gap-2 text-muted-foreground">
                  {nav.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => scrollToId(n.id)}
                      className="text-left hover:text-cyan-300 transition-colors"
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm">
                <div className="font-medium mb-3 text-foreground">Contact</div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-cyan-400" />{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="hover:text-cyan-300 hover:underline transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-cyan-400" /> <span>{SITE.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-cyan-500/20 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
              <div>
                © {new Date().getFullYear()} {SITE.name}. Hook 'em.
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="size-3 text-cyan-400" />
                <span>Built with love in Austin, TX</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
