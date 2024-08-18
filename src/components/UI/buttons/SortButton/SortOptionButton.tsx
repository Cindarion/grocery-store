import React, { useEffect, useRef } from 'react'
import classes from './SortOptionButton.module.css'

type sortOptionProps = {
  children: string, 
  sortOption: string, 
  setSortOption: Function
}

const SortOptionButton = ({children, sortOption, setSortOption}: sortOptionProps) => {
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
    <button 
      ref={SortOptionButtonRef} 
      className={sortOption === children ? 
      classes.ActiveSortButton : 
      classes.SortButton}
    >
      {children}
    </button>
  )
}

export default React.memo(SortOptionButton)