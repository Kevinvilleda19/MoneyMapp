import React, { useState } from 'react';

function SalaryForm({ setSalary }) {
  const [salaryAmount, setSalaryAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const updatedSalary = { amount: parseFloat(salaryAmount) };

    fetch('http://localhost:3001/salary', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedSalary)
    })
      .then(response => response.json())
      .then(data => setSalary(data.amount));

    setSalaryAmount('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={salaryAmount}
        onChange={(e) => setSalaryAmount(e.target.value)}
        placeholder="Enter your salary"
        required
      />
      <button type="submit">Update Salary</button>
    </form>
  );
}

export default SalaryForm;
