import React, { useEffect, useState } from 'react'
import classes from './SearchBar.module.css'
import { useDebounce } from '@/hooks/useDebounce';
import search_dark_gray_icon from "@/data/icons/search-dark-gray-icon.png"

type SearchBarProps = {
  onSearch: Function
  searchBarPlaceholder?: string
}

const SearchBar = ({
  onSearch,  
  searchBarPlaceholder
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);

    if (onSearch) {
      onSearch(debouncedSearchTerm)
    }
  }, [onSearch, debouncedSearchTerm]);

  return (
    <div className={classes.searchBarContainer}>
      <div className={classes.searchIconWrapper}>
        <img 
          alt='search-icon'
          className={classes.searchIcon} 
          src={search_dark_gray_icon}
        />
      </div>
      <input 
        type='search' 
        name='productSearch' 
        value={searchTerm}
        placeholder={searchBarPlaceholder}
        className={classes.productSearchBar} 
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default React.memo(SearchBar)