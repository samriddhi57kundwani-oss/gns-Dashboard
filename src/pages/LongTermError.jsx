import React from "react";
import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend
} from "recharts";
import "./LongTermDashboard.css";

const LongTermError = () => {
  // Dummy Data
  const bellData = [
    { x: -400, clock: 0.001, ephemeris: 0.0008 },
    { x: -200, clock: 0.0025, ephemeris: 0.0021 },
    { x: 0, clock: 0.004, ephemeris: 0.0038 },
    { x: 200, clock: 0.002, ephemeris: 0.0018 },
    { x: 400, clock: 0.0005, ephemeris: 0.0004 },
  ];

  const histogramData = [
    { x: -400, clock: 5000, ephemeris: 3000 },
    { x: -200, clock: 8000, ephemeris: 6000 },
    { x: 0, clock: 7000, ephemeris: 9000 },
    { x: 200, clock: 4000, ephemeris: 5000 },
    { x: 400, clock: 2000, ephemeris: 1000 },
  ];

  const lineData = [
    { t: 0, actualClock: 2, predictedClock: 2.2, actualEphemeris: 0.4, predictedEphemeris: 0.5 },
    { t: 200, actualClock: 3, predictedClock: 2.9, actualEphemeris: 0.6, predictedEphemeris: 0.7 },
    { t: 400, actualClock: 2.5, predictedClock: 2.4, actualEphemeris: 0.5, predictedEphemeris: 0.45 },
    { t: 600, actualClock: 3.2, predictedClock: 3.1, actualEphemeris: 0.7, predictedEphemeris: 0.6 },
  ];

  const pieData = [
    { name: "Clock Error", value: 45 },
    { name: "Ephemeris Error", value: 30 },
    { name: "Other Error", value: 25 },
  ];
  const COLORS = ["#FFD54F", "#FF5252", "#26C6DA"];

  return (
    <div className="longterm-container">
      <div className="cards-row">
        <div className="metric-card"><h3>3256</h3><p>Mean Absolute Error</p></div>
        <div className="metric-card"><h3>3256</h3><p>Root Mean Squared Error</p></div>
        <div className="metric-card"><h3>3256</h3><p>Mean Absolute Percentage Error</p></div>
        <div className="metric-card"><h3>3256</h3><p>Total Predicted Error</p></div>
      </div>

      <div className="chart-grid">
        {/* Bell Curve */}
        <div className="chart-box">
          <h4>GNSS Error Actual vs Predicted</h4>
          <LineChart width={400} height={250} data={bellData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="x" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="clock" stroke="#FF5252" strokeWidth={2} />
            <Line type="monotone" dataKey="ephemeris" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Histogram */}
        <div className="chart-box">
          <h4>Residual Distribution shows Gaussian nature</h4>
          <BarChart width={400} height={250} data={histogramData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="x" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="clock" fill="#FF5252" />
            <Bar dataKey="ephemeris" fill="#4CAF50" />
          </BarChart>
        </div>

        {/* Prediction Summary */}
        <div className="summary-box">
          <h4>Prediction Summary</h4>
          <ul>
            <li>✅ Model successfully predicts Clock & Ephemeris Error with high accuracy.</li>
            <li>↔ Residual distribution is close to Gaussian (normal error spread).</li>
            <li>🔁 Errors show cyclical trend over time.</li>
          </ul>
        </div>

        {/* Line Chart */}
        <div className="chart-box">
          <h4>Line Graph: Actual vs Predicted Error trend</h4>
          <LineChart width={400} height={250} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="t" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actualClock" stroke="#FF5252" strokeWidth={2} />
            <Line type="monotone" dataKey="predictedClock" stroke="#FFD54F" strokeWidth={2} />
            <Line type="monotone" dataKey="actualEphemeris" stroke="#26C6DA" strokeWidth={2} />
            <Line type="monotone" dataKey="predictedEphemeris" stroke="#4CAF50" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div className="chart-box">
          <h4>Error Contribution</h4>
          <PieChart width={400} height={250}>
            <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
              {pieData.map((entry, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>

        {/* Observations */}
        <div className="observations-box">
          <h4>Observations</h4>
          <ul>
            <li>📈 Prediction improves with larger datasets.</li>
            <li>📡 GNSS signal noise affects residual patterns.</li>
            <li>🧠 LSTM adapts well to time-series dependencies.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LongTermError;
