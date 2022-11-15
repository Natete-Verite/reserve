import React, { useState } from "react";
import Cards from "../components/Cards";
import BarChart from "../charts/BarChart";
import { AppData } from "../charts/Data";
import PieChart from "../charts/PieChart.js";
import './home.css'

const Home = () => {
  const [appData, setUserData] = useState({
    labels: AppData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: AppData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#b2e0ed",
          "#4AB4A1",
          "#F14C56",
          "#2a71d0",
        ],
        borderWidth: 1,
      },
    ],
  });

  return (
    <div className="charts">
      <Cards />
      <div className="chartcontainer">
        <div style={{ width: 500, marginLeft:70}}>
          <BarChart chartData={appData} />
        </div>
        <div style={{ width: 280, marginLeft:20, }}>
          <PieChart chartData={appData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
