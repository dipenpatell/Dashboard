import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const IdleChart = () => {
  return (
    <Bar
      data={{
        labels: [
          "Machine 1",
          "Machine 2",
          "Machine 3",
          "Machine 4",
          "Machine 5",
        ],
        datasets: [
          {
            axis: "y",
            label: "Machine Utilize",
            data: [5, 4, 5.3, 4.3, 6],
            backgroundColor: ["rgb(157, 157, 157)"],
          },
        ],
      }}
      height={230}
      width={350}
      options={{ indexAxis: "y" }}
    />
  );
};

export default IdleChart;
