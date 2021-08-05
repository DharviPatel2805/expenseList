import React, { useState, useEffect } from "react";
import Expences from "./components/expenses/Expences";
import NewExpense from "./components/newExpenses/NewExpense";

// const dummy_data = [
//   {
//     id:"e1",
//     title: "Milk",
//     price: '2000',
//     date: new Date(2021, 6, 28),
//   },

//   {
//     id:"e2",
//     title: "clothes",
//     price: '1500',
//     date: new Date(2020, 5, 28),
//   },

//   {
//     id:"e3",
//     title: "t-shirts",
//     price: '500',
//     date: new Date(2021, 5, 27),
//   },
// ];
function App() {
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState();

  useEffect(() => {
    async function fetchData(){
      setError(null);
      setLoading(true);
      const response = await fetch(
        "https://react-tasks-b3c47-default-rtdb.firebaseio.com/expenses.json"
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          date: data[key].date,
          title: data[key].title,
          price: data[key].price,
        });
      }

      console.log(loadedData);
      setExpense(loadedData);
      setLoading(false);
    }

    fetchData().catch((error) => {
      setLoading(false);
      setError(error.message);
    });
  }, []);

  async function addItemHandler(item) {
    setIsSubmitting(true);
    const response = await fetch(
      "https://react-tasks-b3c47-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setIsSubmitting(false);
  }

  // const [expenses, setExpenses] = useState(dummy_data);
  // function addItemHandler(savedItem) {
  //   setExpenses((prevExpense) => {
  //     return [savedItem, ...prevExpense];
  //   });
  // }

  return (
    <div>
      <NewExpense onAddItem={addItemHandler}/>
      {loading && <h1 className="praragraphcard">data is loading...</h1>}
      {isSubmitting &&  <h1 className="praragraphcard">submitting data...</h1>}
      {!loading && <Expences itemDetails={expense} />}
      {!loading && expense.length === 0 && <h1 className="praragraphcard">Data not found</h1>}
      {!loading && error && <h1 className="praragraphcard">found an error</h1>}
    </div>
  );
}

export default App;
