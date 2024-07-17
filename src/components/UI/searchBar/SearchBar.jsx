import React, { useEffect, useState } from 'react'
import classes from './SearchBar.module.css'
import { useDebounce } from '../../../hooks/useDebounce';

const SearchBar = ( {onSearch} ) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);

    if (onSearch) {
      onSearch(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={classes.productSearchContainer}>
      <div className={classes.searchIconWrapper}>
        <img 
          className={classes.searchIcon} 
          src={require("../../../data/icons/search-dark-gray-icon.png")}
        />
      </div>
      <input 
        type='search' 
        name='productSearch' 
        value={searchTerm}
        placeholder='Search for products' 
        className={classes.productSearchBar} 
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default React.memo(SearchBar)