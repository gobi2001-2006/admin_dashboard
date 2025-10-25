import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const role = localStorage.getItem("role");

  const [filter, setFilter] = useState("weekly");

  
  const sampleData = {
    weekly: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      barData: [12, 19, 8, 15, 10, 5, 7],
      lineData: [5, 10, 7, 12, 8, 6, 9],
      pieData: [20, 30, 25, 25],
      doughnutData: [15, 25, 35, 25],
      radarData: [8, 12, 10, 15, 7],
    },
    monthly: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      barData: [50, 70, 60, 90, 80, 100],
      lineData: [40, 60, 55, 80, 70, 90],
      pieData: [120, 150, 100, 80],
      doughnutData: [100, 130, 120, 90],
      radarData: [60, 80, 70, 90, 50],
    },
    yearly: {
      labels: ["2019", "2020", "2021", "2022", "2023"],
      barData: [500, 700, 650, 900, 850],
      lineData: [450, 600, 700, 800, 950],
      pieData: [1200, 1500, 1000, 800],
      doughnutData: [1000, 1300, 1200, 900],
      radarData: [600, 800, 700, 900, 500],
    },
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const data = sampleData[filter];

  return (
    <>
      <Navbar role={role} />
      <div className="dashboard-container">
        {/* Filter */}
        <div className="filter-container">
          <label>Filter: </label>
          <select value={filter} onChange={handleFilterChange}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        {/* Dashboard Cards */}
        <div className="dashboard-cards">
          <div className="card">Visitors: {data.barData.reduce((a, b) => a + b, 0)}</div>
          <div className="card">Sales: {data.lineData.reduce((a, b) => a + b, 0)}</div>
          <div className="card">Revenue: ${data.pieData.reduce((a, b) => a + b, 0)}</div>
        </div>

        {/* Charts */}
        <div className="charts-container">
          <div className="chart-card">
            <h4>Bar Chart</h4>
            <Bar
              data={{
                labels: data.labels,
                datasets: [
                  {
                    label: "Bar Dataset",
                    data: data.barData,
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                  },
                ],
              }}
            />
          </div>

          <div className="chart-card">
            <h4>Line Chart</h4>
            <Line
              data={{
                labels: data.labels,
                datasets: [
                  {
                    label: "Line Dataset",
                    data: data.lineData,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    tension: 0.3,
                  },
                ],
              }}
            />
          </div>

          <div className="chart-card">
            <h4>Pie Chart</h4>
            <Pie
              data={{
                labels: ["Red", "Blue", "Yellow", "Green"],
                datasets: [
                  {
                    label: "Pie Dataset",
                    data: data.pieData,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                      "rgba(255, 206, 86, 0.6)",
                      "rgba(75, 192, 192, 0.6)",
                    ],
                  },
                ],
              }}
            />
          </div>

          <div className="chart-card">
            <h4>Doughnut Chart</h4>
            <Pie
              data={{
                labels: ["A", "B", "C", "D"],
                datasets: [
                  {
                    label: "Doughnut Dataset",
                    data: data.doughnutData,
                    backgroundColor: [
                      "rgba(255, 159, 64, 0.6)",
                      "rgba(153, 102, 255, 0.6)",
                      "rgba(255, 205, 86, 0.6)",
                      "rgba(54, 162, 235, 0.6)",
                    ],
                  },
                ],
              }}
              options={{ cutout: "50%" }}
            />
          </div>

          <div className="chart-card">
            <h4>Radar Chart</h4>
            <Line
              data={{
                labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
                datasets: [
                  {
                    label: "Radar Dataset",
                    data: data.radarData,
                    borderColor: "rgba(255, 99, 132, 1)",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    fill: true,
                    tension: 0.3,
                  },
                ],
              }}
              options={{ scales: { r: { beginAtZero: true } } }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
