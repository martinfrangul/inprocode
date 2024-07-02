import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { FetchData } from "../../context/FetchData";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graphic = () => {
  const context = useContext(FetchData);

  if (!context) {
    throw new Error("useContext must be used within a DataProvider");
  }

  const { weekData } = context;

  const names = weekData.map((item) => item.name);
  const values = weekData.map((item) => item.value);

  const BarChartData = {
    labels: names,
    datasets: [
      {
        label: "Week expenses",
        data: values,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Bar data={BarChartData} options={options} />
    </div>
  );
};

export default Graphic;
