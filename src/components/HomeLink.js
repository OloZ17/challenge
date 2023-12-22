import React from 'react';
import PropTypes from 'prop-types';

export default function HomeLink({
  className,
  href,
  children,
  // eslint-disable-next-line react/prop-types
  onClickLink,
}) {
  function handlePresented(event) {
    console.log(event.target.text);
    onClickLink(event.target.text);
  }
  return (
    <li>
      <a className={className} href={href} onClick={handlePresented}>
        {children}
      </a>
    </li>
  );
}

HomeLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string,
};
