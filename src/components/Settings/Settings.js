import React from "react";
import "./Settings.css";
import classnames from "classnames";

export default class Settings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isNameFocused: false,
      isEmailFocused: false,
      isPasswordFocused: false,
      isConfirmPasswordFocused: false,
    };
  }

  getPasswordClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-focused": this.state.isPasswordFocused,
    });
  }

  getConfirmPasswordClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-focused": this.state.isConfirmPasswordFocused,
    });
  }

  onBlurName(e) {
    this.setState({ isNameFocused: false });
    this.props.updateName(e.target.value);
  }

  onBlurEmail(e) {
    this.setState({ isEmailFocused: false });
    this.props.updateEmail(e.target.value);
  }

  render() {
    return (
      <div className="Settings">
        <h1>Settings</h1>
        <div className="Settings-card">
          <h2>Account details</h2>
          {!this.state.isEditing && (
            <i
              className="Settings-edit sg-icon sg-icon-pencil"
              onClick={() => this.setState({ isEditing: true })}
            ></i>
          )}
          {this.state.isEditing ? (
            <>
              <div
                className="input-text-wrap is-focused"
                onBlur={(e) => this.onBlurName(e)}
                onFocus={() => this.setState({ isNameFocused: true })}
              >
                <label className="input-text-label" htmlFor="name">
                  Name
                </label>
                <input type="text" id="name" defaultValue={this.props.name} />
              </div>
              <div
                className="input-text-wrap is-focused"
                onBlur={(e) => this.onBlurEmail(e)}
                onFocus={() => this.setState({ isEmailFocused: true })}
              >
                <label className="input-text-label" htmlFor="email">
                  Email
                </label>
                <input type="text" id="email" defaultValue={this.props.email} />
              </div>
              <div
                className={this.getPasswordClassnames()}
                onBlur={() => this.setState({ isPasswordFocused: false })}
                onFocus={() => this.setState({ isPasswordFocused: true })}
              >
                <label className="input-text-label" htmlFor="password">
                  Password
                </label>
                <input type="password" id="password" />
                <span className="input-info">
                  Passwords should be 8 or more characters.
                </span>
              </div>
              <div
                className={this.getConfirmPasswordClassnames()}
                onBlur={() =>
                  this.setState({ isConfirmPasswordFocused: false })
                }
                onFocus={() =>
                  this.setState({ isConfirmPasswordFocused: true })
                }
              >
                <label className="input-text-label" htmlFor="confirm_password">
                  Confirm password
                </label>
                <input type="password" id="confirm_password" />
                <span className="input-info">Passwords must match.</span>
              </div>
              <div className="conf-alert-actions">
                <div className="btn-list">
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ isEditing: false })}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => this.setState({ isEditing: false })}
                  >
                    Save
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="Settings-item">
                <h4>Name</h4>
                {this.props.name}
              </div>
              <div className="Settings-item">
                <h4>Email</h4>
                {this.props.email}
              </div>
              <div className="Settings-item">
                <h4>Password</h4>
                <input disabled type="password" value="abcdefgh" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
