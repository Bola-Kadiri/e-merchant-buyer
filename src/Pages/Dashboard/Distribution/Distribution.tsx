
import product_distribute_1 from "../../../assets/stock-2.png"
import product_distribute_2 from "../../../assets/stock-3.png"
import product_distribute_3 from "../../../assets/stock-4.png"
import love from "../../../assets/love.png"
import style from "./index.module.css"
import { Link } from "react-router-dom"



const Distribution = () => {
    return (
                  <>
                  <div className={style.distribute_content}>
                       <h4>Purchase items ready for distribution</h4>
                       <div className={style.distribute_item}>
                           <p>Select items to distribute</p>
                           <div className={style.select_item}>
                                <p>Select all</p>
                                <input type="checkbox"/>
                           </div>
                       </div>
                       <div className={style.product_distribute}>
                         <div className={style.product_images}>
                         <div className={style.distribute_image}>
                            <img src={product_distribute_1} alt={product_distribute_1} />
                            <img src={love} alt={love} className={style.img_distr}/>
                         </div>
                         <div  className={style.distribute_image}>
                            <img src={product_distribute_2} alt={product_distribute_2} />
                            <img src={love} alt={love} className={style.img_distr}/>
                         </div>
                         <div className={style.distribute_image}>
                             <img src={product_distribute_3} alt={product_distribute_3} />
                             <img src={love} alt={love}  className={style.img_distr}/>
                         </div>
                         
                          <div className={style.distribute_image}>
                              <img src={product_distribute_2} alt={product_distribute_2} />
                              <img src={love} alt={love} className={style.img_distr}/>
                          </div>
                          <div className={style.distribute_image}>
                              <img src={product_distribute_3} alt={product_distribute_3} />
                              <img src={love} alt={love} className={style.img_distr}/>
                          </div>
                          <div className={style.distribute_image}>
                              <img src={product_distribute_3} alt={product_distribute_3} />
                              <img src={love} alt={love}className={style.img_distr}/>
                          </div>
                         
                          
                         </div>
                         <div className={style.similar_product}>
                         <Link to="/similar-product"><button>Click to see similar products</button></Link>
                       </div>
                       </div>
                      
                  </div>
                  </>
    )
  }
  
  export default Distribution