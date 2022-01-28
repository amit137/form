import React from 'react';
import '../css/otp.css';

const Otp = () => {
  return (
      <>
      <div className="otp">
          <h2 className='h2-of-otp'>OTP Verification</h2>
          <p className='p-of-otp'>Enter the OTP sent to <br/> +91XXXXXXXXXX</p>

          <input type="text" name="otp" id="" className="input-otp" />
          <p className='an-p-of-otp'>Resend OTP ?</p>
          <button className='otp-btn' >Verify & Proceed </button> <br />
      </div>
      </>
  )
};

export default Otp;
