import React , { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    
    const [enterTitle, setTitle] = useState("");
    const [enterPrice, setPrice] = useState("");
    const [enterDate, setDate] = useState("");

    function titleChangeHandler(event){
        setTitle(event.target.value);
    };

    function priceChaneHandler(event){
        setPrice(event.target.value);
    };

    function dateChangeHandler(event){
        setDate(event.target.value);   
    };
    
    
    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            price: +enterPrice,
            date: new Date(enterDate)
        };
        
        props.onSaveItem(expenseData);
        setTitle("");
        setPrice("");
        setDate("");
    }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" value={enterPrice} min="0.01" step="0.01" onChange={priceChaneHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type="submit">ADD</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
