import { education } from "@/data/education";

function fmtDate(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return m ? `${m}/${y}` : y;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-s border-violet-500/30">
        {education.map((e) => (
          <li key={`${e.school}-${e.start}`} className="ms-6 pb-6">
            <span className="absolute -start-2 w-4 h-4 rounded-full bg-violet-500 border-2 border-background mt-1" />
            <h3 className="font-semibold">
              {e.degree}{e.field ? ` — ${e.field}` : ""} @ {e.school}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              {fmtDate(e.start)} → {fmtDate(e.end)}{e.location ? ` · ${e.location}` : ""}{e.gpa ? ` · GPA ${e.gpa}` : ""}
            </p>
            {e.courses?.length ? (
              <p className="mt-2 text-sm">Cours : {e.courses.slice(0, 5).join(", ")}</p>
            ) : null}
            {e.highlights?.length ? (
              <ul className="list-disc ms-5 mt-2 text-sm">
                {e.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
