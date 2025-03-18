import React from "react";
import SectionHeader from "./SectionHeader";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "girls",
      data: [410, 564, 560, 590, 567, 557, 442],
      backgroundColor: "#70C4CF",
      borderRadius: 100,
    },
    {
      label: "boys",
      data: [365, 600, 375, 622, 370, 581, 238],
      backgroundColor: "#3d5ee1",
      borderRadius: 100,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      stacked: false,
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = () => {
  return (
    <div className="p-4 w-full">
      <SectionHeader
        section_title="Number of Students"
        right="Girls"
        left="Boys"
      />
      <div className="h-72 lg:h-96">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
