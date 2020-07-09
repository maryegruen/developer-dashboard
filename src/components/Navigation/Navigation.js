import React, { PureComponent } from "react";
import "./Navigation.css";

export default class Navigation extends PureComponent {
  render() {
    return (
      <div className="Navigation">
        <div className="Navigation-logo" alt="logo" />
        <div class="Navigation-buttonList btn-list">
          <button class="btn btn-primary">Sign up</button>
          <button class="btn btn-secondary">Log in</button>
        </div>
      </div>
    );
  }
}
