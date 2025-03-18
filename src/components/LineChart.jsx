import React from "react";
import SectionHeader from "./SectionHeader";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
ChartJS.register(PointElement, LineElement, LinearScale, CategoryScale);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Teacher",
      data: [45, 60, 75, 51, 43, 43, 30, 34],
      borderColor: "#3d5ee1",
      borderWidth: 4,
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Student",
      data: [19, 46, 55, 33, 35, 36, 55, 25],
      borderColor: "#70C4CF",
      borderWidth: 4,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      border: {
        display: false,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div className="w-full p-4">
      <SectionHeader section_title="Overview" right="Teacher" left="Student" />

      <div className="h-72 lg:h-96">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
