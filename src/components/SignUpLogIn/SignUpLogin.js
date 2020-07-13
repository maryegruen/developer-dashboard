import React from "react";
import classnames from "classnames";

export default class SignUpLogin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isUsernameFocused: false,
      isPasswordFocused: false,
      isConfirmPasswordFocused: false,
    };
    this.onBlurUsername = this.onBlurUsername.bind(this);
  }

  getUsernameClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-required": true,
      "is-focused": this.state.isUsernameFocused,
    });
  }

  getPasswordClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-required": true,
      "is-focused": this.state.isPasswordFocused,
    });
  }

  getConfirmPasswordClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-required": true,
      "is-focused": this.state.isConfirmPasswordFocused,
    });
  }

  onBlurUsername(e) {
    if (e.target.value === "") {
      this.setState({ isUsernameFocused: false });
    }
  }

  onBlurPassword(e) {
    if (e.target.value === "") {
      this.setState({ isPasswordFocused: false });
    }
  }

  onBlurConfirmPassword(e) {
    if (e.target.value === "") {
      this.setState({ isConfirmPasswordFocused: false });
    }
  }

  render() {
    return (
      <>
        <div
          className={this.getUsernameClassnames()}
          onBlur={(e) => this.onBlurUsername(e)}
          onFocus={() => this.setState({ isUsernameFocused: true })}
        >
          <label className="input-text-label" htmlFor="username">
            Username
          </label>
          <input type="text" id="username" />
          <span className="input-info">
            Choose a unique username or use your email.
          </span>
        </div>
        <div
          className={this.getPasswordClassnames()}
          onBlur={(e) => this.onBlurPassword(e)}
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
          onBlur={(e) => this.onBlurConfirmPassword(e)}
          onFocus={() => this.setState({ isConfirmPasswordFocused: true })}
        >
          <label className="input-text-label" htmlFor="confirm_password">
            Confirm password
          </label>
          <input type="password" id="confirm_password" />
          <span className="input-info">Passwords must match.</span>
        </div>
      </>
    );
  }
}
