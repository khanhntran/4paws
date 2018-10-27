import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';
import NavigationMenu from './NavigationMenu';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query IndexSiteTitleQuery {
        site {
          siteMetadata {
            title
            footer
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <NavigationMenu />
        <Banner imageSrc="/images/banner.jpg" altInfo="Saving Cats Four Paws at a Time"/>
        <div className="content-container">{children}</div>
        <Footer footerText={data.site.siteMetadata.footer}/>
        </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
