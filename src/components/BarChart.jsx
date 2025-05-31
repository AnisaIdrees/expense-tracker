import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


function BarChart() {

  const options = {
    theme: "dark2",
    animationEnabled: true,
    // exportFileName: "New Year Resolutions",
    // exportEnabled: true,
    title: {
      text: "Top Categories of New Year's Resolution"
    },
    data: [{
      type: "pie",
      showInLegend: true,
      legendText: "{label}",
      toolTipContent: "{label}: <strong>{y}%</strong>",
      indexLabel: "{y}%",
      indexLabelPlacement: "inside",
      dataPoints: [
        { y: 32, label: "Health" },
        { y: 22, label: "Finance" },
        { y: 15, label: "Education" },
        { y: 19, label: "Career" },
        { y: 5, label: "Family" },
        { y: 7, label: "Real Estate" }
      ]
    }]
  };

  return (
    <div>

       <CanvasJSChart className=" p-7"options={options} 
        /* onRef={ref => this.chart = ref} */
      />
    </div>
  )
}

export default BarChart
