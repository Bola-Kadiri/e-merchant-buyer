import style from "./index.module.css"
import sim from "../../../assets/sim.png"


const Wallet = () => {
  return (
    <div className={style.wallet_container}>
         <div className={style.virtual_card}>
                      <div className={style.virtual_card_content}>
                          <div className={style.active_account}>
                            <p>Savings account</p>
                            <p></p>
                          </div>
                          <div className={style.active_account}>
                            <p>Egbetayo Damilola Ezekial</p>
                            <img src={sim} alt={sim}/>
                          </div>
                          <div className={style.active_account}>
                            <p>N54, 876, 982</p>
                            <p></p>
                          </div>
                          <div className={style.active_account}>
                            <p>4567 5678 2347 9074</p>
                            <button className={style.fund_btn}>Fund Wallet</button>
                          </div>
                          <span style={{fontSize: "10px"}}>Active</span>
                      </div>
                    
                        <div className={style.blur_card_one}></div>
                        <div className={style.blur_card_two}></div>
                        <div className={style.blur_card_three}></div>
                      <div className={style.blur_card_one_bottom}></div>
                        <div className={style.blur_card_two_bottom}></div>
                        <div className={style.blur_card_three_bottom}></div>
                    </div>
                    <div className={style.virtual_card}>
                      <div className={style.virtual_card_content}>
                          <div className={style.active_account}>
                            <p>Savings account</p>
                            <p></p>
                          </div>
                          <div className={style.active_account}>
                            <p>Egbetayo Damilola Ezekial</p>
                            <img src={sim} alt={sim}/>
                          </div>
                          <div className={style.active_account}>
                            <p>N54, 876, 982</p>
                            <p></p>
                          </div>
                          <div className={style.active_account}>
                            <p>4567 5678 2347 9074</p>
                            <button className={style.fund_btn}>Fund Wallet</button>
                          </div>
                          <span style={{fontSize: "10px"}}>Inactive</span>
                      </div>
                    
                        <div className={style.blur_card_one}></div>
                        <div className={style.blur_card_two}></div>
                        <div className={style.blur_card_three}></div>
                      <div className={style.blur_card_one_bottom}></div>
                        <div className={style.blur_card_two_bottom}></div>
                        <div className={style.blur_card_three_bottom}></div>
                    </div>
                    
    </div>
  )
}

export default Wallet