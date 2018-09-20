import React from 'react';
import PropTypes from 'prop-types';

function Box(props) {
  const { boxData, boxClick, rowIndex, boxIndex } = props;

  return (
    <button
      onClick={() => boxClick({ row: rowIndex, box: boxIndex })}
      className="box"
      type="button"
    >
      {boxData}
    </button>
  );
}

Box.propTypes = {
  boxData: PropTypes.string,
  boxClick: PropTypes.func.isRequired,
  rowIndex: PropTypes.number.isRequired,
  boxIndex: PropTypes.number.isRequired,
};

Box.defaultProps = {
  boxData: undefined,
};

export default Box;
