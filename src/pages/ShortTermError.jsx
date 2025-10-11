import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import "./ShortTermDashboard.css";
import "./LongTermDashboard.css"; // use same CSS for layout and theme

const ShortTermError = () => {
  // Example datasets (you can replace with real uploaded data)
  const bellData = [
    { x: -0.6, clock: 0.3, eph: 0.25 },
    { x: -0.4, clock: 1.2, eph: 0.8 },
    { x: -0.2, clock: 2.2, eph: 1.7 },
    { x: 0, clock: 2.5, eph: 2.0 },
    { x: 0.2, clock: 1.9, eph: 1.5 },
    { x: 0.4, clock: 0.8, eph: 0.6 },
    { x: 0.6, clock: 0.3, eph: 0.25 },
  ];

  const histData = [
    { x: -0.6, clock: 10, eph: 5 },
    { x: -0.4, clock: 35, eph: 25 },
    { x: -0.2, clock: 70, eph: 55 },
    { x: 0, clock: 90, eph: 80 },
    { x: 0.2, clock: 60, eph: 45 },
    { x: 0.4, clock: 30, eph: 20 },
    { x: 0.6, clock: 10, eph: 5 },
  ];

  const lineData = Array.from({ length: 60 }, (_, i) => ({
    time: i,
    actualClock: Math.sin(i / 5) * 0.3 + Math.random() * 0.1,
    predClock: Math.sin(i / 5) * 0.25 + Math.random() * 0.1,
    actualEph: Math.cos(i / 6) * 0.2 + Math.random() * 0.05,
    predEph: Math.cos(i / 6) * 0.18 + Math.random() * 0.05,
  }));

  const pieData = [
    { name: "Clock Error", value: 55 },
    { name: "Ephemeris Error", value: 30 },
    { name: "Other Error", value: 15 },
  ];
  const COLORS = ["#f44336", "#ffc107", "#4caf50"];

  return (
    <div className="longterm-container">
      {/* ===== Metric Cards ===== */}
      <div className="cards-row">
        <div className="metric-card">
          <h3>3210</h3>
          <p>Mean Absolute Error</p>
        </div>
        <div className="metric-card">
          <h3>3120</h3>
          <p>Root Mean Squared Error</p>
        </div>
        <div className="metric-card">
          <h3>2950</h3>
          <p>Mean Absolute Percentage Error</p>
        </div>
        <div className="metric-card">
          <h3>3500</h3>
          <p>Total Predicted Error</p>
        </div>
      </div>

      {/* ===== Charts Grid ===== */}
      <div className="chart-grid">
        {/* Bell Curve */}
        <div className="chart-box">
          <h4>Probability Density (Bell Curve)</h4>
          <LineChart width={370} height={240} data={bellData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="x" stroke="#94a3b8" label={{ value: "Residual Value", position: "bottom" }} />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="clock" stroke="#00bcd4" name="Clock Error (ARIMA residuals)" />
            <Line type="monotone" dataKey="eph" stroke="#ff9800" name="Ephemeris Error (ARIMA residuals)" />
          </LineChart>
          <p>GNSS Error Actual v/s Predicted</p>
        </div>

        {/* Histogram */}
        <div className="chart-box">
          <h4>Residual Distribution</h4>
          <BarChart width={370} height={240} data={histData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="x" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="clock" fill="#f44336" name="Clock Error (ARIMA residuals)" />
            <Bar dataKey="eph" fill="#4caf50" name="Ephemeris Error (ARIMA residuals)" />
          </BarChart>
          <p>Residual Distribution shows Gaussian nature.</p>
        </div>

        {/* Prediction Summary */}
        <div className="summary-box">
          <h4>Prediction Summary</h4>
          <ul>
            <li>✅ Residuals are closely centered around zero.</li>
            <li>📈 Short-term predictions track actual errors tightly.</li>
            <li>⚙️ Slight spikes exist but remain within limit.</li>
          </ul>
        </div>

        {/* Line Chart */}
        <div className="chart-box">
          <h4>Actual vs Predicted Error (Time Series)</h4>
          <LineChart width={370} height={240} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="time" stroke="#94a3b8" label={{ value: "Time Intervals", position: "bottom" }} />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actualClock" stroke="#f44336" name="Actual Clock Error" />
            <Line type="monotone" dataKey="actualEph" stroke="#ffc107" name="Actual Ephemeris Error" />
            <Line type="monotone" dataKey="predClock" stroke="#2196f3" name="Predicted Clock Error" />
            <Line type="monotone" dataKey="predEph" stroke="#4caf50" name="Predicted Ephemeris Error" />
          </LineChart>
          <p>Line Graph: Actual vs Predicted Error trend.</p>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h4>Error Contribution</h4>
          <PieChart width={370} height={240}>
            <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
          <p>Error Contribution</p>
        </div>

        {/* Observations */}
        <div className="observations-box">
          <h4>Observations</h4>
          <ul>
            <li>🔍 Clock error variation is slightly higher short term.</li>
            <li>🛰️ Ephemeris error remains stable and predictable.</li>
            <li>⚡ Residual spread remains normal across intervals.</li>
          </ul>
        </div>
      </div>

      <footer style={{ textAlign: "center", color: "#a0aec0", marginTop: "15px" }}>
        GNSS Error Prediction Dashboard | Developed by Sow and Code | 24-09-2025 18:37
      </footer>
    </div>
  );
};

export default ShortTermError;
