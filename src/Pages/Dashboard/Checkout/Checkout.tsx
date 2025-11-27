import sim from "../../../assets/sim.png"
import close_modal from "../../../assets/close_modal.png"
import style from "../../Dashboard/SingleItem/SingleItem.module.css"
import {StyledModal} from "../../Dashboard/SingleItem/SingleItem"
import BtnDelivery from "../Common/BtnDelivery";
import { FormEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/features/hook"
import { openConfirm, closeConfirm} from "../../../app/features/counter/counterSlice"
import ConfirmProcessed from '../ConfirmOrder/ConfirmProcessed';

interface Props{
  toggle: boolean
  handleClick: (e:FormEvent)=>void
  CheckOutClose: (e:FormEvent)=>void
}

interface Props{
  isProceed: boolean
  handleConfirm: (e:FormEvent)=>void
  confirmClose: (e:FormEvent)=>void
}

const Checkout = ({toggle, handleClick, CheckOutClose}:Props) => {
  const isProceed = useAppSelector((state)=>state.counter.isConfirm)
    

       const incrementDispatch=useAppDispatch()
    

    const handleConfirm=(e:React.FormEvent)=>{
      e.preventDefault()
     console.log("Clicked")
       incrementDispatch(openConfirm())
     
    }

    const confirmClose=(e:React.FormEvent)=>{
      e.preventDefault()
      incrementDispatch(closeConfirm())

    }
    

  return (
    <div>
         
              <StyledModal
               open={toggle}
               onClose={handleClick}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
              >
               <form className={style.delivery_content}>
                   <BtnDelivery/>
                    <div className={style.virtual_card}>
                      <div className={style.virtual_card_content}>
                          <div className={style.active_account}>
                            <p>Savings account</p>
                            <p>Active</p>
                          </div>
                          <div className={style.active_account}>
                            <p>Egbetayo Damilola Ezekial</p>
                            <img src={sim} alt={sim}/>
                          </div>
                          <div className={style.active_account}>
                            <p>Egbetayo Damilola Ezekial</p>
                            <p></p>
                          </div>
                          <div className={style.active_account}>
                            <p>NXXXXXXXXXX</p>
                            <button className={style.fund_btn}>Fund Account</button>
                          </div>
                      </div>
                    
                        <div className={style.blur_card_one}></div>
                        <div className={style.blur_card_two}></div>
                        <div className={style.blur_card_three}></div>
                      <div className={style.blur_card_one_bottom}></div>
                        <div className={style.blur_card_two_bottom}></div>
                        <div className={style.blur_card_three_bottom}></div>
                    </div>
                    <div className={style.checkout_form}>
                         <div className={style.input_control}>
                          <div>
                            <label>Card Number</label>
                          <input type="text"  className={style.acc_no} placeholder="5364 7645 8108 4321"/>
                          </div>
                          <div>
                            <label>Account type</label>
                          <input type="text"  className={style.acc_no}/>
                          </div>
                         </div>
                         <div className={style.input_control}>
                          <div>
                            <label>Expiry Date</label>
                          <input type="text"  className={style.acc_no} placeholder="09-September-2023"/>
                          </div>
                          <div>
                            <label>Amount</label>
                          <input type="text"  className={style.acc_no} placeholder="N56,000"/>
                          </div>
                         </div>
                         <div className={style.input_control}>
                          <div>
                            <label>Pin</label>
                          <input type="password"  className={style.acc_no}/>
                          </div>
                          <div>
                            <label>Description</label>
                          <input type="text"  className={style.acc_no} placeholder="Payment for fabrics"/>
                          </div>
                         </div>
                         <div className={style.input_control}>
                          <div>
                           <span>Subtotal: N56,000</span>
                          </div>
                          <div>
                           <span>Save for later</span>
                          </div>
                         </div>
                         <div className={style.pay_obj}>
                          <button type="submit" onClick={handleConfirm}>Proceed to checkout</button>
                         </div>
                    </div>
                    <img src={close_modal} alt={close_modal} className={style.close} onClick={CheckOutClose}/>
               </form>
               </StyledModal>
               {isProceed && <ConfirmProcessed isProceed={isProceed} handleConfirm={handleConfirm} confirmClose={confirmClose}/>}
                
             
    </div>
  )
}

export default Checkout