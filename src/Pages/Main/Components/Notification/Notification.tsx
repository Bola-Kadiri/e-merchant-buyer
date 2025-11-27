import style from "./Index.module.css";
const Notification = () => {
  return (
    <div className={style.container_fluid}>
      <div className={style.container}>
        <div className={style.left}>
          <img src="/src/assets/illustration.svg" />
        </div>
        <div className={style.right}>
          <h1>Get Notified on our latest services</h1>
          <div className={style.notification_input}>
            <input
              type="text"
              name="search"
              placeholder="Enter your Email address"
            />
            <button className={style.notification_btn}>Subscriber</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;