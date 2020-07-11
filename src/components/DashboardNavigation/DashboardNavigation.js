import React from "react";
import "./DashboardNavigation.css";
import Column from "@sendgrid/ui-components/grid/column";

export default class DashboardNavigation extends React.PureComponent {
  render() {
    return (
      <Column width={3}>
        <div className="DashboardNavigation-container">
          <div className="DashboardNavigation-item">Dashboard</div>
        </div>
      </Column>
    );
  }
}
