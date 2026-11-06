import type { ReactNode } from "react";
import Image from "next/image";

const LINKEDIN_URL = "https://www.linkedin.com/in/dylan-johnson-restrepo-43b217298/";
const CV_URL = "/Dylan_Johnson_Aug2026_Email_Updated.pdf";

const EMAIL = "dylandjrestrepo@gmail.com";

type Project = {
  title: string;
  tag: string;
  description: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  caption?: string;
  status?: string;
  metrics?: { value: string; label: string }[];
  tools?: string;
  href?: string;
  linkLabel?: string;
};

const supportingProjects: Project[] = [
  {
    title: "Outreach Bot",
    tag: "AI Workflow Automation",
    description:
      "A job outreach and application assistant that helps manage roles, contacts, follow ups, fit scoring, and personalized messages in one workflow. Built to use context from resumes, job descriptions, prior outreach, and contact history so outreach feels relevant instead of generic.",
    href: "https://raug-resume-builder.vercel.app/",
    linkLabel: "Try the chatbot",
  },
  {
    title: "BrainBot",
    tag: "Personal AI Assistant",
    description:
      "An AI assistant concept focused on helping users organize thoughts, remember context, and turn scattered information into useful next steps. The project explores how a personal AI system can support planning, reflection, decision making, and knowledge management without feeling overwhelming.",
    href: "https://docs.google.com/presentation/d/1akjSV3FvY9sEdeEluzmHX_UVlxZe_MFIQcgg4jcK5fw/edit?usp=sharing",
    linkLabel: "View presentation",
  },
  {
    title: "LLM Tipping Points",
    tag: "AI Reliability Research",
    description:
      "Research at d-AI-ta on detecting when LLM systems quietly degrade — appearing reliable, then drifting under ambiguity, complexity, or pressure before users notice. Co-developed a tipping-point analysis tool covering legal, financial, healthcare, and security domains. Co-authored peer-reviewed work with talks at AI conferences in London (2025, 2026).",
    href: "https://d-ai-ta.netlify.app/",
    linkLabel: "Open demo",
  },
  {
    title: "RiskNet",
    tag: "Reputation Risk Analysis",
    description:
      "An interactive demo that analyzes reputation risk for companies and public figures using an AI engine, Wikipedia as a RAG source, and a proprietary dataset spanning 30+ social media platforms.",
    href: "https://risknet.vercel.app/",
    linkLabel: "Open demo",
  },
  {
    title: "LLM Token Dynamics — NetLogo Simulator",
    tag: "Research Visualization",
    description:
      "An agent-based simulation that visualizes the fusion and fission of tokens across the layers of a large language model, built to make internal LLM behavior more legible.",
    href: "https://gwdonlab.github.io/netlogo-simulator/",
    linkLabel: "Open simulator",
  },
];

