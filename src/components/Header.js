import React from 'react';

import Navbar from './Navbar';
import SocialLinks from './SocialLinks';

// eslint-disable-next-line react/prop-types
export default function Header({ onClickLink }) {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="#">Magic Trick</a>
        </h1>
        <h2>Passionné de magie</h2>

        <Navbar onClickLink={onClickLink} />

        <SocialLinks />
      </div>
    </header>
  );
}
