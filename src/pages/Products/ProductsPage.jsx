import React from 'react'
import classes from './ProductsPage.module.css'
import GreenButton from '../../components/UI/buttons/GreenButton/GreenButton'
import WhiteButton from '../../components/UI/buttons/WhiteRoundedButton/WhiteButton'
import ShopProduct from '../../components/UI/products/ShopProduct/ShopProduct'

const ProductsPage = () => {
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.pageHeadingWrapper}>
        <div className={classes.pageHeadingTitle}>
          <span className={classes.produceTitle}>Produce</span>
          <span><b>Fresh</b> — August 21, 2023</span>
        </div>
        <div className={classes.pageSortContainer}>
          <ul>
            <GreenButton>
              Default
            </GreenButton>
            <WhiteButton>
              A-Z
            </WhiteButton>
            <WhiteButton>
              List view
            </WhiteButton>
          </ul>
        </div>
      </div>
      <hr/>
      <div className={classes.productsContainer}>
        <ShopProduct/>
      </div>
    </div>
  )
}

export default ProductsPage