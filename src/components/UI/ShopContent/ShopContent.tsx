import React from 'react' 
import { useSort } from '../../../hooks/useSort';
import { useFilter } from '../../../hooks/useFilter';
import { useSlice } from '../../../hooks/useSlice';
import ShopProduct from '../Product/ShopProduct/ShopProduct';
import classes from './ShopContent.module.css'
import Pagination from '../Pagination/Pagination';

type renderShopProductsProps = {
  initialProducstData: object[]; 
  sortOption: string; 
  searchQuery: string;  
  currentPage: number;  
  productsPerPage: number;
  setCurrentPage: any;
}

const RenderShopProducts = ({initialProducstData, sortOption, searchQuery, currentPage, productsPerPage, setCurrentPage}: renderShopProductsProps) => {
  const sortedProducts = useSort(initialProducstData, sortOption);
  const filteredSortedProducts = useFilter(sortedProducts, searchQuery);
  const slicedFilteredSortedProducts = useSlice(filteredSortedProducts, currentPage, productsPerPage);
  const productsCount = filteredSortedProducts? filteredSortedProducts.length : 0;
  console.log(slicedFilteredSortedProducts);
  

  const renderProducts = () => (
    slicedFilteredSortedProducts.map((product, index) => 
      <ShopProduct
        id={product.id} 
        key={product.id}
        index={index}
        name={product.title}
        filename={product.filename}
        price={product.price.price_per_unit}
        unit_measure={product.price.unit_measure}
        description={product.description}
      />
    )
  );

  const renderPagination = () => (
    <Pagination
      contentPerPage={productsPerPage}
      itemsCount={productsCount}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
  
  return (
    <>
      <div className={classes.productsContainer}>
        {renderProducts()}
      </div>
      <div className={classes.paginationContainer}>
        {renderPagination()}
      </div>
    </>
  );
}
export default React.memo(RenderShopProducts);