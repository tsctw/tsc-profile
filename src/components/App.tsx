import React from 'react';
import { PageProps } from 'gatsby';
import { MainView } from './MainView';
import { ControlBar } from './ControlBar';
import { Slider } from './Slider';
import { DrawerToggle } from './DrawerToggle';

export const App = (props: PageProps) => {
  return (
    <div>
      {/* when screen width < 1024px */}
      <DrawerToggle />
      <div className="flex justify-center items-center h-screen bg-stone-400 dark:bg-gray-200 body overflow-hidden">
        <div className="w-full h-full normal:w-5/6 normal:h-4/5 bg-gray-200 dark:bg-zinc-800 normal:rounded-3xl normal:pb-0">
          <MainView {...props} />
        </div>
        <div className="hidden normal:flex flex-col justify-between h-full normal:h-4/5 ml-5 text-2xl">
          <ControlBar />
          <Slider />
        </div>
        {/* when screen width < 1024px */}
        <div className="normal:hidden absolute z-10 w-72 small:w-full h-16 max-w-lg -translate-x-1/2 bottom-1 normal:bottom-4 left-1/2 text-xl">
          <ControlBar />
        </div>
      </div>
    </div>
  );
};