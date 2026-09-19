"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

const experience = [
  {
    period: "Jan 2026 - Present",
    role: "Software Engineering Intern",
    company: "UF Health",
    location: "Gainesville, FL",
    summary: "Building AI-assisted research tools and high-throughput imaging workflows for biomedical teams.",
    highlights: [
      "Designed a multi-omics analysis agent with React, FastAPI, and the OpenAI Python SDK, routing requests to web search or sandboxed Python analysis.",
      "Implemented hybrid retrieval across 20,000+ PubMed papers with LangChain, FAISS, and Redis caching.",
      "Accelerated 3D reconstruction and image registration by 35% with multithreaded workflows on UF HiperGator.",
    ],
    technologies: ["React", "FastAPI", "Python", "OpenAI SDK", "LangChain", "FAISS", "AWS"],
  },
  {
    period: "Aug 2021 - Mar 2024",
    role: "Software Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    summary: "Shipped backend services, event-driven integrations, and modern React interfaces for a healthcare support platform.",
    highlights: [
      "Built Spring Boot APIs supporting registration, product management, search, and service workflows for 10,000+ users.",
      "Reduced data synchronization latency by 80% with an event-driven AWS Lambda and SQS integration pipeline.",
      "Modernized 20+ portal pages and established CI/CD practices that helped cut production defects by 40%.",
    ],
    technologies: ["Java", "Spring Boot", "React", "AWS", "Kafka", "Jenkins", "PostgreSQL"],
  },
] as const;

const projects = [
  { name: "Videomash", category: "Distributed video platform", description: "A full-stack video processing and hosting platform with containerized services running on Google Cloud.", stack: ["Next.js", "TypeScript", "Docker", "Firebase", "Cloud Run"], href: "https://github.com/ArjunKaliyath/videomash" },
  { name: "Booksmart", category: "Commerce system", description: "Secure e-commerce storefront with invoice generation, payment workflows, and an AI-enabled assistant layer.", stack: ["Node.js", "Express.js", "MongoDB", "Stripe", "AWS"], href: "https://github.com/ArjunKaliyath/booksmart" },
  { name: "LLM Research Agent", category: "AI workflow", description: "Conversational metabolomics analysis workflow using OpenAI API, LangChain, and Chainlit.", stack: ["Python", "OpenAI API", "LangChain", "Chainlit", "AI/ML"], href: "https://github.com/ArjunKaliyath" },
  { name: "Socials", category: "Realtime app", description: "Realtime social media app with REST APIs, authentication, and event-driven updates.", stack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"], href: "https://github.com/ArjunKaliyath/socials" },
  { name: "Spotify Recommender", category: "Data + recommendations", description: "A Streamlit application for music trend exploration, EDA, and conversational recommendations.", stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Data Analysis"], href: "https://github.com/ArjunKaliyath/spotifyrecommender" },
  { name: "The Swamp", category: "WebRTC collaboration", description: "Realtime video chat experience built with React, Go, WebRTC, and WebSockets.", stack: ["React", "Go", "WebRTC", "WebSockets", "PostgreSQL"], href: "https://github.com/ArjunKaliyath/theSwamp" },
  { name: "GoReddit", category: "Community platform", description: "Reddit-style platform with Go services, PostgreSQL persistence, and modern frontend flows.", stack: ["Go", "React", "PostgreSQL", "REST API", "Docker"], href: "https://github.com/ArjunKaliyath/GoReddit" },
  { name: "biorecall", category: "Biomedical RAG system", description: "A biomedical QA system with hybrid retrieval, low-latency vector search, and a T5-based validation model that reached 0.90 Recall@20.", stack: ["Python", "RAG", "Vector Search", "T5", "Biomedical AI"], href: "https://github.com/ArjunKaliyath/bio-recall" },
  { name: "P2PFileShare", category: "Peer-to-peer system", description: "A BitTorrent-inspired Java file-sharing system with multithreaded piece transfer, custom protocols, and choke/unchoke logic over TCP.", stack: ["Java", "TCP Sockets", "Multithreading", "Distributed Systems", "P2P"], href: "https://github.com/ArjunKaliyath/P2PFileShare" },
] as const;

const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "SQL", "TypeScript"] },
  { label: "Frameworks", items: ["Spring Boot", "React", "Redux", "FastAPI", "JUnit", "Mockito"] },
  { label: "Data & messaging", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Kafka"] },
  { label: "Cloud & delivery", items: ["AWS", "Docker", "Terraform", "Jenkins", "Maven", "Nginx", "Linux"] },
] as const;

const navigation = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"]] as const;

