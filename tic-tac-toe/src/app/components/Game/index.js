import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

function Game(props) {
  const { data, boxClick } = props;

  return data.map((rowData, index) => (
    <Row key={index} items={rowData} index={index} boxClick={boxClick} />
  ));
}

Game.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  boxClick: PropTypes.func.isRequired,
};

export default Game;
