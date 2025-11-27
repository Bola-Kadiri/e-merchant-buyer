import deliveryBtn from "../../Dashboard/SingleItem/SingleItem.module.css"
import deliveryPress from "../../Dashboard/SingleItem/SingleItem.module.css"
import deliveryCard from "../../Dashboard/SingleItem/SingleItem.module.css"
import payDelivery from "../../Dashboard/SingleItem/SingleItem.module.css"

const BtnDelivery = () => {
  return (
    <div className={deliveryBtn.delivery_btn}>
    <div className={deliveryPress.delivery_press}>
      <div className={deliveryCard.delivery_card}>Card</div>
      <div className={payDelivery.pay_delivery}>Pay on Delivery</div>
    </div>
  </div>
  )
}

export default BtnDelivery