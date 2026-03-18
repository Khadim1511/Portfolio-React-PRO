import { education } from "@/data/education";

function fmtDate(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return m ? `${m}/${y}` : y;
}

export default function EducationPage() {
  return (
    <section className="grid gap-8">
      <h2 className="text-3xl font-bold tracking-tight text-white">Formations</h2>
      <ol className="relative border-l border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12 mt-4">
        {education.map((e) => (
          <li key={`${e.school}-${e.start}`} className="relative group">
            <span className="absolute -left-[29px] sm:-left-[37px] top-1.5 h-4 w-4 rounded-full bg-violet-600 border-4 border-background group-hover:scale-125 group-hover:bg-violet-400 transition-all duration-300" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-bold text-xl text-white group-hover:text-violet-400 transition-colors">
                {e.degree}{e.field ? ` — ${e.field}` : ""}
              </h3>
              <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                {fmtDate(e.start)} → {fmtDate(e.end)}
              </span>
            </div>
            <p className="text-violet-300/90 font-medium text-sm mb-4">
              {e.school} {e.location ? <><span className="text-gray-500 mx-2">•</span> {e.location}</> : ""} {e.gpa ? <><span className="text-gray-500 mx-2">•</span> GPA {e.gpa}</> : ""}
            </p>
            
            {e.courses?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                 {e.courses.join(", ").split(", ").map(c => (
                   <span key={c} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                     {c}
                   </span>
                 ))}
              </div>
            ) : null}

            {e.highlights?.length ? (
              <ul className="mt-4 text-sm text-gray-400 space-y-2">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="text-violet-500 mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-violet-500/50" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
