import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <h2 className="section-title">Project Information</h2>

      <div className="info-card">
        <h3>About the Project</h3>
        <p>
          This GNSS Error Prediction Dashboard helps visualize and predict satellite-based navigation errors such as
          clock and ephemeris deviations.
        </p>
      </div>

      <div className="info-card">
        <h3>Features</h3>
        <ul>
          <li>Real-time data visualization</li>
          <li>Long-term & short-term predictions</li>
          <li>Customizable data upload formats</li>
          <li>Automatic outlier detection</li>
        </ul>
      </div>

      <div className="info-card">
        <h3>Developed By</h3>
        <p><strong>Sow & Code</strong></p>
      </div>
    </div>
  );
};

export default Info;
