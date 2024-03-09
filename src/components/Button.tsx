import React from 'react';

export enum Varient {
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

type ComponentWithChildProps = React.PropsWithChildren<{
  varient: Varient,
  size?: string;
  className?: string;
  onClick?: () => void;
}>;

const varient = {
  [Varient.PRIMARY]: {
    text: 'text-white dark:text-slate-100',
    bg: 'bg-blue-600 dark:bg-blue-800',
    hoverBg: 'hover:bg-blue-500 dark:hover:bg-blue-700'
  },
  [Varient.OUTLINE]: {
    text: 'text-white dark:text-black',
    bg: 'bg-zinc-600 dark:bg-slate-200',
    hoverBg: 'hover:bg-zinc-500 hover:dark:bg-slate-400'
  }
};

const size: { [key: string]: { px: string, py: string, fontWeight: string, fontSize: string } } = {
  small: {
    px: 'px-2',
    py: 'py-1',
    fontWeight: 'font-normal',
    fontSize: 'text-sm'
  },
  medium: {
    px: 'px-4',
    py: 'py-2',
    fontWeight: 'font-medium',
    fontSize: 'text-base'
  }
};

export const Button = (props: ComponentWithChildProps) => {
  const style = varient[props.varient];
  const buttonSize = props.size ? size[props.size as string] : size['small'];
  return (
    <button {...props} className={`flex items-center 
      ${buttonSize.px} ${buttonSize.py} ${buttonSize.fontWeight} ${buttonSize.fontSize}
      tracking-wide ${style.text} ${style.bg} ${style.hoverBg} capitalize transform rounded-lg focus:outline-none ${props.className}`}>
      {props.children}
    </button>
  );
};

// text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700