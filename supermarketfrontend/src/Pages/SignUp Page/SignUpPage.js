import './SignUpPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import signupimage from '../../Assets/LandingPageIMG.png';
import InputBox from '../../Components/InputBox/InputBox';

function SignUpPage() {
  return (
    <div className='SignUpPage'>
      <div className='TopSection'>
        <Navbar />
      </div>
      <div className='MidSection'>
        <img className='img1' src={signupimage} />

        <div className='signup-container'>
          <div className='left-container'>
            <div className='signup-item'>
              <p>Signup</p>
              <hr className='line'></hr>
            </div>
            <div className='signup-item'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' id='firstName' name='firstName' />
            </div>
            <div className='signup-item'>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input type='text' id='phoneNumber' name='PhoneNumber' />
            </div>
            <div className='signup-item'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' />
            </div>
            <div className='signup-item'>
              <label htmlFor='dateOfBirth'>Date of Birth</label>
              <input type='date' id='dateOfBirth' name='dateOfBirth' />
            </div>
          </div>
          <div className='right-container'>
            <div className='signup-item'>
              <p>SignIn</p>
              <hr className='line'></hr>
            </div>
            <div className='signup-item'>
              <label htmlFor='lastName'>Last Name</label>
              <input type='text' id='lastName' name='lastName' />
            </div>
            <div className='signup-item'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' name='password' />
            </div>
            <div className='signup-item'>
              <label htmlFor='confirmPassword'>Confrim Password</label>
              <input
                type='password'
                id='pconfirmPassword'
                name='confirmPassword'
              />
            </div>
            <div className='signup-item'>
              <Button type='submit' buttonName='Sign Up' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
