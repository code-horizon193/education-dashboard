import React from "react";

const StudentActivityCard = ({ img, title, sub_title, time }) => {
  return (
    <div className="w-full bg-white">
      <div className="w-full flex items-center justify-between hover:bg-slate-100 p-1.5 px-2 cursor-pointer rounded-lg transition">
        <div className="flex items-center">
          <div className="size-10 bg-[#EDF4FF] rounded-md grid place-items-center">
            <img src={img} alt={title} />
          </div>
          <div className="ml-2">
            <p className="text-black text-base font-medium">{title}</p>
            <p className="text-slate-500 text-xs -mt-0.5">{sub_title}</p>
          </div>
        </div>

        <div className="bg-[#FFF9ED] px-3 py-1 rounded-full text-[10px] whitespace-nowrap font-medium text-slate-600">{time}</div>
      </div>
    </div>
  );
};

export default StudentActivityCard;
