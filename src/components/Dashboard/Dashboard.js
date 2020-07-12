import React from "react";
import "./Dashboard.css";
import DashboardNavigation from "../DashboardNavigation";
import Navigation from "../Navigation";
import SignUpModal from "../SignUpModal";
import LoggedOutDashboard from "../LoggedOutDashboard";
import DashboardContent from "../DashboardContent";

export const DASHBOARD_NAV_ITEMS = {
  DASHBOARD: "Dashboard",
  SINGLE_FACTOR: "SingleFactor",
  MULTI_FACTOR: "MultiFactor",
  REPORTS: "Reports",
  SETTINGS: "Settings",
};

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: DASHBOARD_NAV_ITEMS.DASHBOARD,
      name: "",
      isLoggedIn: false,
      isSetUpGroupOpen: false,
      isSignUpModalOpen: false,
    };
    this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
    this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
    this.handleOpenSetUpGroup = this.handleOpenSetUpGroup.bind(this);
    this.updateIsLoggedIn = this.updateIsLoggedIn.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateActiveItem = this.updateActiveItem.bind(this);
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

  handleOpenSetUpGroup() {
    this.setState((prevState) => ({
      isSetUpGroupOpen: !prevState.isSetUpGroupOpen,
    }));
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

  updateActiveItem(item) {
    this.setState({
      activeItem: item,
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
          <div className="Dashboard-content">
            <DashboardNavigation
              activeItem={this.state.activeItem}
              isSetUpGroupOpen={this.state.isSetUpGroupOpen}
              handleOpenSetUpGroup={this.handleOpenSetUpGroup}
              updateActiveItem={this.updateActiveItem}
            />
            <DashboardContent
              activeItem={this.state.activeItem}
              handleOpenSetUpGroup={this.handleOpenSetUpGroup}
              name={this.state.name}
              updateActiveItem={this.updateActiveItem}
            />
          </div>
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
