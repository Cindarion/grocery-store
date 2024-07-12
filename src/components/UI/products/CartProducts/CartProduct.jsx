import React from 'react'
import classes from './CartProduct.module.css'

const CartProduct = ({product}) => {

  
  return (
    <div className={classes.productWrapper}>
      <div className={classes.imageWrapper}>
        <img src={require(`../../../../data/images/${product.filename}`)}/>
      </div>
      <div className={classes.productInfoWrapper}>
        <div className={classes.productDetailsWrapper}>
          <span className={classes.productName}>
            {product.title}
          </span>
          <span className={classes.productPrice}>
            ${product.price.price_per_unit} / {product.price.unit_measure}
          </span>
          <span>
            <input className={classes.productQuantity} type="text" />
          </span>
        </div>
        <div className={classes.productTotalPriceWrapper}>
          <span className={classes.productTotalPrice}>
            $5.99
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartProduct