import { data } from "jquery";
import { result } from "./graphData";
export const ChartContainerModel = [
  {
    id: "line-chart",
    container: "w-full xl:w-4/12 mb-12 xl:mb-0 px-4",
    classes: [
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700",
      "rounded-t mb-0 px-4 py-3 bg-transparent",
      "flex flex-wrap items-center",
      "relative w-full max-w-full flex-grow flex-1",
      "p-4 flex-auto",
      "relative h-350-px",
    ],
    headingClasses: [
      "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
      "text-blueGray-700 text-xl font-semibold",
    ],
    config: {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            //  data: [65, 78, 66, 44, 56, 67, 75],
            data: result.map((data) => {
              return data.male;
            }),
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            //data: [40, 68, 86, 74, 56, 60, 87],
            data: result.map((data) => {
              return data.female;
            }),
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    },
  },
  {
    id: "bar-chart",
    container: "w-full xl:w-4/12 px-4",
    classes: [
      "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded",
      "rounded-t mb-0 px-4 py-3 bg-transparent",
      "flex flex-wrap items-center",
      "relative w-full max-w-full flex-grow flex-1",
      "p-4 flex-auto",
      "relative h-350-px",
    ],
    headingClasses: [
      "uppercase text-blueGray-400 mb-1 text-xs font-semibold",
      "text-white text-xl font-semibold",
    ],
    config: {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            // data: [30, 78, 56, 34, 100, 45, 13],
            data: result.map((data) => {
              return data.male;
            }),
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            // data: [27, 68, 86, 74, 10, 4, 87],
            data: result.map((data) => {
              return data.female;
            }),
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    },
  },
];
