// import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParamComp from "./components/ParamComp";
import { React } from "react";
import Streak from "./components/Streak";
import LiveClass from "./components/LiveClass";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children: [
      { path: "streak", element: <Streak /> },
      { path: "live-class", element: <LiveClass /> },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
