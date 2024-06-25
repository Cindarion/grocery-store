import React, {useEffect, useRef} from 'react'
import classes from './SortOptionButton.module.css'

const SortOptionButton = ({children, sortOption, setSortOption}) => {
  const SortOptionButtonRef = useRef(null);

  useEffect(() => {
    const handleSort = () => {
      setSortOption(children)
    };

    const currentButton = SortOptionButtonRef.current;
    if (currentButton) {
      currentButton.addEventListener('click', handleSort);
    };

  }, []);

  return (
    <button 
      ref={SortOptionButtonRef} 
      className={sortOption == children ? 
      classes.ActiveSortButton : 
      classes.SortButton}
    >
      {children}
    </button>
  )
}

export default React.memo(SortOptionButton)