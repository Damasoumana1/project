import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import EpidemicForecasts from './pages/EpidemicForecasts';
import HealthMaps from './pages/HealthMaps';
import UtilizationClusters from './pages/UtilizationClusters';
import Recommendations from './pages/Recommendations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex pt-12"> {/* Reduced top padding */}
          <Sidebar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/forecasts" element={<EpidemicForecasts />} />
              <Route path="/maps" element={<HealthMaps />} />
              <Route path="/clusters" element={<UtilizationClusters />} />
              <Route path="/recommendations" element={<Recommendations />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;