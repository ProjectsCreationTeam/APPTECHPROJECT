import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CreateEvent from "./Components/CreateEvent";
import EventList from "./Components/EventList";
import ContactMe from "./Components/ContactMe";
import HiddenWeb from "./Components/HiddenWeb";
import AdminDashboard from "./Components/AdminDashboard";

import "./index.css";

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <div className="content">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/create" element={<CreateEvent />} />

            <Route path="/events" element={<EventList />} />

            <Route path="/contact" element={<ContactMe />} />

            <Route path="/hidden" element={<HiddenWeb />} />

            <Route path="/admin" element={<AdminDashboard />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;
