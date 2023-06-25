import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { ErrorPage } from "./Pages/ErrorPage";
import { Dashborad } from "./Pages/Dashborad";
import { LoginPage } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { ServicePage } from "./Pages/Services";
import { FooterComponent } from "./Pages/Footer";
import { BsSun, BsMoon } from "react-icons/bs";
import ScrollToTop from "./components/ScrollToTop";
import Deposit from "./Pages/dashboardComponents/Deposit";
import Withdraw from "./Pages/dashboardComponents/Withdraw";
import Crypto from "./Pages/dashboardComponents/CryptoWallet";
import logo from "./assets/navbar/logo_at_nav_bar.png";
import { Toaster } from "sonner";
import { useQuery } from "react-query";

function App() {
  const localS = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localS);
  const [navOn, setNavOn] = useState(true);
  const [user, setUser] = useState({});

  const { data } = useQuery("user", async () => {
    const response = await fetch(`https://api.heavisidefinance.online/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    setUser(data);
    return data;
  });

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
    <Router location={location} key={location.pathname}>
      <ScrollToTop />
      {navOn && (
        <nav className="nav">
          <img src={logo} className="logo" />
          <div
            className={`InnerNav ${
              open
                ? "top-0 opacity-100"
                : "top-[-1000%] lg:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
            }`}
            onClick={() => setOpen(!open)}
          >
            <Link className="NavLinks" to="/">
              Home
            </Link>
            <Link className="NavLinks" to="/about">
              About
            </Link>
            <Link className="NavLinks" to="/services">
              Services
            </Link>
            {user.id ? (
              <div>
                <Link className="NavLinks" to="/signup">
                  SignUp
                </Link>
                <Link className="NavLinks" to="/login">
                  Login
                </Link>
              </div>
            ) : (
              <div>
                <Link className="NavLinks" to="/dashboard">
                  Dashboard
                </Link>
              </div>
            )}
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
              className="grid place-items-center w-full NavLinks"
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
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/signup" element={<RegisterPage setNavon={setNavOn} />} />
        <Route path="/login" element={<LoginPage setNavon={setNavOn} />} />
        <Route
          path="/dashboard"
          element={
            <Dashborad theme={theme} setNavon={setNavOn} setTheme={setTheme} />
          }
        />
        <Route
          path="/deposit"
          element={
            <Deposit theme={theme} setNavon={setNavOn} setTheme={setTheme} />
          }
        />
        <Route
          path="/withdraw"
          element={
            <Withdraw theme={theme} setNavon={setNavOn} setTheme={setTheme} />
          }
        />
        <Route
          path="/crypto"
          element={
            <Crypto theme={theme} setNavon={setNavOn} setTheme={setTheme} />
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {navOn && <FooterComponent />}
      <Toaster richColors />
    </Router>
  );
}

export default App;
