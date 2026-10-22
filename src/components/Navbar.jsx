import { useState } from "react";
import { NavLink } from "react-router";
import { useAuth } from "@/hooks";

const Navbar = () => {
  const { isAuthed: isAuthenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

const mobileLink = "block border-b border-es-divider py-4 uppercase";
  return (
    <nav className="mono-meta relative">
      {/* Desktop */}
      <div className="hidden items-center lg:flex">
        <NavLink to="/" className="nav-link">
          Kommende Events
        </NavLink>
        <NavLink to="/map" className="nav-link">
          Karte
        </NavLink>

        {isAuthenticated && (
          <NavLink to="/events/create" className="nav-link">
            Event erstellen
          </NavLink>
        )}

        <span className="text-es-outline px-2">•</span>

        {!isAuthenticated ? (
          <>
            <NavLink to="/login" className="nav-link">
              Anmelden
            </NavLink>
            <NavLink to="/register" className="ml-5 cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800">
              Registrieren
            </NavLink>
          </>
        ) : (
          <>
            <button type="button" className="nav-link cursor-pointer" onClick={logout}>
              Abmelden
            </button>
            <div className="avatar avatar-placeholder mr-2">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>AA</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Burger-Button (nur mobil) */}
      <button type="button" className="cursor-pointer p-2 lg:hidden" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
        </svg>
      </button>

      {/* Mobiles Menü */}
      {open && (
        <div id="mobile-menu" className="bg-es-background absolute top-full right-0 z-50 mt-2 w-64 border border-neutral-200 px-5 py-2 lg:hidden">
          <NavLink to="/" className={mobileLink} onClick={closeMenu}>
            Kommende Events
          </NavLink>
          <NavLink to="/map" className={mobileLink} onClick={closeMenu}>
            Karte
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/events/create" className={mobileLink} onClick={closeMenu}>
                Event erstellen
              </NavLink>
              <button type="button" className={`${mobileLink} w-full cursor-pointer text-left`} onClick={handleLogout}>
                Abmelden
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={mobileLink} onClick={closeMenu}>
                Anmelden
              </NavLink>
              <NavLink to="/register" className="mt-4 mb-2 block bg-black px-8 py-3 text-center text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800" onClick={closeMenu}>
                Registrieren
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;