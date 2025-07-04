import { Link } from "react-router-dom";
import { useState } from "react";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-r-3xl flex flex-col justify-between min-h-screen">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="mb-4 w-full text-left font-bold text-2xl"
        >
          ☰
        </button>
        {open && (
          <nav className="space-y-3">
            <Link to="/" className="block hover:text-pink-600 transition">Home</Link>
            <Link to="/about" className="block hover:text-pink-600 transition">About</Link>
            <Link to="/gallery" className="block hover:text-pink-600 transition">Gallery</Link>
            <Link to="/experiences" className="block hover:text-pink-600 transition">Experiences</Link>
            <Link to="/book" className="block hover:text-pink-600 transition">Book Now</Link>
          </nav>
        )}
      </div>
    </div>
  );
}

