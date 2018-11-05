import React from 'react';
import IndexLayout from '../components/IndexLayout';
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <IndexLayout>
    <h1 className="h1--index">Planning to Adopt a Cat?</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et vitae
      neque rerum ullam dolorem nam consectetur cum labore eveniet, facilis
      repellendus soluta autem reiciendis aut delectus corporis nostrum omnis
      veritatis commodi quia ab deserunt. Hic tenetur modi neque! Totam.
    </p>
  </IndexLayout>
);

export default IndexPage;
