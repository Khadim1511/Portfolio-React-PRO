import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold tracking-tight text-white">Parcours Professionnel</h2>
      <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12 mt-4">
        {experiences.map((exp, idx) => (
          <article key={idx} className="relative group">
            <span className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-4 w-4 rounded-full bg-violet-600 border-4 border-background group-hover:scale-125 group-hover:bg-violet-400 transition-all duration-300" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-xl text-white group-hover:text-violet-400 transition-colors">{exp.title}</h3>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{exp.period}</span>
            </div>
            <p className="text-violet-300/90 font-medium text-sm mb-4">
              {exp.company} <span className="text-gray-500 mx-2">•</span> {exp.type} <span className="text-gray-500 mx-2">•</span> {exp.location}
            </p>
            <ul className="text-sm text-gray-400 list-none space-y-3">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-violet-500 mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-violet-500/50" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
