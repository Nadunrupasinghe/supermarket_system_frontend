import './SignInPage.css';
import Button from '../../Components/Button/Button';
import Navbar from '../../Components/Navbar/Navbar';
import signinimage from '../../Assets/LandingPageIMG.png';
import TextInputBox from '../../Components/TextInput/TextInput';
import { Link } from 'react-router-dom'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function SignInPage() {
  const [valid, setValid] = useState(false);

  const [userData, setUserData] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, "password is too short!"),
  });
  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema: validationSchema,
    
  });


  async function submit() {
    console.log("hi");
    formik.validateForm();
    Object.keys(formik.values).forEach((value) => {
      formik.setFieldTouched(value);
    });
    if (!Object.keys(formik.touched).length) return;
    for (let error in formik.errors) if (error) return;
    const data = formik.values;
    setValid(true);
    setUserData(data);
    console.log(userData);
    SendToregister(userData);
    // navigation.navigate("beFarmer", {
    //   type: "Success",
    //   userData: JSON.stringify(data),
    // });
  }

  const SendToregister = async(userData) => {
    
      fetch('http://localhost:8085/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"userName":"Nadun123","password":"1234"}),

    }).then(()=>{
      console.log("success");
    })
  }
  
  return (
    <div className='SignInPage'>
      <div className='TopSection'>
        <Navbar />
      </div>
      <div className='signin-MidSection'>
        <img className='signin-image2' src={signinimage} />
        <div className='signin-form-container'>
          <div className='signin-top-container'>
            <div className='signin-text'>
              <div className='signin-text1'>
                <Link to="/signin">Sign In</Link>
                <div>
                  <hr className='signin-line'></hr>
                </div>
              </div>
              <div className='signin-text2'>
                <Link to="/signup"> Sign Up</Link>
                <div>
                  <hr className='signin-line'></hr>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={submit}>
            <div className="signin-form">
              <div className="signin-input1">
                <label className='signin-inputlabel'>Email Address</label>
                <TextInputBox
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={() => formik.setFieldTouched("email", true, true)}
                />
                {formik.errors.email && formik.touched.email && (
                  <div className="error-message">{formik.errors.email}</div>
                )}
              </div>
              <div className="signin-input2">
                <label className='signin-inputlabel'>Password</label>
                <TextInputBox
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={() => formik.setFieldTouched("password", true, true)}
                />
                {formik.errors.password && formik.touched.password && (
                  <div className="error-message">{formik.errors.password}</div>
                )}
              </div>
              <div className="signin-forgot">
                <p className="pass">Forgot Password?</p>
              </div>
              <div className="signin-btn">
                <Button type="submit" value="Submit" buttonName="Sign In"   />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
