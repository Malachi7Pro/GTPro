import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ServicePage from './components/ServicePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<ServicePage serviceName="Services" />} />
          <Route path="/requests" element={<ServicePage serviceName="New Request" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
