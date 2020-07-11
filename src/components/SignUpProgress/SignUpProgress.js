import React from "react";
import classnames from "classnames";
import "./SignUpProgress.css";
import { Stages } from "../SignUpModal/SignUpModal.js";

export default class SignUpProgress extends React.PureComponent {
  getStageClassName(stage) {
    return classnames({
      "is-done":
        this.props.completedStages.includes(stage) &&
        this.props.currentStage !== stage,
      "is-selected": this.props.currentStage === stage,
    });
  }

  render() {
    return (
      <div className="SignUpProgress progress-container">
        <ul className="progress-stages">
          <li className={this.getStageClassName(Stages.LOG_IN)}>
            <label onClick={() => this.props.setCurrentStage(Stages.LOG_IN)}>
              Log in credentials
            </label>
          </li>
          <li className={this.getStageClassName(Stages.JOB)}>
            <label onClick={() => this.props.setCurrentStage(Stages.JOB)}>
              Job
            </label>
          </li>
          <li className={this.getStageClassName(Stages.AUTH)}>
            <label onClick={() => this.props.setCurrentStage(Stages.AUTH)}>
              Auth
            </label>
          </li>
          <li className={this.getStageClassName(Stages.SUCCESS)}>
            <label onClick={() => this.props.setCurrentStage(Stages.SUCCESS)}>
              Success!
            </label>
          </li>
        </ul>
      </div>
    );
  }
}
