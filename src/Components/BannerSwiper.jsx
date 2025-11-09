import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import BannerFirst from "./BannerFirst";
import BannerScnd from "./BannerScnd";
import BannerThrd from "./BannerThrd";

const BannerSwiper = () => {
  return (
    <>
      <Swiper
        loop
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        modules={[Autoplay]}
        className="mySwiper overflow-x-hidden"
      >
        <SwiperSlide>
          <BannerFirst></BannerFirst>
        </SwiperSlide>
        <SwiperSlide>
          <BannerScnd></BannerScnd>
        </SwiperSlide>
        <SwiperSlide>
          <BannerThrd></BannerThrd>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSwiper;
