import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { LoginPage } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { ServicePage } from "./Pages/Services";
import { ErrorPage } from "./Pages/ErrorPage";
import { FooterComponent } from "./Pages/Footer";
import { BsSun, BsMoon } from "react-icons/bs";

import logo from "./assets/navbar/logo_at_nav_bar.png";
import Dashborad from "./Pages/Dashborad";
function App() {
  const localS = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localS);
  const [navOn, setNavOn] = useState(true);

  useEffect(() => {
    switch (theme) {
      case null:
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  }, [theme]);

  const [open, setOpen] = useState(false);
  return (
    <>
      <Router>
        {navOn && (
          <nav className="nav">
            <img src={logo} className="logo" />
            <div
              className={`InnerNav ${
                open
                  ? "top-0 opacity-100"
                  : "top-[-1000%] md:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
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
              <button
                type="button"
                onClick={() => {
                  setTheme((prev) => {
                    if (prev === "dark") {
                      return "light";
                    } else {
                      return "dark";
                    }
                  });
                }}
                className="flex NavLinks  "
              >
                {theme === "dark" ? <BsSun /> : <BsMoon />}
              </button>
            </div>
            <button className="menu" onClick={() => setOpen(!open)}>
              {open ? "Close" : "Menu"}
            </button>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<Home setNavon={setNavOn} />} />
          <Route path="/profile" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route
            path="/signup"
            element={<RegisterPage setNavon={setNavOn} />}
          />
          <Route path="/login" element={<LoginPage setNavon={setNavOn} />} />
          <Route
            path="/dashboard"
            element={
              <Dashborad
                theme={theme}
                setNavon={setNavOn}
                setTheme={setTheme}
              />
            }
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {navOn && <FooterComponent />}
      </Router>
    </>
  );
}

export default App;
