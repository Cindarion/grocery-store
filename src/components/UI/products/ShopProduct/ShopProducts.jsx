import React from 'react'
import classes from './ShopProducts.module.css'
import { useSort } from '../../../../hooks/useSort';
import { useFilter } from '../../../../hooks/useFilter';
import { useSlice } from '../../../../hooks/useSlice';

const ShopProducts = ({data, sortOption, searchQuery, currentPage, itemsPerPage}) => {
  const sortedProducts = useSort(data, sortOption);
  const filteredSortedProducts = useFilter(sortedProducts, searchQuery);
  const slicedFilteredSortedProducts = useSlice(filteredSortedProducts, currentPage, itemsPerPage)

  return (
    <>
      {slicedFilteredSortedProducts.map(item => (
        <div className={classes.productWrapper} key={item.filename}>
          <div className={classes.imageWrapper}>
            <img src={require(`../../../../data/images/${item.filename}`)}/>
          </div>
          <div className={classes.titleWrapper}>
            <span className={classes.productName}>
              {item.title}
            </span>
            <span className={classes.productPrice}>
              ${item.price.price_per_unit} / {item.price.unit_measure}
            </span>
            <div className={classes.productDescription}>
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ShopProducts;