import './SignInPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import signinimage from '../../Assets/LandingPageIMG.png';
import InputBox from '../../Components/InputBox/InputBox';

function SignInPage() {
  return (
    <div className='SignInPage'>
      <div className='TopSection'>
        <Navbar />
      </div>
      <div className='MidSection'>
        <img className='img1' src={signinimage} />
        <div className='form-container'>
          <div className='top-container'>
            <div className='text'>
              <div className='text1'>
                Sign Up
                <div>
                  <hr className='line'></hr>
                </div>
              </div>
              <div className='text2'>
                Sign In
                <div>
                  <hr className='line'></hr>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className='signin-form'>
              <div className='signin-input1'>
                <InputBox labelName='Email Address' type='email' />
              </div>
              <div className='signin-input2'>
                <InputBox labelName='Password' type='Password' />
              </div>
              <div className='forgot'>
                <p className='pass'>Forgot Password?</p>
              </div>
              <div className='btn'>
                <Button value='Submit' buttonName='Sign In' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
