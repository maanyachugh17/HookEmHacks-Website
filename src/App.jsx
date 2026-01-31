import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  Download,
  Mail,
  MapPin,
  Megaphone,
  Sparkles,
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
import { ParallaxCity } from "@/components/ParallaxCity";
import { ImmersiveHero } from "@/components/ImmersiveHero";
import { BillboardPanel, FloatingBillboard } from "@/components/BillboardPanel";
import { FeatureCards } from "@/components/FeatureCards";
import { SectionHeading } from "@/components/SectionHeading";
import { RegistrationHub } from "@/components/RegistrationHub";
import { MobileNav } from "@/components/MobileNav";

const SITE = {
  name: "Hook 'Em Hacks",
  tagline: "We're out exploring the Forty Acres — see you April 18–19, 2026!",
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
        "A high-performance inference platform that lets you run any open-source model via API with zero cold starts and no server management.",
    },
    {
      name: "Vercel",
      logo: vercelLogo,
      description:
        "The frontend cloud for developers, providing the speed and tools to deploy high-performance websites and incredible user experiences.",
    },
    {
      name: "Lovable",
      logo: lovableLogo,
      description:
        "An AI full-stack engineer that turns natural language into production-ready web apps, handling everything from UI design to backend logic.",
    },
    {
      name: "BookPeople",
      logo: bookpeopleLogo,
      description:
        "A legendary Austin landmark and Texas' largest independent bookstore, dedicated to community, conversation, and the joy of reading.",
    },
    {
      name: "Auntie Anne's",
      logo: auntieanneLogo,
      description:
        "The gold standard of snack perfection, serving up hand-rolled soft pretzels that are always golden-brown and buttery-fresh.",
    },
    {
      name: "Tiff's Treats",
      logo: tiffstreatsLogo,
      description:
        "The original warm-cookie delivery service, bringing fresh-from-the-oven treats and a little bit of magic right to your door.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Immersive parallax background */}
      <ParallaxCity />

      {/* Top bar - floating glass style */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="mx-auto max-w-6xl">
          <div className="billboard-panel px-4 py-3 flex items-center justify-between">
            <button
              onClick={() => scrollToId("top")}
              className="group inline-flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-secondary/50"
              aria-label="Go to top"
            >
              <img
                src={hookemLogo}
                alt="Hook 'Em Hacks logo"
                className="h-9 w-auto select-none"
                draggable={false}
              />
              <div className="leading-tight hidden sm:block">
                <div className="font-heading text-sm font-semibold tracking-tight">
                  {SITE.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  UT Austin Hackathon
                </div>
              </div>
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary/50 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="hidden rounded-xl md:inline-flex"
                onClick={() => scrollToId("register")}
              >
                I'm Interested
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                className="rounded-xl shadow-lg shadow-primary/25"
                onClick={() => scrollToId("sponsors")}
              >
                Sponsor Us
              </Button>
              <MobileNav items={nav} onNavigate={scrollToId} />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="top" className="relative">
        {/* Hero */}
        <section className="relative">
          <ImmersiveHero site={SITE} scrollToId={scrollToId} />
        </section>

        {/* Content sections with more opaque background */}
        <div className="relative">
          {/* Gradient overlay for better content readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />
          
          <div className="relative">
            {/* About */}
            <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
                  <Megaphone className="size-4" />
                  <span>What this is</span>
                </div>
                <h2 className="font-heading text-balance text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  A UT Austin weekend of building, learning, and meeting incredible people
                </h2>
                <p className="max-w-2xl mx-auto text-pretty text-base md:text-lg leading-relaxed text-muted-foreground">
                  Hack with friends (or find a team on-site), learn from mentors, and demo your project to judges — all in a supportive, beginner-friendly environment.
                </p>
              </motion.div>

              <FeatureCards email={SITE.email} />
            </section>

            {/* Register */}
            <section id="register" className="relative mx-auto max-w-5xl px-4 py-16 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
                  <ClipboardList className="size-4" />
                  <span>Get Involved</span>
                </div>
                <h2 className="font-heading text-balance text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Join Hook 'Em Hacks 2026
                </h2>
                <p className="max-w-xl mx-auto text-pretty text-base leading-relaxed text-muted-foreground">
                  Whether you want to build, mentor, judge, or help run the event — we'd love to have you.
                </p>
              </motion.div>

              <BillboardPanel className="p-4 md:p-6" delay={0.2}>
                <RegistrationHub defaultRole="participant" />
              </BillboardPanel>
            </section>

            {/* FAQ */}
            <section id="faq" className="relative mx-auto max-w-4xl px-4 py-16 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  FAQ
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
                  Questions? We've got you
                </h2>
              </motion.div>

              <BillboardPanel className="p-6 md:p-8" delay={0.2}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      Who can participate? Do I need experience?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Hook 'Em Hacks is open to students of all skill levels.
                      Beginners are welcome, and no prior hackathon experience is
                      required. We'll have workshops and mentors to help you get
                      started.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      What is the hackathon format?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Hook 'Em Hacks is a 24-hour, in-person hackathon on the UT
                      Austin campus. Teams build over the weekend and demo
                      projects in a science-fair-style expo.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      What can I build? Is there a theme?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      There is no required theme. You're free to build anything —
                      web apps, mobile apps, AI projects, games, or experimental
                      ideas.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      How does judging work?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Teams demo their projects live to judges in short, casual
                      conversations. Judges focus on creativity, execution,
                      impact, and clear explanations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      What do mentors and volunteers do?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Mentors help teams with technical questions, ideas, and
                      demos. Volunteers support check-in, workshops, logistics,
                      and overall event operations.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline">
                      How can companies sponsor or get involved?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Sponsors can support the event through funding, prizes,
                      workshops, or APIs. To get involved, email
                      hookemhacks@gmail.com.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </BillboardPanel>
            </section>

            {/* Sponsors */}
            <section id="sponsors" className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-10"
              >
                <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  Sponsors
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-3">
                  Partner with UT Austin builders
                </h2>
                <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                  Sponsor to support student innovation, meet talent, run a workshop, or provide APIs and prizes.
                </p>
              </motion.div>

              {/* Sponsor logos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="billboard-panel relative p-6 flex flex-col items-center justify-center text-center group h-full transition-all hover:scale-[1.02]">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="mb-4 h-14 w-auto object-contain"
                        draggable={false}
                      />
                      <div className="text-sm font-medium">{sponsor.name}</div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-foreground/90 text-background opacity-0 transition-opacity group-hover:opacity-100 p-4 rounded-3xl text-sm leading-relaxed">
                        {sponsor.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Sponsor info cards */}
              <div className="grid gap-6 lg:grid-cols-2">
                <BillboardPanel className="p-6" delay={0.3}>
                  <h3 className="font-heading text-lg font-semibold mb-4">
                    Why sponsor
                  </h3>
                  <ul className="list-inside space-y-3 text-sm text-muted-foreground mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Recruiting: meet motivated engineers, designers, and product thinkers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Brand: showcase your tools to hundreds of builders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Impact: help fund a free, inclusive student event</span>
                    </li>
                  </ul>
                  <div className="border-t border-border/50 pt-5">
                    <div className="font-medium mb-2">Sponsor packet</div>
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
                        <Button variant="secondary" className="rounded-xl">
                          Download PDF
                          <Download className="ml-2 size-4" />
                        </Button>
                      </a>
                      <Button
                        variant="outline"
                        className="rounded-xl"
                        onClick={() => scrollToId("register")}
                      >
                        Get in touch
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>
                </BillboardPanel>

                <BillboardPanel className="p-6" delay={0.4}>
                  <h3 className="font-heading text-lg font-semibold mb-4">
                    Sponsor contact
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Email us at{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-foreground font-medium hover:underline"
                    >
                      {SITE.email}
                    </a>{" "}
                    with your name, company, and what kind of partnership you're
                    interested in.
                  </p>
                  <div className="border-t border-border/50 pt-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-secondary/50 p-4">
                        <div className="text-sm font-medium mb-1">Workshop sponsor</div>
                        <p className="text-sm text-muted-foreground">
                          Lead a hands-on session and provide APIs/credits.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-secondary/50 p-4">
                        <div className="text-sm font-medium mb-1">Prize sponsor</div>
                        <p className="text-sm text-muted-foreground">
                          Fund a category and help judge the winners.
                        </p>
                      </div>
                    </div>
                  </div>
                </BillboardPanel>
              </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
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
                      <div className="text-lg font-semibold">{SITE.name}</div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      UT Austin collegiate hackathon • April 18–19, 2026
                    </div>
                    <div className="flex items-center gap-4">
                      {SITE.socials.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                          aria-label={s.name}
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="font-medium mb-3">Quick links</div>
                    <div className="grid gap-2 text-muted-foreground">
                      {nav.map((n) => (
                        <button
                          key={n.id}
                          onClick={() => scrollToId(n.id)}
                          className="text-left hover:text-foreground transition-colors"
                        >
                          {n.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="font-medium mb-3">Contact</div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="size-4" />{" "}
                        <a
                          href={`mailto:${SITE.email}`}
                          className="hover:text-foreground hover:underline transition-colors"
                        >
                          {SITE.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="size-4" /> <span>{SITE.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
                  <div>
                    © {new Date().getFullYear()} {SITE.name}. Hook 'em.
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-3" />
                    <span>Built with love in Austin, TX</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
