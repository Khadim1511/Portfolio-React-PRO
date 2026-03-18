import { profile } from "@/data/profile";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative flex flex-col-reverse lg:grid lg:grid-cols-[1fr_400px] items-center gap-12 py-10 md:py-20 animate-in fade-in duration-700">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-violet-600/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col z-10 w-full">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm text-violet-300 backdrop-blur-sm w-fit mb-2 mx-auto lg:mx-0">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2 animate-pulse"></span>
             Disponible pour de nouvelles opportunités
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.1]">
            Salut, je suis <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
              {profile.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-gray-300 font-medium font-['Outfit']">
            {profile.role}
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl leading-relaxed mt-4 mx-auto lg:mx-0">
            {profile.about}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link 
            to="/projects" 
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-0.5"
          >
            Explorer mes projets
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link 
            to="/contact" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-gray-300 border border-white/10 hover:bg-white/5 transition-colors backdrop-blur-sm text-center"
          >
            Me contacter
          </Link>
        </div>

        {/* Skills */}
        <div className="mt-12 text-center lg:text-left">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Stack technique principal</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
            {profile.skills.map((s, idx) => (
              <span 
                key={s} 
                className="bg-white/5 border border-white/10 text-gray-300 px-4 py-1.5 rounded-full text-sm hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white transition-colors cursor-default"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Socials & Location */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-2 text-gray-400 text-sm order-2 sm:order-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
             {profile.location}
           </div>
           <div className="flex items-center gap-6 order-1 sm:order-2">
             {profile.socials.map((s) => (
               <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-white transition-colors font-medium text-sm">
                 {s.label}
               </a>
             ))}
           </div>
        </div>
      </div>

      {/* Profile Image container */}
      <div className="relative flex justify-center lg:justify-end z-10 w-full mb-8 lg:mb-0">
        <div className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
          {/* Animated border gradient */}
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-indigo-500 rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-70 blur-sm"></div>
          
          {/* Image wrapper */}
          <div className="absolute inset-0.5 rounded-[2rem] bg-background overflow-hidden p-2">
            <div className="w-full h-full rounded-3xl overflow-hidden relative">
              <img
                src="/photo.jpeg"
                alt={`Photo de profil de ${profile.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
