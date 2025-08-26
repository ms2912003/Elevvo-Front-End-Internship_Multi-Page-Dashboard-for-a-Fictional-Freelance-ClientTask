import React from 'react';

const SummaryCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
      </div>
      <div className="text-gray-400">{icon}</div>
    </div>
  );
};

export default SummaryCard;