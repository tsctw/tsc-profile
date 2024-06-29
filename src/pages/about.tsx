import React from 'react';
import type { HeadFC } from 'gatsby';
import { Seo } from '../components/seo';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode, faServer, faBugSlash, faPalette, faArrowsSpin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Edge } from '../pages/portfolio';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const aboutTitle = 'text-3xl font-bold';

const highlightColor = 'text-orange-500';

const renderList = () => {
  const lists = [
    {
      text: 'Developed web application in Front-end, Back-end and CI/CD.',
      icon: faCode
    },
    {
      text: 'Specialized in React and TypeScript, with additional proficiency in Vue.js and Angular.',
      icon: faReact
    },
    {
      text: 'Equipped with Back-end know-how, enabling data-driven decision-making.',
      icon: faServer
    },
    {
      text: 'Implemented error handling and wrote testable and scalable code.',
      icon: faBugSlash
    },
    {
      text: 'Delivered high-quality solutions for UI and UX design.',
      icon: faPalette
    },
    {
      text: 'Proficient in software development methodologies, including Scrum and Agile ways of work.',
      icon: faArrowsSpin
    }
  ];
  return lists.map((list, key) => <div key={key} className="flex pt-3">
    <div className={`text-xl pe-2 ${highlightColor}`}><FontAwesomeIcon icon={list.icon} /></div>
    <div>{list.text}</div>
  </div>);
};

const About = () => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    } 
  `);

  const image = images.allFile.edges.find((edge: Edge) => edge.node.name === 'profile_my_pic');

  return (
    <div className="flex flex-col dark:text-white h-full mt-4">
      <div className="flex justify-center mb-5">
        <div className="ani-image shadow-yellow-700">
          <Img className="border-solid" fluid={image.node?.childImageSharp?.fluid} alt={image.node.name} />
        </div>
      </div>
      <div className="flex flex-col small:flex-row justify-center text-left">
        {/* section left */}
        <div className="small:w-1/2 m-5">
          <h3 className={aboutTitle}>About
            <span className={`${aboutTitle} ${highlightColor} pl-3`}>Me</span>
          </h3>
          <div className="mt-3">
            <p className="pb-5">My name is Tao-Sen Chang. A software engineer with solid experience specializing in web application development, DevOps, cloud solutions and database. More than 2 years experiences of developing platforms to enhence data-driven decision making. Adept at identifying innovative solutions in collaboration with diverse teams and project stakeholders.</p>
            <p>Fascinated with travel and sharing knowledge. Live well, love lots, and laugh often. </p>
          </div>
        </div>
        {/* section right */}
        <div className="small:w-1/2 m-5">
          <h3 className={aboutTitle}>What
            <span className={`${aboutTitle} ${highlightColor} pl-3`}>I Do</span>
          </h3>
          <div className="mt-3">
            {renderList()}
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;

export const Head: HeadFC = () => <Seo title="About Me"></Seo>;