import style from "./Index.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Vector (2).svg";
const LandingNav = () => {
  const navLinks = [
    {
      id: 0,
      path: "/",
      title: "Home",
    },
    {
      id: 1,
      path: "/signup",
      title: "Sign Up",
    },
    {
      id: 2,
      path: "/login",
      title: "Login",
    },
    {
      id: 3,
      path: "/about-us",
      title: "About Us",
    },
  ];

 

  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={Logo} className={style.nav_logo} alt="nav_logo" />
        <span>Fabrics</span>
      </div>
      <div className={style.right}>
        <div className={style.nav_links}>
          {navLinks.map((link) => (
            <div
             
              key={link.id}
              className={
        
                  style.nav_link_active
              
              }
            >
              <Link to={link.path}>{link.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
