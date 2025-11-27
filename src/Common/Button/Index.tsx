import style from "./Index.module.css";
const Index: React.FC<any> = ({ children, type }) => {
  let button;
  switch (type) {
    case "login_btn":
      button = <button className={style.login_btn}>{children}</button>;
  }
  return <>{button}</>;
};

export default Index;
