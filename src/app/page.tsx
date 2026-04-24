"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  Radar,
} from "lucide-react";

const projects = [
  {
    name: "Videomash",
    category: "Distributed video platform",
    description:
      "A full-stack video processing and hosting platform with containerized services running on Google Cloud.",
    stack: ["Next.js", "TypeScript", "Docker", "Firebase", "Cloud Run"],
    href: "https://github.com/ArjunKaliyath/videomash",
    accent: "Platform",
  },
  {
    name: "Booksmart",
    category: "Commerce system",
    description:
      "Secure e-commerce storefront with invoice generation, payment workflows, and an AI-enabled assistant layer.",
    stack: ["Node.js", "Express.js", "MongoDB", "Stripe", "AWS"],
    href: "https://github.com/ArjunKaliyath/booksmart",
    accent: "Retail",
  },
  {
    name: "LLM Research Agent",
    category: "AI workflow",
    description:
      "Conversational metabolomics analysis workflow using OpenAI API, LangChain, and Chainlit.",
    stack: ["Python", "OpenAI API", "LangChain", "Chainlit", "AI/ML"],
    href: "https://github.com/ArjunKaliyath",
    accent: "AI",
  },
  {
    name: "Socials",
    category: "Realtime app",
    description:
      "Realtime social media app with REST APIs, authentication, and event-driven updates.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    href: "https://github.com/ArjunKaliyath/socials",
    accent: "Realtime",
  },
  {
    name: "Spotify Recommender",
    category: "Data + recommendations",
    description:
      "A Streamlit application for music trend exploration, EDA, and conversational recommendations.",
    stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Data Analysis"],
    href: "https://github.com/ArjunKaliyath/spotifyrecommender",
    accent: "Data",
  },
  {
    name: "The Swamp",
    category: "WebRTC collaboration",
    description:
      "Realtime video chat experience built with React, Go, WebRTC, and WebSockets.",
    stack: ["React", "Go", "WebRTC", "WebSockets", "PostgreSQL"],
    href: "https://github.com/ArjunKaliyath/theSwamp",
    accent: "Comms",
  },
  {
    name: "GoReddit",
    category: "Community platform",
    description:
      "Reddit-style platform with Go services, PostgreSQL persistence, and modern frontend flows.",
    stack: ["Go", "React", "PostgreSQL", "REST API", "Docker"],
    href: "https://github.com/ArjunKaliyath/GoReddit",
    accent: "Community",
  },
  {
    name: "biorecall",
    category: "Biomedical RAG system",
    description:
      "Engineered a biomedical RAG QA system with hybrid retrieval, low-latency vector search, and a T5-based validation model that improved answer grounding and retrieval quality to 0.90 Recall@20.",
    stack: ["Python", "RAG", "Vector Search", "T5", "Biomedical AI"],
    href: "https://github.com/ArjunKaliyath/bio-recall",
    accent: "Research",
  },
  {
    name: "P2PFileShare",
    category: "Peer-to-peer system",
    description:
      "Built a BitTorrent-inspired file sharing system in Core Java with multithreaded piece transfer, custom handshake and message protocols, bitfield tracking, and choke/unchoke logic over TCP sockets.",
    stack: ["Java", "TCP Sockets", "Multithreading", "Distributed Systems", "P2P"],
    href: "https://github.com/ArjunKaliyath/P2PFileShare",
    accent: "Systems",
  },
] as const;

const skillZones = [
  {
    icon: Code2,
    title: "Interface Layer",
    description: "Polished frontends with actual structure, motion, and interaction discipline.",
    stack: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux"],
  },
  {
    icon: Database,
    title: "Systems Layer",
    description: "APIs, services, event flows, and backend infrastructure that can hold pressure.",
    stack: ["Node.js", "Express.js", "Python", "Java", "Go", "Salesforce Apex", "WebSockets"],
  },
  {
    icon: Cpu,
    title: "Delivery Layer",
    description: "Tooling, cloud platforms, deployment pipelines, and design support to ship the thing.",
    stack: ["Docker", "Git", "AWS", "Google Cloud", "Jenkins", "Figma", "Linux"],
  },
] as const;

