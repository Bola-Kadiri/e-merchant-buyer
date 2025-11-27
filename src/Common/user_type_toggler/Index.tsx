import style from "./Index.module.css";
import { useState } from "react";
const Index = () => {
  const [user, setUser] = useState({
    merchant: true,
    buyer: false,
  });
 
 
  return (
    <div>
    <div className={style.container}>
      <div
        onClick={() => {
          setUser({
            merchant: true,
            buyer: false,
          });
        }}
        className={
          user.merchant ? style.merchant_active : style.merchant_not_active
        }
      >
        Merchant
      </div>
      <div
        onClick={() => {
          setUser({
            merchant: false,
            buyer: true,
          });
        }}
        className={user.buyer ? style.buyer_active : style.buyer_not_active}
      >
        Buyer
      </div>
    
    </div>
    {user.merchant 
      ?
      <h1>This is Merchant</h1>
      :
      <h1>This is buyer</h1>
    }
    </div>
  );
};

export default Index;
