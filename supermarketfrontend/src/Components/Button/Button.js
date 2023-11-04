import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <div>
      <div className="customButton">
        <button type={props.type} className="Button" >
          {props.buttonName}
        </button>
        </div>
    </div>
  )
}

export default Button