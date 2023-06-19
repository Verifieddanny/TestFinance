import React, { useEffect } from "react";
import pic1 from "../../assets/AboutPage/about-us.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export const TopSectionAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <section className="TopSection flex justify-center">
        <img src={pic1} className="SliderImage" />
        <div className=" absolute top-[20%] text-center text-[#ffffff]">
          <p data-aos="fade-down" className=" text-3xl font-bold">
            Hello! This is TestFinance
          </p>
          <h5 data-aos="fade-up" className="text-xl">
            Highly skilled industrial expertise assisting you in meeting your
            financial objectives.
          </h5>
        </div>
      </section>
    </>
  );
};
