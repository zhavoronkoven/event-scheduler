import { NavLink } from "react-router";
import { useAuth } from "@/hooks";

const Navbar = ({ closeMenu, isMobile }) => {
  const { isAuthed, logout } = useAuth();

  const handleLinkClick = () => {
    if (closeMenu) closeMenu();
  };

  const handleLogout = () => {
    logout();
    if (closeMenu) closeMenu();
  };

  return (
    <div className={`mono-meta ${isMobile ? 'flex flex-col gap-6 text-lg' : 'flex items-center gap-6'}`}>
      <NavLink to="/" className="nav-link" onClick={handleLinkClick}>
        Upcoming events
      </NavLink>
      <NavLink to="/map" className="nav-link" onClick={handleLinkClick}>
     Map
      </NavLink>

      {isAuthed && (
        <NavLink to="/events/create" className="nav-link" onClick={handleLinkClick}>
          Create new event
        </NavLink>
      )}

      {!isMobile && <span className="text-es-outline hidden xl:inline">•</span>}

      {!isAuthed ? (
        <>
          <NavLink to="/login" className="nav-link" onClick={handleLinkClick}>
            Sign in
          </NavLink>
          <NavLink
            to="/register"
            className={`cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800 ${isMobile ? 'inline-block text-center' : 'ml-5'}`}
            onClick={handleLinkClick}
          >
         Sign up
          </NavLink>
        </>
      ) : (
        <>
          <button type="button" className="nav-link cursor-pointer text-left" onClick={handleLogout}>
            Sign out
          </button>
          {!isMobile && (
            <div className="avatar avatar-placeholder mr-2">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span>AA</span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Navbar;