import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/forgot.css'

const Forgot = () => {
  let navig=useNavigate();
  return (
      <>
      <div className="forgot-page">
        <div className="forgot">
        {/* <img src="./back.png" alt="" srcset="" /> */}
        {/* <h1>this is the </h1> */}
        <div className="forgot-field">
          <label htmlFor="" className='text-of-forgot'> <h2> Forgot Password </h2></label> <br />
          <p className='p-of-forgot'>Your password has  <br/>been sent to your <br/> registered mobile no. <br /> +91XXXXXXXXXX</p>
        <br />  <h3>Enter Password </h3>
          <div className="sa">
          <input type="password" name="password" id="" className="password-of-forgot" placeholder="Confirm Your Password" />
        <br /> <br />  <button className='login-btn' onClick={() => { navig("/login") }}>Login</button> <br />
        </div>
        </div>
        </div>
      </div>
      </>
  )
};

export default Forgot;
