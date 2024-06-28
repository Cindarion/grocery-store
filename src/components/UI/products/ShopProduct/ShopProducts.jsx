import React from 'react'
import classes from './ShopProducts.module.css'
import { useFetch } from '../../../../hooks/useFetch';

const ShopProducts = ({currentPage, itemsPerPage, sortOption, searchQuery}) => {
  const { loading, error, data } = useFetch('./products.json'); 
  let sortedProducts;
  let filteredSortedProducts;

  if (!data) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (sortOption === "Default") {
    sortedProducts = [...data];
    console.log(`------ Current sort method: "Default ------"`);
    console.log(sortedProducts);
  };

  if (sortOption === "A-Z") {
    sortedProducts = [...data.sort((a, b) => a.title.localeCompare(b.title))];
    console.log(`------ Current sort method: "A-Z" ------`);
    console.log(sortedProducts);
  };

  if (sortOption === "Price") {
    sortedProducts = [...data.sort((a, b) => a.price.price_per_unit - b.price.price_per_unit)];
    console.log(`------ Current sort method: "Price" ------`);
    console.log(sortedProducts);
  };

  if (searchQuery) {
    console.log('Search query parameter:', searchQuery);
    filteredSortedProducts = [...sortedProducts].filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else {
    filteredSortedProducts = [...sortedProducts];
  }

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  let slicedFilteredSortedProducts = filteredSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(slicedFilteredSortedProducts);

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