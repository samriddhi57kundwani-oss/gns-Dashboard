import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import "./ResidualDistribution.css";

const ResidualDistribution = () => {
  const residualData = [
    { residual: -2, frequency: 4 },
    { residual: -1, frequency: 7 },
    { residual: 0, frequency: 12 },
    { residual: 1, frequency: 8 },
    { residual: 2, frequency: 5 },
  ];

  const summary = [
    { title: "Mean Residual", value: "0.32 m" },
    { title: "Max Residual", value: "2.1 m" },
    { title: "Residual Spread", value: "±1.9 m" },
    { title: "Error Type", value: "Ephemeris & Clock" },
  ];

  return (
    <div className="residual-container">
      <h2 className="section-title">Residual Error Distribution</h2>

      <div className="metrics-row">
        {summary.map((item, index) => (
          <div key={index} className="metric-card">
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-box">
          <h3>Residual Histogram</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={residualData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="residual" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="frequency" fill="#00eaff" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Bell Curve Fit</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={residualData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="residual" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line type="monotone" dataKey="frequency" stroke="#00ffcc" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ResidualDistribution;
