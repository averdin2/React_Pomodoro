import React from 'react';

import '../styles/colorStyles.css';

function Title(props) {
  return (
    <div className={props.class}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Title;
