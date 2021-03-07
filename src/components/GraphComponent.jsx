import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

function GraphComponent() {
  const [chartData, setChartData] = useState({});
  const chart = () => {
    setChartData({
      labels: [
        "Computer Science",
        "Calculus-I",
        "Calculus-II",
        "Astro-Physics",
        "Programming Theory",
      ],
      datasets: [
        {
          label: "Score",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [85, 95, 80, 45, 76, 55],
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: "Score", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTickLimit: 10,
                  beginAtZero: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default GraphComponent;
