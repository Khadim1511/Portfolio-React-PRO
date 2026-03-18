import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const lienActif = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-violet-400 font-semibold" : "text-gray-400 hover:text-white transition-colors";

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-background/80">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg text-white tracking-tight">
            Khadim<span className="text-violet-400">.dev</span>
          </NavLink>
          <div className="flex items-center gap-6 text-sm">
            <NavLink to="/projects" className={lienActif}>Projets</NavLink>
            <NavLink to="/experience" className={lienActif}>Parcours</NavLink>
            <NavLink to="/education" className={lienActif}>Formations</NavLink>
            <NavLink to="/certifications" className={lienActif}>Certifications</NavLink>
            <NavLink to="/contact" className={lienActif}>Contact</NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 text-center py-6 text-sm text-gray-500">
        © 2025 Khadim SEYE — contact@khadimseye.org
      </footer>
    </div>
  );
}
