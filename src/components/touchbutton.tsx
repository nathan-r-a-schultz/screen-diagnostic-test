"use client";

import React, { useState } from 'react';

const TouchButton: React.FC = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <button
      style={{
        width: '25px',
        height: '25px',
        backgroundColor: isPressed ? 'blue' : 'lightgray',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: isPressed ? 'white' : 'black',
        fontSize: '16px',
        transition: 'background-color 0.2s ease',
      }}
      onTouchStart={handleTouchStart}

      // Uncomment the following piece of code to make it work without a touchscreen
      // Note that this will make it so the touchscreen function is bugged
      // In summary, enable the following line for testing but ensure it is commented out when committing
      // onClick={() => setIsPressed(prev => !prev)} // Toggle color on click
    >
    </button>
  );
};

export default TouchButton;