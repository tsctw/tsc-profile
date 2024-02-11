import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Seo } from './seo';

export const DisplayView: React.FC<PageProps> = (props: PageProps) => {

  return (
    <div className="flex items-center justify-center h-screen">
      {props.children}
    </div>
  );
};

export const Head: HeadFC = () => <Seo title="Home"></Seo>;
