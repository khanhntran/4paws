import React from 'react';
import Link from 'gatsby-link';

const NavigationMenu = () => (
  <div className="nav-container">
    <ul className="nav-list">
      <li>
        <Link className="nav-list__item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/adoptable-cats">
          Adoptable Cats
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/resources">
          Resources
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/support-us">
          Support Us
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);

export default NavigationMenu;
