import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="bg-beige min-h-screen">
        <SidebarMenu />
        <div className="ml-0 md:ml-20 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book" element={<BookNow />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}