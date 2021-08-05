import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const [showButton, setShowButton] = useState(true)
  
  function handleShowButton(){
    setShowButton(false)
  }

  function handleCancelButton(){
    setShowButton(true)
  }
    
    function saveItemHandler(enteredItem){
        const expenseData = {
            ...enteredItem,
        }
        console.log(expenseData);
        props.onAddItem(expenseData);
    }


  return (
    <div className="new-expense">
      {showButton && <button onClick={handleShowButton}>Add New Expense</button>}
      {(!showButton) && <ExpenseForm  onSaveItem = {saveItemHandler}  onCancel={handleCancelButton}/>}
    </div>
  );
}

export default NewExpense;
