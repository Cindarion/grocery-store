import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './CartPage.module.css'
import { CartContext } from "src/components/context/cartContext"
import CartProduct from 'src/components/UI/Product/CartProduct/CartProduct'
import OrderSummary from 'src/components/UI/OrderSummary/OrderSummary'
import ActionButton from 'src/components/UI/Buttons/ActionButton/ActionButton'

const CartPage = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('CartContext must be used within a TodoProvider');
  };
  const { cartItems } = cartContext
  const { getCartQuantity } = cartContext;
  const cartQuantity = getCartQuantity()
  
  const renderQuantity = () => {
    if (cartQuantity > 0) {
      if (cartQuantity === 1) {
        return (
          <span>{cartQuantity} item</span>
        )
      }
      return (
        <span>{cartQuantity} items</span>
      )
    } 
  };

  const renderCartProducts = () => {
    if (cartQuantity) {
      return (
        <div className={classes.cartProductsContainer}>
          {cartItems.map((product: { id: number; quantity: number }) => <CartProduct
            key={product.id} {...product}
          />)}
        </div>
      )
    } else {
      return (
        renderEmptyMessage()
      )
    }
  };

  const renderEmptyMessage = () => {
    return (
      <div className={classes.emptyMessageContainer}>
        <img 
          src={require("../../data/icons/cart-is-empty.png")}
          alt='cart is empty'
          />
        <span>Your cart is empty...</span>
        <Link to="/products">
          <ActionButton children={"Back to shopping"}/>
        </Link>
      </div>
    ) 
  };

  const renderOrderSummary = () => {
    if (cartQuantity) {
      return (
        <div className={classes.orderSummaryWrapper}>
          <OrderSummary/>
        </div>
      )
    }
  };

  return (
    <div className={classes.pageContainer}>
      <section className={classes.pageHeading}>
        <div className={classes.headingTitleContainer}>
          <span className={classes.mainTitle}>
            Basket
          </span>
          <span className={classes.additionalTitle}>
            {renderQuantity()}
          </span>
        </div>
      </section>
      <main>
        {renderCartProducts()}
        {renderOrderSummary()}
      </main>
    </div> 
  )
}

export default React.memo(CartPage);