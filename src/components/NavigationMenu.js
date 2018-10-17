import React from 'react';
import Link from 'gatsby-link';

const NavigationMenu = () => (
  <div className="nav-container">
    <ul className="nav-list">
      <li>
        <Link className="nav-list__item" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/about">
          ABOUT
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/adoptable-cats">
          ADOPT A CAT
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/resources">
          RESOURCES
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/support-us">
          SUPPORT US
        </Link>
      </li>
      <li>
        <Link className="nav-list__item" to="/contact">
          CONTACT
        </Link>
      </li>
    </ul>
  </div>
);

export default NavigationMenu;
