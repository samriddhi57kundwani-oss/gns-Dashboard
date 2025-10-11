import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("dark");
  const [refreshRate, setRefreshRate] = useState(5);

  return (
    <div className="settings-container">
      <h2 className="section-title">Dashboard Settings</h2>

      <div className="settings-section">
        <label>Theme</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      <div className="settings-section">
        <label>Auto Refresh Interval (min)</label>
        <input
          type="number"
          value={refreshRate}
          onChange={(e) => setRefreshRate(e.target.value)}
        />
      </div>

      <button className="save-btn">Save Settings</button>
    </div>
  );
};

export default Settings;
