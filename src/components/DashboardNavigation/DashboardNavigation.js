import React from "react";
import classnames from "classnames";
import "./DashboardNavigation.css";
import { DASHBOARD_NAV_ITEMS } from "../Dashboard/Dashboard";

export default class DashboardNavigation extends React.PureComponent {
  getSetUpClassnames() {
    return classnames({
      "accordion-panel": true,
      "is-visible": this.props.isSetUpGroupOpen,
    });
  }

  getItemClassnames(item) {
    return classnames({
      "DashboardNavigation-item": true,
      small: true,
      "is-active": this.props.activeItem === item,
    });
  }

  render() {
    return (
      <div className="DashboardNavigation">
        <div
          className={this.getItemClassnames(DASHBOARD_NAV_ITEMS.DASHBOARD)}
          onClick={() =>
            this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.DASHBOARD)
          }
        >
          Dashboard
        </div>
        <div className="DashboardNavigation-accordionItem accordion-wrapper">
          <div className={this.getSetUpClassnames()}>
            <div
              className="accordion-title small"
              onClick={this.props.handleOpenSetUpGroup}
            >
              Set up guides
            </div>
            <div className="accordion-content">
              <ul>
                <li>
                  <div
                    className={this.getItemClassnames(
                      DASHBOARD_NAV_ITEMS.SINGLE_FACTOR
                    )}
                    onClick={() =>
                      this.props.updateActiveItem(
                        DASHBOARD_NAV_ITEMS.SINGLE_FACTOR
                      )
                    }
                  >
                    Single factor guide
                  </div>
                </li>
                <li>
                  <div
                    className={this.getItemClassnames(
                      DASHBOARD_NAV_ITEMS.MULTI_FACTOR
                    )}
                    onClick={() =>
                      this.props.updateActiveItem(
                        DASHBOARD_NAV_ITEMS.MULTI_FACTOR
                      )
                    }
                  >
                    Multi factor guide
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={this.getItemClassnames(DASHBOARD_NAV_ITEMS.REPORTS)}
          onClick={() =>
            this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.REPORTS)
          }
        >
          Reports
        </div>
        <div
          className={this.getItemClassnames(DASHBOARD_NAV_ITEMS.SETTINGS)}
          onClick={() =>
            this.props.updateActiveItem(DASHBOARD_NAV_ITEMS.SETTINGS)
          }
        >
          Settings
        </div>
      </div>
    );
  }
}
