import { useContext } from 'react'
import classes from './OrderSummary.module.css'
import { formatCurrency } from '@/utils/formatCurrency'
import { CartContext } from '@/components/context/cartContext'
import ActionButton from '@/components/UI/buttons/ActionButton/ActionButton'
import storeProducts from '@/data/products.json'

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
        <div>
          <span>
            Subtotal:
          </span>
          <span>
            Shipping:
          </span>
        </div>
        <div>
          <span>
            Tax:
          </span>
          <span className={classes.orderTotal}>
            Total: {" "} 
            {getTotalPrice()}
          </span>
        </div>
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