import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1 className='h1--no-margin'>Contact Us</h1>
        <p>
          <b>4Paws Rescue Team</b><br></br>
          P.O. Box 2908<br></br>
          Merrifield, Virginia 22116
        </p>
        <p>
        <b>Phone:</b> 703-715-6369<br></br>
        <b>Fax:</b> 703-560-9795<br></br>
        <b>Email:</b> info@fourpaws.org
        </p>
        <br></br>
        <h1>To Do:</h1>
        <ul>
          <li>Social Media</li>
          <li>Contact form</li>
        </ul>
      </Layout>
    </div>
  );
};

export default ContactPage;
