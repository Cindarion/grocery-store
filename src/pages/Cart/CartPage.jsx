import React, { useContext } from 'react'
import classes from './CartPage.module.css'
import { CartContext } from '../../components/context/cartContext'
import CartProduct from '../../components/UI/Product/CartProduct/CartProduct'
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary'
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'
import { Link } from 'react-router-dom'


const CartPage = () => {
  const { cartItems, cartQuantity } = useContext(CartContext);

  const renderQuantityTitle = () => {
    if (cartQuantity > 0) {
      return (
        <span>{cartQuantity} items</span>
      )
    } 
  };

  const renderCartProducts = () => {
    return (
      cartItems.map((product) => <CartProduct
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
            {cartQuantity? renderCartProducts() : renderEmptyMessage()}
          </div>
          {cartQuantity? renderOrderSummary() : ""}
        </div>
      </main>
    </div> 
  )
}

export default React.memo(CartPage);