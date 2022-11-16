import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart.js";
import './home.css'
import {db} from "../firebase";
import { QuerySnapshot, collection, doc, getDoc } from "firebase/firestore";
// import { async } from "@firebase/util";

const Home = () => {
  
 
  // console.log(docRef, "inform");
  useEffect(()=>{
    const docRef = collection(db, "info");
    const information = async ()=>{
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()){
        console.log("Document data:", docSnap.data());
      }else{
        console.log("No such document");
      }
    }
    information()
    console.log("information");
  },[])
  

  // const [data, setData] = useState([])
  // const [loader, setLoader] = useState(true)

  // const getData = () => {
  //   ref.onSnapshot((QuerySnapshot)=>{
  //     const items = []
  //     QuerySnapshot.forEach((doc)=>{
  //       items.push(doc.data())
  //     })
  //     setData(items)
  //     setLoader(false)
  //   })
  // }
  // useEffect(()=>{
  //   getData()
  //   console.log(data);
  // },[])

  return (
    <div className="charts">
      <Cards />
      {/* {docSnap === false && (docSnap.map((year)=>{ */}
         
      <div className="chartcontainer">
        <div style={{ width: 500, marginLeft:70}}>
          {/* <BarChart chartData={docSnap} /> */}
        </div>
        <div style={{ width: 280, marginLeft:20, }}>
          {/* <PieChart chartData={docSnap} /> */}
        </div>
      </div>
      </div> 
      
  
  );
};

export default Home;
