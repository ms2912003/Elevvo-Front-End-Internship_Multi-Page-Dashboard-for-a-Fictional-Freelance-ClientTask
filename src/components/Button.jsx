import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-medium text-white
        bg-indigo-600 hover:bg-indigo-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;