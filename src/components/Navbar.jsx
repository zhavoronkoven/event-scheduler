import { NavLink } from "react-router";
import { useAuth } from "@/hooks";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  // const organiserAvatarLetters = organiser.name ? String(organiser.name).toUpperCase().slice(0, 2) : String(organiser.email).toUpperCase().slice(0, 2);

  return (
    <div className="mono-meta">
      <NavLink to="/" className="nav-link">
        Explore
      </NavLink>

      {isAuthenticated ? (
        <>
          <NavLink to="/events/create" className="nav-link">
            Create new event
          </NavLink>
        </>
      ) : (
        <></>
      )}

      <span className="text-es-outline hidden xl:inline">•</span>

      {!isAuthenticated ? (
        <>
          <NavLink to="/login" className="nav-link">
            Sign in
          </NavLink>
          <NavLink to="/register" className="ml-5 cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800 disabled:opacity-50">
            Sign up
          </NavLink>
        </>
      ) : (
        <>
          <button type="button" className="nav-link" onClick={logout}>
            Sign out
          </button>
          <div className="avatar avatar-placeholder mr-2">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <span>AA</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
