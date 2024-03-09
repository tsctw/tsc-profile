import React from 'react';
import type { PageProps } from 'gatsby';
import { Profile } from './Profile';

export const MainView: React.FC<PageProps> = (props: PageProps) => {

  return (
    <div className="flex h-calc-5rem normal:h-full">
      <div className="hidden normal:block h-full normal:basis-1/4 normal:rounded-3xl overflow-scroll">
        <Profile />
      </div>
      <div className="h-full basis-full normal:basis-3/4 overflow-scroll flex flex-col">
        {props.children}
      </div>
    </div>
  );
};
