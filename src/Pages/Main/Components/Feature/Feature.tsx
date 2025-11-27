import { GrLocation as LocationIcon } from "react-icons/gr";
import {
  BsCalendar4 as CalendarIcon,
  BsGraphUp as GraphIcon,
} from "react-icons/bs";
import style from "./Index.module.css";
const Feature = () => {
  return (
    <div className={style.content}>
    <div className={style.container_fluid_two}>
      <div className={style.header}>
        <span>What we do</span>
        <h1>Our Features</h1>
      </div>
      <div className={style.container}>
        <div className={style.hero_section_two}>
          <div className={style.hero_section_two_left}>
            <div className={style.hero_section_two_image}>
              <img src="src/assets/hero_two.svg" />
            </div>
          </div>
          <div className={style.hero_section_two_right}>
            <div className={style.feature_highlight}>
              <div className={style.feature_icon_wrapper}>
                <CalendarIcon className={style.feature_icon} />
              </div>
              <div className={style.feature}>
                <h1>Staying up to date</h1>
                <span>
                  Our algorithms handles the regular news updates. You get up to
                  date news.
                </span>
              </div>
            </div>
            <div className={style.feature_highlight}>
              <div className={style.feature_icon_wrapper}>
                <LocationIcon className={style.feature_icon} />
              </div>
              <div className={style.feature}>
                <h1>All-round the Globe</h1>
                <span>
                  We deliver our fabrics products worldwide. Feel free to order
                  from us.
                </span>
              </div>
            </div>
            <div className={style.feature_highlight}>
              <div className={style.feature_icon_wrapper}>
                <GraphIcon className={style.feature_icon} />
              </div>
              <div className={style.feature}>
                <h1>Delivery</h1>
                <span>
                  Our customers reviews stats clearly shows you can rely on us
                  for updated contents all round the globe.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;