import React from 'react';

import '../styles/buttonStyles.css';

function Button(props) {
  return (
    <div>
      <button>{props.name}</button>
    </div>
  );
}

export default Button;
