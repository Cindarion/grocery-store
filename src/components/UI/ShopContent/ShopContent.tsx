import React from 'react' 
import { useSort } from '../../../hooks/useSort';
import { useFilter } from 'src/hooks/useFilter';
import { useSlice } from 'src/hooks/useSlice'
import ShopProduct from '../Product/ShopProduct/ShopProduct';
import classes from './ShopContent.module.css'
import Pagination from '../Pagination/Pagination';

type renderShopProductsProps = {
  initialProducstData: object[]; 
  sortOption: string; 
  searchQuery: string;  
  currentPage: number;  
  maxProductsPerPage: number;
  setCurrentPage: any;
}

const RenderShopProducts = ({
  initialProducstData, 
  sortOption, 
  searchQuery, 
  currentPage, 
  maxProductsPerPage, 
  setCurrentPage
}: renderShopProductsProps) => {
  const sortedProducts = useSort(initialProducstData, sortOption);
  const filteredSortedProducts = useFilter(sortedProducts, searchQuery);
  const productsCount = filteredSortedProducts? filteredSortedProducts.length : 0;
  const slicedFilteredSortedProducts = useSlice(filteredSortedProducts, currentPage, maxProductsPerPage);

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
      itemsCount={productsCount}
      maxContentPerPage={maxProductsPerPage}
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