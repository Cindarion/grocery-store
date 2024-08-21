const DOTS = '...';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({ totalCount, currentPage, siblingCount = 1, pageSize }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const totalBlocks = siblingCount + 5;

  if (totalPages <= totalBlocks) {
    return range(1, totalPages);
  }

  let leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  let rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  let shouldShowLeftDots = leftSiblingIndex > 2;
  let shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let extraPages = 1;
    while (extraPages + (rightSiblingIndex - leftSiblingIndex) <= totalBlocks - 3) {
      extraPages++;
    }
    leftSiblingIndex -= extraPages;
    shouldShowLeftDots = true;
  } else if (shouldShowLeftDots &&!shouldShowRightDots) {
    let extraPages = 1;
    while (extraPages + (rightSiblingIndex - leftSiblingIndex) <= totalBlocks - 3) {
      extraPages++;
    }
    rightSiblingIndex += extraPages;
    shouldShowRightDots = true;
  }

  if (shouldShowLeftDots) leftSiblingIndex++;
  if (shouldShowRightDots) rightSiblingIndex--;

  return range(firstPageIndex, leftSiblingIndex).concat(DOTS, range(leftSiblingIndex, rightSiblingIndex), DOTS, range(rightSiblingIndex + 1, lastPageIndex));
};

export { usePagination, DOTS };