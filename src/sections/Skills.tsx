const SKILLS = {
  Frontend: ["React", "TypeScript", "TailwindCSS", "Vue"],
  Tools: ["Git", "GitHub", "CI/CD", "Figma", "Jira","Azure DevOps"],
  Cloud: ["Vercel", "Azure", "AWS", "Netlify"],
  Programming:["Python","Java",".NET"],
  Backend:["C#","SQL","NoSQL","Postgres"],
};

export default function Skills() {
  return (
    <section id="skills" className="px-4 pt-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Skills
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-sm font-semibold text-white">{group}</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue/70">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
