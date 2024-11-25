"use client";

import React, { useState } from 'react';
import TouchButton from "../components/touchbutton"
import './globals.css';

const Page: React.FC = () => {
  const [showTouchButton, setShowTouchButton] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Toggle the visibility of the TouchButton
  const handleToggleTouchButton = () => {
    setShowTouchButton(prev => !prev);
    setIsButtonVisible(false);
  };

  return (
    <div className="center-container">
      <div className="center-content">
        <p className="center-text">This is a screen diagnostic test</p>
        {isButtonVisible && (
          <button className="menu-button" onClick={handleToggleTouchButton}>
            {showTouchButton ? 'Hide TouchButton' : 'Start'}
          </button>
        )}
        {showTouchButton && <TouchButton />}
      </div>
    </div>
  );
  
};

export default Page;
