import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { ServicePage } from "../Pages/Services";
import { ErrorPage } from "../Pages/ErrorPage";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<About />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AnimatedRoutes;
