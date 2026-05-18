import type { ReactNode } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/dylan-johnson-restrepo-43b217298/";
// TODO: replace with the public link or PDF path for your CV (e.g. "/dylan-johnson-restrepo-cv.pdf")
const CV_URL = "#";

const EMAIL = "ddj33@cornell.edu";

type Project = {
  title: string;
  tag: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Outreach Bot",
    tag: "AI Workflow Automation",
    description:
      "A job outreach and application assistant that helps manage roles, contacts, follow ups, fit scoring, and personalized messages in one workflow. The system is designed to use context from resumes, job descriptions, prior outreach, and contact history so outreach feels more relevant and less generic.",
  },
  {
    title: "BrainBot",
    tag: "Personal AI Assistant",
    description:
      "An AI assistant concept focused on helping users organize thoughts, remember context, and turn scattered information into useful next steps. The project explores how a personal AI system can support planning, reflection, decision making, and knowledge management without feeling overwhelming.",
  },
  {
    title: "LLM Tipping Points",
    tag: "AI Reliability Research",
    description:
      "A research project exploring how LLM systems can appear reliable, then begin to degrade under ambiguity, complexity, or pressure before users clearly notice. The work focuses on trust, evaluation, uncertainty, escalation, and when AI systems should hand off to a human.",
  },
];

const skills: string[] = [
  "AI Product",
  "Product Engineering",
  "Workflow Automation",
  "RAG Systems",
  "LLM Evaluation",
  "Human Computer Interaction",
  "User Research",
  "Python",
  "JavaScript",
  "React",
  "Data Analysis",
  "Applied ML",
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
            computer interaction, and entrepreneurship. I&rsquo;m looking for roles where
            I can contribute to AI product, product engineering, data driven systems,
            workflow automation, or technical product strategy.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-4 sm:gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
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
        <a href="#skills" className="hover:text-slate-900">Skills</a>
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
        product engineering, workflow automation, and human centered systems.
        I&rsquo;m interested in building practical AI tools that help people manage
        complex workflows, make better decisions, and trust the systems they use.
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
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <span className="shrink-0 rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-white">
          {project.tag}
        </span>
      </div>
      <p className="mt-3 text-slate-700 leading-relaxed">{project.description}</p>
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
