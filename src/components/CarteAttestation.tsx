import type { Certification } from "@/data/certifications";
import { clsx } from "clsx";

function mmYYYY(s: string) {
  // If it's already a readable date like "oct. 2025", just return it
  if (s.includes(".")) return s;
  
  const parts = s.split("-");
  if (parts.length < 2) return s;
  
  const [y, m] = parts;
  return `${m}/${y}`;
}

export default function CarteAttestation({ c }: { c: Certification }) {
  const estExpire = c.status === "expired" || (!!c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] hover:border-violet-500/50 transition-all duration-300",
        estExpire && "opacity-60 grayscale-[0.5]"
      )}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-white group-hover:text-violet-400 transition-colors leading-tight">
            {c.title}
          </h3>
          <p className="text-sm font-medium text-violet-300/80">
            {c.issuer}
          </p>
        </div>
        {c.status === "active" && !estExpire && (
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        )}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400 font-medium uppercase tracking-wider">
        <span>{mmYYYY(c.issueDate)} {c.expiryDate ? `→ ${mmYYYY(c.expiryDate)}` : ""}</span>
        {c.credentialId && (
          <span className="flex items-center gap-1">
            <span className="text-gray-600">•</span>
            ID: {c.credentialId}
          </span>
        )}
      </div>

      {c.skills?.length ? (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {c.skills.map(s => (
            <span key={s} className="px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] text-violet-300 font-semibold uppercase tracking-tight">
              {s}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
        {c.credentialUrl ? (
          <a 
            href={c.credentialUrl} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-xl transition-all shadow-lg shadow-violet-600/20 hover:shadow-violet-600/40 active:scale-95"
          >
            Voir le certificat
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        ) : (
          <span className="text-sm text-gray-500 italic">Preuve non disponible</span>
        )}
        
        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
          {estExpire && <span className="text-red-400">Expiré</span>}
          {c.status === "revoked" && <span className="text-red-500">Révoqué</span>}
        </div>
      </div>
    </article>
  );
}
