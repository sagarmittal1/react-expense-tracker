import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: '11',
    title: 'Macbook Pro M1 Chip',
    amount: 1999,
    date: new Date(2022, 1, 5),
  },
  {
    id: '12',
    title: 'iPhone 14',
    amount: 599,
    date: new Date(2022, 2, 5),
  },
  {
    id: '13',
    title: 'Apple watch',
    amount: 299,
    date: new Date(2022, 2, 28),
  },
  {
    id: '14',
    title: 'OnePlus Nord 3',
    amount: 1999,
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
