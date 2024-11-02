import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CenteredTitle from './components/CenteredTitle';
import About from './pages/About';
import Directory from './pages/Directory';
import Events from './pages/Events';
import Feed from './pages/Feed';
import Listings from './pages/Listings';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<CenteredTitle text="LMCC Alumni Network" />} />
          <Route path="/about" element={<About />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
