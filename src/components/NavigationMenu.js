import React from "react";
import Link from "gatsby-link";

const NavigationMenu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px"
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/adoptable-cats">Adoptable Cats</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
      <li>
        <Link to="/support-us">Support Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

export default NavigationMenu;
