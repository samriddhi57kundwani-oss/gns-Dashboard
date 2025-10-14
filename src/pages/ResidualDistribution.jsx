import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Line,
  ComposedChart,
} from "recharts";
import "./ResidualDistribution.css";

const ResidualDistribution = () => {
  const data = [
    { x: -15, freq: 5, curve: 10 },
    { x: -12, freq: 12, curve: 25 },
    { x: -9, freq: 25, curve: 45 },
    { x: -6, freq: 40, curve: 65 },
    { x: -3, freq: 55, curve: 78 },
    { x: 0, freq: 70, curve: 80 },
    { x: 3, freq: 60, curve: 70 },
    { x: 6, freq: 40, curve: 50 },
    { x: 9, freq: 25, curve: 30 },
    { x: 12, freq: 12, curve: 15 },
    { x: 15, freq: 5, curve: 8 },
  ];

  return (
    <div className="residual-container">
      <h1 className="title">Residual Distribution | Accuracy Validation</h1>
      <p className="subtitle">
        Analyzing residual patterns for model consistency and bias detection.
      </p>

      <div className="residual-grid">
        {/* Graph Section */}
        <div className="chart-section">
          <ResponsiveContainer width={800} height={500}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1b2b40" />
              <XAxis dataKey="x" tick={{ fill: "#b0d4ff" }} label={{ value: "Residual Value", position: "insideBottom", dy: 10, fill: "#a5ccff" }} />
              <YAxis tick={{ fill: "#b0d4ff" }} label={{ value: "Frequency", angle: -90, position: "insideLeft", fill: "#a5ccff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#0f2236", border: "1px solid #00bfff", color: "#fff" }} />
              <Bar dataKey="freq" fill="#00aaff" radius={[4, 4, 0, 0]} barSize={20} />
              <Line type="monotone" dataKey="curve" stroke="#00e0ff" strokeWidth={3} dot={false} />
            </ComposedChart>
          </ResponsiveContainer>

          <div className="fit-label">Normal Fit Detected</div>

          <div className="note-card">
            <ul>
              <li>✅ Residuals follow a near-Gaussian pattern.</li>
              <li>→ Model is unbiased and well-calibrated.</li>
              <li>⚠️ Monitor for tail deviations in future data.</li>
            </ul>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="stats-section">
          <div className="stat-card">
            <h3>MAE</h3>
            <p className="stat-value">1.23</p>
            <span>Low error → high accuracy</span>
          </div>
          <div className="stat-card">
            <h3>RMSE</h3>
            <p className="stat-value">1.57</p>
            <span>Consistent performance</span>
          </div>
          <div className="stat-card">
            <h3>Skewness</h3>
            <p className="stat-value">0.12</p>
            <span>Near symmetric</span>
          </div>
          <div className="stat-card">
            <h3>Kurtosis</h3>
            <p className="stat-value">2.9</p>
            <span>Approaches normal</span>
          </div>
          <div className="stat-card">
            <h3>Confidence</h3>
            <p className="stat-value">95%</p>
            <span>Model predictions reliable</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidualDistribution;
