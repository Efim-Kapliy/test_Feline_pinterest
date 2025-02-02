import PropTypes from "prop-types";
import { Component } from "react";

import "./errorBoundary.scss";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return (
        <div id="main">
          <div className="fof">
            <h1>Something went wrong</h1>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
