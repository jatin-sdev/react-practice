import React from "react";
import { Outlet } from "react-router-dom";
import "../components/navbar.css";

const Dashboard = () => {

  return (
    <div>
      <div className="navbar-item">Dashboard</div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
