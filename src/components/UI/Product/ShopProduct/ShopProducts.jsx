import React, { useContext, useState } from 'react'
import classes from './ShopProducts.module.css'
import { useSort } from '../../../../hooks/useSort';
import { useFilter } from '../../../../hooks/useFilter';
import { useSlice } from '../../../../hooks/useSlice';
import { CartContext } from '../../../context/cartContext';
import ActionButton from '../../Buttons/ActionButton/ActionButton';

const ShopProducts = ({data, sortOption, searchQuery, currentPage, productsPerPage}) => {
  const sortedProducts = useSort(data, sortOption);
  const filteredSortedProducts = useFilter(sortedProducts, searchQuery);
  const slicedFilteredSortedProducts = useSlice(filteredSortedProducts, currentPage, productsPerPage);
  const [selectedProduct, setSelectedProduct] = useState(false);
  const {cart, addProductToCart, decreaseCartProducts} = useContext(CartContext);

  const handleProductAnimations = (index) => {
    let timeoutId;
    if (!selectedProduct) {
      setSelectedProduct(index)
      timeoutId = setTimeout(() => {
        setSelectedProduct(false);
        timeoutId = null;
      }, 500);
    }
    return
  };

  const handleAddToCart = (product) => {
    addProductToCart(product)
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseCartProducts(productId)
  }

  return (
    <>
      {slicedFilteredSortedProducts.map((product, index) => (
        <div 
        className={`${classes.productWrapper} ${selectedProduct === index ?`${classes.animate}` : ''} `} 
        key={index} 
        // onClick={() => handleProductAnimations(index)} 
        >
          <div className={classes.imageWrapper}>
            <img src={require(`../../../../data/images/${product.filename}`)}/>
          </div>
          <div className={classes.titleWrapper}>
            <span className={classes.productName}>
              {product.title}
            </span>
            <span className={classes.productPrice}>
              ${product.price.price_per_unit} / {product.price.unit_measure}
            </span>
            <div className={classes.productBottomContainer}>
              <div className={classes.productDescription}>
                {product.description}
              </div>
              <div className={classes.productButtonsWrapper}>
                <ActionButton 
                  onClick={() => handleDecreaseQuantity(product.id)}
                  children={"-"}
                />
                <span>0</span>
                <ActionButton 
                  onClick={() => handleAddToCart(product)}
                  children={"+"}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default React.memo(ShopProducts);