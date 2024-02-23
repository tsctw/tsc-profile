import React from 'react';

type ComponentWithChildProps = React.PropsWithChildren<{example?: string}>;

export const Button = (props: ComponentWithChildProps) => {
  return (
    <button {...props} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
      {props.children}
    </button>
  );
};