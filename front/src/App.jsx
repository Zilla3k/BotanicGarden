import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./routes/Home/Home";
import { Pools } from "./routes/Pools/Pools";
import { Gardening } from "./routes/Gardening/Gardening";
import { SolarPanels } from "./routes/SolarPanels/SolarPanels";
import { About } from "./routes/About/About";
import { Budget } from "./routes/Budget/Budget";

import "./App.css";
import { Login } from "./routes/Login/Login";

export function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/gardening" element={<Gardening />} />
            <Route path="/solarpanels" element={<SolarPanels />} />
            <Route path="/about" element={<About />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
    </>
  )
}