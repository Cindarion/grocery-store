import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import { getCurrentDateFormatted } from '../../utils/currentDate'
import SearchBar from '../../components/UI/SearchBar/SearchBar'
import SortOptionButton from '../../components/UI/Buttons/SortButton/SortOptionButton'
import RenderShopProducts from '../../components/RenderShopProducts'
import { useFetch } from '../../hooks/useFetch'
import Pagination from '../../components/UI/Pagination/Pagination'

type dataProps = {
  loading: boolean,
  error: any | unknown,
  data: [] | null
}
const ProductsPage = () => {
  const [sortOption, setSortOption] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { loading, error, data: initialProducstData }: dataProps = useFetch('./products.json'); 
  const itemCount = initialProducstData? initialProducstData.length : 0;
  const currentDate = getCurrentDateFormatted();
  const sortProps = ["Default", "A-Z", "Price"];
  const productsPerPage = 16;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (!initialProducstData) return <div>Loading...</div>;
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
          <RenderShopProducts
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            sortOption={sortOption}
            searchQuery={searchQuery}
            initialProducstData={initialProducstData}
          />
        </div>
        <Pagination
          contentPerPage={productsPerPage}
          count={itemCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  )
}

export default React.memo(ProductsPage)