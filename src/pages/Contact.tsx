import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-lg">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-gray-400">N'hésite pas à me contacter pour toute collaboration ou opportunité.</p>

      <div className="flex flex-col gap-3">
        <a href={`mailto:${profile.email}`}
          className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:border-violet-500/60 transition">
          <span className="text-violet-400">✉</span>
          <span>{profile.email}</span>
        </a>
        <a href={`https://${profile.website}`} target="_blank" rel="noreferrer"
          className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:border-violet-500/60 transition">
          <span className="text-violet-400">🌐</span>
          <span>{profile.website}</span>
        </a>
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            className="flex items-center gap-3 border rounded-xl px-4 py-3 hover:border-violet-500/60 transition">
            <span className="text-violet-400">→</span>
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
