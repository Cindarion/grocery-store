import usePagination from "../../../hooks/usePagination";
import classes from "./Pagination.module.css"

type paginationProps = {
  contentPerPage: number, 
  itemsCount: number,
  currentPage: number,
  setCurrentPage: (state: React.ComponentState) => void,
}
const Pagination = ({contentPerPage, itemsCount, currentPage, setCurrentPage}: paginationProps) => {
  const {
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage,
    itemsCount,
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
        className={`${classes.paginationItem} ${currentPage === 1 
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
          className={`${classes.paginationItem} ${currentPage === el + 1 
            ? classes.active 
            : ''
          }`}
        >
          {el + 1}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`${classes.paginationItem} ${currentPage === totalPages 
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