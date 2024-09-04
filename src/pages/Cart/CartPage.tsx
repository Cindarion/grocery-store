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
  
  const renderQuantityTitle = () => {
    if (getCartQuantity() > 0) {
      return (
        <span>{getCartQuantity()} items</span>
      )
    } 
  };

  const renderCartProducts = () => {
    return (
      cartItems.map((product: { id: number; quantity: number }) => <CartProduct
        key={product.id} {...product}
      />)
    )
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
    return (
      <OrderSummary/>
    )
  };

  return (
    <div className={classes.contentContainer}>
      <section>
        <div className={classes.pageHeadingTitleWrapper}>
          <span className={classes.pageHeadingTitle}>
            Basket
          </span>
          {renderQuantityTitle()}
        </div>
      </section>
      <hr/>
      <main>
        <div className={classes.cartContainer}>
          <div className={classes.cartProductsWrapper}>
            {getCartQuantity() ? renderCartProducts() : renderEmptyMessage()}
          </div>
          {getCartQuantity() ? renderOrderSummary() : ""}
        </div>
      </main>
    </div> 
  )
}

export default React.memo(CartPage);