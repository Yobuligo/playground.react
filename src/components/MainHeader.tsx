import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? styles.active : "";
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
};
export default MainHeader;
