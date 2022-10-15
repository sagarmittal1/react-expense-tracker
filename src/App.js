import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Buy Macbook Pro M1 Chip',
      amount: 1999,
      date: new Date(2022, 1, 5),
    },
    {
      id: 2,
      title: 'Buy iPhone 14',
      amount: 599,
      date: new Date(2022, 2, 5),
    },
    {
      id: 3,
      title: 'Buy Apple watch',
      amount: 299,
      date: new Date(2022, 2, 28),
    },
    {
      id: 4,
      title: 'Buy OnePlus Nord 3',
      amount: 1999,
      date: new Date(2022, 3, 5),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
