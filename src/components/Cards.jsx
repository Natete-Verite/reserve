import React from 'react'
import "./Cards.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const Cards = () => {
  return (
    <div className="card">
    <div className="cardItem">
      <span className="cardTitle">Revenue</span>
      <div className="cardMoneyContainer">
        <span className="cardMoney">$2,415</span>
        <span className="cardMoneyRate">
          -11.4 <ArrowDownward  className="cardIcon negative"/>
        </span>
      </div>
      <span className="cardSub">Compared to last month</span>
    </div>
    <div className="cardItem">
      <span className="cardTitle">Sales</span>
      <div className="cardMoneyContainer">
        <span className="cardMoney">$4,415</span>
        <span className="cardMoneyRate">
          -1.4 <ArrowDownward className="cardIcon negative"/>
        </span>
      </div>
      <span className="cardSub">Compared to last month</span>
    </div>
    <div className="cardItem">
      <span className="cardTitle">Cost</span>
      <div className="cardMoneyContainer">
        <span className="cardMoney">$2,225</span>
        <span className="cardMoneyRate">
          +2.4 <ArrowUpward className="cardIcon"/>
        </span>
      </div>
      <span className="cardSub">Compared to last month</span>
    </div>
  </div>
  )
}

export default Cards