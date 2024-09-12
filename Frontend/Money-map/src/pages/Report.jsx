import React, { useEffect, useState } from 'react';

function Report({ salary, transactions }) {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  // Recalculate the report when salary or transactions change
  useEffect(() => {
    calculateReport(transactions, salary);
  }, [salary, transactions]);

  // Calculate total income, expenses, and balance
  function calculateReport(transactions, salary) {
    // Normalize category to lowercase in calculations
    const totalIncome = transactions
      .filter(transaction => transaction.category.toLowerCase() === 'income')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = transactions
      .filter(transaction => transaction.category.toLowerCase() === 'expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    setIncome(totalIncome);
    setExpenses(totalExpenses);
    setBalance(salary + totalIncome - totalExpenses);
  }

  return (
    <div>
      <h2>Report</h2>
      <p>Total Salary: ${salary}</p>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Remaining Balance: ${balance}</p>
    </div>
  );
}

export default Report;
