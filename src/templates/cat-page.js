import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <Layout>
        <Link to="/adoptable-cats">Go Back</Link>
        <hr />
        <h1>{post.frontmatter.name}</h1>
        <h3>{post.frontmatter.note}</h3>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <h4>Posted on {post.frontmatter.date}</h4>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </div>
  );
}

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        note
        date
        path
        image {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
