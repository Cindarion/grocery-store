import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import { getCurrentDateFormatted } from 'src/utils/currentDate'
import { useFetch } from 'src/hooks/useFetch'
import RenderShopProducts from 'src/components/UI/ShopContent/ShopContent'
import SearchBar from 'src/components/UI/SearchBar/SearchBar'
import SortOptionButton from 'src/components/UI/Buttons/SortButton/SortOptionButton'

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
  const currentDate = getCurrentDateFormatted();
  const sortProps = ["Default", "A-Z", "Price"];
  const maxProductsPerPage = 16;

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
        <RenderShopProducts
          initialProducstData={initialProducstData}
          sortOption={sortOption}
          searchQuery={searchQuery}
          currentPage={currentPage}
          maxProductsPerPage={maxProductsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  )
}

export default React.memo(ProductsPage)