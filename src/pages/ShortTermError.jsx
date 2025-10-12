import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ShortTermDashboard.css";

const ShortTermError = () => {
  const data = [
    { time: 0, actualClock: 0.4, predictedClock: 0.3, actualEphemeris: 0.5, predictedEphemeris: 0.4 },
    { time: 10, actualClock: 0.6, predictedClock: 0.5, actualEphemeris: 0.7, predictedEphemeris: 0.6 },
    { time: 20, actualClock: 0.2, predictedClock: 0.1, actualEphemeris: 0.3, predictedEphemeris: 0.25 },
    { time: 30, actualClock: 0.8, predictedClock: 0.7, actualEphemeris: 0.9, predictedEphemeris: 0.8 },
    { time: 40, actualClock: 0.4, predictedClock: 0.3, actualEphemeris: 0.5, predictedEphemeris: 0.45 },
    { time: 50, actualClock: 0.5, predictedClock: 0.4, actualEphemeris: 0.6, predictedEphemeris: 0.55 },
    { time: 60, actualClock: 0.3, predictedClock: 0.25, actualEphemeris: 0.4, predictedEphemeris: 0.35 },
  ];

  return (
    <div className="short-term-error-page">
      <h2>Actual vs Predicted Error (Time Series)</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 40, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
            <XAxis
              dataKey="time"
              stroke="#fff"
              label={{ value: "Time Interval", position: "bottom", offset: 30, fill: "#fff" }}
              tick={{ fill: "#fff" }}
            />
            <YAxis
              stroke="#fff"
              label={{ value: "Error Value", angle: -90, position: "insideLeft", fill: "#fff" }}
              tick={{ fill: "#fff" }}
            />
            <Tooltip contentStyle={{ backgroundColor: "#1e1e2f", color: "#fff" }} />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{
                paddingTop: "40px",
                fontSize: "14px",
                color: "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="actualClock"
              stroke="#ff7300"
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Actual Clock Error"
            />
            <Line
              type="monotone"
              dataKey="predictedClock"
              stroke="#00c4ff"
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Predicted Clock Error"
            />
            <Line
              type="monotone"
              dataKey="actualEphemeris"
              stroke="#ffcc00"
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Actual Ephemeris Error"
            />
            <Line
              type="monotone"
              dataKey="predictedEphemeris"
              stroke="#00ff66"
              strokeWidth={2}
              dot={{ r: 3 }}
              name="Predicted Ephemeris Error"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="chart-description">
        Line Graph: Actual vs Predicted Error trend.
      </p>
    </div>
  );
};

export default ShortTermError;
