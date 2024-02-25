import React from 'react';
import { PageProps } from 'gatsby';
import { MainView } from './MainView';
import { ControlBar } from './ControlBar';
import { Slider } from './Slider';

export const App = (props: PageProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 body overflow-hidden">
      <div className="w-4/5 h-4/5 bg-zinc-800 rounded-lg">
        <MainView {...props} />
      </div>
      <div className="flex flex-col justify-between h-4/5 ml-5 text-2xl">
        <ControlBar />
        <Slider />
      </div>
    </div>
  );
};