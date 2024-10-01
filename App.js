import React, { useState } from 'react';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import './App.css';


function App() {
  const [incomeEntries, setIncomeEntries] = useState([
        { date: '2024-09-01', income: 1500 },
        { date: '2024-09-05', income: 250 },
        { date: '2024-08-30', income: 1200 },
      ]);
 
  const handleAddIncome = (newEntry) => {
      setIncomeEntries([...incomeEntries, newEntry]);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Daily Income Tracker</h1>
        <IncomeForm onAddIncome={handleAddIncome}/>
        <IncomeList incomeEntries={incomeEntries} />
      </header>
    </div>
  );
}

export default App;
