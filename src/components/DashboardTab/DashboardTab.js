import React from "react";
import "./DashboardTab.css";
import { DASHBOARD_NAV_ITEMS } from "../Dashboard/Dashboard";

export default class DashboardTab extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowUpsell: true,
      clientId: "client-d482cc2e-a93b-11ea-bb37-0242ac130002",
      clientIdTooltip: "Click to copy to clipboard.",
      secretKeyTooltip: "Click to copy to clipboard.",
      secretKey: "abc123456",
    };
    this.onClickCopyClientId = this.onClickCopyClientId.bind(this);
    this.onClickGetStarted = this.onClickGetStarted.bind(this);
    this.onCloseUpsell = this.onCloseUpsell.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onClickCopySecretKey = this.onClickCopySecretKey.bind(this);
  }

  onClickCopyClientId() {
    navigator.clipboard.writeText(this.state.clientId);
    this.setState({
      clientIdTooltip: "Copied!",
    });
  }

  onClickCopySecretKey() {
    navigator.clipboard.writeText(this.state.secretKey);
    this.setState({
      secretKeyTooltip: "Copied!",
    });
  }

  onMouseEnter() {
    this.setState({
      clientIdTooltip: "Click to copy to clipboard.",
      secretKeyTooltip: "Click to copy to clipboard.",
    });
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
        <div className="DashboardTab-card card">
          <h2>Reports overview</h2>
          <h4>Request Volume</h4>
          <div className="DashboardTab-reportGroup">
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">One time passcode</div>
            </div>
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">Magic link</div>
            </div>
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">PIN</div>
            </div>
          </div>
          <h4>Percent successful</h4>
          <div className="DashboardTab-reportGroup">
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">One time passcode</div>
            </div>
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">Magic link</div>
            </div>
            <div className="DashboardTab-report">
              <div className="DashboardTab-lineGraph"></div>
              <div className="DashboardTab-reportTitle">PIN</div>
            </div>
          </div>
        </div>
        <div className="DashboardTab-card card">
          <h2>Account details</h2>
          <div className="DashboardTab-input input-text-wrap is-focused">
            <label className="input-text-label" htmlFor="client-id">
              Client ID
            </label>
            <input
              type="text"
              disabled
              id="client-id"
              value={this.state.clientId}
            />
            <div
              className="input-info-tooltip"
              onClick={this.onClickCopyClientId}
              onMouseEnter={this.onMouseEnter}
            >
              <span
                data-tooltip={this.state.clientIdTooltip}
                data-tooltip-pos="right"
                data-tooltip-length="medium"
              >
                <i
                  className="sg-icon sg-icon-copy input-info-icon"
                  id="client-id-copy"
                ></i>
              </span>
            </div>
          </div>
          <div className="DashboardTab-input input-text-wrap is-focused">
            <label className="input-text-label" htmlFor="secret-key">
              Secret key
            </label>
            <input
              type="password"
              disabled
              id="secret-key"
              value={this.state.secretKey}
            />
            <div
              className="input-info-tooltip"
              onClick={this.onClickCopySecretKey}
              onMouseEnter={this.onMouseEnter}
            >
              <span
                data-tooltip={this.state.secretKeyTooltip}
                data-tooltip-pos="right"
                data-tooltip-length="medium"
              >
                <i
                  className="sg-icon sg-icon-copy input-info-icon"
                  id="secret-key-copy"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
