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
        {data.allMarkdownRemark.edges.map((cat) => (
          <div key={cat.node.id}>
            <h2>
              <Link to={cat.node.frontmatter.path}>
                {cat.node.frontmatter.name}
              </Link>
            </h2>
            <h4>{cat.node.frontmatter.note}</h4>
            <Link to={cat.node.frontmatter.path}>
              <Img fixed={cat.node.frontmatter.image.childImageSharp.fixed} />
            </Link>
            <small>Posted on {cat.node.frontmatter.date}</small>
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
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed
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
