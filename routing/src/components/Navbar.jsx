import React from "react";
import About from "./About";
import Home from "./Home";
import Dashboard from "./Dashboard";
import "../components/navbar.css";
import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar {(isActive) => (isActive ? 'active' : 'inactive')} text-2xl ">
      <div className="{(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className=" {(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="{(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
