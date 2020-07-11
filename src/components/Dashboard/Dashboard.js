import React from "react";
import Row from "@sendgrid/ui-components/grid/row";
import DashboardNavigation from "../DashboardNavigation";
import Navigation from "../Navigation";
import SignUpModal from "../SignUpModal";
import LoggedOutDashboard from "../LoggedOutDashboard";

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: "", isLoggedIn: false, isSignUpModalOpen: false };
    this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
    this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
    this.updateIsLoggedIn = this.updateIsLoggedIn.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  handleOpenSignUpModal() {
    document.body.classList.add("modal-open");
    this.setState({
      isSignUpModalOpen: true,
    });
  }

  handleCloseSignUpModal() {
    document.body.classList.remove("modal-open");
    this.setState({
      isSignUpModalOpen: false,
    });
  }

  updateIsLoggedIn(isLoggedIn) {
    this.setState({
      isLoggedIn,
    });
  }

  updateName(name) {
    this.setState({
      name,
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <Navigation
          isLoggedIn={this.state.isLoggedIn}
          name={this.state.name}
          handleOpenSignUpModal={this.handleOpenSignUpModal}
          updateIsLoggedIn={this.updateIsLoggedIn}
        />
        {this.state.isLoggedIn ? (
          <Row>
            <DashboardNavigation />
          </Row>
        ) : (
          <LoggedOutDashboard />
        )}
        <SignUpModal
          isSignUpModalOpen={this.state.isSignUpModalOpen}
          onClose={this.handleCloseSignUpModal}
          updateIsLoggedIn={this.updateIsLoggedIn}
          updateName={this.updateName}
        />
      </div>
    );
  }
}
