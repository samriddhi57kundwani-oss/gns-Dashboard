import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import "./Predictions.css";

const Predictions = () => {
  const predictionData = [
    { time: "00:00", predicted: 1.2, actual: 1.1 },
    { time: "01:00", predicted: 1.5, actual: 1.3 },
    { time: "02:00", predicted: 1.6, actual: 1.4 },
    { time: "03:00", predicted: 1.3, actual: 1.1 },
    { time: "04:00", predicted: 1.8, actual: 1.7 },
  ];

  return (
    <div className="predictions-container">
      <h2 className="section-title">Error Predictions Overview</h2>

      {/* Cards Row */}
      <div className="metrics-row">
        <div className="metric-card">
          <h3>Model Accuracy</h3>
          <p>92%</p>
        </div>
        <div className="metric-card">
          <h3>Latest Prediction</h3>
          <p>1.45 m</p>
        </div>
        <div className="metric-card">
          <h3>Next Update</h3>
          <p>30 mins</p>
        </div>
        <div className="metric-card">
          <h3>Model Status</h3>
          <p className="status-text">✅ Running</p>
        </div>
      </div>

      {/* Main Line Chart */}
      <div className="chart-box">
        <h3>Predicted vs Actual Error</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b2b6d" />
            <XAxis dataKey="time" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1445",
                border: "none",
                borderRadius: "10px",
              }}
              labelStyle={{ color: "#00eaff" }}
            />
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#00eaff"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#ff9f43"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-box">
        <h3>Prediction Error Magnitude</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b2b6d" />
            <XAxis dataKey="time" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1445",
                border: "none",
                borderRadius: "10px",
              }}
              labelStyle={{ color: "#00eaff" }}
            />
            <Bar dataKey="predicted" fill="#00eaff" radius={6} />
            <Bar dataKey="actual" fill="#ff9f43" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Predictions;
