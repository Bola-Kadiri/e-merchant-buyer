

import group_pics from "../../../assets/Group 778.png"
import love from "../../../assets/love.png"
import { productData } from "../Product/ProductList/Data/productData"

import style from "../../Dashboard/Product/ProductList/index.module.css"
import styles from "./index.module.css"
import { Link } from "react-router-dom"




const SaveProducts = () => {
  return (
                <div className={styles.saves}>
                 <p>Saved Items</p>
                <div className={style.product_sub_content}>
                     {productData.map((item)=>{ 
                        return(
                                <div className={style.product_card} key={item.id}>
                                    <img
                                         alt={item.item_name}
                                         src={item.path}
                                         height="165px"
                                         width="100%"
                                    />
                                    <div className={style.product_tag}>
                                         <p>{item.item_name}</p>
                                         <p>N{item.price}</p>
                                    </div>
                                    <div className={style.product_unit}>
                                         <img src={group_pics} alt={group_pics} />
                                         <p>{item.quantity} units in stock</p>
                                    </div>
                                    <div className={style.add_btn_wrapper}>
                                    <Link to="#"><button>Add to cart</button></Link>
                                    </div>
                                    <div className={style.like}>
                                         <img src={love} alt={love} />
                                    </div>
                                </div>
                      
                        )
                     })}
                           </div>
                </div>
  )
}

export default SaveProducts