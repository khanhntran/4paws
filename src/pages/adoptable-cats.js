import React from 'react';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import moment from 'moment';
//import Img from 'gatsby-image';

const AdoptableCatsPage = ({ data }) => (
  <div>
    <Layout>
      <h1 className="h1--no-margin">Adoptable Cats</h1>
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
          <Link
            key={cat.node.id}
            to={`adoptable-cats/${cat.node.frontmatter.title}`}
          >
            <div key={cat.node.id} className="cat-grid__item">
              <div className="cat-name">{cat.node.frontmatter.title}</div>
              <div className="cat-pic-container">
                <img
                  className="cat-pic"
                  alt={`${cat.node.frontmatter.title} the cat`}
                  src={cat.node.frontmatter.picture}
                />
              </div>
              <div className="cat-short-desc">
                {cat.node.frontmatter.shortDesc}
              </div>
              <div className="cat-date">
                Posted on{' '}
                <strong>
                  {moment(cat.node.frontmatter.date).format("MMM Do 'YY")}
                </strong>
              </div>
            </div>
          </Link>
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
//             date
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
  query CatsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            shortDesc
            date
            picture
          }
        }
      }
    }
  }
`;

export default AdoptableCatsPage;
