import { NavLink } from "react-router";

const Navbar = () => {
  function showActive({ isActive }) {
    return isActive ? "tab btn-active" : "tab btn hover:btn-accent";
  }
  return (
    <nav role="tablist" className="tabs tabs-border justify-self-end">
      <NavLink role="tab" to="/" className={showActive}>
        Home
      </NavLink>
      <NavLink to="/new-event" className={showActive}>
        + New
      </NavLink>
      <NavLink to="/events/:title" className={showActive}>
        Details
      </NavLink>
      <NavLink to="/login" className={showActive}>
        Sign in
      </NavLink>
      <NavLink to="/register" className={showActive}>
        Sign up
      </NavLink>
    </nav>
  );
};

export default Navbar;
