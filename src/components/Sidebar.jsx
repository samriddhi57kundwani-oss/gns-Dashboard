import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Upload,
  BarChart,
  LineChart,
  ActivitySquare,
  Brain,
  Settings,
  Info,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">GNSS Dashboard</h2>
      <ul>
        <li><Link to="/upload"><Upload size={18}/> Upload Data</Link></li>
        <li><Link to="/dashboard"><Home size={18}/> Dashboard</Link></li>
        <li><Link to="/long-term"><BarChart size={18}/> Long Term Error</Link></li>
        <li><Link to="/short-term"><LineChart size={18}/> Short Term Error</Link></li>
        <li><Link to="/residual"><ActivitySquare size={18}/> Residual Distribution</Link></li>
        <li><Link to="/predictions"><Brain size={18}/> Predictions</Link></li>
        <li><Link to="/settings"><Settings size={18}/> Settings</Link></li>
        <li><Link to="/info"><Info size={18}/> Info</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
