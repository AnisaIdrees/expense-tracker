import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement, Title);

function BarChart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: [
      "Health",
      "Finance",
      "Education",
      "Career",
      "Family",
      "Real Estate",
    ],
    datasets: [
      {
        data: [32, 22, 15, 19, 5, 7],
        backgroundColor: [
          "#f87171", // red
          "aqua", // blue
          "#34d399", // green
          "#fbbf24", // yellow
          "#c084fc", // purple
          "#f472b6", // pink
        ],
        borderWidth: 2,
        borderColor: "#303232",
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isMobile ? "bottom" : "right",
        labels: {
          color: "#f5f5f4",
          font: {
            family: "Arial",
            size: 12,
          },
          usePointStyle: true, // <-- marker ko circle banata hai
          boxWidth: 10, // <-- marker ka size (default 40 hota hai)
          padding: 15,
        },
        padding: {
          top: 10,
          bottom: 20, // legend ke neeche thodi spacing (margin jaisa)
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.formattedValue}%`;
          },
        },
      },
      title: {
        display: true,
        text: "My Expense",
        align: "start",
        color: "#f5f5f4",
        font: {
          size: 24,
          family: "Arial",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return (
    <div className="wrap w-[90%] max-w-[480px] mx-auto mt-7 bg-[#303232] border border-[#405757] p-7 rounded-[5px] shadow-md">
      <div className="relative h-[300px] sm:h-[400px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
