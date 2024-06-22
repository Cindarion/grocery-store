import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import SortOptionButton from '../../components/UI/buttons/FilterButton/SortOptionButton'
import ShopProducts from '../../components/UI/products/ShopProduct/ShopProducts'
import Pagination from '../../components/UI/pagination/Pagination'

const ProductsPage = () => {
  const sortProps = ["Default", "A-Z", "Price"];

  const [sortOption, setSortOption] = useState("Default");

  const [currentPage, setCurrentPage] = useState(1);

  const itemCount = 50;
  const itemsPerPage = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={classes.contentWrapper}>
      <div className={classes.pageHeadingWrapper}>
        <div className={classes.pageHeadingTitle}>
          <span className={classes.produceTitle}>Produce</span>
          <span><b>Fresh</b> — August 21, 2023</span>
        </div>
        <div className={classes.productSortContainer}>
          <ul>
            {sortProps.map((sort) => (
              <SortOptionButton 
                children={sort}
                sortOption={sortOption}
                setSortOption={setSortOption}
                key={crypto.randomUUID()}
              />
            ))}
          </ul>
        </div>
      </div>
      <hr/>
      <div className={classes.productsContainer}>
        <ShopProducts
          itemCount={itemCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          sortOption={sortOption}
        />
      </div>
      <Pagination
        onPageChange={handlePageChange}
        totalCount={itemCount}
        currentPage={currentPage}
        siblingCount={1}
        pageSize={itemsPerPage}
      />
    </div>
  )
}

export default (ProductsPage)