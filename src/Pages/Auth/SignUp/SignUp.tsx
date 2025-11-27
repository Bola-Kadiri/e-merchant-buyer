import style from "./Index.module.css";

import { useEffect, useState } from "react";

import UserType from "../../../Common/user_type_toggler/Index";
import {useRegisterMutation} from "../../../app/features/api/apiSlice"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const  initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",

}
const SignUp = () => {
  const [register, {isSuccess}] = useRegisterMutation()


  const [formData, setFormData]= useState(initialValue)
  const {firstName, lastName, email, password} =  formData

const navigate = useNavigate()
    
  const handleChange=(e:any)=>{
       setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit=async()=>{
    if(firstName && lastName && email && password){
         await register({firstName, lastName, email, password})

    }else{
        toast.error("All input must be filled")
    }
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success("User register successfully")
      navigate("/dash/product")
    }
  }, [isSuccess, navigate])
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.header}>
          <h1>Sign Up</h1>
          <UserType />
          <span>You're a step away from an awesome experience</span>
        </div>
        <div className={style.form}>
          <div className={style.input_group}>
            <div className={style.left}>
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                value={firstName}
                onChange={handleChange}
              />
            </div>
            <div className={style.right}>
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter your First Name"
                value={lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.input_group}>
            <label htmlFor="email">Email address</label>
            <input name="email" type="text" placeholder="Enter your email"   value={email} onChange={handleChange} />
          </div>
          <div className={style.input_group}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
           
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className={style.input_group_check}>
          <input id="check" type="checkbox" />
          <label htmlFor="check">
            I agree with fabrics{" "}
            <span>Terms & Condition and Privacy Policy</span>
          </label>
        </div>
        {/* <div className={style.bottom}>
          <span>
            Don't have an account?{" "}
            <Link className={style.signup_link} to="/">
              Sign Up
            </Link>
          </span>

          <p> Or</p>
          <div className={style.other_login_options}>
            <div className={style.options}>
              <div className={style.option}>
                <div className={style.icon_wrapper}>
                  <FaceBookIcon className={style.facebook_icon} />
                </div>
              </div>
              <div className={style.option}>
                <div className={style.icon_wrapper}>
                  <GoogleIcon className={style.goggle_icon} />
                </div>
              </div>
              <div className={style.option}>
                <div className={style.icon_wrapper}>
                  <AppleIcon className={style.apple_icon} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className={style.right}>
        <img src="/src/assets/login2.svg" />
      </div>
    </div>
  );
};

export default SignUp ;
