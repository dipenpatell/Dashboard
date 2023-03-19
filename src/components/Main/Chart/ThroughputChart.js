import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ThroughputChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["7:30", "9:30", "11:30", "1.30", "3:30", "5:30", "7:30"],
          datasets: [
            {
              label: "Throughput",
              data: [250, 300, 450, 150, 50, 500, 325, 600],

              borderColor: ["rgb(97, 97, 97)"],
            },
          ],
        }}
        height={200}
        width={500}
        options={{}}
      />
    </div>
  );
};

export default ThroughputChart;
