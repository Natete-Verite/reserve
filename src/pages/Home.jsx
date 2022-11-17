import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart.js";
import './home.css'
import {db} from "../firebase";
import { AppData } from "../charts/Data";
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
// import { async } from "@firebase/util";

const Home = () => {
  const [data, setData] = useState([]);

  const [userData, setUserData] = useState({
    labels: data.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: data.map((data) => data.userGain),
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
    const arrayData = [];
    const colRef = collection(db, 'appdata');
    getDocs(colRef).then((snapshots) => {
      snapshots.docs.map((item) => {
        arrayData.push(item.data())
        // console.log(item.data(), "hwgjldls");
        // setData([...item.data()]);
      });
    });
    if (arrayData.length>0) {
      setData(arrayData)
    }
  }, [data]);
  
      console.log(data.length, "array");
  
  return (
    <div className="charts">
      <Cards />
      
         
      <div className="chartcontainer">
        <div style={{ width: 500, marginLeft:70}}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 280, marginLeft:20, }}>
          <PieChart chartData={userData} />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
