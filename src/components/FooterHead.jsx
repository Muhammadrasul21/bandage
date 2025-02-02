import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const FooterHead = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="container">
        <div className="flex justify-between items-center pt-[53px] pb-[53px]">
          <p className="font-bold text-2xl">Bandage</p>
          <div className="flex gap-5 text-[#23A6F0]">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHead;
