import {useState} from "react"
import notify from "../../../assets/Notif.png"
import {styled, Modal} from '@mui/material';
import search_text  from "../../../assets/search_text.png"
import { Badge, Icon} from '@mui/material';
import { ShoppingCartOutlined} from '@mui/icons-material';
import style from "./index.module.css"


const StyledModal2 = styled(Modal)(({theme})=>({
     [theme.breakpoints.up("xs")]:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(103, 159, 210, 0.5)",
          height: "983px",
        
          width: "100%",
         
          zIndex: 0,
          },
     [theme.breakpoints.up("sm")]:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(103, 159, 210, 0.5)",
          height: "983px",
        
        
          width: "100%",
         
          zIndex: 0,
          },
     [theme.breakpoints.up("md")]:{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     background: "rgba(103, 159, 210, 0.5)",
    
     height: "983px",
   
   
     width: "100%",
    
     zIndex: 0,
     },
     [theme.breakpoints.up("lg")]:{
          display: "none",
          background: "rgba(103, 159, 210, 0.5)",
         
          height: "983px",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 0,
          width: "100%",
     }

     
   }))

const Navbar = () => {

     const  [showCart, setShowCart] = useState(false)

     const  handleCart=()=>{
          setShowCart(!showCart)
     }
  return (
           <div className={style.head}>
                <div className={style.header_container}>
                     <div className={style.header_flex_item}>
                          <div className={style.para_container}>
                               <p>Good morning<span> Johnson</span></p>
                          </div>
                          <div className={style.cart_portion} onClick={handleCart}>
                          <Icon sx={{width: "35px", height: "50px", display: "flex", alignItems: "center", marginRight: "5px"}}>
                             <Badge badgeContent={1} color="primary">
                             <ShoppingCartOutlined sx={{color: "#000"}} />
                          </Badge>
                          </Icon>
                          </div>
                          <div className={style.header_item_left}>
                               <img src={notify} alt={notify} />
                               <div className={style.input_search}>
                                   <input type="text" className={style.input_text} placeholder="Search Items"/>
                                   <img src={search_text} alt={search_text}/>

                               </div>
                               <button className={style.search_btn}>Search</button>
                         </div>
                     </div>
                 
                </div>   
                    <StyledModal2 
                  open={showCart}
                  onClose={()=> setShowCart(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
              >
                <div  style={{width: "500px", height: "500px", backgroundColor: "#fff", marginBottom: "250px"}}>
                     hello
                 </div>
                </StyledModal2 >
           </div>
  )
}

export default Navbar