import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { ServicePage } from "./Pages/Services";
import { ErrorPage } from "./Pages/ErrorPage";

import logo from "./assets/navbar/logo_at_nav_bar.png";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Router>
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
            <Link className="NavLinks" to="/contact">
              Contact Me
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<About />} />
          <Route path="/contact" element={<ServicePage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
