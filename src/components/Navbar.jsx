// import { NavLink } from "react-router";

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
      <NavLink to="/neu" className={showActive}>
        + Neu
      </NavLink>
      <NavLink to="/details" className={showActive}>Details</NavLink>
      <NavLink to="/anmelden" className={showActive}>
        Anmelden
      </NavLink>
      <NavLink to="/registrieren" className={showActive}>
        Registrieren
      </NavLink>
    </nav>
  );
};

export default Navbar;
