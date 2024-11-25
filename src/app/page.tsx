"use client";

import React, { useState } from 'react';
import TouchButton from "../components/touchbutton"

const Page: React.FC = () => {
  const [showTouchButton, setShowTouchButton] = useState(false);

  // Toggle the visibility of the TouchButton
  const handleToggleTouchButton = () => {
    setShowTouchButton(prev => !prev);
  };

  return (
    <div>
      <button onClick={handleToggleTouchButton}>
        {showTouchButton ? 'Hide TouchButton' : 'Show TouchButton'}
      </button>

      {showTouchButton && <TouchButton />}
    </div>
  );
};

export default Page;
