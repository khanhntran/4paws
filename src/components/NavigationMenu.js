import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavigationMenu extends React.Component {
  burgerToggle = () => {
    let linksEl = document.querySelector('.nav-list-narrow');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-container-wide">
          <ul className="nav-list-wide">
            <li>
              <Link className="nav-list-wide__item" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="nav-list-wide__item" to="/about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="nav-list-wide__item" to="/adoptable-cats">
                ADOPT A CAT
              </Link>
            </li>
            <li>
              <Link className="nav-list-wide__item" to="/resources">
                RESOURCES
              </Link>
            </li>
            <li>
              <Link className="nav-list-wide__item" to="/support-us">
                SUPPORT US
              </Link>
            </li>
            <li>
              <Link className="nav-list-wide__item" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-container-narrow">
        <div className="title-mobile">4Paws Rescue Team
          <FontAwesomeIcon
            icon={faBars}
            className="fa fa-bars fa-2x"
            onClick={this.burgerToggle}
          />
          </div>
          <div className="nav-list-narrow">
            <Link
              className="nav-list-narrow__item"
              to="/"
              onClick={this.burgerToggle}
            >
              Home
            </Link>

            <Link
              className="nav-list-narrow__item"
              to="/about"
              onClick={this.burgerToggle}
            >
              About
            </Link>

            <Link
              className="nav-list-narrow__item"
              to="/adoptable-cats"
              onClick={this.burgerToggle}
            >
              Adopt A Cat
            </Link>

            <Link
              className="nav-list-narrow__item"
              to="/resources"
              onClick={this.burgerToggle}
            >
              Resources
            </Link>

            <Link
              className="nav-list-narrow__item"
              to="/support-us"
              onClick={this.burgerToggle}
            >
              Support Us
            </Link>

            <Link
              className="nav-list-narrow__item"
              to="/contact"
              onClick={this.burgerToggle}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationMenu;
