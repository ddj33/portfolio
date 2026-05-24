import type { ReactNode } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/dylan-johnson-restrepo-43b217298/";
const CV_URL = "/Dylan_Johnson_Restrepo_CV.pdf";

const EMAIL = "ddj33@cornell.edu";

type Project = {
  title: string;
  tag: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

const projects: Project[] = [
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

type Experience = {
  org: string;
  role: string;
  when: string;
};

const experience: Experience[] = [
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
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Header />
        <Hero />

        <Section id="about" title="About">
          <p className="text-slate-700 leading-relaxed">
            I&rsquo;m studying Connective Media at Cornell Tech, an interdisciplinary
            master&rsquo;s program across computer science, information systems, human
            computer interaction, and entrepreneurship. Before Cornell Tech I graduated
            cum laude with honors from Brandeis and worked on research and analytics teams
            at Moody&rsquo;s, the World Bank, and d-AI-ta, where I&rsquo;m a technical lead
            on AI adoption and reliability. My collaborators and I have co-authored
            peer-reviewed AI research on transformer interpretability, output reliability,
            and chatbot safety, with talks at AI conferences in London. I&rsquo;m looking
            for roles where I can contribute to AI product, product engineering, data
            driven systems, workflow automation, or technical product strategy.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {experience.map((e) => (
              <li key={e.org + e.when} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium text-slate-900">{e.org}</p>
                  <p className="text-sm text-slate-600">{e.role}</p>
                </div>
                <p className="text-sm text-slate-500 shrink-0">{e.when}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-slate-500">
            Full work history on the{" "}
            <a
              href={CV_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              CV
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
            The best way to reach me is by email. I&rsquo;m happy to talk about roles,
            fellowships, research collaborations, or interesting problems.
          </p>
          <div className="flex flex-wrap gap-3">
            <PrimaryLink href={`mailto:${EMAIL}`}>Email me</PrimaryLink>
            <SecondaryLink href={LINKEDIN_URL}>LinkedIn</SecondaryLink>
            <SecondaryLink href={CV_URL}>Download CV</SecondaryLink>
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
    <header className="flex items-center justify-between mb-12">
      <span className="text-sm font-medium tracking-tight text-slate-900">
        Dylan Johnson Restrepo
      </span>
      <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
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
    <section className="mb-16">
      <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
        Cornell Tech · MS Connective Media
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
        Dylan Johnson Restrepo
      </h1>
      <p className="mt-4 text-lg text-slate-700">
        AI Product · Product Engineering · Workflow Automation
      </p>
      <p className="mt-6 text-xl text-slate-800 leading-relaxed">
        Building AI tools that fit real workflows.
      </p>
      <p className="mt-4 text-slate-600 leading-relaxed">
        I&rsquo;m a master&rsquo;s student at Cornell Tech focused on AI product,
        product engineering, workflow automation, and human centered systems. I work
        on practical AI tools that help people manage complex workflows, make better
        decisions, and trust the systems they use.
      </p>
      <p className="mt-3 text-sm text-slate-500">
        Currently: Technical Lead at d-AI-ta (AI adoption consultancy) · Co-author on
        peer-reviewed AI reliability research.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <PrimaryLink href={`mailto:${EMAIL}`}>Email me</PrimaryLink>
        <SecondaryLink href={LINKEDIN_URL}>LinkedIn</SecondaryLink>
        <SecondaryLink href={CV_URL}>Download CV</SecondaryLink>
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
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-slate-300">
      <div className="flex items-center justify-between gap-4">
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
        <span className="shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
          {project.tag}
        </span>
      </div>
      <p className="mt-3 text-slate-700 leading-relaxed">{project.description}</p>
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
