import React from "react";
import Header from "./Header";
import StateCard from "./StateCard";
import { cards } from "./data";
import TwoColumn from "./TwoColumn";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import BoxContent from "./BoxContent";
import StudentTable from "./StudentTable";
import StudentActivity from "./StudentActivity"

const Hero = () => {
  const isActive = false;
  return (
    <div
      className={`${isActive ? "ml-64" : "ml-2"}
    `}
    >
      <Header />
      <main className="p-4 size-full overflow-x-hidden">
        <div>
          <div className="w-full flex items-center justify-between">
            <h1 className="my-3 font-semibold text-lg">Welcome Admin !</h1>
            <div className="flex text-base font-semibold items-center gap-2">
              <span className="text-black">Home</span>
              <b className="text-slate-400">/</b>
              <span className="text-slate-400 cursor-pointer transition hover:underline">
                Admin
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 items-start gap-4">
            {cards.map((card, index) => (
              <StateCard
                key={index}
                title={card.name}
                img={card.img}
                count={card.number}
              />
            ))}
          </div>
        </div>

        <TwoColumn>
          {/* Chart Bar */}
          <BoxContent>
            <LineChart />
          </BoxContent>

          {/* Line Bar  */}
          <BoxContent>
            <BarChart />
          </BoxContent>
        </TwoColumn>

        <TwoColumn>
          <BoxContent>
            <StudentTable />
          </BoxContent>

          <BoxContent>
            <StudentActivity />
          </BoxContent>

        </TwoColumn>


      </main>
    </div>
  );
};

export default Hero;
