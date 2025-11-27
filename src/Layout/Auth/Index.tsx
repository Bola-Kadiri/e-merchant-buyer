import style from "./Index.module.css";
import NavBar from "../../Common/Navbar/Index";
import { useLocation } from "react-router-dom";
const Index: React.FC<any> = ({ children }) => {
  const location = useLocation();
  return (
    <div className={style.container}>
      <NavBar location={location} />
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Index;
