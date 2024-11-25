"use client";

import React, { useState, useEffect } from 'react';

const TouchButton: React.FC = () => {
  const [isPressedArray, setIsPressedArray] = useState<boolean[]>([]);
  const [buttonsCount, setButtonsCount] = useState(0);

  // Button dimensions
  const buttonSize = 25;
  const buttonMargin = 1;
  const buttonTotalSize = buttonSize + buttonMargin * 2;

  const enterFullscreen = () => {
    const element = document.documentElement; // Target the whole document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } 
    // else if (element.webkitRequestFullscreen) {
    //   element.webkitRequestFullscreen(); // Safari
    // } else if (element.msRequestFullscreen) {
    //   element.msRequestFullscreen(); // IE/Edge
    // } else if (element.mozRequestFullScreen) {
    //   element.mozRequestFullScreen(); // Firefox
    // }
  };

  useEffect(() => {

    enterFullscreen();

    // Calculate the number of buttons needed based on screen size
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonsPerRow = Math.floor(screenWidth / buttonTotalSize);
    const rows = Math.floor(screenHeight / buttonTotalSize);
    const totalButtons = buttonsPerRow * rows;

    setButtonsCount(totalButtons);
    setIsPressedArray(Array(totalButtons).fill(false));
  }, []);

  const handleTouchStart = (index: number) => {
    setIsPressedArray(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleTouchEnd = (index: number) => {
    setIsPressedArray(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className='touchbutton-main-div' style={{ display: 'flex', flexWrap: 'wrap', width: '100vw', height: '100vh' }}>
      {Array.from({ length: buttonsCount }).map((_, index) => (
        <button
          key={index}
          style={{
            width: `${buttonSize}px`,
            height: `${buttonSize}px`,
            backgroundColor: isPressedArray[index] ? 'blue' : 'lightgray',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            color: isPressedArray[index] ? 'white' : 'black',
            fontSize: '16px',
            transition: 'background-color 0.2s ease',
            margin: `${buttonMargin}px`,
          }}
          onTouchStart={() => handleTouchStart(index)}
          onTouchEnd={() => handleTouchEnd(index)}
          
          onClick={() => {
            setIsPressedArray(prevState => {
              const newState = [...prevState];
              newState[index] = !newState[index];
              return newState;
            });
          }}
        >
        </button>
      ))}
    </div>
  );
};

export default TouchButton;
