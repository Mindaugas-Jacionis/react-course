import React from 'react';
import PropTypes from 'prop-types';

function Winner(props) {
  const { winner, onClick } = props;
  const message = winner ? `Winnner is: ${winner.icon}` : 'Nobody won :(';

  return (
    <div className="winner-container">
      <p>{message}</p>
      <button type="button" onClick={onClick} className="primary-button">
        Restart
      </button>
    </div>
  );
}

Winner.propTypes = {
  winner: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    winner: PropTypes.bool.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

Winner.defaultProps = {
  winner: undefined,
};

export default Winner;
