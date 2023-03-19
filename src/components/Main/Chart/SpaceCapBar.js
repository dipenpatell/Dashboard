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

const SpaceCapBar = () => {
  return (
    <Bar
      data={{
        labels: ["1M", "2M", "3M", "4M", "5M", "6M", "7M", "8M"],
        datasets: [
          {
            label: "Space Capacity",
            data: [2.0, 3.0, 11.3, 1.3, 9.3, 5.3, 10.0, 8.0],
            backgroundColor: ["rgb(70, 70, 70)"],
          },
        ],
      }}
      height={200}
      width={500}
    />
  );
};

export default SpaceCapBar;
