import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CenteredTitle from './components/CenteredTitle';
import About from './pages/About';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Feed from './pages/Feed';
import Listings from './pages/Listings';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<CenteredTitle text="LMCC Alumni Network" />} />
            <Route path="/about" element={<About />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/listings" element={<Listings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;