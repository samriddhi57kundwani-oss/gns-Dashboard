import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

function Graphs({ predictions }) {
  if (!predictions) return null;

  const data = {
    labels: Array(predictions.short_term.length).fill("").map((_, i) => i + 1),
    datasets: [
      {
        label: "Short-Term (ARIMA)",
        data: predictions.short_term,
        borderColor: "#36A2EB",
        tension: 0.3,
      },
      {
        label: "Long-Term (LSTM)",
        data: predictions.long_term,
        borderColor: "#FF6384",
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}

export default Graphs;
