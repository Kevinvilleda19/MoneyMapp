import React from 'react';

function TransactionList({ transactions, removeTransaction }) {
  return (
    <ul>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          {transaction.description}: ${transaction.amount} - {transaction.category} ({transaction.date})
          <button onClick={() => removeTransaction(transaction.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
