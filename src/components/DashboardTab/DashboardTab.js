import React from "react";
import "./DashboardTab.css";
import { DASHBOARD_NAV_ITEMS } from "../Dashboard/Dashboard";

export default class DashboardTab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowUpsell: true,
    };
    this.onClickGetStarted = this.onClickGetStarted.bind(this);
    this.onCloseUpsell = this.onCloseUpsell.bind(this);
  }

  getFirstName() {
    return this.props.name.split(" ")[0];
  }

  onClickGetStarted() {
    this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.SINGLE_FACTOR);
    this.props.handleOpenSetUpGroup();
  }

  onCloseUpsell() {
    this.setState({
      shouldShowUpsell: false,
    });
  }

  render() {
    return (
      <div className="DashboardTab">
        <h1>{`Welcome back, ${this.getFirstName()}!`}</h1>
        {this.state.shouldShowUpsell && (
          <div className="card is-upsell">
            <i
              className="DashboardTab-dismissUpsell sg-icon sg-icon-x"
              onClick={this.onCloseUpsell}
            ></i>
            <h3>
              Based on your needs, we suggest getting started with Single Factor
              Auth
            </h3>
            <p>
              For single factor authentication flows, you'll rely on either or
              both one time passcode and email magic link. If your app skews
              heavily mobile, we suggest one time passcode. If it's heavily web
              based, we suggest email magic link.
            </p>
            <div className="btn-list">
              <button
                className="btn btn-primary btn-small"
                onClick={this.onClickGetStarted}
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
