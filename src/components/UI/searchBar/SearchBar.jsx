import React, { useEffect, useState } from 'react'
import classes from './SearchBar.module.css'
import { debounce } from '../../../utils/applyDebounce'

const SearchBar = ( {onSearch} ) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log("SET:", searchTerm);

    const applySearch = () => {
      if (onSearch) {
        onSearch(searchTerm)
        console.log("GET:", searchTerm);
      }
    }
    
    setTimeout(() => {
      applySearch()
    }, 300)
  }

  useEffect(() => {
    handleInputChange(searchTerm)
  }, [searchTerm])

  return (
    <div className={classes.productSearchWrapper}>
      <form action="#">
        <input 
          type='search' 
          name='productSearch' 
          value={searchTerm}
          placeholder='Search for products' 
          onChange={e => setSearchTerm(e.target.value)}
          className={classes.productSearchBar} 
        />
      </form>
    </div>
  )
}

export default SearchBar