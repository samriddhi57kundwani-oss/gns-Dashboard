import React from "react";
import { Menu, Bell, Sun, User } from "lucide-react";
import "./Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <Menu className="menu-icon" size={22} onClick={onToggleSidebar} />
        <h2><span className="highlight">GNSS</span> Prediction Dashboard</h2>
      </div>

      <div className="header-right">
        <Bell className="header-icon" size={20} />
        <Sun className="header-icon" size={20} />
        <User className="header-icon" size={20} />
      </div>
    </header>
  );
};

export default Header;
