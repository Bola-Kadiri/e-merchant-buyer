import {ArrowBackSharp} from '@mui/icons-material';
import single_img from "../../../assets/unsplash_5rsNohd8bY8.png"
import {styled, Modal} from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { useState } from 'react'
import style from "./SingleItem.module.css"
import styles from "../../Dashboard/SingleItem/SingleItem.module.css"
import { useAppDispatch, useAppSelector } from "../../../app/features/hook"
import { openCheckOut, closeCheckOut} from "../../../app/features/counter/counterSlice"
import Checkout from '../Checkout/Checkout';

export const StyledModal = styled(Modal)({
  
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(103, 159, 210, 0.5)",
  backdropFilter: "blur(5px)",
  minHeight:  "100vh",
 
 
})



const SingleItem = () => {
   // const incrementDispatch=useAppDispatch()
  
    // const [open, setOpen] = useState<boolean>(false);
    // const [stage, setStage] = useState<boolean>(false)
    // const navigate = useNavigate()
    const toggle = useAppSelector((state)=>state.counter.isOpen)
    

       const incrementDispatch=useAppDispatch()
    

    const handleClick=(e:React.FormEvent)=>{
      e.preventDefault()
     console.log("Clicked")
       incrementDispatch(openCheckOut())
     
    }

    const CheckOutClose=(e:React.FormEvent)=>{
      e.preventDefault()
      incrementDispatch(closeCheckOut())

    }
    

    

     
    

   
  return (
    <div className={style.single_product}>
        <div className={style.single_content}>
           <div className={style.single_content_header}>
               <ArrowBackSharp/>
               <p>Colourful Ankara Fabrics</p>
           </div>
           <div className={style.product_description}>
               <img src={single_img} alt={single_img} width="781.04px" height="333px"/>
           <div>
           <p>Description</p>
           <p style={{fontFamily: "Inter", padding: "10px"}}>Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics 
                       and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and 
                       more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more 
                       Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara 
                       Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics and more Ankara Fabrics 
                       and more...
           </p>
           </div>
           <div className={styles.btn_container}>
              <button>Share</button>
              <button onClick={handleClick}>Add to cart</button>
              </div>
               {toggle && <Checkout toggle={toggle} handleClick={handleClick} CheckOutClose={CheckOutClose}/>}
               
           </div>
        </div>
        <div>
         
      
        
</div>
    </div>
  )
}

export default SingleItem