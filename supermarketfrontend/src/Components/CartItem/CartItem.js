import React from 'react';
import './CartItem.css';

function CartItem(props) {
  return (
    <div className="cartItemContainer">
      <ul className="cartItemList">
        <li>
          <div className="product">
            <img src={props.img} className="cartImage" />
            <span className="productName">{props.name}</span>
          </div>
        </li>
        <li className="price">Rs.{props.price}</li>
        <li className="qyt">{props.qyt}</li>
        <li className="disscount">Rs.{props.disscount}</li>
        <li className="total">Rs.{props.total}</li>
      </ul>
    </div>
  )
}

export default CartItem;