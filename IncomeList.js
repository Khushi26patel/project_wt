// IncomeList.js
import React from 'react';

const IncomeList = ({ incomeEntries }) => {
  return (
    <div>
      <h2>Income Entries</h2>
      <ul>
        {incomeEntries.map((entry, index) => (
          <li key={index}>
            {entry.date}: Rs.{entry.income}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
