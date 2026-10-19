import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="mono-meta">
      <NavLink to="/" className="nav-link">
        Explore
      </NavLink>
      <NavLink to="/events/create" className="nav-link">
        Create new event
      </NavLink>
      <span className="text-es-outline hidden xl:inline">•</span>
      <NavLink to="/login" className="nav-link">
        Sign in
      </NavLink>
      <NavLink to="/register" className="ml-5 cursor-pointer bg-black px-8 py-3 text-[11px] font-bold tracking-wider text-white uppercase hover:bg-neutral-800 disabled:opacity-50">
        Sign up
      </NavLink>
    </div>
  );
};

export default Navbar;
