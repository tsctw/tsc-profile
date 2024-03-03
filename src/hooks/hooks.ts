import React from 'react';

export type ModeType = {
  mode: ModeTheme;
  setMode: (mode: ModeTheme) => void;
}

export enum ModeTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ThemeContext = React.createContext({ mode: ModeTheme.DARK, setMode: (mode: ModeTheme) => { } });
