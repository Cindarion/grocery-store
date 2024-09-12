import usePagination from "src/hooks/usePagination";
import classes from "./Pagination.module.css"

type paginationProps = {
  itemsCount: number,
  maxContentPerPage: number, 
  currentPage: number,
  setCurrentPage: (state: React.ComponentState) => void,
}
const Pagination = ({
  itemsCount, 
  maxContentPerPage, 
  currentPage, 
  setCurrentPage
}: paginationProps) => {
  const {
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    itemsCount,
    maxContentPerPage,
    currentPage,
    setCurrentPage
});

  if (itemsCount === 0) return 'Nothing found...'

  return (
    <>
      <p className={classes.paginationText}>
        {currentPage}/{totalPages}
      </p>
      <button
        onClick={prevPage}
        className={`
        ${classes.paginationButton} 
        ${currentPage === 1 
          ? classes.disabled
          : ''
        }`}
      >
        &larr;
      </button>
      {/* @ts-ignore */}
      {[...Array(totalPages).keys()].map((el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={`
            ${classes.paginationButton} 
            ${currentPage === el + 1 
              ? classes.active 
              : ''
          }`}
        >
          {el + 1}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`
          ${classes.paginationButton} 
          ${currentPage === totalPages 
            ? classes.disabled
            : ''
        }`}
      >
        &rarr;
      </button>
    </>
  )
}

export default Pagination