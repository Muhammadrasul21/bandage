import React from "react";
import bg from "../assets/hero.jpg";
import herobg from "../assets/herobg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ⬅️ Autoplay modulini import qildik
import "swiper/css";
import boy from "../assets/boy.png";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]} // ⬅️ Swiper autoplay moduli shu yerda chaqirilishi kerak
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full p-10 h-[716px] flex items-center justify-center text-white"
        >
          <div className="flex flex-col items-center text-center sm:text-start sm:items-start gap-9 py-14 w-[268px] sm:w-[1044px]">
            <p>SUMMER 2020</p>
            <p className="font-bold text-[40px] sm:text-[58px]">
              NEW COLLECTION
            </p>
            <p className="font-normal text-xl w-[340px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <div>
              <button className="px-10 py-4 bg-[#2DC071] font-bold text-2xl rounded-[5px]">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${herobg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-[716px] px-10 flex justify-center gap-10 text-white"
        >
          <div className="flex flex-col justify-center text-center sm:text-start sm:items-star gap-9 py-14 ">
            <p>SUMMER 2020</p>
            <p className="font-bold  text-[40px] sm:text-[58px]">
              NEW COLLECTION
            </p>
            <p className="font-normal text-xl w-[340px]">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex items-center gap-[34px]">
              <p className="font-bold text-2xl">$16.48</p>
              <button className="px-10 py-4 bg-[#2DC071] font-bold text-2xl rounded-[5px]">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-end">
            <img src={boy} alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
