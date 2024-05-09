import React from 'react'
import classes from './ShopProduct.module.css'
import tomatoPNG from '../../../images/tomato.png'
import { useState } from 'react'

const ShopProduct = (props) => {
  return (
    <div className={classes.productWrapper}>
      <div className={classes.imageWrapper}>
        <img src={tomatoPNG}/>
      </div>
      <div className={classes.titleWrapper}>
        <span className={classes.productName}>Heirloom tomato</span>
        <span className={classes.productPrice}>$5.99 / lb</span>
        <div className={classes.productPlace}>Grown in San Juan Capistrano, CA</div>
      </div>
    </div>
  )
}

export default ShopProduct