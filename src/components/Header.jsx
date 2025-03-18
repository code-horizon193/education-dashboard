import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="w-full h-14 bg-white flex items-center">
      <div className="size-full p-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="text-lg bg-blue-10 p-2 rounded-sm text-white cursor-pointer hover:drop-shadow-lg hover:bg-blue-10/90 transition active:bg-blue-10">
            <GiHamburgerMenu />
          </button>
          <div
            className="sm:flex items-center bg-gray-200 py-1.5 px-3
                 rounded-lg hidden"
          >
            <span>
              <IoSearchOutline />
            </span>
            <input
              className="border-none outline-none text-dark ml-1.5 text-base w-full text-gray-700"
              type="text"
              placeholder="search here"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="size-9 rounded-full bg-gray-100 text-lg sm:grid place-items-center cursor-pointer hover:bg-slate-200 hidden">
            <FaRegBell />
          </button>

          <div className="flex items-center px-3">
            <div className="flex items-center gap-1">
              <img
                src="/public/profile.png"
                alt="profile"
                className="size-10 cursor-pointer object-cover rounded-full"
              />
              <div className="ml-1">
                <p className="text-black cursor-pointer font-semibold">
                  Ryan Taylor
                </p>
                <p className="text-blue-10">Administrator</p>
              </div>
            </div>
            <button className="cursor-pointer ml-5">
              <IoChevronDownSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
