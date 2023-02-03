import { NavLink, Outlet } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.isActive : "";
              }}
              to="persons"
            >
              Persons
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
