import React from 'react'
import { useSort } from '../hooks/useSort';
import { useFilter } from '../hooks/useFilter';
import { useSlice } from '../hooks/useSlice';
import ShopProduct from './UI/Product/ShopProduct/ShopProduct';

const RenderShopProducts = ({data, sortOption, searchQuery, currentPage, productsPerPage}) => {
  const sortedProducts = useSort(data, sortOption);
  const filteredSortedProducts = useFilter(sortedProducts, searchQuery);
  const slicedFilteredSortedProducts = useSlice(filteredSortedProducts, currentPage, productsPerPage);

  const renderProducts = () => (
    slicedFilteredSortedProducts.map((product, index) => <ShopProduct
      id={product.id} 
      key={product.id}
      index={index}
      name={product.title}
      filename={product.filename}
      price={product.price.price_per_unit}
      unit_measure={product.price.unit_measure}
      description={product.description}
    />)
  )
  
  return (
    <>
      {renderProducts()}
    </>
  )
}
export default React.memo(RenderShopProducts);