const projects: Project[] = [
  {
    title: "MKRO · Operations & Logistics",
    tag: "Product engineering",
    status: "Professional work · Summer 2026",
    image: "/images/mkro-operations.svg",
    imageAlt: "Operations architecture: orders and planning in Airtable connect to AfterShip tracking, deadline checks, and Discord alerts.",
    caption: "System overview · simplified architecture diagram",
    metrics: [{ value: "98", label: "orders supported" }, { value: "29", label: "active shipments in project scope" }],
    description:
      "Designed and implemented an end-to-end operations automation platform integrating order management, shipment tracking, production planning, and deadline feasibility analysis into a single source of truth. The system synchronizes operational data across tools, automates status propagation, surfaces delivery risk proactively, and improves planning accuracy for customer orders and event-driven projects with hard deadlines.",
    bullets: [
      "Architected an Airtable-based operations data model spanning SKU-level lead times, production stages, shipping modes, and milestone dates — used as the single source of truth across sales, production, and fulfillment.",
      "Integrated AfterShip via API so live carrier tracking, ETAs, and delivery exceptions flow back into the operational record automatically, eliminating manual status entry.",
      "Built a Discord alerting layer that proactively surfaces ETA risk, overdue orders, tracking updates, and factory follow-ups to the right channels — shifting operations from reactive triage to early intervention.",
      "Designed scoped, permissioned views for external factory partners that expose only what they need to act on, hiding internal commercial and planning data behind row-level filters.",
      "Built a feasibility calculator that works backward from a hard event deadline to derive latest viable approval date, bottleneck SKUs, per-milestone target dates, slack days, and a green/yellow/red feasibility verdict — turning \"can we hit this?\" from a judgment call into a deterministic check.",
      "Isolated live order workflows from quote and prospect modeling as a deliberate architectural boundary, so speculative deal analysis can never mutate production-critical data.",
      "Worked directly with operations stakeholders to elicit requirements, iterate on workflows, and ship incrementally — designing the system around how the team actually plans, books, and fulfills work.",
    ],
    tools:
      "Airtable · AfterShip API · Discord Webhooks · JavaScript automations · REST API integrations · workflow architecture",
  },
  {
    title: "MKRO · AI Sales Intelligence",
    tag: "Applied AI",
    status: "Professional work · Summer 2026",
    image: "/images/mkro-sales.svg",
    imageAlt: "Sales intelligence workflow: company enrichment, qualification and scoring, decision-maker discovery, and personalized outreach.",
    caption: "Workflow overview · simplified process diagram",
    description: "Built an LLM-powered sales intelligence workflow for company research, lead qualification, and personalized outreach, connecting external data sources to operational CRM records.",
    metrics: [{ value: "296", label: "companies in the research workflow" }],
    bullets: [
      "Automated company enrichment and ecommerce detection to turn scattered prospect data into structured records.",
      "Connected lead scoring and decision-maker discovery with personalized outreach generation.",
      "Built event-driven integrations using REST APIs, Airtable, Seamless.ai, and webhooks.",
      "Partnered with founders to translate operating needs into tested software and repeatable workflows for non-technical users."
    ],
    tools: "LLMs · Airtable · Seamless.ai · REST APIs · Webhooks · JavaScript · Python"
  },
  {
    title: "AI Agent Hub",
    tag: "AI tooling",
    status: "Independent project",
    image: "/images/agent-hub.svg",
    imageAlt: "Agent Hub concept diagram showing a workspace connecting Claude, Codex, and local models with task routing and diagnostics.",
    caption: "System overview · conceptual diagram",
    description: "Built a dashboard for coordinating Claude, Codex, Ollama, and local-model workflows, bringing projects, tasks, diagnostics, and prompt routing into one workspace.",
    bullets: ["Organized project context, workspace management, and tasks alongside model workflows.", "Explored a practical interface for working across hosted AI tools and local models."],
    tools: "Next.js · React · TypeScript · Ollama · Local LLMs"
  },
  {
    title: "Emberline / PowerLab",
    tag: "Game development",
    status: "In development · Roblox prototype",
    image: "/images/game-workflow.svg",
    imageAlt: "Game-development process diagram: ability design, 3D asset refinement in Blender, and integration and iteration in Roblox Studio.",
    caption: "Development workflow · process diagram, not gameplay",
    description: "Developing a Roblox combat prototype focused on character abilities, movement, combat interfaces, and player feedback. An emerging direction alongside my AI and product work.",
    bullets: ["Iterating on the feel and readability of powers, movement, visual effects, and combat UI.", "Exploring an AI-assisted asset workflow with Higgsfield, Blender, and Roblox Studio.", "Current focus: stronger models, clearer feedback, and a more polished gameplay experience."],
    tools: "Roblox Studio · Blender · Higgsfield · Gameplay prototyping · Interface design"
  }
];

type Experience = {
  org: string;
  role: string;
  when: string;
  summary?: string;
};

const experience: Experience[] = [
  { org: "MKRO", role: "AI Engineer + Technical Project Manager", when: "June – August 2026", summary: "Built operations automation and AI sales-intelligence workflows; worked with founders to translate requirements into software used by non-technical teams." },
  { org: "d-AI-ta LLC", role: "Technical Lead, AI Adoption Consultancy", when: "2025 – Present" },
  { org: "Moody's", role: "Research Intern, Senior Director's team", when: "Summer 2024" },
  { org: "World Bank", role: "Climate Research Assistant", when: "Summer 2024" },
];

type Publication = {
  title: string;
  venue: string;
  year: string;
};

