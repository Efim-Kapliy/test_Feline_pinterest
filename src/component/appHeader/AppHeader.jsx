import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <Container>
        <nav>
          <ul className="header__navbar">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "navbar__link navbar__link_active" : "navbar__link")}
              >
                Все котики
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive }) => (isActive ? "navbar__link navbar__link_active" : "navbar__link")}
              >
                Любимые котики
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
export default AppHeader;
