
import {styled, Modal} from '@mui/material';
import styles from "../SingleItem/SingleItem.module.css"
import BtnDelivery from "../Common/BtnDelivery";
import done from "../../../assets/done.png"
import close_modal from "../../../assets/close_modal.png"
import style from "../ConfirmOrder/index.module.css"

import { useAppDispatch, useAppSelector } from "../../../app/features/hook"
import { openShow, closeShow} from "../../../app/features/counter/counterSlice"
import { FormEvent } from 'react';


interface Props{
  isProceed: boolean
  handleConfirm: (e:FormEvent)=>void
  confirmClose: (e:FormEvent)=>void
}
 const StyledModal2 = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(103, 159, 210, 0.2)",
  minHeight:  "100vh"
})

const ConfirmProcessed= ({ isProceed, handleConfirm, confirmClose}: Props) => {

  const open = useAppSelector((state)=>state.counter.isShow)
  const incrementDispatch=useAppDispatch()
const handleShow=(e:React.FormEvent)=>{
 e.preventDefault()
console.log("Clicked")
  incrementDispatch(openShow())

}
const handleCloseShow=(e:React.FormEvent)=>{
  e.preventDefault()
 console.log("Clicked")
   incrementDispatch(closeShow())
}
  return (
    <div>
      <StyledModal2
               open={ isProceed}
               onClose={handleConfirm}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
              >
                   <div className={styles.delivery_content}>
                        <  BtnDelivery/>
                        <form className={style.confirm_form}>
                             <div className={style.confirm_info}>
                                 <div>Item's Total(2)</div>
                                 <div>N4,968</div>
                             </div>
                             <div className={style.confirm_info}>
                                 <div>Delivery Fees</div>
                                 <div>N620</div>
                             </div>
                             <div className={style.confirm_info}>
                                 <div>Internation Customs Fees</div>
                                 <div>N1,245</div>
                             </div>
                             <div className={style.confirm_info}>
                                 <div>Toatl</div>
                                 <div>N6,845</div>
                             </div>
                             <div className={style.confirm_info}>
                                 <div>Delivery Address</div>
                                 <div>Edit</div>
                             </div>
                             <div className={style.confirm_info}>24, Abasi Ojukwu Street, Alakuko, Lagos state</div>
                             <div>
                                  <div className={style.confirm_date}>Door Delivery</div>
                                  <div className={style.confirm_date}>Delivery between 10th October and 17th October, 2023</div>
                             </div>
                             <div className={style.confirm_container}>
                                  <button onClick={handleShow}>Confirm Order</button>
                             </div>
                             <img src={close_modal} alt={close_modal} className={style.close} onClick={confirmClose}/>
                     
                        </form>
                   </div>
                </StyledModal2>
                <StyledModal2
               open={open}
               onClose={handleShow}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
              >
                <div className={style.confirm}>
                   <div className={style.confirm_content}>
                        <img src={done} alt={done}/>
                        <div className={style.transaction_sucess}>
                          <p>
                          Congratulations!!!<br/>
                          Your order request was successfully processed with reference number of #234ABHL450.
                          Kindly check my orders page to track items.
                          </p>
                          <div className={style.receipt_btn}>
                            <button>Download Receipt</button>
                            <button>Done</button>
                          </div>
                        </div>
                        <img src={close_modal} alt={close_modal} onClick={handleCloseShow}/>
                   </div>
                   </div>
                </StyledModal2>
    </div>
  )
}

export default ConfirmProcessed

