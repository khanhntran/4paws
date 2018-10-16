import React from 'react';
import Layout from '../components/Layout';
import Link from 'gatsby-link';

const ResourcesPage = () => (
  <Layout>
    <h1>Resources Page</h1>
    <h2>To Do:</h2>
    <h3>Have each one as its own MD</h3>
    <ul>
      <li>Adoption form</li>
      <li><Link to="/resource-pages/ready-to-adopt-info">Information on owning a cat</Link></li>
      <li><Link to="/resource-pages/spay-neuter-info">Why to spay/neuter</Link></li>
      <li>Why you shouldn't declaw</li>
      <li>Introucing Cats</li>
      <li><Link to="/resource-pages/fiv-felv-info">Facts about FIV and FELV</Link></li>
    </ul>
  </Layout>
);

export default ResourcesPage;
