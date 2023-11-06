import React from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import cardImg1 from '../../Assets/Strawberry.png';
import CartItem from '../../Components/CartItem/CartItem'

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <ul className="tableHeader">
          <li>Product Name</li>
          <li>Price</li>
          <li>Qyt</li>
          <li>Discount</li>
          <li>Total</li>
        </ul>
        <CartItem
          img={cardImg1}
          name='Strawberry'
          price='200'
          qyt='1 kg'
          disscount='0'
          total='200'
        />
        <div className="footer">
          <ul className="item1">
            <li>Grand Total</li>
            <li>Rs.800</li>
          </ul>
          <div className="item2">
            <Button
              buttonName="Checkout"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart;