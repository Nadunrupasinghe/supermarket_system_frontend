import React from 'react';
import './InputBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

function InputBox(props) {
  return (
    <div className='inputBox'>
      <div className='labelname'>{props.labelName}</div>
      {props.type !== 'textarea' && (
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
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
          onChange={props.handleChange}
          className='textarea'
        />
      )}
      {/* <span className='errorMessage'>
        {props.error !== '' && <FontAwesomeIcon icon={faCircleArrowUp} />}{' '}
        {props.error}
      </span> */}
    </div>
  );
}

export default InputBox;
