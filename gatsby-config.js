module.exports = {
  siteMetadata: {
    title: '4Paws Rescue Team',
    footer: 'Copyright © 2018 | 4Paws Rescue Team'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'cats',
        path: `${__dirname}/src/pages/cats`
      }
    },
    'gatsby-transformer-remark'
  ]
};
