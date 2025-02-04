import { footerItems } from "@/static";
import React from "react";

const Footer = () => {
  return (
    <div className="container">
      {
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8 mt-12">
          {footerItems?.map((item, inx) => (
            <div key={inx}>
              <h3 className="text-[#252B42] font-bold mb-5">{item.title}</h3>
              <ul className="flex flex-col gap-[10px]">
                {item.items.map((item, inx) => (
                  <li
                    className="text-[#737373] font-bold text-[14px]"
                    key={inx}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="ml-7">
            <p className="mb-5 font-bold">Get In Touch</p>
            <div className="bg-[#F9F9F9] border pl-2 rounded-l-md flex">
              <input
                type="text"
                placeholder="Your Email"
                className="pt-[15px] pb-[15px] bg-inherit outline-none"
              />
              <button className="bg-[#23A6F0] text-white px-[22px] py-4 rounded-r-md">
                Subscribe
              </button>
            </div>
            <p className="mt-2">Lore imp sum dolor Amit</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Footer;
