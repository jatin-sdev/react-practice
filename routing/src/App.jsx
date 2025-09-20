// import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <div>Home</div>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <div>About</div>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <div>Dashboard</div>
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
