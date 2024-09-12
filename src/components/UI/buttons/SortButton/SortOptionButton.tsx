import React, { useEffect, useRef } from 'react'
import classes from './SortOptionButton.module.css'

type sortOptionProps = {
  children: string, 
  selectedSortOption: string, 
  setSortOption: Function
}

const SortOptionButton = ({
  children, 
  selectedSortOption,
  setSortOption
}: sortOptionProps) => {
  const SortOptionButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleSort = () => {
      setSortOption(children)
    };

    const currentButton = SortOptionButtonRef.current;
    if (currentButton) {
      currentButton.addEventListener('click', handleSort);
    };
    

  }, [children, setSortOption]);

  return (
    <span className={classes.sortOptionWrapper}>
      <button
        ref={SortOptionButtonRef} 
        className={selectedSortOption === children  
          ? classes.activeSortButton  
          : classes.sortButton
        }
      >
        {children}
      </button>
    </span>
    
  )
}

export default React.memo(SortOptionButton)