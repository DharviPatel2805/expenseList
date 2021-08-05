import React from 'react';

import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../Card";

function ExpenceItem(props) {
  return (
    <Card>
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.price}</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
