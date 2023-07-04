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
            <a href="https://www.google.com/maps/place/199+Westminster+Bridge+Rd,+London+SE1+7FP,+UK/@51.5004552,-0.1182397,17z/data=!3m1!4b1!4m6!3m5!1s0x487604b8bfec2215:0xa0422b413e3f2153!8m2!3d51.5004519!4d-0.1156648!16s%2Fg%2F11csdlgwqf?entry=ttu">
              Location: 199 Westminster Bridge Rd, London SE1 7FP, United Kingdom
            </a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/300-600+E+Rio+Salado+Pkwy,+Tempe,+AZ+85281,+USA/@33.4304878,-111.9347183,17z/data=!3m1!4b1!4m6!3m5!1s0x872b0920fe24e517:0xfced217c7c830a48!8m2!3d33.4299188!4d-111.9317553!16s%2Fg%2F11c53mzwh7?entry=ttu">
              Location: 300-600 E Rio Salado Pkwy, Tempe, AZ 85281
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
