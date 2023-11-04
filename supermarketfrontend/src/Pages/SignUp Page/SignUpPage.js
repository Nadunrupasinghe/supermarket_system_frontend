import './SignUpPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import signupimage from '../../Assets/LandingPageIMG.png';

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
            <div>Signup</div>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name</label>
              <input type='text' id='firstName' name='firstName' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' />
            </div>
          </div>
          <div className='right-container'>
            <div>Signin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
