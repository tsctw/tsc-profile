import React from 'react';
import type { PageProps } from 'gatsby';
import { DisplayView } from './DisplayView';
import { Profile } from './Profile';

export const MainView: React.FC<PageProps> = (props: PageProps) => {

  return (
    <div className="flex h-full">
      <div className=" h-full basis-1/4 text-white bg-zinc-700 rounded-lg">
        <Profile />
      </div>
      <div className="h-full basis-3/4 overflow-scroll">
        <DisplayView {...props} />
      </div>
    </div>
  );
};
