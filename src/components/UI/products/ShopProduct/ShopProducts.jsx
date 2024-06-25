import React, { useEffect, useState } from 'react'
import classes from './ShopProducts.module.css'
import { useFetch } from '../../../../hooks/useFetch';

const ShopProducts = ({currentPage, itemsPerPage, sortOption}) => {
  const { loading, error, data } = useFetch('./products.json'); 
  const [sortedAndSlicedProducts, setSortedAndSlicedProducts] = useState();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const slicedProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  if (sortOption === "Default") {
    setSortedAndSlicedProducts(slicedProducts);
    console.log(`(useFilter) - Current sort method: "Default"`);
  };

  if (sortOption === "A-Z") {
    sortedAndSlicedProducts = slicedProducts.sort((a, b) => a.title.localeCompare(b.title));
    console.log(`Current sort method: "A-Z"`);
  };

  if (sortOption === "Price") {
    sortedAndSlicedProducts = slicedProducts.sort((a, b) => a.price.price_per_unit - b.price.price_per_unit);
    console.log(`Current sort method: "Price"`);
  };


  return (
    <>
      {sortedAndSlicedProducts.map(item => (
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