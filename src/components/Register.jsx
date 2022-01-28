import React, { useEffect, useState } from "react";
import '../css/register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigation = useNavigate();
    const initialVal = { name: "",userid: "", email: "", password: "", year: "", branch: "", gender: "", address: "", contact: "" };
    const [formvalues, setFormValues] = useState(initialVal);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);




    const handleChange = (e) => {
        //    console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formvalues, [name]: value });
        console.log(formvalues);


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmit(true);

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formvalues);
        }
    })

   
    const validate = (values) => {
        const errors={};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!values.email) {
            errors.email = "Email is Required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid format!"
        }
        if (!values.password) {
            errors.password = "Password is Required";
        }

        if(!values.email || (!values.password )){
            console.log('cannot sign in');
        }
        else{
            navigation('/otp')
        }

        return errors;
       
       
       
    }
   
    

    return (
        <div className="register-background">
            <div className="register-container">
                <div className="register-extra">
                    {/* /<pre>{JSON.stringify(formvalues,undefined,2)}</pre> */}
                    {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="success">Signed In Succesfully!!</div>) :
                        ('')}
                    <form onSubmit={handleSubmit}>
                        <div className="sign-up">
                            <h1>Sign Up </h1>
                        </div>
                        <div className="register-input-fields">
                            <div className="register-one">

                                <div className="register-field">
                                    <input  type="text" name="name"  id="" onChange={handleChange} className="name" value={formvalues.name} placeholder="Name" required />
                                </div>

                                <div className="register-field">
                                    <input  type="number" name="userid"  required id="" onChange={handleChange} className="userid" value={formvalues.userid} placeholder="Roll no" />
                                </div>
                                <div className="register-field">

                                    <select name="branch" id="" onChange={handleChange} value={formvalues.branch}>

                                        <option>CSE</option>
                                        <option>CSE(AIML)</option>
                                        <option>CSE(DS)</option>
                                        <option>CS</option>
                                        <option>IT</option>
                                        <option>CS-IT</option>
                                        <option>CIVIL</option>
                                        <option>MECH</option>
                                        <option>ECE</option>
                                        <option>EN</option>
                                    </select>
                                </div>
                                <div className="register-field">

                                    <input  type="email"  name="email" id="" onChange={handleChange} className="email" value={formvalues.email} placeholder="Email" />
                                    <p>{formErrors.email}</p>
                                </div>
                                <div className="register-field">

                                    <input  type="textarea" name="address" id="" onChange={handleChange} className="address" value={formvalues.address} placeholder="Address" />

                                </div>

                                <div className="register-field">
                                  
                                    <input  type="password" name="password" id="" onChange={handleChange} className="password" value={formvalues.password} placeholder="Password" />
                                    <p>{formErrors.password}</p>
                                </div>

                            </div>
                            <div className="register-one">
                                <div className="register-field">
                                   
                                    <select name="year" id="" onChange={handleChange} value={formvalues.year}>
                                        <option >1st Year </option>
                                        <option >2nd Year </option>
                                        <option >3rd Year </option>
                                        <option >4th Year </option>
                                    </select>
                                </div>

                                <div className="register-field">
                                    <div className="gen">
                                    <label className="gend" id="gends"><strong>Gender </strong> </label>  
                                    <label className="gend" htmlFor=""> Male </label>
                                    <input  type="radio" name="gender" className="dot" value={formvalues.gender} id="" onChange={handleChange} /> 
                                    <label className="gend" htmlFor="">Female</label>
                                    <input  type="radio" name="gender" className="dot" value={formvalues.gender} id="" onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="register-field">
                                  
                                    <input  type="textarea" className="place" name="contact" id="" onChange={handleChange} className="contact" value={formvalues.contact} placeholder="Contact no." />
                                </div>
                                <div className="register-field">
                                    <div id="captcha">this will be captcha</div>
                                </div>

                            </div>
                        </div>
                        <div className="register-forbutton">
                            <button className="register-button" >Sign Up</button>
                        </div>


                    </form>


                </div>

            </div>
        </div>
    )
}

export default Register;