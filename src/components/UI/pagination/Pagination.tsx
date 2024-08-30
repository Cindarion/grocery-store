import usePagination from "../../../hooks/usePagination";
import classes from "./Pagination.module.css"

type paginationProps = {
  contentPerPage: number, 
  count: number,
  currentPage: number,
  setCurrentPage: (state: React.ComponentState) => void,
  searchQuery: string
}
const Pagination = ({contentPerPage, count, currentPage, setCurrentPage, searchQuery}: paginationProps) => {
  const {
    nextPage,
    prevPage,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage,
    count,
    currentPage,
    setCurrentPage
});

  console.log(`Pagination component: ${searchQuery}`);
    

  return (
    <div className={classes.paginationContainer}>
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
    </div>
  )
}

export default Pagination