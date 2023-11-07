import React from 'react';
import './OrderItem.css';

function OrderItem(props) {
  return (
    <div className='orderItemContainer'>
      <ul className='orderItemList'>
        <li>
          <div className='product'>
            <img src={props.img} className='orderImage' />
            <span className='productName'>{props.name}</span>
          </div>
        </li>
        <li className='price'>Rs.{props.price}</li>
        <li className='qyt'>{props.qty}</li>
      </ul>
    </div>
  );
}

export default OrderItem;
