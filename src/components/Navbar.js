import React from 'react';
import HomeLink from './HomeLink';
import { titles } from '../datas/menuTitle.js';

export default function Navbar(props) {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {titles.map((title) => (
          <HomeLink
            key={title.id}
            className="nav-link"
            href={title.link}
            // eslint-disable-next-line react/prop-types
            onClickLink={props.onClickLink}
          >
            {title.title}
          </HomeLink>
        ))}
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}
