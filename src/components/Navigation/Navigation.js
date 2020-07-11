import React from "react";
import "./Navigation.css";
import classnames from "classnames";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isProfileDropdownOpen: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  dropdownClasses() {
    return classnames({
      btn: true,
      "btn-tertiary": true,
      "btn-dropdown": true,
      "has-icon": true,
      dropdown: true,
      "is-active": this.state.isProfileDropdownOpen,
    });
  }

  toggleDropdown() {
    this.setState((prevState) => ({
      isProfileDropdownOpen: !prevState.isProfileDropdownOpen,
    }));
  }

  render() {
    return (
      <div className="Navigation">
        <div className="Navigation-logo" alt="logo" />
        <div className="Navigation-items">
          <span className="Navigation-item">
            Products
            <i className="sg-icon sg-icon-caret" />
          </span>
          <span className="Navigation-item">
            Docs
            <i className="sg-icon sg-icon-caret" />
          </span>
          <span className="Navigation-item">
            About
            <i className="sg-icon" />
          </span>
          <span className="Navigation-item">
            Careers
            <i className="sg-icon" />
          </span>
        </div>
        {this.props.isLoggedIn ? (
          <div className={this.dropdownClasses()} onClick={this.toggleDropdown}>
            <i className="sg-icon sg-icon-teammate" />
            {this.props.name}
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-link">Dashboard</a>
              </li>
              <li>
                <a className="dropdown-link">Settings</a>
              </li>
              <li>
                <a
                  className="dropdown-link"
                  onClick={() => this.props.updateIsLoggedIn(false)}
                >
                  Log out
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="btn-list">
            <button className="btn btn-secondary">Log in</button>
            <button
              className="btn btn-primary"
              onClick={this.props.handleOpenSignUpModal}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    );
  }
}
