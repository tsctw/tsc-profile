import React from 'react';
import type { HeadFC } from 'gatsby';
import { Seo } from '../components/seo';

const Resume = () => {
  return (
    <div>resume</div>
  );
};

export default Resume;

export const Head: HeadFC = () => <Seo title="Resume"></Seo>;