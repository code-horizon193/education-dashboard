import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { links } from "./data";

const SideBar = () => {
  const isActive = false;
  const activeLink = "bg-blue-10 text-white";
  const normalLink = "bg-transparent text-dark-gray hover:bg-slate-100";
  return (
    <div
      className={`w-64 h-screen fixed z-[999] top-0 bg-white overflow-auto md:overflow-hidden md:hover:overflow-auto transition-all duration-300 ${
        isActive ? "-translate-x-64" : ""
      } none-scroll pb-5`}
    >
      <div className="text-blue-10 py-3 select-none text-[24px] font-extrabold ml-4">
        EDU DASHBOARD
      </div>

      <div className="flex mx-2 items-center gap-1.5 bg-slate-200 p-2 px-3 rounded-lg sm:hidden">
        <span className="">
          <IoSearchOutline />
        </span>
        <input
          type="text"
          placeholder="search here"
          className="border-none outline-none text-gray-700"
        />
      </div>

      {links.map((item) => (
        <div className="mt-5">
          <p className="text-light-gray ml-2 text-sm font-medium mb-3">
            {item.title}
          </p>

          <div className="px-2">
            {item.links.map((link) => (
              <a
                href="#"
                key={link.name}
                className={`flex items-center gap-1.5  text-base py-1.5 px-1 pl-2 mb-1 rounded-lg ${
                  link.active ? activeLink : normalLink
                } transition cursor-pointer`}
              >
                <link.icon />
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
