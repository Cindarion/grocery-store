type usePaginationProps = {
  itemsCount: number,
  maxContentPerPage: number,
  currentPage: number,
  setCurrentPage: (state: React.ComponentState) => void;
}
const usePagination = ({ 
  itemsCount, 
  maxContentPerPage,
  currentPage, 
  setCurrentPage 
}: usePaginationProps) => {
  const pageCount = Math.ceil(itemsCount / maxContentPerPage);
  const lastProductIndex = currentPage * maxContentPerPage;
  const firstProductIndex = lastProductIndex - maxContentPerPage;

  const changePage = (direction: boolean) => {
    setCurrentPage((state: number): number => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSAFE = (num: number) => {
    if (num > pageCount) {
      setCurrentPage(pageCount);
    } else if (num < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(num);
    }
  };
  
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSAFE,
    firstProductIndex,
    lastProductIndex,
    currentPage,
  };
};

export default usePagination;
