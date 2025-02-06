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

        <div className="wrapper">
          <div
            style={{
              backgroundImage: `url(${aboy})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="item"
          >
            <button className="bg-white px-16 py-2 font-bold">MEN</button>
          </div>

          <div
            style={{
              backgroundImage: `url(${women})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="item"
          >
            <button className="bg-white px-8 py-2 font-bold">WOMEN</button>
          </div>

          <div
            style={{
              backgroundImage: `url(${accessories})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="item"
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
            className="item"
          >
            <button className="bg-white px-10 py-2 font-bold">KIDS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
