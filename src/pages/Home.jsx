import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart.js";
import './home.css'
import { db } from "../firebase";
import { AppData } from "../charts/Data";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

  const [userData, setData] = useState({
    status: "loading",
    labels: AppData.map((item) => item.year),
    datasets: [{
      label: "Users Gained",
      data: AppData.map((item) => item.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderWidth: 1,
    },
    ],
  });


  useEffect(() => {
    const handleSyncData = async () => {
      const colRef = await collection(db, 'appdata');
      getDocs(colRef).then((snapshots) => {
        setData({
          status: "OK",
          labels: snapshots.docs.map(item => item.data().year),
          datasets: [{
            label: userData.datasets[0].label, 
            backgroundColor: userData.datasets[0].backgroundColor,
            borderWidth: userData.datasets[0].borderWidth,
            data: snapshots.docs.map(item => item.data().userGain)
          }],
        })

      });
    };
    handleSyncData();
  });

  return (
    <div className="charts">
      <Cards />


      {userData.status === "loading" && <h1>Loading ...</h1>}
      {userData.status === "OK" && <div className="chartcontainer">
        <div style={{ width: 500, marginLeft: 70 }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 280, marginLeft: 20, }}>
          <PieChart chartData={userData} />
        </div>
      </div>}

    </div>
  );
}

export default Home;
