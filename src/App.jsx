import { useState } from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { FooterComponent } from "./Pages/Footer";
import logo from "./assets/navbar/logo_at_nav_bar.png";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { AnimatePresence } from "framer-motion";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <AnimatePresence>
      <Router location={location} key={location.pathname}>
        <ScrollToTop />
        <nav className="nav">
          <img src={logo} className="logo" />
          <div
            className={`InnerNav ${
              open
                ? "top-0 opacity-100"
                : "top-[-1000%] md:opacity-100 opacity-0"
            }`}
            onClick={() => setOpen(!open)}
          >
            <Link className="NavLinks" to="/">
              Home
            </Link>
            <Link className="NavLinks" to="/profile">
              Profile
            </Link>
            <Link className="NavLinks" to="/services">
              Services
            </Link>
            <Link className="NavLinks" to="/signup">
              SignUp
            </Link>
            <Link className="NavLinks" to="/login">
              Login
            </Link>
          </div>
          <button className="menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </nav>

        <AnimatedRoutes />

        <FooterComponent />
      </Router>
    </AnimatePresence>
  );
}

export default App;
