import style from "./Index.module.css";
import { Link} from "react-router-dom";
import Ellipses from "../../../../assets/Ellipses.svg";



const Introduction = () => {
 
  return (
    <div className={style.container_fluid_one}>












      
  
      <div className={style.container}>
        <div className={style.hero_section_one}>
          <div className={style.hero_section_left}>
            <span>Order,Trade and Sell</span>
            <h1>
              Explore latest fashion fabrics designs with our collections...
            </h1>
            <p>
              Checkout updated designs in our store and get very good discounts
              on items bought in bulk
            </p>
            <div className={style.hero_btn}>
              <Link to="/">
                <button> Get Started</button>
              </Link>
            </div>
            <div className={style.ellipses_image}>
              <img src={Ellipses} />
            </div>
          </div>
          <div className={style.hero_section_right}>
            <div className={style.bg_overlay}></div>
            <div className={style.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;