export default function Home() {
  return (
    <main
      id="top"
      className="site-shell"
      onPointerMove={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", `${event.clientX}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${event.clientY}px`);
      }}
    >
      <div className="cursor-glow" aria-hidden="true" />
      <section className="intro-panel" aria-labelledby="intro-title">
        <div className="intro-content">
          <a href="#top" className="name-link" aria-label="Back to top"><h1 id="intro-title">Arjun Kaliyath</h1></a>
          <p className="role">Software Engineer</p>
          <p className="tagline">I build reliable cloud, full-stack, and AI systems for complex problems.</p>
          <p className="location"><MapPin aria-hidden="true" /> Gainesville, Florida</p>
        </div>
        <div className="intro-footer">
          <div className="social-links" aria-label="Social links">
            <a href="https://github.com/ArjunKaliyath" target="_blank" rel="noreferrer" aria-label="GitHub"><Github aria-hidden="true" /></a>
            <a href="https://linkedin.com/in/arjun-kaliyath" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a>
            <a href="mailto:kaliyatharjun@gmail.com" aria-label="Email Arjun"><Mail aria-hidden="true" /></a>
          </div>
          <a href="#about" className="scroll-cue">Scroll to explore <ArrowDown aria-hidden="true" /></a>
        </div>
      </section>

      <div id="content" className="content-column">
        <nav aria-label="Section navigation" className="section-nav">
          {navigation.map(([label, href], index) => <a href={href} key={label}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
        </nav>
        <section id="about" className="content-section about-section" aria-labelledby="about-title">
          <p className="section-label" id="about-title">About</p>
          <div className="prose">
            <p>I&apos;m a software engineer who enjoys turning demanding technical problems into clear, dependable products. My work spans backend systems, cloud infrastructure, responsive interfaces, and applied AI.</p>
            <p>Currently, I&apos;m building biomedical research tools at <strong>UF Health</strong>. I&apos;ve completed my master&apos;s in computer science at the <strong>University of Florida</strong> and am immediately available for software engineering opportunities. Previously, I spent nearly three years at <strong>Accenture</strong> shipping healthcare software at enterprise scale.</p>
            <p>I care about systems that are thoughtfully designed, easy to operate, and genuinely useful to the people relying on them.</p>
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <p className="section-label" id="experience-title">Experience</p>
          <div className="timeline">
            {experience.map((job) => (
              <article className="experience-item" key={`${job.company}-${job.role}`}>
                <div className="experience-meta"><time>{job.period}</time><span>{job.location}</span></div>
                <div>
                  <h2>{job.role}</h2><p className="company">{job.company}</p><p className="job-summary">{job.summary}</p>
                  <ul className="highlight-list">{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <ul className="tag-list" aria-label={`Technologies used at ${job.company}`}>{job.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-title">
          <div className="section-heading-row">
            <p className="section-label" id="projects-title">Selected projects</p>
            <a className="text-link" href="https://github.com/ArjunKaliyath" target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <a className="project-item" href={project.href} target="_blank" rel="noreferrer" key={project.name}>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="project-copy">
                  <p className="project-category">{project.category}</p>
                  <h2>{project.name} <ArrowUpRight aria-hidden="true" /></h2>
                  <p>{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section" aria-labelledby="skills-title">
          <p className="section-label" id="skills-title">Technical toolkit</p>
          <div className="skills-grid">{skillGroups.map((group) => <div className="skill-group" key={group.label}><h2>{group.label}</h2><p>{group.items.join(" / ")}</p></div>)}</div>
        </section>

        <section className="content-section education" aria-labelledby="education-title">
          <p className="section-label" id="education-title">Education</p>
          <div className="education-item"><div><p className="degree">Master of Science in Computer Science</p><p>University of Florida</p></div><p>Aug 2024 - May 2026</p></div>
          <div className="education-item"><div><p className="degree">Bachelor of Engineering in Electronics &amp; Communication</p><p>NMAM Institute of Technology</p></div><p>Aug 2015 - Aug 2019</p></div>
        </section>

        <section className="contact-block" aria-labelledby="contact-title">
          <p className="eyebrow">What&apos;s next?</p><h2 id="contact-title">Let&apos;s build something useful.</h2>
          <p>I&apos;m immediately available for software engineering roles and conversations about backend, cloud, and AI-focused products.</p>
          <a className="contact-button" href="mailto:kaliyatharjun@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </section>

        <footer><p>Designed and built by Arjun Kaliyath.</p><a href="#top">Back to top <ArrowUpRight aria-hidden="true" /></a></footer>
      </div>
    </main>
  );
}
