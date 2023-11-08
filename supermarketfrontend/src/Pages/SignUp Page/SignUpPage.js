import './SignUpPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import signupimage from '../../Assets/LandingPageIMG.png';
import InputBox from '../../Components/InputBox/InputBox';
import { Link } from 'react-router-dom'; 

function SignUpPage() {
  return (
    <div className='SignUpPage'>
      <div className='TopSection'>
        <Navbar />
      </div>
      <div className='MidSection'>
        <img className='image1' src={signupimage} />
        <div className='signup-container'>
          <div className='top-container'>
            <div className='txt'>
              <div className='text1'>
              <Link to="/signup"> Sign Up</Link>
                <div>
                  <hr className='line'></hr>
                </div>
              </div>
              <div className='text2'>
              <Link to="/signin">Sign In</Link>
                <div>
                  <hr className='line'></hr>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className='container'>
                <div className='left-container'>
                  <div className='signup-item'>
                    <InputBox type='text' labelName='Name' />
                  </div>
                  <div className='signup-item'>
                    <InputBox type='text' labelName='Phone Number' />
                  </div>
                  <div className='signup-item'>
                    <InputBox type='email' labelName='Email Address' />
                  </div>
                </div>
                <div className='right-container'>
                  <div className='signup-item'>
                    <InputBox type='text' labelName='Username' />
                  </div>
                  <div className='signup-item'>
                    <InputBox type='password' labelName='Password' />
                  </div>
                  <div className='signup-item'>
                    <InputBox type='date' labelName='Date of Birth' />
                  </div>
                  <div className='signup-item'>
                    <InputBox type='password' labelName=' Confirm Password' />
                  </div>
                </div>
              </div>
              <div className='bottom'>
                <div className='agreement'>
                  <p className='textagree'>
                    By creating your account, you agree with our
                  </p>
                  <p className='textagreement'>
                    <input
                      type='checkbox'
                      height={'20px'}
                      className='checkboxbtn'
                    />
                    Terms & Conditions
                  </p>
                </div>
                <div className='btnsignup'>
                  <Button value='Submit' buttonName='Sign Up' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
