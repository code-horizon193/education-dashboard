import React from "react";
import { IoMdMore } from "react-icons/io"; // more
import { GoDotFill } from "react-icons/go"; // dot

const SectionHeader = ({ section_title, right, left }) => {
  return (
    <div className="w-full flex items-center gap-4 justify-between mb-3">
      <h2 className="text-black text-lg font-semibold">{section_title}</h2>
      <div className="flex items-center gap-2">
        {right && left && (
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-0.5
              "
            >
              <GoDotFill className="text-xs text-blue-10"/>
              <span className="text-[10px] text-light-gray font-medium">{right}</span>
            </div>
            <div
              className="flex items-center gap-0.5
              "
            >
              <GoDotFill className="text-xs text-sky-200"/>
              <span className="text-[10px] text-light-gray font-medium">{right}</span>
            </div>
          </div>
        )}

        <button className="p-0.5 py-1 rounded-sm cursor-pointer bg-gray-200 text-lg ml-2">
          <IoMdMore />
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
