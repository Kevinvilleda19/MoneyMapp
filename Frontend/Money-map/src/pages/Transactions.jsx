import React from 'react';
import TransactionList from '../components/TransactionList';
import TransactionForm from '../components/TransactionForm';
import SalaryForm from '../components/SalaryForm';

function Transactions({ transactions, setTransactions, salary, setSalary }) {

  // Add a new transaction to the list
  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]); // Update the transactions state
  }

  // Remove a transaction by its ID
  function removeTransaction(id) {
    fetch(`http://localhost:3001/transactions/${id}`, { method: 'DELETE' })
    .then(() => {
      setTransactions(transactions.filter(transaction => transaction.id !== id)); // Update transactions state after deleting
    });
  }

  return (
    <div>
      <h2>Transactions</h2>
      <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
      <TransactionForm addTransaction={addTransaction} /> {/* Pass addTransaction function */}
      <SalaryForm setSalary={setSalary} salary={salary} /> {/* Pass the setSalary function */}
      <h3>Your Salary: ${salary}</h3> {/* Display the current salary */}
    </div>
  );
}

export default Transactions;
