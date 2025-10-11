import React, { useState } from "react";
import "./UploadBox.css";

const UploadBox = () => {
  const [selectedOption, setSelectedOption] = useState("short-term");
  const [fileName, setFileName] = useState("");
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <div className="upload-page">
      {/* === Top Section === */}
      <div className="upload-header">
        <h2>Data Input</h2>
        <div className="prediction-type">
          <label>Prediction Type:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="short-term">Short Term</option>
            <option value="long-term">Long Term</option>
          </select>
        </div>
      </div>

      {/* === Upload Options === */}
      <div className="upload-options">
        <div className="upload-card drag-drop">
          <p>Drag & Drop your file here</p>
          <input type="file" onChange={handleFileChange} />
          {fileName && <p className="file-name">Uploaded: {fileName}</p>}
        </div>

        <div className="upload-card manual-entry">
          <h4>Manual Entry</h4>
          <textarea placeholder="Enter rows and columns manually..."></textarea>
        </div>

        <div className="upload-card api-data">
          <h4>API / Live Data</h4>
          <input type="text" placeholder="Enter API Key" />
          <button className="connect-btn">Connect</button>
        </div>
      </div>

      {/* === Table and Summary === */}
      <div className="data-summary-section">
        <div className="data-table">
          <h4>Data Table</h4>
          <table>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Clock Error (ns)</th>
                <th>Ephem Error (m)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2025-10-08 12:00</td><td>2.3</td><td>0.6</td></tr>
              <tr><td>2025-10-08 12:15</td><td>2.1</td><td>0.5</td></tr>
            </tbody>
          </table>
        </div>

        <div className="summary-box">
          <h4>Summary</h4>
          <p>Total Rows: 2</p>
          <p>Missing Values: 0</p>
          <p>Mean Error: 0.55</p>
        </div>
      </div>

      {/* === Preprocessing === */}
      <div className="preprocessing-section">
        <h4>Preprocessing</h4>
        <div className="preprocess-options">
          <label><input type="checkbox" /> Convert Time to UTC</label>
          <label><input type="checkbox" /> Resample (min)</label>
          <input type="number" value="15" readOnly />
          <label><input type="checkbox" /> Remove Duplicates</label>
          <label><input type="checkbox" /> Sampling Natural</label>
          <label><input type="checkbox" /> Remove Outliers</label>
        </div>

        <div className="action-buttons">
          <button className="validate-btn">Validate</button>
          <button className="save-btn">Save Dataset</button>
          <button className="predict-btn">Run Prediction</button>
        </div>
      </div>

      {/* === Footer === */}
      <footer className="footer">
        <p>GNSS Dashboard — Prepared by Sow & Code</p>
        <span>{dateTime}</span>
      </footer>
    </div>
  );
};

export default UploadBox;
