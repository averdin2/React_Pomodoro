import React from 'react';

import '../styles/buttonStyles.css';
import '../styles/colorStyles.css';

function Button(props) {
  return (
    <div>
      <button
        className={props.class}
        onClick={() => props.handleTimerStatus(props.val)}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
