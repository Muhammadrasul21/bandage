import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaUser, FaShoppingCart, FaRegHeart  } from "react-icons/fa";
import { navItems } from "@/static";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <>
      <div className="hidden md:flex bg-[#252B42] text-white  items-center justify-between px-8 py-5">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <IoCallOutline />
            <p>(225) 555-0118</p>
          </div>

          <div className="flex items-center gap-1">
            <CgMail />
            <p>michelle.rivera@example.com</p>
          </div>
        </div>

        <p className="font-bold text-[14px]">
          Follow Us and get a chance to win 80% off
        </p>

        <div className="flex items-center gap-[10px]">
          <p className="font-bold text-[14px]">Follow Us :</p>
          <div className="flex gap-2 text-white">
            <FaInstagram />
            <FaYoutube />
            <FaFacebook />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-[119px]">
        <p className="font-bold text-2xl">Bandage</p>
          <ul className="hidden md:flex gap-4 font-bold text-[14px] leading-6 text-[#737373]">
          {
            navItems?.map((item, inx)=>(
                <li key={inx} className="hover:text-black transitio duration-300 ease-in-out cursor-pointer">{item}</li>
              ))
            }
            </ul>
        </div>


        <div className="flex text-[#23A6F0]  items-center gap-5">
          <div className="hidden sm:flex items-center gap-1">
            <FaUser/>
            <p className="font-bold text-[14px]">Login / Register</p>
          </div>

          <div className="flex gap-4 items-center">
            <CiSearch/>
            <FaShoppingCart/>
            <FaRegHeart/>
            <GiHamburgerMenu className="flex sm:hidden"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
