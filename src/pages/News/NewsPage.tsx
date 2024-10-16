import SortOptionButton from "src/components/UI/Buttons/SortButton/SortOptionButton";
import classes from "./NewsPage.module.css"
import SearchBar from "src/components/UI/SearchBar/SearchBar";
import { newsSortOptions } from "src/constants/sortOptions"
import { useState } from "react";

const NewsPage = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("Default");
  const sortOptions = newsSortOptions;

  const handleSearch = () => {
    // ...
  }

  return (
    <div className={classes.pageContainer}>
      <section className={classes.pageHeading}>
        <div className={classes.headingTitleContainer}>
          <span className={classes.mainTitle}>News</span>
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
        <div>
          
        </div>
      </main>
    </div>
  )
}

export default NewsPage