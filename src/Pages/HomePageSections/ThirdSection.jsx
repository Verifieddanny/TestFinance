import React from "react";
import badgeImage from "../../assets/HomePage/badge-svgrepo.svg";
import boxImage from "../../assets/HomePage/briefcase-svgrepo.svg";
import serachImage from "../../assets/HomePage/searchIcon.svg";

export const ThirdSection = () => {
  return (
    <>
      <section className="ThirdSection">
        <div className="Rates">
          <div className="topRateTab">
            <p className="text-[#aab0bc] text-xl">WHY TRUSTING US</p>
            <p className=" text-[#60697b] text-3xl font-bold">
              Solutions tailored to your needs.
            </p>
          </div>
          <div className="bottomRateTab">
            <div className="box">
              <img className="rateIcons" src={badgeImage} />
              <p className="bigText">Retirement Advisor</p>
              <p className="smalls">
                Don't simply retire from something; have something to retire to.
                We are here to help you with that.
              </p>
            </div>
            <div className="box">
              <img className="rateIcons" src={boxImage} />
              <p className="bigText">Tax Consultant</p>
              <p className="smalls">
                Wages are only medicine to poverty as you need other source of
                incomes in order to meet up with your Taxes and that is why you
                need our Investment Manager's.
              </p>
            </div>
            <div className="box">
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
