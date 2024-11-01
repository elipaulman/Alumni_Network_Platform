import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main"; 
import About from "./pages/About";
import Directory from "./pages/Directory";
import Events from "./pages/Events";
import Feed from "./pages/Feed";
import Listings from "./pages/Listings";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;