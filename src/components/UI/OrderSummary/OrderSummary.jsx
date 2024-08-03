import React, { useContext } from 'react'
import classes from './OrderSummary.module.css'
import { formatCurrency } from '../../../utils/formatCurrency'
import { CartContext } from '../../../components/context/cartContext'
import ActionButton from '../Buttons/ActionButton/ActionButton'
import storeProducts from '../../../data/products.json'

const OrderSummary = () => {
  const {cartItems} = useContext(CartContext);

  const getTotalPrice = () => {
    return formatCurrency (
      cartItems.reduce((total, cartItem) => {
        const product = storeProducts.find(i => i.id === cartItem.id)
        return total + (product?.price.price_per_unit || 0) * cartItem.quantity
      }, 0)
    )
  };

  return (
    <div className={classes.cartSummaryWrapper}>
      <span className={classes.orderSummaryHeader}>
        Order summary
      </span>
      <div className={classes.orderDetailsWrapper}>
        <span>
          Subtotal:
        </span>
        <span>
          Shipping:
        </span>
        <span>
          Tax:
        </span>
        <span className={classes.orderTotal}>
          Total: {" "} 
          {getTotalPrice()}
        </span>
      </div>
      <ActionButton 
        className={classes.paymentButton} 
        children={"Continue to payment ->"}
      />
    </div>
  )
}

export default OrderSummary