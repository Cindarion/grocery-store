import SearchBar from "src/components/UI/SearchBar/SearchBar"
import classes from "./NewsPage.module.css"
import SortOptionButton from "src/components/UI/Buttons/SortButton/SortOptionButton"
import { newsSortOptions } from "src/constants/sortOptions"
import { useState } from "react"

const NewsPage = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("Default");
  const sortProps = newsSortOptions;

  const handleSearch = () => {
    return
  }

  return (
    <div className={classes.contentContainer}>
      <section>
        <div className={classes.pageHeadingTitle}>
          <span className={classes.produceTitle}>News</span>
        </div>
        <SearchBar
          onSearch={handleSearch}
        />
        <div className={classes.productSortWrapper}>
        <ul>
          {sortProps.map((sort, index) => (
            <SortOptionButton 
              children={sort}
              sortOption={selectedSortOption}
              setSortOption={setSelectedSortOption}
              key={index}
            />
          ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default NewsPage