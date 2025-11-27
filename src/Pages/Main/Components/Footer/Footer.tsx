import { Link } from "react-router-dom";
import style from "./Index.module.css";
import {
  AiOutlineInstagram as InstagramIcon,
  AiOutlineTwitter as TwitterIcon,
  AiOutlineYoutube as YoutubeIcon,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className={style.container_fluid}>
      <div className={style.container}>
        <div className={style.footer_links}>
          <div className={style.footer_link}>
            <Link to="/">
              <div className={style.footer_link_text}>Home</div>
            </Link>
          </div>
          <div className={style.footer_link}>
            <Link to="/">
              <div className={style.footer_link_text}>Our Features</div>
            </Link>
          </div>
          <div className={style.footer_link}>
            <Link to="/">
              <div className={style.footer_link_text}>Services</div>
            </Link>
          </div>
          <div className={style.footer_link}>
            <Link to="/">
              <div className={style.footer_link_text}>Trending Updates</div>
            </Link>
          </div>
          <div className={style.footer_link}>
            <Link to="/">
              <div className={style.footer_link_text}>Privacy</div>
            </Link>
          </div>
        </div>
        <div className={style.copyright_section}>
          <div className={style.copyright_content}>
            <div className={style.copyright}>
              <span>2023 Fabrics.</span> <span>All right reserved</span>
            </div>
            <div className={style.social_media_links}>
              <div className={style.icon_wrapper}>
                <InstagramIcon className={style.social_media_icon} />
              </div>
              <div className={style.icon_wrapper}>
                <TwitterIcon className={style.social_media_icon} />
              </div>
              <div className={style.icon_wrapper}>
                <YoutubeIcon className={style.social_media_icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;