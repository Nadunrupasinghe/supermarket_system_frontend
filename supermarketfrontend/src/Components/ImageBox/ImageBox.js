import React from "react";
import "./ImageBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function InputBox(props) {
  return (
    <div className='ImageBox'>
      <div className='labelname'>{props.labelName}</div>
      {props.type !== "ImageBox" && (
        <input
          type={props.type}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          className='imagebox'
        />
      )}
      {/* <span className='errorMessage'>
        {props.error}
      </span> */}
    </div>
  );
}

export default InputBox;
