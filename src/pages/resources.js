import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const ResourcesPage = () => (
  <Layout>
    <h1 className="h1--no-margin">Resources</h1>
    <h3>
      Questions on adopting or caring for a cat? Check out our resource pages:
    </h3>
    <ul>
      <li>Adoption Form</li>
      <li>
        <Link to="/resource-pages/ready-to-adopt-resource">
          Adopting a New Cat
        </Link>
      </li>
      <li>
        <Link to="/resource-pages/fiv-felv-resource">
          Facts About FIV and FELV
        </Link>
      </li>
      <li>
        <Link to="/resource-pages/introducing-cats-resource">
          Introducing Cats to Other Pets
        </Link>
      </li>
      <li>
        <Link to="/resource-pages/adoption-locations">
          Where to Adopt a 4Paws Cat
        </Link>
      </li>
      <li>
        <Link to="/resource-pages/spay-neuter-resource">
          Why You Should Spay/Neuter Your Cat
        </Link>
      </li>
    </ul>
  </Layout>
);

export default ResourcesPage;
