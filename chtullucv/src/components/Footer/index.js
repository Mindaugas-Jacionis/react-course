import React from 'react';
import IconLink from './IconLink';
import data from './data';
import './index.css';

function Footer() {
  return (
    <footer className="Footer">
      {data.map((value, i) => (
        <IconLink href={value.href} icon={value.icon} key={i} />
      ))}
    </footer>
  );
}

export default Footer;
