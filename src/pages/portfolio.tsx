import React from 'react';
import type { HeadFC } from 'gatsby';
import { Seo } from '../components/seo';

const Portfolio = () => {
  return (
    <div>Portfolio</div>
  );
};

export default Portfolio;

export const Head: HeadFC = () => <Seo title="Portfolio"></Seo>;