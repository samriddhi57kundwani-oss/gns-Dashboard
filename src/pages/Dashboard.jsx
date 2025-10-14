import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dataUploaded, setDataUploaded] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [modelMetrics, setModelMetrics] = useState({
    accuracy: 0,
    mae: 0,
    rmse: 0,
    confidence: 0,
    skewness: 0,
    kurtosis: 0,
  });

  useEffect(() => {
    const uploaded = localStorage.getItem("dataUploaded") === "true";
    setDataUploaded(uploaded);

    if (uploaded) {
      // Simulated model metrics
      setModelMetrics({
        accuracy: 94.5,
        mae: 1.17,
        rmse: 1.45,
        confidence: 95,
        skewness: 0.23,
        kurtosis: 2.81,
      });

      setChartData([
        { x: -3.9, y: 2 },
        { x: -3.0, y: 5 },
        { x: -2.1, y: 10 },
        { x: -1.2, y: 18 },
        { x: -0.6, y: 25 },
        { x: 0.0, y: 38 },
        { x: 0.6, y: 28 },
        { x: 1.2, y: 20 },
        { x: 2.1, y: 10 },
        { x: 3.1, y: 4 },
      ]);
    }
  }, []);

  const handleUploadClick = () => {
    navigate("/upload");
  };

  return (
    <div className="dashboard-container fade-in">
      <header className="dashboard-header">
        <h1 className="dashboard-title glow-text">GNSS Prediction Dashboard</h1>
        <span className="dashboard-subtitle">Smart Monitoring & Residual Analysis</span>
      </header>

      <div className="dashboard-layout">
        {/* ---------------- LEFT SECTION ---------------- */}
        <div className="dashboard-left">
          {/* Upload Section */}
          <div className="card upload-card soft-glow">
            <div className="card-header">
              <h2>Upload Dataset</h2>
              <p className="hint">Supports CSV / Excel format</p>
            </div>
            <div className="upload-box hover-glow" onClick={handleUploadClick}>
              <i className="fa fa-cloud-upload upload-icon"></i>
              <p>Click to Upload Data</p>
            </div>
            <p className="upload-info">
              <i className="fa fa-info-circle"></i> Uploaded datasets trigger auto validation
            </p>
          </div>

          {/* Residual Distribution */}
          <div className="card residual-card soft-glow">
            <div className="card-header">
              <h2>Residual Distribution | Accuracy Validation</h2>
              <p className="review-link">Normal Fit Detected</p>
            </div>

            {dataUploaded ? (
              <>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1a2c3f" />
                    <XAxis dataKey="x" tick={{ fill: "#a3c8ff" }} />
                    <YAxis tick={{ fill: "#a3c8ff" }} />
                    <Tooltip contentStyle={{ backgroundColor: "#0e1a28", color: "#fff" }} />
                    <Bar dataKey="y" fill="#00bfff" radius={[8, 8, 0, 0]} />
                    <Line type="monotone" dataKey="y" stroke="#66e0ff" dot={false} />
                  </BarChart>
                </ResponsiveContainer>
                <p className="chart-note">
                  Residuals follow Gaussian pattern — model unbiased & calibrated.
                </p>
              </>
            ) : (
              <div className="no-data fancy-placeholder">
                <p>📂 No data uploaded yet</p>
                <span>
                  Upload a dataset to visualize accuracy metrics, residuals and model trends.
                </span>
              </div>
            )}
          </div>

          {/* Prediction Highlights */}
          <div className="card highlights-card soft-glow">
            <div className="card-header">
              <h2>Prediction Summary</h2>
            </div>
            <ul className="prediction-list">
              <li>✔ Residuals are centered near zero</li>
              <li>✔ Model tracks GNSS errors efficiently</li>
              <li>⚠ Slight deviations observed under satellite drift</li>
              <li>💡 Calibration recommended for high-noise datasets</li>
            </ul>
          </div>
        </div>

        {/* ---------------- RIGHT SECTION ---------------- */}
        <div className="dashboard-right">
          {/* Model Training */}
          <div className="card training-card soft-glow">
            <div className="card-header">
              <h3>Model Training Status</h3>
              <div className={`status-badge ${dataUploaded ? "active" : "inactive"}`}>
                {dataUploaded ? "Active" : "Idle"}
              </div>
            </div>
            <div className="accuracy-box">
              <span className="label">Accuracy</span>
              <h2 className="accuracy-value">
                {dataUploaded ? `${modelMetrics.accuracy}%` : "--"}
              </h2>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: dataUploaded ? `${modelMetrics.accuracy}%` : "0%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="card metric-card soft-glow">
            <h4>Performance Metrics</h4>
            <p><strong>MAE:</strong> {dataUploaded ? modelMetrics.mae : "--"}</p>
            <p><strong>RMSE:</strong> {dataUploaded ? modelMetrics.rmse : "--"}</p>
            <p><strong>Confidence:</strong> {dataUploaded ? `${modelMetrics.confidence}%` : "--"}</p>
          </div>

          {/* Statistics */}
          <div className="card stats-card soft-glow">
            <h4>Statistical Summary</h4>
            <div className="stats-grid">
              <div className="stat-item">Skewness — {dataUploaded ? modelMetrics.skewness : "--"}</div>
              <div className="stat-item">Kurtosis — {dataUploaded ? modelMetrics.kurtosis : "--"}</div>
            </div>
          </div>

          {/* Model Health */}
          <div className="card health-card soft-glow">
            <h4>Model Health</h4>
            <ul className="health-list">
              <li>🟢 Prediction stability: Excellent</li>
              <li>🟢 Latency: Minimal</li>
              <li>🟡 Drift Detected: None currently</li>
              <li>🔵 Auto-calibration ready</li>
            </ul>
          </div>

          {/* Final Output */}
          <div className="card final-card soft-glow">
            <h4>Final Output</h4>
            <p>{dataUploaded ? "Model Ready for Evaluation" : "Awaiting Dataset Upload"}</p>
            <div className="button-group">
              <button className="export-btn">Export Report</button>
              <button className="deploy-btn">Deploy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
