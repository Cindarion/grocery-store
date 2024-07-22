import React, { useContext } from 'react'
import classes from './CartPage.module.css'
import { CartContext } from '../../components/context/cartContext'
import CartProduct from '../../components/UI/Product/CartProduct/CartProduct'
import ActionButton from '../../components/UI/Buttons/ActionButton/ActionButton'
import { formatCurrency } from '../../utils/formatCurrency'
import storeProducts from '../../data/products.json'


const CartPage = () => {
  const { cartItems, cartQuantity } = useContext(CartContext)

  const renderCartProducts = () => (
    cartItems.map((product) => <CartProduct
      key={product.id} {...product}
    />)
  );

  // if statement making this impossible to render. WHY??
  const renderEmptyMessage = () => {
    if (cartItems.length <= 0) {
      return <p>Your cart is empty</p>
    }
  }
   
  return (
    <div className={classes.contentContainer}>
      <section>
        <div className={classes.pageHeadingTitleWrapper}>
          <span className={classes.pageHeadingTitle}>
            Basket
          </span>
          <span>{cartQuantity} items </span>
        </div>
      </section>
      <hr/>
      <main>
        <div className={classes.cartContainer}>
          <div className={classes.cartProductsWrapper}>
            {renderCartProducts()}
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
                Total: {" "} 
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                      const product = storeProducts.find(i => i.id === cartItem.id)
                      return total + (product?.price.price_per_unit || 0) * cartItem.quantity
                    }, 0)
                  )
                }
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

export default React.memo(CartPage);