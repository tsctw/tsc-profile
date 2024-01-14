import React, { ReactNode } from 'react';
import { SideMenu } from './sideMenu';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen ">
      <SideMenu></SideMenu>
      <div className="basis-3/4 text-center bg-slate-300">
        {children}
      </div>
    </div>
  );
};