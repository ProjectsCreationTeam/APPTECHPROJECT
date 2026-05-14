import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import EventList from './Components/EventList';
import CreateEvent from './Components/CreateEvents';
import Contact from './Components/Contact';
import HiddenWeb from './Components/HiddenWeb';
import AdminDashboard from './Components/AdminDashboard';

function App() {

  return (

    <Router>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <Link
            className="navbar-brand"
            to="/"
          >
            Event Manager
          </Link>

          <div className="navbar-nav">

            <Link className="nav-link" to="/">
              EventList
            </Link>

            <Link className="nav-link" to="/create">
              Create Event
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link className="nav-link" to="/hiddenweb">
              HiddenWeb
            </Link>

            <Link className="nav-link" to="/admin">
              AdminDashboard
            </Link>

          </div>

        </div>

      </nav>

      <Routes>

        <Route
          path="/"
          element={<EventList />}
        />

        <Route
          path="/create"
          element={<CreateEvent />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/hiddenweb"
          element={<HiddenWeb />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

      </Routes>

    </Router>

  );
}

export default App;
