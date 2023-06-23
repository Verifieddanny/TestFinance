import { React, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import ScrollTrigger from "react-scroll-trigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <animated.div className="text-[#60697b] dark:text-white text-3xl font-bold">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

export const Testimony = () => {
  const [countOn, setCountOn] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <section className="SecSection bg-blue-400 pb-[4rem]">
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        <div className="SatisfactTop">
          <p className="bigTextFour">More Reasons To Work With Us</p>
          <div className="numbers">
            <div>
              {countOn && <Number n={26} />}
              <p>Associated Companies</p>
            </div>
            <div>
              {countOn && <Number n={11339} />}
              <p>Happy Clients</p>
            </div>
            <div>
              {countOn && <Number n={13} />}
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </ScrollTrigger>
      <div className="TestimonySection">
        <div className="Testmony" data-aos="fade-right"></div>
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
          className="MySwipper TestimonySwipper"
          data-aos="fade-left"
        >
          <SwiperSlide className="swipes">
            <div className="testimonyText">
              <p className="bigTextThree">
                “I am completely new to investing, so this is like learning a
                new language to me, hightrove has been a very suitable to me and
                my friends.”
              </p>
              <p className="bigTextTwo">Simon Charles</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swipes">
            <div className="testimonyText">
              <p className="bigTextThree">
                "I’ve been a client at hightrove investment for many years, I
                appreciate the courtesy from the staff, not only do they have an
                outstanding work ethic and their moral standards are of the
                highest caliber, I would recommend hightrove to anyone without
                Hesitation."
              </p>
              <p className="bigTextTwo">Mary Sparks</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swipes">
            <div className="testimonyText">
              <p className="bigTextThree">
                "I travel a lot because for my work and usually don’t have much
                time to monitor my account, I get emails of the progress, money
                is sent to me wherever I am and it’s just perfect.. so I will
                advise everyone to look into hightrove."
              </p>
              <p className="bigTextTwo">Grace Shae</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
