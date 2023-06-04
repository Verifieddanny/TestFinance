import React from "react";
import logo from "../assets/navbar/logo_at_nav_bar.png";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="ftChild">
          <img src={logo} className="logo" />
          <p>
            Test Finace is a UK-based investment manager with offices in USA,
            Canada and Switzerland. We are a dynamic group whose main focus is
            to provide our clients with the best possible service, by applying a
            systematic and quantitative approach to investment management, with
            the aim of generating high-quality and diversifying alpha for our
            clients’ portfolios.
          </p>
        </div>
        <ul className="ftChild ul">
          <li className="text-2xl md:text-3xl font-bold">Learn More</li>
          <li>Support</li>
          <li>Terms and condition</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="ftChild ul">
          <li className="text-2xl md:text-3xl font-bold">Get in Touch</li>
          <li>Location:Test Location. </li>
          <li>Mail: support@TetFinance</li>
          <li>Phone: +000000000000 </li>
        </ul>
      </div>
      <div className="footerBottom">
        © 2023 Test Finance. All rights reserved.
      </div>
    </footer>
  );
};
