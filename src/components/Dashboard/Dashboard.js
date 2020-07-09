import React, { PureComponent } from "react";
import Row from "@sendgrid/ui-components/grid/row";
import DashboardNavigation from "../DashboardNavigation";
import Navigation from "../Navigation";

export default class Dashboard extends PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <Navigation />
        <Row>
          <DashboardNavigation />
        </Row>
      </div>
    );
  }
}
