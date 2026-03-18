import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CarteAttestation from "@/components/CarteAttestation";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const liste = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <input
          placeholder="Filtrer (ex: React, Python...)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="border border-white/10 rounded-xl px-4 py-2.5 w-full md:w-72 bg-white/5 text-sm focus:outline-none focus:border-violet-500 transition-colors"
          aria-label="Filtrer les certifications"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liste.map((c) => <CarteAttestation key={`${c.title}-${c.issueDate}`} c={c} />)}
      </div>
    </section>
  );
}
