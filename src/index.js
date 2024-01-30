import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./Pages/Events";
import Rules from "./Pages/Rules";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="events" element={<Events />}></Route>
      <Route path="rules" element={<Rules />} />
    </Routes>
  </BrowserRouter>
);
