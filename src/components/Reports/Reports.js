import React from "react";
import "./Reports.css";

export default class Reports extends React.PureComponent {
  render() {
    return (
      <div className="Reports">
        <h1>Reports</h1>
        <div className="Reports-card">
          <h2>Request Volume</h2>
          <div className="Reports-filter input-select-wrap">
            <label className="input-select-label" htmlFor="volume-date-range">
              Date range
            </label>
            <div className="input-select">
              <select id="volume-date-range" disabled>
                <option value="Week" selected="true">
                  Past week
                </option>
                <option value="Month">Past month</option>
                <option value="Year">Past year</option>
              </select>
            </div>
          </div>
          <div className="Reports-reportGroup">
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">One time passcode</div>
            </div>
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">Magic link</div>
            </div>
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">PIN</div>
            </div>
          </div>
        </div>
        <div className="Reports-card">
          <h2>Percent successful</h2>
          <div className="Reports-filter input-select-wrap">
            <label className="input-select-label" htmlFor="volume-date-range">
              Date range
            </label>
            <div className="input-select">
              <select id="volume-date-range" disabled>
                <option value="Week" selected="true">
                  Past week
                </option>
                <option value="Month">Past month</option>
                <option value="Year">Past year</option>
              </select>
            </div>
          </div>
          <div className="Reports-reportGroup">
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">One time passcode</div>
            </div>
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">Magic link</div>
            </div>
            <div className="Reports-report">
              <div className="Reports-lineGraph"></div>
              <div className="Reports-reportTitle">PIN</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
