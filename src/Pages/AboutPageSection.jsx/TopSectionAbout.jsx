import React from "react";
import pic1 from "../../assets/AboutPage/about-us.webp";
export const TopSectionAbout = () => {
  return (
    <>
      <section className="TopSection flex justify-center">
        <img src={pic1} className="SliderImage" />
        <div className=" absolute top-[20%] text-center text-[#ffffff]">
          <p className=" text-3xl font-bold">Hello! This is TestFinance</p>
          <h5 className="text-xl">
            Highly skilled industrial expertise assisting you in meeting your
            financial objectives.
          </h5>
        </div>
      </section>
    </>
  );
};
