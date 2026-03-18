import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section className="grid gap-8 max-w-2xl mx-auto lg:mx-0">
      <div className="space-y-3 text-center lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white">Contact</h2>
        <p className="text-gray-400 max-w-md mx-auto lg:mx-0">
          N'hésitez pas à me contacter pour toute collaboration, opportunité ou simplement pour discuter de technologie.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <a 
          href={`mailto:${profile.email}`}
          className="group flex flex-col gap-2 border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold mt-2">Email</span>
          <span className="text-white font-medium truncate">{profile.email}</span>
        </a>

        <a 
          href={`https://${profile.website}`} 
          target="_blank" 
          rel="noreferrer"
          className="group flex flex-col gap-2 border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold mt-2">Site Web</span>
          <span className="text-white font-medium truncate">{profile.website}</span>
        </a>

        {profile.socials.map((s) => (
          <a 
            key={s.label} 
            href={s.href} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-4 border border-white/10 rounded-2xl px-6 py-4 bg-white/5 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300 sm:col-span-2"
          >
            <div className="text-violet-400 group-hover:translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
            <span className="text-white font-medium">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
