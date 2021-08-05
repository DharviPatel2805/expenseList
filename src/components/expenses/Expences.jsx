import React, { useState } from "react";

import ExpenceItem from "./ExpenceItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expences.css";

function Expences(props) {

  const [filteredYear, setYear] = useState("2021");
  function filterYear(selectingYear) {
    setYear(selectingYear);
  }

  const yearExpense = props.itemDetails.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate.getFullYear().toString() === filteredYear;    
  });

  let expenseContent = <h1 className="praragraphcard">There is no expense.</h1>;

  if(yearExpense.length > 0) {
    expenseContent = yearExpense.map(item => {
    return <ExpenceItem 
      key={item.id}
      date={new Date(item.date)}
      title={item.title} 
      price={item.price} 
    />
    });
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterOptionHandler={filterYear}
      />

      <ExpenseChart expenses={yearExpense}/>

      {expenseContent}

    </div>
  );
}

export default Expences;
