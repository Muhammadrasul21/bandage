import React from 'react';
import bg from "../assets/hero.jpg";
import herobg from "../assets/herobg.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={bg} alt="Hero background" className="w-full h-[770px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={herobg} alt="Another hero background" className="w-full h-[770px]" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
