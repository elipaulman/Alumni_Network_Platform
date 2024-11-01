import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CenteredTitle from "./components/CenteredTitle";
import CalloutBox from "./components/CalloutBox";
import About from "./pages/About";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Feed from "./pages/Feed";
import Listings from "./pages/Listings";
import alumain from "./images/alumain.png";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-6 flex-col">
          <img
            src={alumain}
            alt="Alumni Network"
            className="mb-6 w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg"
          />
          <CenteredTitle text="LMCC Alumni Network" />
          <CalloutBox
            title="Welcome"
            text="Welcome to the LMCC Alumni Network. Stay updated with our latest news and events, and reconnect with fellow alumni."
          />
          <Routes>
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
