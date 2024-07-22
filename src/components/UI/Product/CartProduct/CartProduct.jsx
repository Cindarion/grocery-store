import React, { useContext, useLayoutEffect } from 'react'
import classes from './CartProduct.module.css'
import { CartContext } from '../../../context/cartContext';
import storeProducts from '../../../../data/products.json'
import { formatCurrency } from '../../../../utils/formatCurrency';

const CartProduct = ({id, quantity}) => {
  const { removeFromCart } = useContext(CartContext);
  const product = storeProducts.find(i => i.id === id);
  if (product == null) return null;
  
  const handleDelete = (product) => {
    removeFromCart(product)
  }
  
  return (
    <div className={classes.productContainer}>
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
          <span className={classes.productQuantityWrapper}>
            <input 
              className={classes.productQuantityInput} 
              placeholder="quantity"
              value={quantity}
              type="text" 
            />
            <img 
              className={classes.editQuantityIcon} 
              src={require("../../../../data/icons/edit-input-gray.png")}
            />
          </span>
        </div>
        <div className={classes.productRigthInfoWrapper}>
          <span className={classes.productTotalPrice}>
            {formatCurrency(quantity * product?.price.price_per_unit || 0)}
          </span>
          <img 
            onClick={() => handleDelete(product.id)}
            className={classes.deleteProductIcon} 
            src={require("../../../../data/icons/remove-from-cart-dark-gray.png")}
          />
        </div>
      </div>
    </div>
  )
}

export default CartProduct