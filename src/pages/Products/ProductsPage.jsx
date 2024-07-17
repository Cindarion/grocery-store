import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import { getCurrentDateFormatted } from '../../utils/currentDate'
import SearchBar from '../../components/UI/SearchBar/SearchBar'
import SortOptionButton from '../../components/UI/Buttons/SortButton/SortOptionButton'
import ShopProducts from '../../components/UI/Product/ShopProduct/ShopProducts'
import Pagination from '../../components/UI/Pagination/Pagination'
import { useFetch } from '../../hooks/useFetch'

const ProductsPage = () => {
  const [sortOption, setSortOption] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useFetch('./products.json'); 
  const sortProps = ["Default", "A-Z", "Price"];
  const currentDate = getCurrentDateFormatted();
  const itemCount = data ? data.length : 50;
  const productsPerPage = 16;

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!data) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={classes.contentContainer}>
      <section>
        <div className={classes.pageHeadingTitle}>
          <span className={classes.produceTitle}>Produce</span>
          <span><b>Fresh</b> — {currentDate}</span>
        </div>
        <SearchBar
          onSearch={handleSearch}
        />
        <div className={classes.productSortWrapper}>
          <ul>
            {sortProps.map((sort, index) => (
              <SortOptionButton 
                children={sort}
                sortOption={sortOption}
                setSortOption={setSortOption}
                key={index}
              />
            ))}
          </ul>
        </div>
      </section>
      <hr/>
      <main>
        <div className={classes.productsWrapper}>
          <ShopProducts
            itemCount={itemCount}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            sortOption={sortOption}
            searchQuery={searchQuery}
            data={data}
          />
        </div>
        <Pagination
          onPageChange={handlePageChange}
          totalCount={itemCount}
          currentPage={currentPage}
          siblingCount={1}
          pageSize={productsPerPage}
        />
      </main>
    </div>
  )
}

export default (ProductsPage)