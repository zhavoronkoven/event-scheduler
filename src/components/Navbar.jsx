import { NavLink } from "react-router";
import { useAuth } from "@/hooks";

const Navbar = () => {
  const { isAuthed, logout } = useAuth();

  return (
    <div className="mono-meta">
      <NavLink to="/" className="nav-link">
        Upcoming events
      </NavLink>
      <NavLink to="/map" className="nav-link">
        Map
      </NavLink>

      {isAuthed && (
        <NavLink to="/events/create" className="nav-link">
          Create new event
        </NavLink>
      )}

      <span className="text-es-outline hidden xl:inline">•</span>

      {!isAuthed ? (
        <>
          <NavLink to="/login" className="nav-link">
            Sign in
          </NavLink>
          <NavLink to="/register" className="ml-5 cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800">
            Sign up
          </NavLink>
        </>
      ) : (
        <>
          <button type="button" className="nav-link cursor-pointer" onClick={logout}>
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