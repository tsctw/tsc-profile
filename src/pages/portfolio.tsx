import React from 'react';
import { graphql, useStaticQuery, type HeadFC } from 'gatsby';
import { Seo } from '../components/seo';
import { PortfolioCard } from '../components/PortfolioCard';

export type Edge = {
  node: {
    name: string;
    childImageSharp: {
      fluid: {
        aspectRatio: number;
        base64: string;
        sizes: string;
        src: string;
        srcSet: string;
      }
    }
  }
}

const Portfolio = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
            fluid(maxWidth: 300, maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
          }
          }
        }
      }
  } 
  `);
  const portfolioData = [
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'profile'),
      title: 'Responsive Profile',
      badges: ['Gatsby', 'React', 'TypeScript', 'CSS', 'Netlify'],
      sourceUrl: 'https://github.com/tsctw/tsc-profile',
      demoUrl: 'https://tsctw.co.uk/'
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'unsplash-explorer'),
      title: 'unsplash-explorer',
      badges: ['React', 'Unsplash API', 'JavaScript', 'CSS'],
      sourceUrl: 'https://github.com/DawsonChang/unsplash-explorer',
      demoUrl: 'https://dawsonchang.github.io/unsplash-explorer/'
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'budget-tracker'),
      title: 'Budget tracker',
      badges: ['Vue.js', 'json-server', 'JavaScript', 'CSS'],
      sourceUrl: 'https://github.com/DawsonChang/vue_budget_tracker',
      demoUrl: 'https://github.com/DawsonChang/project/blob/master/vue_budget_tracker2.gif'
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'Schellings'),
      title: 'Schelling model by Voronoi diagram',
      badges: ['Python3', 'numpy', 'geopandas', 'geoplot', 'PIL'],
      sourceUrl: 'https://github.com/DawsonChang/schelling_model_by_voronoi',
      demoUrl: 'https://github.com/DawsonChang/project/blob/master/vo-4.gif'
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'submarine'),
      title: 'Submarine Simulator',
      badges: ['C++', 'OpenGL', 'GLSL'],
      sourceUrl: 'https://github.com/DawsonChang/submarine-simulator',
      demoUrl: 'https://github.com/DawsonChang/project/blob/master/cg-3.gif'
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'stock'),
      title: 'Stock Simulator',
      badges: ['Angular 8', 'TypeScript', 'Java', 'Hibernate', 'Spring', 'mySQL', 'CSS', 'Bootstrap', 'IEX Cloud API'],
      sourceUrl: 'https://github.com/DawsonChang/stock_frontend',
      sourceUrl2: 'https://github.com/DawsonChang/stock_backend',
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'cnf-dnf'),
      title: 'CNF/DNF Converter',
      badges: ['Python', 'Flask', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap'],
      sourceUrl: 'https://github.com/DawsonChang/CNF-DNF-converter-Python',
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'shell-in-c'),
      title: 'Shell-in-C',
      badges: ['C', 'Linux'],
      sourceUrl: 'https://github.com/DawsonChang/shell-in-C',
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'search-weather'),
      title: 'Search weather of city',
      badges: ['Shell script', 'weatherstack API'],
      sourceUrl: 'https://github.com/DawsonChang/bash-script-weather',
    },
    {
      image: data.allFile.edges.find((edge: Edge) => edge.node.name === 'currency-exchange'),
      title: 'Currency converter',
      badges: ['Shell script', 'Foreign exchange rates API'],
      sourceUrl: 'https://github.com/DawsonChang/bash-script-converter',
    },
  ];
  return (
    <>
      <div className="text-2xl text-black dark:text-white font-bold pt-10 pl-10">Portfolio</div>
      <div className="grid grid-cols-1 small:grid-cols-2 normal:grid-cols-3 gap-4 m-5">
        {portfolioData.map((data, key) =>
          <PortfolioCard key={key} {...data} />
        )}
      </div>
    </>
  );
};

export default Portfolio;

export const Head: HeadFC = () => <Seo title="Portfolio"></Seo>;