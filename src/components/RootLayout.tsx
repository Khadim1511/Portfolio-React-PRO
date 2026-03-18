import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking a link or resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lienActif = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "transition-colors duration-200",
      isActive ? "text-violet-400 font-semibold" : "text-gray-400 hover:text-white"
    );

  const navigationLinks = [
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Parcours" },
    { to: "/education", label: "Formations" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col relative overflow-x-hidden">
      {/* Mobile Overlay Menu - Moved outside header for better stacking context */}
      <div 
        className={clsx(
          "fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"
        )}
        style={{ backgroundColor: "#0a0a0f" }}
      >
        {navigationLinks.map((link, idx) => (
          <NavLink 
            key={link.to} 
            to={link.to} 
            className={({ isActive }) => clsx(
              "text-3xl font-bold tracking-tight transition-all duration-300",
              isActive ? "text-violet-400" : "text-gray-400 hover:text-white",
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isMenuOpen ? `${idx * 100}ms` : "0ms" }}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        
        {/* Mobile menu decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] -z-10" />
      </div>

      <header className="sticky top-0 z-[60] border-b border-white/10 backdrop-blur-md bg-background/80">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
          <NavLink 
            to="/" 
            className="font-bold text-xl text-white tracking-tight z-[70]"
            onClick={() => setIsMenuOpen(false)}
          >
            Khadim<span className="text-violet-400">.dev</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={lienActif}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[70] p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 md:py-16 flex-grow w-full">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 text-center py-8 text-sm text-gray-500 bg-background relative z-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Khadim SEYE • Tous droits réservés</p>
          <a href="mailto:contact@khadimseye.org" className="hover:text-violet-400 transition-colors">
            contact@khadimseye.org
          </a>
        </div>
      </footer>
    </div>
  );
}
