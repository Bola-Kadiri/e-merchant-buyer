import { ShoppingCartOutlined} from '@mui/icons-material';

import { Badge, Box, Icon} from '@mui/material';
import stock_one from "../../../assets/Rectangle 990.png"
import minus from "../../../assets/minus-square.png"
import plus from "../../../assets/plus-square.png"
import img_stack_one from "../../../assets/Rectangle 998.png"
import img_stack_two from "../../../assets/Rectangle 997.png"
import img_stack_three from "../../../assets/Rectangle 994.png"
import img_stack_four from "../../../assets/Rectangle 995.png"
import img_stack_five from "../../../assets/Rectangle 996.png"
import style from "./index.module.css"
import { useAppDispatch, useAppSelector} from "../../../app/features/hook"
import { openCheckOut} from '../../../app/features/counter/counterSlice';
import SingleItem from '../SingleItem/SingleItem';


const Rightbar = () => {
     const toggle = useAppSelector((state)=>state.counter.isOpen)
        const incrementDispatch=useAppDispatch()
     
 
     const handleClicks=(e:React.FormEvent)=>{
       e.preventDefault()
      console.log("Clicked")
      
        incrementDispatch(openCheckOut())
     }
    
  return (
     
    
    <Box className={style.right_bar_cart} boxShadow={1}>
         <div className={style.cart_header}>
              <p>Cart Items</p>
              <Icon sx={{width: "35px", height: "50px", display: "flex", alignItems: "center", marginRight: "5px"}}>
                  <Badge badgeContent={1} color="primary">
                       <ShoppingCartOutlined sx={{color: "#000"}} />
                  </Badge>
             </Icon>
       </div>
       <div className={style.cart_control}>
            <img src={stock_one} alt={stock_one} />
            <div>
                 <p>Colourful Ankara Fabrics...</p>
                 <div className={style.cart_alternate}>
                      <img src={minus} alt={minus} />
                      <span>2</span>
                      <img src={plus} alt={plus} />
                 </div>
                 <button className={style.remove_btn}>Remove Items</button>
            </div>    
       </div>
       <button className={style.checkou_btn} onClick ={handleClicks}>Proceed to checkout</button>
       <div className={style.update_section}>
             <p>Stay up to date with our advert  here</p>
             <span>3/5</span>
       </div>
       <div className={style.img_sample}>
             <img src={img_stack_one} alt={img_stack_one} width="262px" height="84px"/>
             <div style={{position: "absolute", top: "50px"}}>
                  <img src={img_stack_two} alt={img_stack_two} width="307px" height="84px" />
             </div>
             <div style={{position: "absolute", top: "110px", zIndex: "9"}}>
                  <img src={img_stack_three} alt={img_stack_three} width="337px" height="84px" />
             </div>
             <div style={{position: "absolute", top: "175px", zIndex: "5"}}>
                  <img src={img_stack_four} alt={img_stack_four} width="307px" height="84px" />
             </div>
             <div style={{position: "absolute", top: "220px", zIndex: "2"}}>
                  <img src={img_stack_five} alt={img_stack_five} width="262px" height="84px" />
             </div>
       
       </div>
        {toggle && <SingleItem/>}
    </Box>
        
    
  )
}

export default Rightbar

