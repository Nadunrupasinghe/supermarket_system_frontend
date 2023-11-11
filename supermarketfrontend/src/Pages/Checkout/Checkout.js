import './Checkout.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import InputBox from '../../Components/InputBox/InputBox';
import OrderItem from '../../Components/OrderItem/OrderItem';
import Strawberry from '../../Assets/Strawberry.png';
import Vegetables from '../../Assets/Vegetables.png';

function Checkout() {
  return (
    <div className='checkout'>
      <Navbar />
      <div className='order-container'>
        <div className='deliveryDetails'>
          <div className='deliveryText'>
            Delivery Details
            <div>
              <hr className='d-line'></hr>
            </div>
          </div>
          <div className='inputs'>
            <div classname='deliveryInput'>
              <InputBox type='email' labelName='Email' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='text' labelName='Name' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='text' labelName='Phone Number' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='textarea' labelName='Delivery Address' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='text' labelName='City' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='text' labelName='Postal Code' />
            </div>
            <div classname='deliveryInput'>
              <InputBox type='date' labelName='Delivery Date' />
            </div>
            {/* <div classname='deliveryInput'>
              <InputBox type='time' labelName='Delivery Time' />
            </div> */}
          </div>
        </div>
        <div className='orderDetails'>
          <div className='deliveryText'>
            Order Details
            <div>
              <hr className='d-line'></hr>
            </div>
          </div>

          <ul className='productDetails'>
            <li>Product Name</li>
            <li>Price</li>
            <li>Quantity</li>
          </ul>
          <OrderItem
            img={Strawberry}
            name='Strawberry'
            price='450.00/kg'
            qty='2'
          />
          <OrderItem
            img={Vegetables}
            name='Cucumber'
            price='1000.00/kg'
            qty='0.5'
          />
          <div className='billDetails'>
            <div className='items'>
              <p>Item Count</p>
              <p>{1}</p>
            </div>
            <hr className='i-line'></hr>
            <div className='items'>
              <p>Sub Total</p>
              <p>Rs.150.00</p>
            </div>
            <hr className='i-line'></hr>
            <div className='items'>
              <p>Delivery Charges</p>
              <p>Rs.300.00</p>
            </div>
            <hr className='i-line'></hr>
            <div className='items'>
              <p>Sub Total Discounts</p>
              <p>{0}</p>
            </div>
            <hr className='i-line'></hr>
            <div className='totalBill'>
              <p>Grand Total</p>
              <p>Rs.450.00</p>
            </div>
          </div>
          <div className='deliveryText'>
            Payment Method
            <div>
              <hr className='d-line'></hr>
            </div>
          </div>
          <label className='label'>
            <input
              type='radio'
              name='paymenttype'
              value='cardpayment'
              className='Credit'
            />
            Pay with Debit or Credit Card
          </label>

          <label className='label'>
            <input
              type='radio'
              name='paymenttype'
              value='COD'
              className='Credit'
            />
            Cash on Delivery (COD)
          </label>

          <Button type='submit' buttonName='Proceed to Checkout' />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
