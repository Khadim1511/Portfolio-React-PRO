export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 gap-6 min-h-[60vh]">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Découvrez mes Projets
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Tous mes projets, qu'ils soient étudiants, personnels ou professionnels, sont centralisés et disponibles en open-source.
        </p>
      </div>
      
      <a 
        href="https://github.com/Khadim1511" 
        target="_blank" 
        rel="noreferrer"
        className="group relative mt-8 flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:rotate-12">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        Explorer mon GitHub
        
        {/* Glow effect minimaliste */}
        <span className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></span>
      </a>
    </section>
  );
}
