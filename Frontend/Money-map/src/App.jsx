import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Report from './pages/Report';


function App() {
  const [transactions, setTransactions] = useState([]); // Holds the list of transactions
  const [salary, setSalary] = useState(0); // Holds the user's salary

  // Fetch transactions and salary when the app loads
  useEffect(() => {
    fetch('http://localhost:3001/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));

    fetch('http://localhost:3001/salary')
      .then(response => response.json())
      .then(data => setSalary(data.amount));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/transactions"
          element={
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
              salary={salary}
              setSalary={setSalary}
            />
          }
        />
        <Route
          path="/report"
          element={
            <Report
              transactions={transactions}
              salary={salary}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
