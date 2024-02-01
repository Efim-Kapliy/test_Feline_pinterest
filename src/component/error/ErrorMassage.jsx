import "./errorMassage.scss";
import PropTypes from "prop-types";

const ErrorMassage = (props) => {
  const { children } = props;
  return (
    <section>
      <div className="animation">
        <h2>4</h2>
        <div className="scene">
          <div className="moon"></div>
          <ul className="stars">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className="clouds">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="ghost">
            <div className="ghost__tooltip">Буу!</div>
            <div className="ghost__eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="ghost__mouth"></div>
            <div className="ghost__tail"></div>
          </div>
        </div>
        <h2>4</h2>
      </div>
      {children}
    </section>
  );
};

ErrorMassage.propTypes = {
  children: PropTypes.element,
};

export default ErrorMassage;
