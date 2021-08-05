import React from 'react';

import './Card.css';
import "./expenses/ExpenceItem.css";

function Card(props) {
   return(
       <div className="card expense-item">{props.children}</div>
   )
}

export default Card;