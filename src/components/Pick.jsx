import React from "react";
import aboy from "../assets/aboy.png";
import women from "../assets/women.png";
import accessories from "../assets/accessories.png";
import man from "../assets/man.png";

const Pick = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-12 mt-20">
        <div className="flex flex-col gap-2 text-center">
          <p className="font-bold text-2xl">EDITOR`S PICK</p>
          <p className="text-[14px]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-8 grid-rows-4 grid-rows-8 sm:grid-rows-3 gap-[30px] w-full h-screen">
          <div
            style={{
              backgroundImage: `url(${aboy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-start-1 sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:sm:row-start-1 sm:row-end-3 bg-cover bg-center flex items-end p-[30px] row-start-1 row-end-3"
          >
            <button className="bg-white px-16 py-2 font-bold">MEN</button>
          </div>

          <div
            style={{
              backgroundImage: `url(${women})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-start-1 sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-3 bg-cover bg-center flex items-end p-[20px] row-start-3 row-end-5"
          >
            <button className="bg-white px-8 py-2 font-bold">WOMEN</button>
          </div>

          <div
            style={{
              backgroundImage: `url(${accessories})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-start-1 sm:col-start-6 sm:col-end-8 sm:row-start-1 sm:row-end-2 bg-cover bg-center flex items-end pb-[23px] pl-[14px] row-start-5 row-end-7"
          >
            <button className="bg-white px-6 py-2 font-bold">
              ACCESSORIES
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${man})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="col-start-1 sm:col-start-6 sm:col-end-8 row-start-4 sm:row-start-2 sm:row-end-3 bg-cover bg-center flex items-end p-[18px] "
          >
            <button className="bg-white px-10 py-2 font-bold">KIDS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
