import { Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import Footer from './components/Footer'; // <- You'll create this
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Experiences from './pages/Experiences';
import BookNow from './pages/BookNow';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <SidebarMenu />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/book" element={<BookNow />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}