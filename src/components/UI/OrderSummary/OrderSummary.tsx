import { useContext } from 'react'
import classes from './OrderSummary.module.css'
import { formatCurrency } from 'src/utils/formatCurrency'
import { CartContext } from 'src/components/context/cartContext'
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton'
import storeProducts from 'src/data/products.json'

const OrderSummary = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const {cartItems} = cartContext;

  const getTotalPrice = (): string => {
    return formatCurrency (
      cartItems.reduce((total: number, cartItem: any) => {
        const product: any = storeProducts.find((product) => product.id === cartItem.id)
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
      // classname needs to be here
      // for inactive feature
      // check ActionButton component to learn more...
        className={classes.paymentButton} 
        children={"Continue to payment ->"}
      />
    </div>
  )
}

export default OrderSummary