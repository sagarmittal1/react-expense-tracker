import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '11',
    title: 'Grocery for Diwali',
    amount: 5000,
    date: new Date(2022, 9, 20),
  },
  {
    id: '12',
    title: 'Mi Band 6',
    amount: 2999,
    date: new Date(2022, 2, 9),
  },
  {
    id: '13',
    title: 'Birthday Party',
    amount: 1500,
    date: new Date(2022, 0, 5),
  },
  {
    id: '14',
    title: 'OnePlus Nord 2',
    amount: 30000,
    date: new Date(2021, 3, 5),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
