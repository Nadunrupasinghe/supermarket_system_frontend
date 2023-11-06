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
            <div classname='deliveryInput'>
              <InputBox type='time' labelName='Delivery Time' />
            </div>
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
