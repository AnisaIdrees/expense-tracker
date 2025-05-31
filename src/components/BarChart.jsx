// import React from 'react'
// import CanvasJSReact from '@canvasjs/react-charts';
// const CanvasJS = CanvasJSReact.CanvasJS;
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;


// function BarChart() {

//   const options = {
//     theme: "dark2",
//     animationEnabled: true,
//     // exportFileName: "New Year Resolutions",
//     // exportEnabled: true,
//     title: {
//        text: "My Expense",
//   fontSize: 24,
//   fontColor: "#f5f5f4",
//   fontFamily: "Arial",
//   horizontalAlign: "left", 
//   padding: 10,
//     },
//     data: [{
//       type: "pie",
//       showInLegend: true,
//       legendText: "{label}",
//       toolTipContent: "{label}: <strong>{y}%</strong>",
//       indexLabel: "{y}%",
//       indexLabelPlacement: "inside",
//       dataPoints: [
//         { y: 32, label: "Health" },
//         { y: 22, label: "Finance" },
//         { y: 15, label: "Education" },
//         { y: 19, label: "Career" },
//         { y: 5, label: "Family" },
//         { y: 7, label: "Real Estate" }
//       ]
//     }]
//   };

//   return (
//    <>
// <div className="wrap  w-[450px] mx-auto ">
//        <CanvasJSChart className=" mt-7"options={options} 
//         /* onRef={ref => this.chart = ref} */
//       />
//       </div>
//     </>
//   );
// }

// export default BarChart

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

function BarChart() {
  const data = {
    labels: ["Health", "Finance", "Education", "Career", "Family", "Real Estate"],
    datasets: [
      {
        label: "My Expense",
        data: [32, 22, 15, 19, 5, 7],
        backgroundColor: [
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#f5f5f4", // White text
        },
      },
      title: {
        display: true,
        text: "My Expense",
        color: "#f5f5f4",
        font: {
          size: 24,
        },
        align: "start",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return (
    <div className="wrap w-[450px] mx-auto mt-7">
      <Pie data={data} options={options} />
    </div>
  );
}

export default BarChart;
