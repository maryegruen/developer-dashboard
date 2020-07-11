import React from "react";
import "./SignUpSuccess.css";

export default class SignUpSuccess extends React.PureComponent {
  render() {
    return (
      <div className="SignUpSuccess">
        <h2>Success!</h2>
        <i className="sg-icon sg-icon-status-positive is-size-60"></i>
        <p className="SignUpSuccess-description">
          Click submit to create your account or use the Back button to review
          your info.
        </p>
      </div>
    );
  }
}
