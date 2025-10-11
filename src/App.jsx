import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header"; // ✅ New
import UploadBox from "./components/UploadBox";
import Dashboard from "./pages/Dashboard";
import LongTermError from "./pages/LongTermError";
import ShortTermError from "./pages/ShortTermError";
import ResidualDistribution from "./pages/ResidualDistribution";
import Predictions from "./pages/Predictions";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app-layout">
        {sidebarOpen && <Sidebar />}
        <div className="main-section">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />  {/* ✅ Header added */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/upload" element={<UploadBox />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/long-term" element={<LongTermError />} />
              <Route path="/short-term" element={<ShortTermError />} />
              <Route path="/residual" element={<ResidualDistribution />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/info" element={<Info />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

