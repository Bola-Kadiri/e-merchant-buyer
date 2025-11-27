import style from "./Index.module.css";
import Input from "../../../Common/Input/Index";
import { useState } from "react";
import Button from "./../../../Common/Button/Index";
import { Link } from "react-router-dom";
import { FaFacebook as FaceBookIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { IoLogoApple as AppleIcon } from "react-icons/io";
import UserType from "../../../Common/user_type_toggler/Index";
const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.header}>
          <h1>Login</h1>
          <UserType />
          <span>You're a step away from an awesome experience</span>
        </div>
        <div className={style.form}>
          <div className={style.input_group}>
            <label htmlFor="email">Email address</label>
            <Input id="email" type="text" placeholder="Enter your email" />
          </div>
          <div className={style.input_group}>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              setVisible={setVisible}
              placeholder="Enter your password"
              type={!visible ? "password_hidden" : "password_visible"}
            />
          </div>
          <Button type="login_btn">Login</Button>
        </div>
        <div className={style.bottom}>
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
        </div>
      </div>
      <div className={style.right}>
        <img src="/src/assets/login2.svg" />
      </div>
    </div>
  );
};

export default Login;
