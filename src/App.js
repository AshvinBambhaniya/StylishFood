import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <div style={{ height: "41.4rem" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services-container" element={<Services />} />
            <Route exact path="/client-section" element={<Client />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
