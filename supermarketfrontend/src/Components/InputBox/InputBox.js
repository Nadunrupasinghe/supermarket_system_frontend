import React from 'react';
import './InputBox.css';
import { useState } from 'react';


function InputBox(props) {
  const [state, setState] = useState(0);
  return (
    <div className='inputBox'>
      <label className='labelname'>{props.labelName}</label>
      {props.type !== 'textarea' && (
        <input
     
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className='input'
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          rows='4'
          cols='10'
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          className='textarea'
        />
      )}
      <span className='errorMessage'>
        {props.error}
      </span>
    </div>
  );
}

export default InputBox;
