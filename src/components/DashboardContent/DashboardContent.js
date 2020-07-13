import React from "react";
import "./DashboardContent.css";
import { DASHBOARD_NAV_ITEMS } from "../Dashboard/Dashboard";
import DashboardTab from "../DashboardTab";
import SingleFactorGuide from "../SingleFactorGuide";
import MultiFactorGuide from "../MultiFactorGuide";
import Reports from "../Reports";
import Settings from "../Settings";

export default class DashboardContent extends React.PureComponent {
  getContentComponent() {
    switch (this.props.activeItem) {
      case DASHBOARD_NAV_ITEMS.DASHBOARD:
      default:
        return (
          <DashboardTab
            name={this.props.name}
            handleOpenSetUpGroup={this.props.handleOpenSetUpGroup}
            updateActiveItem={this.props.updateActiveItem}
          />
        );
      case DASHBOARD_NAV_ITEMS.SINGLE_FACTOR:
        return <SingleFactorGuide />;
      case DASHBOARD_NAV_ITEMS.MULTI_FACTOR:
        return <MultiFactorGuide />;
      case DASHBOARD_NAV_ITEMS.REPORTS:
        return <Reports />;
      case DASHBOARD_NAV_ITEMS.SETTINGS:
        return (
          <Settings
            name={this.props.name}
            email={this.props.email}
            updateName={this.props.updateName}
            updateEmail={this.props.updateEmail}
          />
        );
    }
  }
  render() {
    return <div className="DashboardContent">{this.getContentComponent()}</div>;
  }
}
