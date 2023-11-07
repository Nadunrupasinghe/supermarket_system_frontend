import './Checkout.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import InputBox from '../../Components/InputBox/InputBox';

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
            <InputBox type='email' labelName='Email' />
            <InputBox type='text' labelName='Name' />
            <InputBox type='text' labelName='Phone Number' />
            <InputBox type='text' labelName='Delivery Address' />
            <InputBox type='text' labelName='City' />
            <InputBox type='text' labelName='Postal Code' />
            <InputBox type='date' labelName='Delivery Date' />
            <InputBox type='time' labelName='Delivery Time' />
          </div>
        </div>
        <div className='orderDetails'>
          <div className='deliveryText'>
            Order Details
            <div>
              <hr className='d-line'></hr>
            </div>
          </div>
          <div className='deliveryText'>
            Payment Method
            <div>
              <hr className='d-line'></hr>
            </div>
          </div>
          <input type='radio' value='kdkdk' className='Credit' />
          <input type='radio' value='kdkdk' className='Credit' />
          <Button type='submit' buttonName='Proceed to Checkout' />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
