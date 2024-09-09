// React imports
import React, { useState } from "react";

// Styles imports
import classes from "./PageHeading.module.css"

// Components imports
import SearchBar from "src/components/UI/SearchBar/SearchBar"
import SortOptionButton from "src/components/UI/Buttons/SortButton/SortOptionButton";

type pageHeadingProps = {
  titleString: string
  additionalTitle?: string
  addSearchBar?: boolean
  addSortOptions?: []
};

const PageHeading = ({
  titleString,
  additionalTitle,
  addSearchBar,
  addSortOptions
}:pageHeadingProps) => {
  const [selectedSortOption, setSelectedSortOption] = useState("Default");

  const handleSearch = () => {
    return
  };

  const renderSearchBar = () => {
    if (addSearchBar) {
      return (
        <SearchBar
          onSearch={handleSearch}
        />
      )
    }
  };

  const renderSortOptions = () => {
    if (addSortOptions) {
      return (
        addSortOptions.map((sort, index) => (
          <SortOptionButton 
            children={sort}
            sortOption={selectedSortOption}
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
        <span className={classes.mainTitle}>{titleString}</span>
        <span className={classes.additionalTitle}>{additionalTitle}</span>
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