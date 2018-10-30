import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
//import Img from 'gatsby-image';

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <Layout>
        <Link to="/adoptable-cats">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.shortDesc}</h3>
        <img src={post.frontmatter.picture} />
        <h4>Posted on {post.frontmatter.date}</h4>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </div>
  );
}

// <Img fluid={post.frontmatter.image.childImageSharp.fluid} />

// export const postQuery = graphql`
//   query($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         name
//         subtitle
//         date(formatString: "MMMM DD, YYYY")
//         path
//         image {
//           childImageSharp {
//             fluid(maxWidth: 750) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const postQuery = graphql`
  query CatQuery {
    markdownRemark {
      html
      frontmatter {
        title
        shortDesc
        date(formatString: "MMMM DD, YYYY")
        bio
        picture
      }
    }
  }
`;
