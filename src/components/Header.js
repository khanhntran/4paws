import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="header__title">
      <Link className="header__content" to="/">
        {siteTitle}
      </Link>
    </h1>
  </div>
);

export default Header;
