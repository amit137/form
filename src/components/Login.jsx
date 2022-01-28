
import '../css/login.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="login">
        
        <div className="login-head"> <h1>Login </h1> </div>

        <div className="login-field">
          <label htmlFor="" className='user-of-login'>UserID</label> <br />
          <input type="tel" name="userid" id="" className="userid" placeholder="Enter your userId" />
        </div>
        <div className="login-field">
          <label htmlFor="" className='password-of-login'>Password</label> <br />
          <input type="password" name="password" id="" className="password" placeholder="Enter Your Password" />
        </div>
        <div className="buttons-of-login">
          <button className='login-btn' onClick={() => { navigate("/home") }}>Login</button> <br />
          <button className='login-btn' onClick={() => { navigate("/register") }}>Register</button>

        </div>
        <p onClick={() => { navigate("/recovery") }}>Forgot Password</p>
      </div>
    </>
  )
};

export default Login;
