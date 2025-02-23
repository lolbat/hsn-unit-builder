import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

// Handle the case where the app is deployed to GitHub Pages. On GH Pages, the app is not at the root path, but at /hsn-unit-builder.
const pathname = window.location.pathname;

let basename;
if (pathname.includes('hsn-unit-builder')) {
  basename = '/hsn-unit-builder';
} else {
  basename = '';
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
