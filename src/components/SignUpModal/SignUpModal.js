import React from "react";
import classnames from "classnames";
import "./SignUpModal.css";
import SignUpProgress from "../SignUpProgress";
import SignUpLogin from "../SignUpLogIn";
import SignUpJob from "../SignUpJob";
import SignUpSuccess from "../SignUpSuccess";
import SignUpAuth from "../SignUpAuth";

export const Stages = {
  LOG_IN: "log-in",
  JOB: "JOB",
  AUTH: "auth",
  SUCCESS: "success",
};

export default class SignUpModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { currentStage: Stages.LOG_IN, completedStages: [] };
    this.setCurrentStage = this.setCurrentStage.bind(this);
    this.completeStage = this.completeStage.bind(this);
    this.goToPreviousStage = this.goToPreviousStage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getMaskClassnames() {
    return classnames({
      "modal-mask": true,
      "is-visible": this.props.isSignUpModalOpen,
    });
  }
  getModalClassnames() {
    return classnames({
      "center-modal": true,
      "is-visible": this.props.isSignUpModalOpen,
    });
  }

  setCurrentStage(currentStage) {
    this.setState({ currentStage });
  }

  addCompletedStage() {
    this.setState((prevState) => ({
      completedStages: [...prevState.completedStages, prevState.currentStage],
    }));
  }

  completeStage() {
    this.addCompletedStage();
    let values = Object.values(Stages);
    let nextIndex = values.indexOf(this.state.currentStage) + 1;
    let nextItem = values[nextIndex];
    this.setCurrentStage(nextItem);
  }

  goToPreviousStage() {
    let values = Object.values(Stages);
    let prevIndex = values.indexOf(this.state.currentStage) - 1;
    let prevItem = values[prevIndex];
    this.setCurrentStage(prevItem);
  }

  getInputForm() {
    switch (this.state.currentStage) {
      case Stages.LOG_IN:
      default:
        return <SignUpLogin />;
      case Stages.JOB:
        return <SignUpJob updateName={this.props.updateName} />;
      case Stages.AUTH:
        return <SignUpAuth />;
      case Stages.SUCCESS:
        return <SignUpSuccess />;
    }
  }

  getBackButtonClassnames() {
    return classnames({
      btn: true,
      "btn-secondary": true,
      "is-disabled": this.state.currentStage === Stages.LOG_IN,
    });
  }

  onSubmit() {
    this.props.updateIsLoggedIn(true);
    this.props.onClose();
  }

  render() {
    return (
      <>
        <div className={this.getModalClassnames()}>
          <i className="sg-icon sg-icon-x" onClick={this.props.onClose}></i>
          <h2>Create your account</h2>
          <SignUpProgress
            currentStage={this.state.currentStage}
            setCurrentStage={this.setCurrentStage}
            completedStages={this.state.completedStages}
          />
          <div className="SignUpModal-form">{this.getInputForm()}</div>
          <div className="conf-alert-actions">
            <div className="btn-list">
              <button
                className={this.getBackButtonClassnames()}
                disabled={this.state.currentStage === Stages.LOG_IN}
                onClick={this.goToPreviousStage}
              >
                Back
              </button>
              {this.state.currentStage === Stages.SUCCESS ? (
                <button className="btn btn-primary" onClick={this.onSubmit}>
                  Submit
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={this.completeStage}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className={this.getMaskClassnames()}
          onClick={this.props.onClose}
        ></div>
      </>
    );
  }
}
