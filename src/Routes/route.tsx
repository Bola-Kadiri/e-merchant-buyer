import Login from "../Pages/Auth/Login/Index";
import SignUp from "../Pages/Auth/SignUp/Index";
import ResetPassword from "../Pages/Auth/Reset_Password/Index";
import ForgotPassword from "../Pages/Auth/Forgot_Password/Index";
import LandingPage from "../Pages/Main/Index";
import { routeInterface } from "./interface";
import AuthLayout from "../Layout/Auth/Index";
export const authRoute: routeInterface = {
  Path: "/auth",
  Component: Login,
  Layout: AuthLayout,
  Children: [
    {
      Path: "/auth/login",
      Layout: AuthLayout,
      Component: Login,
    },
    {
      Path: "/auth/forgot-password",
      Layout: AuthLayout,
      Component: ForgotPassword,
    },
    {
      Path: "/auth/reset-password",
      Layout: AuthLayout,
      Component: ResetPassword,
    },
  ],
};

export const LandingPageRoute: routeInterface = {
  Path: "/",
  // Layout: Layout,
  Component: LandingPage,
};
export const onBoardingRoute: routeInterface = {
  Path: "/sign-up",
  Layout: AuthLayout,
  Component: SignUp,
  // Children: [],
};

export default [authRoute, onBoardingRoute, LandingPageRoute];
