import React from 'react';
import type { HeadFC } from 'gatsby';
import { Seo } from '../components/seo';
import { PortfolioCard } from '../components/PortfolioCard';

const Portfolio = () => {
  return (
    <>
      <div className="text-2xl text-black dark:text-white font-bold pt-10 pl-10">Portfolio</div>
      <div className="grid grid-cols-1 small:grid-cols-2 normal:grid-cols-3 gap-4 m-5">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  );
};

export default Portfolio;

export const Head: HeadFC = () => <Seo title="Portfolio"></Seo>;