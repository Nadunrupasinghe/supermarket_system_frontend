import React from "react";
import "./OrderStatus.css";
import Navbar from "../../Components/Navbar/Navbar";

function OrderStatus() {
  return (
    <div>
      <Navbar />
      <div className='orderproductcontainer'>
        <h5 className='toptext'>Order Status</h5>
        <div className='line'></div>
        <text>Order ID:</text>
      </div>
    </div>
  );
}

export default OrderStatus;
