import {useState} from "react"
import arrow_right from "../../../assets/arrow-right.png"
import style from "../Collections/index.module.css"
import ProductList from "../Product/ProductList/ProductList"

const Collections = () => {
  const [tab, setTab] = useState(1)


  const updateTab=(id:number)=>{
    setTab(id)
  }
  return (
    <div className={style.collection}>
       <h3>Collections</h3>
       <div className={style.collection_header}>
           <ul>
               <li onClick={()=>updateTab(1)} className={tab===1 ? style.tab_button : style.active} >Ankara</li>
               <li onClick={()=>updateTab(2)}  className={tab===2 ? style.tab_button : style.active} >Vintage</li>
               <li onClick={()=>updateTab(3)}  className={tab===3 ? style.tab_button : style.active} >Aso-Oke</li>
               <li onClick={()=>updateTab(4)}  className={tab===4 ? style.tab_button : style.active} >Palazzo</li>
               <li onClick={()=>updateTab(5)}  className={tab===5 ? style.tab_button : style.active} >Jeans</li>
               <div className={style.styleother_item} onClick={()=>updateTab(6)}>
                   <li  className={tab===6 ? style.tab_button : style.active} >View others here  <img src={arrow_right} alt={arrow_right}/></li>
               </div>
           </ul>
       </div>
        <div className={tab===1 ? style.show : style.collection_content}>
            <ProductList/>
        </div>
        <div className={tab===2 ? style.show : style.collection_content}>
            <ProductList/>
        </div>
        <div className={tab===3 ? style.show : style.collection_content}>
            <ProductList/>
        </div>
        <div className={tab===4 ? style.show : style.collection_content}>
            <ProductList/>
        </div>
        <div className={tab===5 ? style.show : style.collection_content}>
            <ProductList/>
        </div>
        <div className={tab===6 ? style.show : style.collection_content}>
            Other Products
        </div>
    </div>
  )
}

export default Collections