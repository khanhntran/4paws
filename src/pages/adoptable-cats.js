import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
//import Img from 'gatsby-image';

const AdoptableCatsPage = ({ data }) => (
  <div>
    <Layout>
      <h1 className="h1--no-margin">Adoptable Cats Page</h1>
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
      <div className="cat-grid">
        {data.allMarkdownRemark.edges.map((cat) => (
          <div key={cat.node.id} className="cat-grid__item">
            <h2>
              <Link to={`adoptable-cats/${cat.node.frontmatter.title}`}>
                {cat.node.frontmatter.title}
              </Link>
            </h2>
            <Link to={`adoptable-cats/${cat.node.frontmatter.title}`}>
              <img src={cat.node.frontmatter.picture} />
            </Link>
            <h4>{cat.node.frontmatter.shortDesc}</h4>
            <small>
              Posted on <strong>{cat.node.frontmatter.date}</strong>
            </small>
          </div>
        ))}
      </div>
    </Layout>
  </div>
);

// <Img
//               outerWrapperClassName="cat-outer-wrapper"
//               fixed={cat.node.frontmatter.image.childImageSharp.fixed}
//             />

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
//       edges {
//         node {
//           id
//           frontmatter {
//             name
//             note
//             date(formatString: "MMMM DD, YYYY")
//             path
//             image {
//               childImageSharp {
//                 fixed(width: 250) {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            shortDesc
            date(formatString: "MMMM DD, YYYY")
            bio
            picture
          }
        }
      }
    }
  }
`;

export default AdoptableCatsPage;
