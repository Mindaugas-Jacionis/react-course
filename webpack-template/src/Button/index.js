import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

function Button({ children, type }) {
  return (
    <Container className="my-button" type={type}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
