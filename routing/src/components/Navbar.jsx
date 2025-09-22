import React from "react";
import About from "./About";
import Home from "./Home";
import Dashboard from "./Dashboard";
import "../components/navbar.css";
import NavBtn from "./NavBtn";
import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="{(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className=" {(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="{(isActive) => (isActive ? 'navbar-item' : 'inactive')}">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div><NavBtn /></div>
      
    </div>
  );
};

export default Navbar;
