import React from 'react';
import { Edge } from '../pages/portfolio';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export const ProfileImage = () => {

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

  const image = images.allFile.edges.find((edge: Edge) => edge.node.name === 'profile_main');

  return (
    <div className="border-2 rounded-full border-black dark:border-white border-solid relative">
      <div>
        <Img className="profile-image" fluid={image.node?.childImageSharp?.fluid} alt={image.node.name} />
      </div>
    </div>
  );
};