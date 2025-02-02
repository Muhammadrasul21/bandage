import React from "react";
import couple from "../assets/couple.png";

const Info = () => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse gap-8 sm:flex-row items-center justify-between">
        <div>
          <img src={couple} alt="" className="w-full" />
        </div>

        <div className="w-[340px] flex flex-col gap-[30px]">
          <p className="font-bold text-[#BDBDBD]">SUMMER 2020</p>
          <p className="font-bold text-[40px]">Part of the Neural Universe</p>
          <p className="text-xl text-[#737373] text-[20px]">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex gap-[10px]">
            <button className="border border-[#23A6F0] sm:border-[#2DC071] text-[#23A6F0] sm:text-[#2DC071] hover:bg-[#23A6F0] sm:hover:bg-[#2DC071] hover:text-white font-bold text-[14px] px-10 py-[15px] rounded-[5px] transition duraton-300 ease-in-out">
              BUY NOW
            </button>
            <button className="border border-[#23A6F0] sm:border-[#2DC071] text-[#23A6F0] sm:text-[#2DC071] hover:bg-[#23A6F0] sm:hover:bg-[#2DC071] hover:text-white font-bold text-[14px] px-10 py-[15px] rounded-[5px] transition duraton-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
