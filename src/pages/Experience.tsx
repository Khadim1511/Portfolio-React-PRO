import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Parcours Professionnel</h2>
      <div className="relative border-l border-white/20 pl-6 ml-3 space-y-8 mt-4">
        {experiences.map((exp, idx) => (
          <article key={idx} className="relative group">
            <span className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-violet-500 border-4 border-background group-hover:scale-125 transition-transform" />
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="text-violet-400 font-medium text-sm mt-1">{exp.company} <span className="text-gray-400 font-normal">| {exp.type}</span></p>
            <p className="text-gray-500 text-xs mt-1 mb-3">{exp.period} • {exp.location}</p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
