import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

function Row(props) {
  const { index, items, boxClick } = props;

  return (
    <div className="row">
      {items.map((boxData, boxIndex) => (
        <Box
          key={boxIndex}
          boxData={boxData}
          boxIndex={boxIndex}
          rowIndex={index}
          boxClick={boxClick}
        />
      ))}
    </div>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  boxClick: PropTypes.func.isRequired,
};

export default Row;
