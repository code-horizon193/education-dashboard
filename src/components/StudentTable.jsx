import React from "react";
import SectionHeader from "./SectionHeader";
import { tableData } from "./data";

const StudentTable = () => {
  const titles = ["ID", "Name", "Markes", "Percentage", "Year"];
  return (
    <div className="w-full p-4 overflow-auto isolate">
      <SectionHeader section_title="Star Student" />
      <table className="w-full overflow-x-auto">
        <thead className="w-full">
          <tr className="bg-gray-200 w-full">
            {titles.map((title) => (
              <td key={title} className="p-1 px-2.5 first:rounded-tl-lg last:rounded-tr-lg text-slate-700">
                {title}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {tableData.map((row ,idx) => (
            <tr key={idx} className="even:bg-slate-50 text-dark-gray w-full">
              <td className="p-1 px-2 text-sm">{row.id}</td>
              <td className="p-1 px-2">
              <div className="flex items-center gap-1">
                  <img
                    src={row.img}
                    className="size-8 object-cover rounded-full"
                    alt={row.name}
                  />
                  <span className="text-sm ml-1">{row.name}</span>
                </div>
              </td>
              <td className="p-1 px-2">{row.marks}</td>
              <td className="p-1 px-2">{row.percent}</td>
              <td className="p-1 px-2">{row.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
