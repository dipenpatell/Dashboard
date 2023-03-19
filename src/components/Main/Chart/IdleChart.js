import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const IdleChart = () => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Broken Machine", "Service", "Missing Parts"],
          datasets: [
            {
              label: "# idle time",
              data: [40, 30, 30],
              backgroundColor: [
                "rgb(191, 57, 56)",
                "rgb(157, 157, 157)",
                "rgb(97, 97, 97)",
              ],
              borderColor: ["rgb(97, 97, 97)"],
            },
          ],
        }}
        height={200}
        width={250}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default IdleChart;
