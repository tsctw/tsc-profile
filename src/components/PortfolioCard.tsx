import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Img from 'gatsby-image';
import { Edge } from '../pages/portfolio';

type PortfolioCardProps = {
  image: Edge;
  title: string;
  badges: string[];
  sourceUrl: string;
  sourceUrl2?: string;
  demoUrl?: string;
}

export const PortfolioCard = ({ image, title, badges, sourceUrl, demoUrl, sourceUrl2 }: PortfolioCardProps) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <div>
          <Img fluid={image?.node?.childImageSharp?.fluid} alt={image.node.name} />
          <div className="p-5">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <div className="flex flex-wrap">
              {badges.map((badge, key) =>
                <span key={key} className="mt-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{badge}</span>
              )}
            </div>
          </div>
        </div>
        <div className="px-2 pb-4 flex justify-around">
          <a href={sourceUrl} className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-sky-600 dark:bg-sky-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700">
            <span className="mr-1">Code</span>
            <FontAwesomeIcon icon={faCode} width={14} height={14} />
          </a>
          {sourceUrl2 && <a href={sourceUrl2} className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-sky-600 dark:bg-sky-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700">
            <span className="mr-1">Code2</span>
            <FontAwesomeIcon icon={faCode} width={14} height={14} />
          </a>}
          {demoUrl && <a href={demoUrl} className="inline-flex items-center px-2 py-1.5 text-xs font-medium text-center text-white bg-sky-600 dark:bg-sky-800 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-700">
            Demo
            <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>}
        </div>
      </div>

    </>
  );
};