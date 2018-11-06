const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve('src/templates/cat-page.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              title
              date
              tags
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `adoptable-cats/${node.frontmatter.title}`,
        component: postTemplate,
        context: {
          title: node.frontmatter.title
        }
      });
    });
  });
};
