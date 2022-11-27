import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 12,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 120,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e3",
    title: "Food",
    amount: 60,
    date: new Date(2021, 3, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
