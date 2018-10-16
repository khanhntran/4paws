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
      <li><Link to="/resource-pages/ready-to-adopt-resource">Information on owning a cat</Link></li>
      <li><Link to="/resource-pages/spay-neuter-resource">Why to spay/neuter</Link></li>
      <li><Link to="/resource-pages/introducing-cats-resource">Introducing Cats</Link></li>
      <li><Link to="/resource-pages/fiv-felv-resource">Facts about FIV and FELV</Link></li>
      <li><Link to="/resource-pages/adoption-locations">Adoption Locations</Link></li>
    </ul>
  </Layout>
);

export default ResourcesPage;