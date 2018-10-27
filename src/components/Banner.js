import React from 'react';

const Banner = ({ imageSrc, altInfo }) => (
  <div className="banner">
    <img className="banner__image" src={imageSrc} alt={altInfo}/>
  </div>
);

export default Banner;