import React from "react";
import Row from "@sendgrid/ui-components/grid/row";
import DashboardNavigation from "../DashboardNavigation";
import Navigation from "../Navigation";

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "" };
  }

  render() {
    return (
      <div className="Dashboard">
        <Navigation name={this.state.name} />
        <Row>
          <DashboardNavigation />
        </Row>
      </div>
    );
  }
}
