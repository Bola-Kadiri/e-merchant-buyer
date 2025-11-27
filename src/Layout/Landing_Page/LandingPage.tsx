
import { Outlet } from "react-router-dom";
import style  from "./Index.module.css"
import LandingNav from "../../Common/Navbar/LandingNav";



const LandingPage = () => {
  return (
    <div className={style.test}>
      <LandingNav/>
    <div className={style.container}>
      <div className={style.overlay} >
        <Outlet/>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
