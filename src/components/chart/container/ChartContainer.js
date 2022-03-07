import { useEffect } from "react";
import Chart from "chart.js";
import ChartComponent from "../component/ChartComponent";

export default function ChartContainer({ id, config, ...otherProps }) {
  useEffect(() => {
    var ctx = document.getElementById(id).getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);

  return <ChartComponent id={id} {...otherProps} />;
}
