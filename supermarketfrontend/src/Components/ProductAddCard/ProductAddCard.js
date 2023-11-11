import React from 'react';
import './ProductAddCard.css';
import Button from '../Button/Button';
function ProductAddCard(props) {
  return (
    <div className='productaddCard'>
      <img src={props.image} className='prodAddImage' />
      <span>{props.name}</span>
      <span>{props.price}</span>
      <Button type='submit' buttonName='Add to Cart' />
    </div>
  );
}

export default ProductAddCard;
