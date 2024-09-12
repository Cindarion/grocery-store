// React imports
import React, { useState } from "react";

// Styles imports
import classes from "./PageHeading.module.css"

// Components imports
import SearchBar from "src/components/UI/SearchBar/SearchBar"
import SortOptionButton from "src/components/UI/Buttons/SortButton/SortOptionButton";

type pageHeadingProps = {
  titleString: string
  includeSecondTitle?: string
  includeSearchBar?: string
  includeSortOptions?: string[]
};

const PageHeading = ({
  titleString,
  includeSecondTitle: secondTitle,
  includeSearchBar: searchBarPlaceholder,
  includeSortOptions: sortOptions
}:pageHeadingProps) => {
  const [selectedSortOption, setSelectedSortOption] = useState("Default");

  const handleSearch = () => {
    return
  };

  const renderSearchBar = () => {
    if (searchBarPlaceholder) {
      return (
        <SearchBar
          onSearch={handleSearch}
          searchBarPlaceholder={searchBarPlaceholder}
        />
      )
    }
  };

  const renderSortOptions = () => {
    if (sortOptions) {
      return (
        sortOptions.map((sort, index) => (
          <SortOptionButton 
            children={sort}
            selectedSortOption={selectedSortOption}
            setSortOption={setSelectedSortOption}
            key={index}
          />
        ))
      )
    }
  };

  return (
    <section className={classes.pageHeading}>
      <div className={classes.headingTitleContainer}>
        <span className={classes.firstTitle}>{titleString}</span>
        <span className={classes.additionalTitle}>{secondTitle}</span>
      </div>
      {renderSearchBar()}
      <div className={classes.sortOptionsWrapper}>
        <ul>
          {renderSortOptions()}
        </ul>
      </div>
    </section>
  )
};

export default React.memo(PageHeading)