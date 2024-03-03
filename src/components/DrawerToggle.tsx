import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Profile } from './Profile';

export const DrawerToggle = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>();
  const [isDrawerClose, setIsDrawerClose] = useState<boolean>(true);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);

  const drawerClassName = () => {
    if (isDrawerOpen === undefined) return 'right-minus-80 hidden';
    if (isDrawerOpen === true) return 'drawer-slide-open right-0';
    return 'drawer-slide-close right-minus-80';
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as HTMLDivElement) &&
        toggleButtonRef.current && !toggleButtonRef.current.contains(event.target as HTMLDivElement)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) {
      setTimeout(() => { setIsDrawerClose(true); }, 500);
    } else {
      setIsDrawerClose(false);
    }
  }, [isDrawerOpen]);

  return (<>
    <div className="fixed normal:hidden top-6 right-6 h-12 w-12 z-50" ref={toggleButtonRef}>
      <button type="button"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        className="inline-flex items-center justify-center p-2 w-12 h-12 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
    </div>

    <div ref={drawerRef} className={`${drawerClassName()} ${isDrawerClose ? 'hidden' : 'absolute'} z-20 w-80 h-full overflow-y-auto transition opacity-95`}>
      <Profile />
    </div>
  </>);
};