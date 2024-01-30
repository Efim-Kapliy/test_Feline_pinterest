import { Container } from "react-bootstrap";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <div className="header">
      <Container>
        <nav>
          <ul className="header__navbar">
            <li>
              <a href="#home" className="navbar__link">
                Все котики
              </a>
            </li>
            <li>
              <a href="#features" className="navbar__link">
                Любимые котики
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};
export default AppHeader;
