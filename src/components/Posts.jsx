import { postItems } from "@/static";
import React from "react";

const Posts = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-[10px] items-center text-center mt-[112px] mb-20">
        <p className="text-[#23A6F0] text-xl tracking-[2px]">Practice Advice</p>
        <p className="text-2xl font-bold tracking-[1px]">Featured Posts</p>
        <p className="text-[#737373] text-[14px] tracking-[2px] max-w-[470px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[112px] ">
        {postItems?.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-[25px] shadow-lg bg-white"
          >
            <img src={item.img} alt="" className="w-full h-auto shadow-md" />

            <div className=" flex flex-col gap-[10px] p-4">
              <div className="flex gap-[15px]">
                <p className="text-[#737373] hover:text-[#8EC2F2] transition duration-300 ease-in-out">
                  {item.google}
                </p>
                <p className="text-[#737373] hover:text-[#8EC2F2] transition duration-300 ease-in-out">
                  {item.trend}
                </p>
                <p className="text-[#737373] hover:text-[#8EC2F2] transition duration-300 ease-in-out">
                  {item.new}
                </p>
              </div>

              <p className="text-xl font-semibold">{item.name}</p>

              <p className="text-[14px] text-[#737373]">{item.desc}</p>

              <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                  <item.icon className="text-[#23A6F0]" />
                  <p>{item.date}</p>
                </div>
                <p>{item.comments}</p>
              </div>

              <div className="flex items-center gap-4">
                <p>{item.learn}</p>
                <item.learnmore className="text-[#23A6F0]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
