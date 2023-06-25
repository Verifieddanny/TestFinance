import React from "react";
import logo from "../assets/navbar/logo_at_nav_bar.png";
import { Link } from "@react-email/link";

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div className="ftChild">
          <img src={logo} className="logo mb-[3rem]" />
          <p className="text-left">
            Heaviside Finance is a UK-based investment manager with offices in
            USA, Canada and Switzerland. We are a dynamic group whose main focus
            is to provide our clients with the best possible service, by
            applying a systematic and quantitative approach to investment
            management, with the aim of generating high-quality and diversifying
            alpha for our clients’ portfolios.
          </p>
        </div>
        <ul className="ftChild ul">
          <li className="text-2xl md:text-3xl font-bold">Learn More</li>
          <li>Support</li>
          <li>Terms and condition</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="ftChild ul text-left">
          <li className="text-2xl md:text-3xl font-bold">Get in Touch</li>
          <li>
            <a href="https://www.google.ng/maps/place/State+of+Amazonas,+Brazil/@-3.7048608,-75.6534244,5z/data=!3m1!4b1!4m6!3m5!1s0x92183f5c8b1d6ed1:0x176d6af66b3c2efa!8m2!3d-3.4168427!4d-65.8560646!16zL20vMDFoZGt5?entry=ttu">
              Location: Heaviside Finance
            </a>
          </li>
          <li>
            <a href="mailto:customer-support@heavisidefinance.online">
              Email: customer-support@heavisidefinance.online
            </a>
          </li>
          <li>
            <a href="tel:+1(480) 382-1908">Phone: +1(480) 382-1908 </a>
          </li>
        </ul>
      </div>
      <div className="footerBottom">
        © 2023 Heaviside Finance. All rights reserved.
      </div>
    </footer>
  );
};

/*
 <ul className="ftChild ul">
          <li className="text-2xl md:text-3xl font-bold">Get in Touch</li>
          <li>
            <Link href="https://www.google.ng/maps/place/State+of+Amazonas,+Brazil/@-3.7048608,-75.6534244,5z/data=!3m1!4b1!4m6!3m5!1s0x92183f5c8b1d6ed1:0x176d6af66b3c2efa!8m2!3d-3.4168427!4d-65.8560646!16zL20vMDFoZGt5?entry=ttu">
              Location:Heaviside Finance{" "}
            </Link>
          </li>
          <li>
            <Link
              className=" dark:text-white  text-gray-800"
              href="mailto:customer-support@heavisidefinance.online"
            >
              customer-support@heavisidefinance.online
            </Link>
          </li>
          <li>
            <Link href="tel:+000000000000">Phone: +000000000000 </Link>
          </li>
        </ul>

*/
