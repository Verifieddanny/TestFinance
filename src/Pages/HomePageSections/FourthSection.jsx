import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const FourthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <section className="SecSection">
      <div className=" SatisfactionTabFouth">
        <div data-aos="fade-down" className="rightTab ">
          <p
            data-aos="fade-up"
            className="text-[#60697b] text-3xl font-bold mb-[2rem] text-center
          "
          >
            COMPREHENSIVE WEALTH MANAGEMENT
          </p>
          <p data-aos="fade-down" className="text-xl mb-[1rem]">
            At Hightrove Finance, our customers are put first at all times. Your
            own Client Relationship Officer is there for you every step of the
            way whether you're delving into a specific issue, taking in the big
            picture, or balancing financial opportunities and risks. Our
            objective is to fully understand your requirements and work with you
            to develop long-term perspectives so that we can give you the best
            advice and react swiftly and efficiently, even if circumstances
            alter unforeseenly.
          </p>
        </div>
        <div data-aos="fade-up-right" className="leftTab leftTabSec "></div>
      </div>
    </section>
  );
};
