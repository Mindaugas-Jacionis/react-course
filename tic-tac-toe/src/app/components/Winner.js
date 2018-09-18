import React from 'react';

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

export default Winner;
