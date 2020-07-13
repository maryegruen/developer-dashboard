import React from "react";
import "./Navigation.css";
import classnames from "classnames";
import { DASHBOARD_NAV_ITEMS } from "../Dashboard/Dashboard";

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
          <span className="Navigation-item small">
            Products
            <i className="sg-icon sg-icon-caret" />
          </span>
          <span className="Navigation-item small">
            Docs
            <i className="sg-icon sg-icon-caret" />
          </span>
          <span className="Navigation-item small">
            About
            <i className="sg-icon" />
          </span>
          <span className="Navigation-item small">
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
                <a
                  className="dropdown-link"
                  onClick={() =>
                    this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.DASHBOARD)
                  }
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="dropdown-link"
                  onClick={() =>
                    this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.SETTINGS)
                  }
                >
                  Settings
                </a>
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
