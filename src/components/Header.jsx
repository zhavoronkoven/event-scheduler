import { Link } from "react-router";
import { useState } from "react";
import { Navbar } from "@/components";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="border-b-es-outline bg-es-background/60 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg">
        <div className="px-es-mobile lg:px-es-desktop container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="gap-es-gap headline flex items-center text-nowrap">
              Event Scheduler
              <span className="bg-es-accent inline-block h-2 w-2"></span>
            </Link>
            <div className="gap-es-gap mono-meta text-es-label hidden items-center uppercase lg:flex">
              <span className="hidden md:inline">[ Your Time, Your Place ]</span>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:block">
            <Navbar closeMenu={closeMenu} />
          </div>

          {/* Burger Button */}
          <button onClick={toggleMenu} className="text-es-primary hover:text-es-accent border-es-outline bg-es-background z-50 rounded border p-2 transition-colors duration-200 lg:hidden" aria-label="Toggle menu">
            {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Backdrop — outside header, so `fixed` is relative to viewport */}
      <div className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={closeMenu} />

      {/* Mobile Menu */}
      <aside className={`bg-es-background fixed top-16 right-0 bottom-0 z-40 w-70 overflow-y-auto shadow-2xl transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="px-6 py-8">
          <Navbar closeMenu={closeMenu} isMobile />
        </div>
      </aside>
    </>
  );
};

export default Header;
