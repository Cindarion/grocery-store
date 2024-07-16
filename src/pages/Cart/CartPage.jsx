import React, { useContext } from 'react'
import classes from './CartPage.module.css'
import { CartContext } from '../../components/context/cartContext'
import CartProduct from '../../components/UI/Product/CartProduct/CartProduct'
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'

const CartPage = () => {
  const { cart } = useContext(CartContext)

  const renderEmptyMessage = () => {
    if (cart.length === 0) {
      return <p>Your cart is empty</p>
    }
    return null;
  };
  
  const renderCartProducts = (cart) => (
    cart.map((product) => <CartProduct 
      key={product.filename} 
      product={product} 
      />)
  );

  return (
    <div className={classes.contentContainer}>
      <section>
        <div className={classes.pageHeadingTitleWrapper}>
          <span className={classes.pageHeadingTitle}>
            Basket
          </span>
          <span> ({cart.length}) items </span>
        </div>
      </section>
      <hr/>
      <main>
        <div className={classes.cartContainer}>
          <div className={classes.cartProductsWrapper}>
            {renderEmptyMessage()}
            {renderCartProducts(cart)}
          </div>
          <div className={classes.OrderSummaryWrapper}>
            <span className={classes.cartOrderSummaryHeader}>
              Order summary
            </span>
            <div className={classes.cartTotalDetailsWrapper}>
              <span>
                Subtotal:
              </span>
              <span>
                Shipping:
              </span>
              <span>
                Tax:
              </span>
              <span className={classes.cartTotalTitle}>
                Total:
              </span>
            </div>
            <ActionButton 
              className={classes.paymentButton} 
              children={"Continue to payment ->"}
            />
          </div>
        </div>
      </main>
    </div> 
  )
}

export default CartPage