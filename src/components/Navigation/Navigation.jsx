import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css"

function getLinkClass({isActive}){
return clsx(css.link, isActive && css.active)
}

function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={getLinkClass}>Homepage</NavLink>
        </li>
        <li>
            <NavLink to="movies" className={getLinkClass}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
