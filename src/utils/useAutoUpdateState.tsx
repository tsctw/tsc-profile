import { useState, useEffect } from 'react';

export const useAutoUpdateState = (initText: string, fullText: string, updateInterval: number): [string, (str: string) => void] => {
  const [curString, setCurString] = useState(initText);

  useEffect(() => {
    let currentIndex = 0;
    let temp = '';

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        temp += fullText[currentIndex];
        setCurString(temp);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, []);

  return [curString, setCurString];
};