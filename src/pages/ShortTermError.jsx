import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./ShortTermDashboard.css";

const ShortTermError = () => {
  // 📊 Sample Data (Demo Mode)
  const clockErrorData = [
    { x: -0.6, y: 2 }, { x: -0.3, y: 8 }, { x: 0, y: 15 },
    { x: 0.3, y: 9 }, { x: 0.6, y: 3 },
  ];
  const ephemerisErrorData = [
    { x: -0.6, y: 1 }, { x: -0.3, y: 5 }, { x: 0, y: 10 },
    { x: 0.3, y: 7 }, { x: 0.6, y: 2 },
  ];
  const trendData = Array.from({ length: 100 }, (_, i) => ({
    time: i,
    clock: Math.sin(i / 10) * 0.3 + Math.random() * 0.1,
    eph: Math.cos(i / 10) * 0.2 + Math.random() * 0.1,
  }));
  const pieData = [
    { name: "Clock Error", value: 52 },
    { name: "Ephemeris Error", value: 31 },
    { name: "Other", value: 17 },
  ];
  const COLORS = ["#00bcd4", "#ff9800", "#9c27b0"];

  return (
    <div className="short-container fade-in">
      <header className="short-header">
        <h1>Short Term Error Prediction Dashboard</h1>
        <p>Comparative analysis of immediate GNSS prediction variations</p>
      </header>
       
      <div className="short-top-cards">
        <div className="metric-card">
          <h3>1298</h3>
          <p>Mean Absolute Error</p>
        </div>
        <div className="metric-card">
          <h3>1420</h3>
          <p>Root Mean Squared Error</p>
        </div>
        <div className="metric-card">
          <h3>96%</h3>
          <p>Prediction Accuracy</p>
        </div>
        <div className="metric-card">
          <h3>Short-Term Dataset</h3>
          <p>Clock & Ephemeris Residuals</p>
        </div>
      </div>

      <div className="short-main-grid">
        {/* Chart 1: Gaussian Fit */}
        <div className="chart-card">
          <h3>Short Term Residual Fit (Clock vs Ephemeris)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart>
              <XAxis dataKey="x" tick={{ fill: "#b0cfff" }} />
              <YAxis tick={{ fill: "#b0cfff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#0e1a28", color: "#fff" }} />
              <Legend />
              <Line data={clockErrorData} dataKey="y" name="Clock Error" stroke="#00bfff" strokeWidth={2} dot={false} />
              <Line data={ephemerisErrorData} dataKey="y" name="Ephemeris Error" stroke="#ff9800" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <p className="caption">Gaussian nature visible in short-term residuals.</p>
        </div>

        {/* Chart 2: Residual Distribution */}
        <div className="chart-card">
          <h3>Residual Frequency Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={clockErrorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2c3f" />
              <XAxis dataKey="x" tick={{ fill: "#b0cfff" }} />
              <YAxis tick={{ fill: "#b0cfff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#0e1a28", color: "#fff" }} />
              <Bar dataKey="y" data={clockErrorData} fill="#00bfff" name="Clock Error" barSize={10} />
              <Bar dataKey="y" data={ephemerisErrorData} fill="#ff9800" name="Ephemeris Error" barSize={10} />
            </BarChart>
          </ResponsiveContainer>
          <p className="caption">Short-term residual spread is narrow & consistent.</p>
        </div>

        {/* Chart 3: Time Series Comparison */}
        <div className="chart-card wide">
          <h3>Short-Term GNSS Error Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={trendData}>
              <XAxis dataKey="time" tick={{ fill: "#b0cfff" }} />
              <YAxis tick={{ fill: "#b0cfff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#0e1a28", color: "#fff" }} />
              <Legend />
              <Line type="monotone" dataKey="clock" stroke="#00bfff" strokeWidth={2} dot={false} name="Clock Error" />
              <Line type="monotone" dataKey="eph" stroke="#ff9800" strokeWidth={2} dot={false} name="Ephemeris Error" />
            </LineChart>
          </ResponsiveContainer>
          <p className="caption">Short term GNSS error fluctuates rapidly but stays within threshold.</p>
        </div>

        {/* Chart 4: Pie - Contribution */}
        <div className="chart-card small">
          <h3>Error Contribution Ratio</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p className="caption">Clock errors dominate in short-term intervals.</p>
        </div>

        {/* Chart 5: Observations */}
        <div className="info-card">
          <h3>Observations</h3>
          <ul>
            <li>✅ Short-term residuals are well centered near zero.</li>
            <li>🔹 Ephemeris error steady → indicates reliable short-term calibration.</li>
            <li>⚡ Minor noise spikes from signal phase jitter.</li>
            <li>🧠 Model stability score: 0.96 (Excellent).</li>
          </ul>
        </div>

        {/* Chart 6: Highlights */}
        <div className="info-card highlight">
          <h3>Highlights</h3>
          <ul>
            <li>📈 Rapid adaptation to changing GNSS conditions.</li>
            <li>🛰 Clock error variance slightly higher than ephemeris.</li>
            <li>💡 Excellent short-term prediction confidence (96%).</li>
          </ul>
        </div>
      </div>

      <footer className="footer-bar">
        <p>
          Short Term GNSS Error Analysis | Developed by Sow and Code | {new Date().toLocaleDateString()} |{" "}
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </footer>
    </div>
  );
};

export default ShortTermError;
