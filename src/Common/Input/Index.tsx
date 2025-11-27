import style from "./Index.module.css";
import {
  AiOutlineEye as VisibleIcon,
  AiOutlineEyeInvisible as HiddenIcon,
} from "react-icons/ai";
const Index: React.FC<any> = (props) => {
  let content;
  switch (props.type) {
    case "text":
      content = <input {...props} className={style.input_text} />;
      break;
    case "password_hidden":
      content = (
        <div className={style.password_input}>
          <input {...props} type="password" className={style.input_password} />
          <div className={style.icon_wrapper}>
            <HiddenIcon
              onClick={() => props.setVisible(true)}
              className={style.icon}
            />
          </div>
        </div>
      );
      break;
    case "password_visible":
      content = (
        <div className={style.password_input}>
          <input {...props} type="text" className={style.input_password_text} />
          <div className={style.icon_wrapper}>
            <VisibleIcon
              onClick={() => props.setVisible(false)}
              className={style.icon}
            />
          </div>
        </div>
      );
  }
  return <>{content}</>;
};

export default Index;
