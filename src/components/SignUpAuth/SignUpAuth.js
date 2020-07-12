import React from "react";
import "./SignUpAuth.css";

export default class SignUpAuth extends React.PureComponent {
  render() {
    return (
      <div className="SignUpAuth">
        <div className="input-select-wrap is-required">
          <label className="input-select-label" htmlFor="project-status">
            What best describes your current authentication solution?
          </label>
          <div className="input-select">
            <select id="project-status">
              <option></option>
              <option value="New">I need to build one.</option>
              <option value="WIP">
                I've built an existing flow I'm looking to upgrade.
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className="input-select-wrap">
          <label
            className="input-select-label is-required"
            htmlFor="interaction"
          >
            How can users interact with your application?
          </label>
          <div className="input-select">
            <select id="interaction">
              <option></option>
              <option value="Mobile">Mobile application only</option>
              <option value="Web">Website only</option>
              <option value="Both">Marketer</option>
            </select>
          </div>
        </div>
        <div className="input-select-wrap is-required">
          <label className="input-select-label" htmlFor="data">
            What type of user data does your application contain?
          </label>
          <div className="input-select">
            <select id="data">
              <option></option>
              <option value="Basic">Basic profile data</option>
              <option value="Health">Personal health data</option>
              <option value="Finance">Financial data</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
