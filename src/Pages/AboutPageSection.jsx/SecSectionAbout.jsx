import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const SecScetionAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <section className="SecSection">
        <div className="SatisfactionTab">
          <div data-aos="fade-right" className="leftTab leftTabAbout"></div>
          <div data-aos="fade-left" className="rightTab">
            <p data-aos="fade-down" className="text-3xl mb-[1rem]">
              Your Satisfaction Defines Us
            </p>
            <p data-aos="fade-up " className="text-xl mb-[1rem]">
              Finding the best investment firm to work with can make or break
              your financial security. Whether you're investing a little or a
              lot, your money is just as important to you, and it's critical to
              find a financial investment professional you can rely on to steer
              you toward wise investment buys.
            </p>
            <ul className="text-xl ">
              <li> - Seasoned financial experts and brokers.</li>
              <li>
                - We are constantly hungry to learn new things and to impart the
                finest knowledge we can to our consumers.
              </li>
              <li>
                - Better investment decisions, informed by rigorous, proprietary
                macro-economic research and market analysis.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
