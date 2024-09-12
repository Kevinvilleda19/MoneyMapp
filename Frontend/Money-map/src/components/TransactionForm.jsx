import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Normalize category to lowercase
    const normalizedCategory = category.trim().toLowerCase();

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      category: normalizedCategory,
      date: new Date().toISOString().split('T')[0] // Automatically set today's date
    };

    // POST the new transaction to the backend
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction)
    })
      .then(response => response.json())
      .then(data => {
        addTransaction(data); // Add the new transaction to the state
      });

    // Clear the form after submission
    setDescription('');
    setAmount('');
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (Income or Expense)"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
