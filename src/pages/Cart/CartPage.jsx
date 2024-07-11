import React, { useContext } from 'react'
import classes from './CartPage.module.css'
import { CartContext } from '../../components/context/cartContext'
import CartProduct from '../../components/UI/products/CartProducts/CartProduct'

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
      <div className={classes.pageHeadingContainer}>
        <div className={classes.pageHeadingTitleWrapper}>
          <span className={classes.pageHeadingTitle}>
            Basket
          </span>
          <span> ({cart.length}) items </span>
        </div>
      </div>
      <hr/>
      <div className={classes.cartContainer}>
        <div className={classes.cartProductsWrapper}>
          {renderEmptyMessage()}
          {renderCartProducts(cart)}
        </div>
        <div className={classes.cartTotalWrapper}>
          total price: ...
        </div>
      </div>
    </div> 
  )
}

export default CartPage