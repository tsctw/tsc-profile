import React, { useState, useEffect } from 'react';

export const useAutoUpdateState = (initText: string, fullText: string, updateInterval: number): [string, (str: string) => void] => {
  const [curString, setCurString] = useState(initText);

  useEffect(() => {
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setCurString((prevCode) => prevCode + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, updateInterval);
    
    return () => clearInterval(intervalId);
  }, []);

  return [curString, setCurString];
};