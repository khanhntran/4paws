import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AdoptableCatsPage = ({ data }) => (
  <div>
    <Layout>
      <h1 className='h1--no-margin'>Adoptable Cats Page</h1>
      <p>
        If you are interested in adopting any 4Paws cat, please{' '}
        <a
          href="/files/adoption-application.pdf"
          download="adoption-application.pdf"
        >
          download the adoption application
        </a>{' '}
        and fax it to 703-560-9795.
      </p>
      <hr />
      <div className="cat-wrapper">
        {data.allMarkdownRemark.edges.map((cat) => (
          <div key={cat.node.id}>
            <h2>
              <Link to={cat.node.frontmatter.path}>
                {cat.node.frontmatter.name}
              </Link>
            </h2>
            <h4>{cat.node.frontmatter.note}</h4>
            <Link to={cat.node.frontmatter.path}>
              <Img
                outerWrapperClassName="cat-outer-wrapper"
                fixed={cat.node.frontmatter.image.childImageSharp.fixed}
              />
            </Link>
            <br />
            <small>
              Posted on <strong>{cat.node.frontmatter.date}</strong>
            </small>
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            name
            note
            date(formatString: "MMMM DD, YYYY")
            path
            image {
              childImageSharp {
                fixed(width: 250) {
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
