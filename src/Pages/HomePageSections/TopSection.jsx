import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import pic1 from "../../assets/HomePage/pic1.jpg";
import pic2 from "../../assets/HomePage/pic2.jpg";
import pic3 from "../../assets/HomePage/pic3.jpg";

export const TopSection = () => {
  return (
    <>
      <section className="TopSection">
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect
          speed={800}
          slidesPerView={1}
          loop
          className="MySwipper"
        >
          <SwiperSlide className="swipes">
            <img className="SliderImage" src={pic1} />
            <div className="descripo">
              <h2 className="text-5xl mb-[2rem]">Planning for the Future</h2>
              <h5 className="text-xl">
                Highly skilled industrial expertise assisting you in meeting
                your financial objectives.
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swipes">
            <img className="SliderImage" src={pic2} />
            <div className="descripo">
              <h2 className="text-5xl mb-[2rem]">
                Enhance your investment decisions.
              </h2>
              <h5 className="text-xl">
                Explore financial growth and protection strategies
              </h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swipes">
            <img className="SliderImage" src={pic3} />
            <div className="descripo">
              <h2 className="text-5xl mb-[2rem]">Just sit and relax.</h2>
              <h5 className="text-xl">
                Start investing with us today and put your money to work for
                you.
              </h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};
