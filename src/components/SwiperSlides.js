import React from "react";

// Import Swiper React components
import { Autoplay, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function SwiperSlides({ value }) {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      className="testimonialSwiper"
    >
      {value.values.map((i) => (
        <SwiperSlide key={i.id}>
          <div className="swiperWrap flex w-full xs:justify-center sm:justify-center lg:justify-between items-start">
            <h1 className="testimonialHead">{value.headerText}</h1>
            <span className="topAbstract"></span>
            <div className="left  xs:justify-center sm:justify-center flex xs:w-[100%] sm:w-[80%] lg:w-[30%]">
              <div className="imgWrap ">
                <img loading="lazy" src={i.image} alt="Testimonials" />
                <div className="roundAbstract"></div>
                <div className="roundAbstract-2"></div>
                <div className="roundAbstract-3"></div>
              </div>
            </div>
            <div className="right flex sm:w-[80%] lg:w-[60%] xs:w-[100%] xs:justify-center sm:justify-center lg:justify-start">
              <p className="xs:w-[100%] sm:w-[95%]">
                <span className="q-l xs:hidden">❝</span>
                {i.desc}
                <span className="q-r xs:hidden">❞</span>
              </p>
              <div className="contentWrap">
                <h1>{i.name}</h1>
                <h3 className="t-2">{i.course}</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperSlides;
