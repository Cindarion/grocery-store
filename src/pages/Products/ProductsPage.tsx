import React, { useState } from 'react'
import classes from './ProductsPage.module.css'
import { getCurrentDateFormatted } from '@/utils/currentDate'
import { useFetch } from '@/hooks/useFetch'
import { productsSortOptions } from '@/constants/sortOptions'
import RenderShopProducts from '@/components/UI/ShopContent/ShopContent'
import SearchBar from '@/components/UI/searchBar/SearchBar'
import SortOptionButton from '@/components/UI/buttons/SortButton/SortOptionButton'

type dataProps = {
  loading: boolean,
  error: any | unknown,
  data: [] | null
}
const ProductsPage = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { loading, error, data: initialProductsData }: dataProps = useFetch('./products.json'); 
  const currentDate = getCurrentDateFormatted();
  const sortOptions = productsSortOptions;
  const maxProductsPerPage = 20;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (!initialProductsData) return <div>Loading...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={classes.pageContainer}>
      <section className={classes.pageHeading}>
        <div className={classes.headingTitleContainer}>
          <span className={classes.mainTitle}>Produce</span>
          <span className={classes.additionalTitle}><b>Fresh</b> — {currentDate}</span>
        </div>
        <SearchBar
          onSearch={handleSearch}
          searchBarPlaceholder="Search for products"
        />
        <div className={classes.sortOptionsContainer}>
          {sortOptions.map((sort, index) => (
            <SortOptionButton 
              children={sort}
              selectedSortOption={selectedSortOption}
              setSortOption={setSelectedSortOption}
              key={index}
            />
          ))}
        </div>
      </section>
      <main>
        <RenderShopProducts
          initialProductsData={initialProductsData}
          sortOption={selectedSortOption}
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