const publications: Publication[] = [
  {
    title: "When AI Output Tips to Bad but Nobody Notices: Legal Implications of AI's Mistakes",
    venue: "Springer Lecture Notes",
    year: "2026, in press",
  },
  {
    title: "Hidden Good-to-Bad Tipping in ChatGPT-like AI",
    venue: "AI, Computer Science & Robotics Technology",
    year: "2026",
  },
  {
    title: "Safety in ChatGPT-like Chatbots across Health, Finance, Law, Security and Defense Settings",
    venue: "Journal of Artificial Intelligence & Autonomous Intelligence",
    year: "2026",
  },
  {
    title: "Basic Attention Head as a Building Block Toward Understanding Transformer-Based Generative AI",
    venue: "Advances in Artificial Intelligence & Machine Learning",
    year: "2025",
  },
];

const skills: string[] = [
  "AI Product",
  "Product Engineering",
  "Workflow Automation",
  "RAG Systems",
  "LLM Evaluation",
  "Agentic AI",
  "Applied ML",
  "NLP",
  "Causal Inference",
  "Agent-based Simulation",
  "Human Computer Interaction",
  "User Research",
  "Python",
  "SQL",
  "JavaScript",
  "React",
  "Product Strategy",
  "TypeScript",
  "Next.js",
  "REST APIs & Webhooks",
  "Airtable",
  "Roblox Studio",
  "Blender",
  "3D Interaction Design",
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <Header />
        <Hero />

        <Section id="about" title="About">
          <p className="text-slate-700 leading-relaxed">
            I&rsquo;m pursuing a dual MEng in Computer Engineering + Applied Information
            Sciences at Cornell Tech, with graduation expected in May 2027. My work brings
            together AI engineering, product thinking, and human-computer interaction.
            At MKRO, I built operational software and AI-assisted sales workflows. At
            d-AI-ta, I work on AI adoption, reliability, and research. Earlier experience
            at Moody&rsquo;s and the World Bank shaped my interest in analytical tools
            that help people make decisions. I graduated from Brandeis cum laude with honors.
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I&rsquo;m especially interested in AI engineering, product engineering, and
            technical product roles. I&rsquo;m also exploring game development as a career
            path through hands-on work with gameplay systems, interfaces, and 3D assets.
          </p>
        </Section>

        <Section id="projects" title="Selected work">
          <p className="mb-6 max-w-2xl text-slate-600">From operational systems used by a business to independent AI tools and interactive prototypes. Here is what I built, how it works, and what I am exploring next.</p>
          <div className="grid items-start gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="explorations" title="Research, tools & interaction design">
          <div className="grid items-start gap-6 md:grid-cols-2">
            {supportingProjects.map((p) => <ProjectCard key={p.title} project={p} />)}
            <ProjectCard project={{
              title: "3D Interaction Design",
              tag: "VR / HCI",
              status: "Cornell Tech coursework",
              image: "/images/vr-gogo.png",
              imageAlt: "Dylan's Gravity Sketch illustration of the Go-Go reaching technique, with a virtual hand, target object, and coordinate axes.",
              caption: "Go-Go interaction explainer · original coursework image",
              description: "Explored selection, manipulation, and system-control techniques in virtual environments, including Go-Go, raycasting, and Gravity Sketch's Sphere Select interaction.",
              bullets: ["Created visual demonstrations of 3D interaction techniques.", "Compared tradeoffs in reach, precision, clutter, and user feedback."],
              tools: "Gravity Sketch · VR · Interaction design · Usability analysis"
            }} />
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {experience.map((e) => (
              <li key={e.org + e.when} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium text-slate-900">{e.org}</p>
                  <p className="text-sm text-slate-600">{e.role}</p>
                  {e.summary && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{e.summary}</p>}
                </div>
                <p className="text-sm text-slate-500 shrink-0">{e.when}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            Full work history in my{" "}
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              resume
            </a>
            .
          </p>
        </Section>

        <Section id="publications" title="Selected Publications">
          <ul className="space-y-4">
            {publications.map((p) => (
              <li key={p.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-medium text-slate-900 leading-snug">{p.title}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {p.venue} · {p.year}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-slate-700 leading-relaxed mb-6">
            The best way to reach me is by email. I&rsquo;m happy to talk about
            AI engineering and product roles, research collaborations, and opportunities in game development.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href={`mailto:${EMAIL}`}>Email me</PrimaryLink>
            <SecondaryLink href={LINKEDIN_URL}>LinkedIn</SecondaryLink>
            <SecondaryLink href={CV_URL}>Download resume</SecondaryLink>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Email:{" "}
            <a
              className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </p>
        </Section>

        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-12">
      <span className="text-sm font-medium tracking-tight text-slate-900">
        Dylan Johnson Restrepo
      </span>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-600">
        <a href="#about" className="hover:text-slate-900">About</a>
        <a href="#projects" className="hover:text-slate-900">Projects</a>
        <a href="#experience" className="hover:text-slate-900">Experience</a>
        <a href="#publications" className="hover:text-slate-900">Publications</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero mb-16 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-12">
      <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
        Cornell Tech · Dual MEng · Expected May 2027
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Dylan Johnson Restrepo
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        AI Engineering · Product Development · Game & Interaction Design
      </p>
      <p className="mt-6 text-xl text-slate-800 leading-relaxed">
        Building useful AI systems. Exploring what comes next.
      </p>
      <p className="mt-4 text-slate-600 leading-relaxed">
        I build AI tools and operational software that connect real workflows:
        from shipment tracking and sales intelligence to AI research and agent tools.
        I&rsquo;m also developing interactive experiences through game design and VR.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Technical Lead at d-AI-ta · Previously AI Engineer + Technical Project Manager at MKRO · Based in New York
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryLink href={`mailto:${EMAIL}`}>Email me</PrimaryLink>
        <SecondaryLink href={LINKEDIN_URL}>LinkedIn</SecondaryLink>
        <SecondaryLink href={CV_URL}>Download resume</SecondaryLink>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-16 scroll-mt-16">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-slate-400">
      {project.image && <figure className="border-b border-slate-200 bg-slate-50">
        <a href={project.image} target="_blank" rel="noreferrer" aria-label={`View full-size image for ${project.title}`}>
        <Image src={project.image} alt={project.imageAlt ?? project.title} width={1200} height={675} sizes="(min-width: 1024px) 468px, (min-width: 768px) 45vw, 90vw" className="aspect-video w-full object-contain" />
        </a>
        <figcaption className="px-5 py-2 text-xs leading-relaxed text-slate-500">{project.caption} <a className="ml-1 underline underline-offset-2" href={project.image} target="_blank" rel="noreferrer">View full size ↗</a></figcaption>
      </figure>}
      <div className="p-5 sm:p-6">
      <div className="flex flex-col items-start gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{project.tag}</span>
        <h3 className="text-lg font-semibold text-slate-900">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

      </div>
      {project.status && <p className="mt-2 text-xs font-medium text-slate-500">{project.status}</p>}
      <p className="mt-3 text-slate-700 leading-relaxed">{project.description}</p>
      {project.metrics && <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <div className="flex flex-wrap gap-6">{project.metrics.map(m => <div key={m.label}><p className="text-2xl font-semibold tracking-tight">{m.value}</p><p className="max-w-40 text-xs leading-relaxed text-slate-600">{m.label}</p></div>)}</div>
        <p className="mt-3 text-xs text-slate-500">Project scope during Summer 2026.</p>
      </div>}
      {project.bullets && (
        <details className="mt-5">
        <summary className="cursor-pointer text-sm font-semibold text-slate-800">Explore the work</summary>
        <ul className="mt-4 space-y-2 text-slate-700 leading-relaxed">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span aria-hidden className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-slate-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        </details>
      )}
      {project.tools && (
        <p className="mt-4 text-sm text-slate-500">
          <span className="font-medium text-slate-600">Tools:</span> {project.tools}
        </p>
      )}
      {project.href && (
        <p className="mt-4 text-sm">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
          >
            {project.linkLabel ?? "View"} →
          </a>
        </p>
      )}
      </div>
    </article>
  );
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
    >
      {children}
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  const isPlaceholder = href === "#";
  return (
    <a
      href={href}
      {...(isPlaceholder ? {} : { target: "_blank", rel: "noreferrer" })}
      className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-slate-900 hover:text-slate-900"
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 pt-6 text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Dylan Johnson Restrepo</p>
    </footer>
  );
}