const signalStats = [
  { value: "4+", label: "Years shipping production software" },
  { value: "20+", label: "Projects delivered across domains" },
  { value: "200+", label: "User stories pushed through teams" },
  { value: "24/7", label: "Tolerance for debugging difficult systems" },
] as const;

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const nextProgress = window.scrollY / maxScroll;
      setScrollProgress(nextProgress);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const project = projects[activeProject];
  const currentYear = new Date().getFullYear();

  const previousProject = () => {
    setActiveProject((current) => (current - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="tron-page-glow" aria-hidden="true" />
      <div className="tron-grid-overlay" aria-hidden="true" />
      <div className="scanline-overlay" aria-hidden="true" />

      <div className="pointer-events-none fixed right-3 top-24 bottom-8 z-40 hidden w-28 overflow-hidden xl:block">
        <div className="tron-vertical-track h-full">
          <div
            className="light-cycle light-cycle-vertical"
            style={{ top: `calc(${scrollProgress} * (100% - 5.25rem))` }}
          >
            <div className="light-cycle-rider" />
            <div className="light-cycle-frame" />
            <div className="light-cycle-wheel left-2" />
            <div className="light-cycle-wheel right-4" />
            <div className="light-cycle-trail" />
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-sm tracking-[0.35em] text-primary shadow-[0_0_22px_rgba(58,245,255,0.22)]">
              AK
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm uppercase tracking-[0.45em] text-primary/90">
                Arjun Kaliyath
              </p>
              <p className="truncate font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Interface // systems // AI
              </p>
            </div>
          </a>

          <div className="flex items-center gap-2 overflow-x-auto font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-transparent px-3 py-2 transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section
          id="hero"
          className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="hud-badge border-primary/35 bg-primary/10 text-primary">
                  <Radar className="h-3.5 w-3.5" />
                  New interface online
                </Badge>
              </div>

              <div className="space-y-6">
                <p className="section-kicker">Identity // Operator Profile</p>
                <h1 className="max-w-4xl font-display text-5xl uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
                  Building digital systems with a little more voltage than necessary.
                </h1>
                <p className="max-w-2xl font-mono text-base leading-7 text-cyan-50/78 sm:text-lg">
                  I build across the stack: cloud apps, developer tools, LLM workflows, and the occasional over-engineered side quest.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="rounded-full border border-primary/50 bg-primary/90 px-7 font-mono uppercase tracking-[0.25em] text-background shadow-[0_0_30px_rgba(58,245,255,0.35)] hover:bg-primary"
                  asChild
                >
                  <a href="mailto:kaliyatharjun@gmail.com">
                    <Mail className="h-4 w-4" />
                    Open Channel
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/35 bg-transparent px-7 font-mono uppercase tracking-[0.25em] text-primary hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a
                    href="https://github.com/ArjunKaliyath"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Repositories
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(58,245,255,0.18),transparent_58%)] blur-3xl" />
              <Card className="tron-panel relative overflow-hidden rounded-[2rem]">
                <CardContent className="space-y-8 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="section-kicker">Visual Feed</p>
                      <h2 className="mt-2 font-display text-2xl uppercase tracking-[0.12em] text-white">
                        Operator Snapshot
                      </h2>
                    </div>
                    <div className="rounded-full border border-primary/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                      active
                    </div>
                  </div>

                  <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-[1.75rem] border border-primary/25 bg-[radial-gradient(circle_at_top,rgba(58,245,255,0.18),rgba(5,18,26,0.7)_58%,rgba(2,8,13,0.96))] p-5 shadow-[inset_0_0_35px_rgba(58,245,255,0.12)]">
                    <div className="absolute inset-5 rounded-[1.5rem] border border-white/8" />
                    <div className="absolute inset-x-8 bottom-7 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                    <img
                      src="/pfp.jpg"
                      alt="Arjun Kaliyath"
                      className="relative z-10 h-full w-full rounded-[1.35rem] border border-primary/25 object-cover object-center"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {signalStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[1.4rem] border border-primary/20 bg-black/30 p-4"
                      >
                        <p className="font-display text-3xl uppercase tracking-[0.12em] text-primary">
                          {stat.value}
                        </p>
                        <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-cyan-50/60">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="space-y-5">
              <p className="section-kicker">About // Transmission</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.14em] text-white sm:text-5xl">
                Operator Background
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Source",
                  body: "Started in enterprise delivery, learning how real teams, constraints, and production incidents actually behave.",
                },
                {
                  title: "Shift",
                  body: "Moved into graduate CS work to sharpen systems thinking and build deeper intuition around AI-heavy software.",
                },
                {
                  title: "Bias",
                  body: "I like interfaces with personality, infrastructure with discipline, and projects that balance usefulness with ambition.",
                },
              ].map((item) => (
                <Card key={item.title} className="tron-panel min-h-full">
                  <CardHeader className="gap-4 p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                      {item.title}
                    </p>
                    <CardDescription className="font-mono text-sm leading-7 text-cyan-50/70">
                      {item.body}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="section-kicker">Loadout // Skill Zones</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.14em] text-white sm:text-5xl">
                Tools I actually like using.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {skillZones.map((zone) => {
              const Icon = zone.icon;

              return (
                <Card key={zone.title} className="tron-panel">
                  <CardHeader className="space-y-5 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-[0_0_25px_rgba(58,245,255,0.18)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="font-display text-2xl uppercase tracking-[0.12em] text-white">
                        {zone.title}
                      </CardTitle>
                      <CardDescription className="font-mono text-sm leading-7 text-cyan-50/68">
                        {zone.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 p-6 pt-0">
                    {zone.stack.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-50/75"
                      >
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <p className="section-kicker">Projects // Moving Track</p>
              <h2 className="font-display text-4xl uppercase tracking-[0.14em] text-white sm:text-5xl">
                Featured Builds
              </h2>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-end">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/25 bg-background/40 text-primary hover:bg-primary/10 hover:text-primary"
                onClick={previousProject}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-primary/25 bg-background/40 text-primary hover:bg-primary/10 hover:text-primary"
                onClick={nextProject}
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
            <Card className="tron-panel order-2 overflow-hidden xl:order-1">
              <CardContent className="flex h-full flex-col justify-between p-8">
                <div className="space-y-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                        {project.category}
                      </p>
                      <CardTitle className="mt-3 font-display text-4xl uppercase tracking-[0.14em] text-white">
                        {project.name}
                      </CardTitle>
                    </div>
                    <Badge className="hud-badge border-primary/30 bg-primary/10 text-primary">
                      {project.accent}
                    </Badge>
                  </div>

                  <p className="max-w-2xl font-mono text-sm leading-7 text-cyan-50/70">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-full border-primary/20 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-cyan-50/75"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {String(activeProject + 1).padStart(2, "0")} /{" "}
                    {String(projects.length).padStart(2, "0")}
                  </div>
                  <Button
                    asChild
                    className="rounded-full border border-primary/40 bg-primary/90 px-6 font-mono uppercase tracking-[0.24em] text-background shadow-[0_0_30px_rgba(58,245,255,0.3)] hover:bg-primary"
                  >
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="order-1 flex flex-col gap-4 xl:order-2">
              {projects.map((item, index) => {
                const isActive = index === activeProject;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveProject(index)}
                    className={`group rounded-[1.7rem] border px-5 py-5 text-left transition duration-300 ${
                      isActive
                        ? "border-primary/40 bg-primary/10 shadow-[0_0_35px_rgba(58,245,255,0.18)]"
                        : "border-white/8 bg-white/[0.02] hover:border-primary/25 hover:bg-primary/[0.05]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="space-y-3">
                        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                          {item.category}
                        </p>
                        <h3 className="font-display text-2xl uppercase tracking-[0.12em] text-white">
                          {item.name}
                        </h3>
                        <p className="font-mono text-sm leading-7 text-cyan-50/65">
                          {item.description}
                        </p>
                      </div>
                      <div className="mt-1 font-display text-lg uppercase tracking-[0.2em] text-primary/75">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Card className="tron-panel overflow-hidden">
            <CardContent className="grid gap-10 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-6">
                <p className="section-kicker">Contact // Open Port</p>
                <h2 className="font-display text-4xl uppercase tracking-[0.14em] text-white sm:text-5xl">
                  Get In Contact With The Operator
                </h2>
                <p className="max-w-2xl font-mono text-sm leading-7 text-cyan-50/68">
                  New roles, collaboration, developer tooling, and AI-focused products are all welcome.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Button
                  variant="outline"
                  className="h-auto justify-start rounded-[1.3rem] border-primary/25 bg-black/25 p-5 text-left text-cyan-50 hover:bg-primary/10 hover:text-white"
                  asChild
                >
                  <a href="mailto:kaliyatharjun@gmail.com">
                    <Mail className="mt-1 h-4 w-4 text-primary" />
                    <span className="flex flex-col items-start">
                      <span className="font-display text-base uppercase tracking-[0.15em]">
                        Email
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        kaliyatharjun@gmail.com
                      </span>
                    </span>
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto justify-start rounded-[1.3rem] border-primary/25 bg-black/25 p-5 text-left text-cyan-50 hover:bg-primary/10 hover:text-white"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/arjun-kaliyath"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mt-1 h-4 w-4 text-primary" />
                    <span className="flex flex-col items-start">
                      <span className="font-display text-base uppercase tracking-[0.15em]">
                        LinkedIn
                      </span>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        /in/arjun-kaliyath
                      </span>
                    </span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-primary/15 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ArjunKaliyath"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arjun-kaliyath"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary"
            >
              LinkedIn
            </a>
            <Separator orientation="vertical" className="hidden h-4 bg-primary/20 md:block" />
            <span>&copy; {currentYear}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
