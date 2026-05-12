import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import EventList from './Components/EventList';
import CreateEvent from './Components/CreateEvent';
import ContactMe from './Components/ContactMe';
import HiddenWeb from './Components/HiddenWeb';
import AdminDashboard from './Components/AdminDashboard';
import { Globe } from 'lucide-react';// Replace standard emojis with clean icons

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      className={`relative pb-1 text-sm font-medium transition-colors duration-300 hover:text-white
        ${isActive ? 'text-white' : 'text-slate-300'}`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#EDC4C7] rounded-full animate-pulse"></span>
      )}
    </Link>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* --- NAVIGATION BAR --- */}
        <nav className="bg-[#3F2B66] text-white border-b border-slate-700 backdrop-blur-sm bg-[#3F2B66]/90 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo, matching the globe logo from the images */}
            <Link to="/" className="group flex items-center gap-2">
              <div className="h-8 w-8 bg-[#5D428D] rounded-lg flex items-center justify-center text-[#EDC4C7]">
                <Globe size={18} />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                PORT<span className="text-[#EDC4C7]">FOLIO</span>
              </span>
            </Link>

            {/* Right-aligned Navigation Links */}
            <div className="flex items-center gap-8">
              <NavLink to="/">Event List</NavLink>
              <NavLink to="/create">Form Event</NavLink>
              <NavLink to="/contact">Contact Me</NavLink>
            </div>
          </div>
        </nav>

        <div className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-16">
          <main className="bg-[#5D428D]/90 rounded-3xl shadow-xl p-10 md:p-12 h-full">
            <Routes>
              <Route path="/" element={<EventList />} />
              <Route path="/create" element={<CreateEvent/>} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/hidden" element={<HiddenWeb />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
        </div>

        <footer className="dark-footer border-t border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center text-sm">
            <p>© {new Date().getFullYear()} Event Hub Technologies Global. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-2">Design aesthetic inspired by glossy-gradient modernism.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
