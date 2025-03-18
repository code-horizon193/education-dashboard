import React from "react";

const StateCard = ({ title, img, count }) => {
  return <div className=" bg-white p-4 rounded-lg drop-shadow-md transition hover:border-slate-200 border-transparent hover:drop-shadow-none border">
    <div className="size-full flex items-center justify-between gap-3">
      <div>
        <p className="text-light-gray text-sm">{title}</p>
        <p className="mt-1 text-black text-base font-semibold">{count}</p>
      </div>
      <div className="size-15 rounded-sm grid place-items-center bg-blue-100">
        <img src={img} alt={title} className="size-14" />
      </div>
    </div>
  </div>;
};

export default StateCard;
