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

const MachineChart = () => {
  return (
    <Bar
      data={{
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [
          {
            label: "Machine 1",
            data: [50, 70, 60, 90, 60, 40, 30, 30, 20, 70, 40, 50, 35],
            backgroundColor: ["rgb(70, 70, 70)", "rgb(191, 57, 56)"],
          },
        ],
      }}
      height={200}
      width={200}
      options={{}}
    />
  );
};

export default MachineChart;
