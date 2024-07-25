import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";

import "./pillars.styles.scss";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

ChartJS.defaults.color = "white";

const PillarsRoute = () => {
  const data = {
    labels: [
      "Health",
      "Wealth",
      "Relationships",
      "Romance",
      "Work",
      "Spirituality",
    ],
    datasets: [
      {
        label: "Dream Self",
        data: [5, 5, 5, 5, 5, 5],
        fill: true,
        backgroundColor: "rgba(255, 206, 12, 0.2)",
        borderColor: "rgba(232, 187, 9, .6)",
        pointBackgroundColor: "rgba(232, 187, 9, .8)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(232, 187, 9, 1)",
      },
      {
        label: "Current Self",
        data: [3, 3, 3, 3, 3, 3],
        backgroundColor: "rgba(54, 162, 235, .2)",
        fill: true,
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 0.8)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(54, 162, 235, 0.8)",
      },
    ],
  };
  const options = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 18,
      },
    },
    elements: {
      line: {
        backgroundColor: "white",
      },
    },
    scales: {
      r: {
        grid: {
          color: "gray",
        },
        angleLines: {
          color: "gray",
        },
        min: 0,
        max: 10,
        ticks: {
          fontColor: "white",
        },
      },
    },
  };

  return (
    <div className="route-container">
      <div className="chart-container">
        <Radar data={data} options={options}></Radar>
      </div>
      <div className="stats-container">
        <h1 className="stats-header"></h1>
        <div className="stat">
          <div className="stat-title">Health</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
        <div className="stat">
          <div className="stat-title">Relationships</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
        <div className="stat">
          <div className="stat-title">Wealth</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
        <div className="stat">
          <div className="stat-title">Romance</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
        <div className="stat">
          <div className="stat-title">Spirituality</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
        <div className="stat">
          <div className="stat-title">Career</div>
          <div className="stat-level">lvl 6</div>
          <div className="xp-bar">
            ---------------------------------------------------------
          </div>
          <div className="progression">400 / 600</div>
        </div>
      </div>
    </div>
  );
};

export default PillarsRoute;
