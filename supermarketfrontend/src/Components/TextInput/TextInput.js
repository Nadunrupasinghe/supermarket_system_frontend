import React from 'react';

import { useState } from 'react';

function TextInputBox(props) {
    const [isFocused, setIsFocused] = useState(false);
    
    const handleBlur = () => {
        setIsFocused(false);
    
        // Check if the onBlur prop is a function before calling it
        if (typeof props.onBlur === 'function') {
          props.onBlur();
        }
      };
    return (
      <div className='inputBox'>
        <label className='labelname'>{props.inputlabel}</label>
  
        <input
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={handleBlur}
          name={props.name}
          className={`input ${isFocused ? 'inputFocused' : ''}`}
          placeholder={props.placeholder}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
        />
        {props.error && props.touched && <div className='errormsg'>{props.error}</div>}
      </div>
    );
  }
  
  export default TextInputBox;
  