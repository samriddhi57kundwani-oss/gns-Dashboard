import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";
import "./Predictions.css";

const Predictions = () => {
  const errorTrendData = [
    { time: "10:00", actual: 25, predicted: 20 },
    { time: "20:00", actual: 40, predicted: 35 },
    { time: "30:00", actual: 30, predicted: 28 },
    { time: "40:00", actual: 45, predicted: 38 },
    { time: "50:00", actual: 35, predicted: 32 },
    { time: "60:00", actual: 28, predicted: 25 },
  ];

  const accuracyData = [
    { interval: "0-10", value: 25 },
    { interval: "10-20", value: 22 },
    { interval: "20-30", value: 18 },
    { interval: "30-40", value: 15 },
    { interval: "40-50", value: 10 },
  ];

  return (
    <div className="predictions-container">
      <h1 className="page-title">Prediction Results</h1>

      {/* Metric Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <h4 className="metric-heading">Predicted Mean Error</h4>
          <p className="metric-value highlight">32.56 ns</p>
        </div>
        <div className="metric-card">
          <h4 className="metric-heading">Predicted Clock Error Range</h4>
          <p className="metric-value highlight">20.15 ns</p>
        </div>
        <div className="metric-card">
          <h4 className="metric-heading">Predicted Ephemeris Error Range</h4>
          <p className="metric-value highlight">1.87 m</p>
        </div>
        <div className="metric-card">
          <h4 className="metric-heading">Confidence Level</h4>
          <p className="metric-value highlight">95%</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-heading">Actual vs Predicted Error Trend</h3>
          <ResponsiveContainer width={500} height={250}>
            <LineChart  data={errorTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2c3f" />
              <XAxis dataKey="time" tick={{ fill: "#cfe8ff" }} />
              <YAxis tick={{ fill: "#cfe8ff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#13283b", color: "#fff" }} />
              <Line type="monotone" dataKey="actual" stroke="#ff7300" strokeWidth={2} />
              <Line type="monotone" dataKey="predicted" stroke="#00bfff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-heading">Prediction Accuracy</h3>
          <ResponsiveContainer width={500} height={250} >
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2c3f" />
              <XAxis dataKey="interval" tick={{ fill: "#cfe8ff" }} />
              <YAxis tick={{ fill: "#cfe8ff" }} />
              <Tooltip contentStyle={{ backgroundColor: "#13283b", color: "#fff" }} />
              <Bar dataKey="value" fill="#00bcd4" barSize={25} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Textual Insights */}
      <div className="insights-grid">
        <div className="insight-card">
          <h3 className="insight-heading">Observations</h3>
          <ul className="insight-list">
            <li>Clock error predicted slightly higher than ephemeris error.</li>
            <li>Predicted trend follows actual variations closely.</li>
            <li>Consistency improves in stable intervals (20–40s range).</li>
            <li>Low deviation in predicted vs actual during steady conditions.</li>
          </ul>
        </div>

        <div className="insight-card">
          <h3 className="insight-heading">Highlights</h3>
          <ul className="insight-list">
            <li>Predictions align with actual error patterns across intervals.</li>
            <li>Model accuracy improves with increasing sample density.</li>
            <li>Confidence level remains consistently above 90%.</li>
            <li>Residual distribution remains within acceptable limits.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Predictions;
