import type { Certification } from "@/data/certifications";

function mmYYYY(s: string) {
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function CarteAttestation({ c }: { c: Certification }) {
  const estExpire = c.status === "expired" || (!!c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={`border rounded-2xl p-4 hover:shadow-lg transition ${estExpire ? "opacity-70" : ""}`}
      aria-label={`Certification ${c.title}`}
    >
      <h3 className="font-semibold leading-snug">{c.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">
        {c.issuer} · {mmYYYY(c.issueDate)}
        {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
        {c.credentialId ? ` · ID ${c.credentialId}` : ""}
      </p>

      {c.skills?.length ? (
        <p className="mt-2 text-sm">Compétences : {c.skills.join(", ")}</p>
      ) : null}

      <div className="mt-3 flex items-center gap-3 text-sm">
        {c.credentialUrl && (
          <a className="underline" href={c.credentialUrl} target="_blank" rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}>
            Voir le certificat
          </a>
        )}
        {estExpire && <span>Expirée</span>}
        {c.status === "revoked" && <span>Révoquée</span>}
      </div>
    </article>
  );
}
