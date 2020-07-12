import React from "react";
import classnames from "classnames";

export default class SignUpJob extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEmailFocused: false,
      isCompanyFocused: false,
      isNameFocused: false,
    };
  }

  getEmailClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-required": true,
      "is-focused": this.state.isEmailFocused,
    });
  }

  getCompanyClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-focused": this.state.isCompanyFocused,
    });
  }

  getNameClassnames() {
    return classnames({
      "input-text-wrap": true,
      "is-required": true,
      "is-focused": this.state.isNameFocused,
    });
  }

  onBlurName(e) {
    this.setState({ isNameFocused: false });
    this.props.updateName(e.target.value);
  }

  render() {
    return (
      <>
        <div
          className={this.getNameClassnames()}
          onBlur={(e) => this.onBlurName(e)}
          onFocus={() => this.setState({ isNameFocused: true })}
        >
          <label className="input-text-label" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" />
        </div>
        <div
          className={this.getEmailClassnames()}
          onBlur={() => this.setState({ isEmailFocused: false })}
          onFocus={() => this.setState({ isEmailFocused: true })}
        >
          <label className="input-text-label" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" />
        </div>
        <div
          className={this.getCompanyClassnames()}
          onBlur={() => this.setState({ isCompanyFocused: false })}
          onFocus={() => this.setState({ isCompanyFocused: true })}
        >
          <label className="input-text-label" htmlFor="company">
            Company
          </label>
          <input type="text" id="company" />
        </div>
        <div className="input-select-wrap">
          <label className="input-select-label" htmlFor="role">
            Role
          </label>
          <div className="input-select">
            <select id="role" placeholder="Select a role">
              <option></option>
              <option value="Developer">Developer</option>
              <option value="CEO">CEO</option>
              <option value="Marketer">Marketer</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </>
    );
  }
}
