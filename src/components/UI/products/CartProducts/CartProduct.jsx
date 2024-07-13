import React, { useContext } from 'react'
import classes from './CartProduct.module.css'
import { CartContext } from '../../../context/cartContext';

const CartProduct = ({product}) => {
  const { deleteFromCart } = useContext(CartContext);

  const handleDelete = (product) => {
    deleteFromCart(product)
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
              placeholder='quantity'
              type="text" 
            />
            <img 
              className={classes.editQuantityIcon} 
              src={require("../../../../data/icons/edit-input.png")}
            />
          </span>
        </div>
        <div className={classes.productRigthInfoWrapper}>
          <div className={classes.productPriceWrapper}>
            <span className={classes.productTotalPrice}>
              ${product.price.price_per_unit}
            </span>
            <img 
              onClick={() => handleDelete(product.id)}
              className={classes.deleteProductIcon} 
              src={require("../../../../data/icons/delete-from-cart.png")}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct