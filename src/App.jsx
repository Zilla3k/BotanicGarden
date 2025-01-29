import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { Pools } from './pages/Pools.jsx';
import { Gardening } from './pages/Gardening.jsx';
import { SolarPanels } from './pages/SolarPanels.jsx';
import { Budget } from './pages/Budget.jsx';
import { About } from './pages/About.jsx';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/gardening" element={<Gardening />} />
        <Route path="/solarpanels" element={<SolarPanels />} />
        <Route path="/about" element={<About />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}
