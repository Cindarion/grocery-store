import React from 'react'
import classes from './CartProduct.module.css'

const CartProduct = ({product}) => {

  
  return (
    <div className={classes.productWrapper}>
      <span>{product.title}</span>
    </div>
  )
}

export default CartProduct