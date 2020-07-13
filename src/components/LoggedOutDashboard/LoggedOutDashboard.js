import React from "react";
import "./LoggedOutDashboard.css";

export default class LoggedOutDashboard extends React.PureComponent {
  render() {
    return (
      <div className="LoggedOutDashboard">
        <div className="card is-upsell">
          <h3>Create an account for your personalized developer dashboard.</h3>

          <div className="btn-list">
            <button
              className="btn btn-primary btn-small"
              onClick={this.props.handleOpenSignUpModal}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
