import React from 'react';
import './ProductViewCard.css';

function ProductViewCard(props) {
  return (
    <div className='productCard'>
      <img src={props.secondaryimg} />
      <text>{props.secondText}</text>
    </div>
  );
}

export default ProductViewCard;
