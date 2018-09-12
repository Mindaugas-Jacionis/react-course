import React from 'react';
import Icon from 'react-fontawesome';
import PropTypes from 'prop-types';

function IconLink(props) {
  const { href, icon } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon name={icon} />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconLink;
