import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaShoppingCart,
  FaRegHeart,
} from "react-icons/fa";
import { navItems } from "@/static";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex bg-[#252B42] text-white items-center justify-between px-8 py-5">
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

      <div className="sticky top-0 left-0 bg-white z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-[119px]">
          <Link to={"/"}>
            <p className="font-bold text-2xl">Bandage</p>
          </Link>
          <ul className="hidden md:flex gap-4 font-bold text-[14px] leading-6 text-[#737373]">
            {navItems?.map((item, inx) => (
              <li
                key={inx}
                className="hover:text-black transition duration-300 ease-in-out cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex text-[#23A6F0] items-center gap-5">
          <div
            className="hidden sm:flex items-center gap-1 cursor-pointer"
            onClick={() => setLoginOpen(true)}
          >
            <FaUser />
            <p className="font-bold text-[14px]">Login / Register</p>
          </div>

          <div className="flex gap-4 items-center">
            <Link>
              <CiSearch />
            </Link>
            <Link>
              <FaShoppingCart />
            </Link>
            <Link to={"/wishlist"}>
              <FaRegHeart />
            </Link>
            <GiHamburgerMenu
              className="flex sm:hidden cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <p className="text-xl font-bold">Menu</p>
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-4 p-6 text-[16px] text-gray-700 font-semibold">
          {navItems.map((item, inx) => (
            <li
              key={inx}
              className="hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {loginOpen && (
        <div
          onClick={() => setLoginOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
            <IoClose
              className="absolute top-4 right-4 cursor-pointer text-xl text-gray-600 hover:text-gray-900"
              onClick={() => setLoginOpen(false)}
            />
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded"
            />
            <button className="w-full bg-blue-500 text-white py-2 rounded">
              Login
            </button>
            <p
              className="text-blue-500 text-center mt-3 cursor-pointer"
              onClick={() => {
                setLoginOpen(false);
                setSignUpOpen(true);
              }}
            >
              Don't have an account? Sign Up
            </p>
          </div>
        </div>
      )}

      {signUpOpen && (
        <div
          onClick={() => setSignUpOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
            <IoClose
              className="absolute top-4 right-4 cursor-pointer text-xl text-gray-600 hover:text-gray-900"
              onClick={() => setSignUpOpen(false)}
            />
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-3 border rounded"
            />
            <button className="w-full bg-green-500 text-white py-2 rounded">
              Sign Up
            </button>
            <p
              className="text-blue-500 text-center mt-3 cursor-pointer"
              onClick={() => {
                setSignUpOpen(false);
                setLoginOpen(true);
              }}
            >
              Already have an account? Login
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
