import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const errorTrend = [
    { time: "00:00", error: 1.1 },
    { time: "01:00", error: 0.9 },
    { time: "02:00", error: 1.4 },
    { time: "03:00", error: 1.7 },
    { time: "04:00", error: 1.2 },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="section-title">GNSS Error Prediction Dashboard</h2>

      {/* Horizontal Metric Cards */}
      <div className="metrics-row">
        <div className="metric-card">
          <h3>Active Models</h3>
          <p>3</p>
        </div>
        <div className="metric-card">
          <h3>Latest Data Upload</h3>
          <p>2 hrs ago</p>
        </div>
        <div className="metric-card">
          <h3>Predictions Today</h3>
          <p>12</p>
        </div>
        <div className="metric-card">
          <h3>System Status</h3>
          <p className="status-text">✅ Stable</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="main-chart">
        <h3>Error Trend Overview</h3>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={errorTrend} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
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
              dataKey="error"
              stroke="#00eaff"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6, fill: "#00eaff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Summary Row */}
      <div className="summary-row">
        <div className="summary-box">
          <h4>Average Error</h4>
          <p>1.26 ns</p>
        </div>
        <div className="summary-box">
          <h4>Max Deviation</h4>
          <p>1.9 ns</p>
        </div>
        <div className="summary-box">
          <h4>Trend</h4>
          <p>⬆ Slight Increase</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
