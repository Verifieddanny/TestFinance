import React, { useEffect } from "react";
import AOS from "aos";
import badgeImage from "../../assets/HomePage/badge-svgrepo.svg";
import boxImage from "../../assets/HomePage/briefcase-svgrepo.svg";
import serachImage from "../../assets/HomePage/searchIcon.svg";

export const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  });
  return (
    <>
      <section className="ThirdSection">
        <div className="Rates">
          <div className="topRateTab">
            <p
              data-aos="fade-down"
              className="text-[#aab0bc] dark:text-white text-xl"
            >
              WHY TRUSTING US
            </p>
            <p
              data-aos="fade-down"
              className=" text-[#60697b] dark:text-white text-3xl font-bold"
            >
              Solutions tailored to your needs.
            </p>
          </div>
          <div className="bottomRateTab">
            <div data-aos="fade-up-left" className="box">
              <img className="rateIcons" src={badgeImage} />
              <p className="bigText">Retirement Advisor</p>
              <p className="smalls">
                Don't simply retire from something; have something to retire to.
                We are here to help you with that.
              </p>
            </div>
            <div data-aos="fade-up-right" className="box">
              <img className="rateIcons" src={boxImage} />
              <p className="bigText">Tax Consultant</p>
              <p className="smalls">
                Wages are only medicine to poverty as you need other source of
                incomes in order to meet up with your Taxes and that is why you
                need our Investment Manager's.
              </p>
            </div>
            <div data-aos="fade-up-left" className="box">
              <img className="rateIcons" src={serachImage} />
              <p className="bigText">Financial Strategy</p>
              <p className="smalls">
                We all want wealth, but how do we achieve it? It starts with a
                successful Investment into an Opportunity which no one else
                seems to see.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
