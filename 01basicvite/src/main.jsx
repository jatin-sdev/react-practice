import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App.jsx";

const AnotherElement = (
  <a href="https://www.google.com" target="_blank">
    another google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "magic google"
);
createRoot(document.getElementById("root")).render(areactElement);
