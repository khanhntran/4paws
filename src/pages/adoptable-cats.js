import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AdoptableCatsPage = ({ data }) => {
  return (
    <div>
      <Layout>
        <h1>Adoptable Cats Page</h1>
        <h2>--Add Adoption Form--</h2>
        {data.allMarkdownRemark.edges.map(cat => (
          <div key={cat.node.id}>
            <h2>{cat.node.frontmatter.name}</h2>
            <h4>{cat.node.frontmatter.note}</h4>
            <Img
              resolutions={
                cat.node.frontmatter.featuredImage.childImageSharp.resolutions
              }
            />
            <small>Posted on {cat.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={cat.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </Layout>
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            name
            note
            date(formatString: "DD MMMM, YYYY")
            path
            featuredImage {
              childImageSharp {
                resolutions(width: 300, height: 300) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default AdoptableCatsPage;
