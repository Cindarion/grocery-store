import React from 'react';
import { usePagination, DOTS } from '../../../hooks/usePagination';
import classes from './Pagination.module.css'

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={classes.paginationContainer}>
      <ul>
        <li className={classes.paginationItem} onClick={onPrevious}>
          <div className={classes.arrowLeft}>←</div>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li key={index} className={classes.paginationItemDots}>&#8230;</li>;
          }
          return (
            <li key={index} className={classes.paginationItem} onClick={() => onPageChange(pageNumber)}>
              {pageNumber}
            </li>
          );
        })}
        <li className={classes.paginationItem} onClick={onNext}>
          <div className={classes.arrowRight}>→</div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;