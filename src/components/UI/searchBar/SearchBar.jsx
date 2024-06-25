import React, { useState } from 'react'
import classes from './SearchBar.module.css'

const SearchBar = ( {onSearch} ) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value)
    }
  }

  return (
    <div className={classes.productSearchWrapper}>
      <form action="#">
        <input 
          type='search' 
          value={query}
          placeholder='Search for products' 
          onChange={handleInputChange}
          className={classes.productSearchBar} 
        />
      </form>
    </div>
  )
}

export default SearchBar