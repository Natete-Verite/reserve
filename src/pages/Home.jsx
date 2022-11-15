import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import BarChart from "../charts/BarChart";
import { AppData } from "../charts/Data";
import PieChart from "../charts/PieChart.js";
import './home.css'
import * as firebase from "firebase/app";
import { QuerySnapshot } from "firebase/firestore";

const Home = () => {
  const ref = firebase.initializeApp().collection("info")
  console.log(ref);

  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)

  const getData = () => {
    ref.onSnapshot((QuerySnapshot)=>{
      const items = []
      QuerySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setData(items)
      setLoader(false)
    })
  }
  useEffect(()=>{
    getData()
    console.log(data);
  },[])

  return (
    <div className="charts">
      <Cards />
      {loader === false && (data.map((year)=>{
        <div key = {year.id}> 
      <div className="chartcontainer">
        <div style={{ width: 500, marginLeft:70}}>
          <BarChart chartData={data} />
        </div>
        <div style={{ width: 280, marginLeft:20, }}>
          <PieChart chartData={data} />
        </div>
      </div>
      </div> 
      }))} 
    </div>
  );
};

export default Home;
