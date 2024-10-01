import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IncomeForm.js';

function IncomeForm({ onAddIncome }) {
  const [date, setDate] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && income) {
      onAddIncome({ date, income: parseFloat(income) });
      setDate('');
      setIncome('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="income-form">
      <h2>Add Income Entry</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Income amount"
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
}

IncomeForm.propTypes = {
  onAddIncome: PropTypes.func.isRequired,
};

export default IncomeForm;
