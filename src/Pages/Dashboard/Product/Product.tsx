
import distribute from "../../../assets/Group 33716.png"
import order from "../../../assets/Group 33717.png"
import refer from "../../../assets/Group 33718.png"
import ProductList from "./ProductList/ProductList"
import style from "./index.module.css"


const Product = () => {
  return (
    <div className={style.product_display}>
         <div className={style.product_card}>
          <div className={style.card_description}>
             <img src={distribute} alt={distribute} />
             <h3>Distributions</h3>
          </div>
          <div className={style.card_description}>
             <img src={order} alt={order} />
             <h3>Orders</h3>
          </div>
          <div className={style.card_description}>
             <img src={refer} alt={refer} />
             <h3>Connect with Stylists</h3>
          </div>
       </div>
       <div className={style.product_list} >
          <p>Latest Trends in stock</p>
           <ProductList/>
       </div>
      
    </div>
  )
}

export default Product