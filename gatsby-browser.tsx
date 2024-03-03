import './src/styles/global.css';
import React, { useCallback, useEffect, useState } from 'react';
import { App } from './src/components/App';
import { ModeTheme, ThemeContext } from './src/hooks/hooks';
import { GatsbyBrowser } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }: any) => {
  const initMode = localStorage.getItem('color-theme') === ModeTheme.DARK ||
    (!('color-theme' in localStorage)
      && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
    ModeTheme.DARK : ModeTheme.LIGHT;

  const [mode, setMode] = useState(initMode);

  useEffect(() => {
    if (mode === ModeTheme.DARK) document.documentElement.classList.add(ModeTheme.DARK);
  }, [mode]);

  const setLocalStorage = useCallback((newMode: ModeTheme) => {
    setMode(newMode);
    localStorage.setItem('color-theme', newMode);
  }, []);

  return (<ThemeContext.Provider value={{ mode, setMode: setLocalStorage }}>
    <App {...props}> {element} </App>
  </ThemeContext.Provider>);
};

