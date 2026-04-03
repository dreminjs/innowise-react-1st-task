import { FC, useMemo } from "react";
import styles from "./Pagination.module.css";

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<IPaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const paginationRange = useMemo(() => {
    const siblingCount = 1;
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "...", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1,
      );
      return [firstPageIndex, "...", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i,
      );
      return [firstPageIndex, "...", ...middleRange, "...", lastPageIndex];
    }

    return [];
  }, [totalPages, currentPage]);

  if (totalPages <= 1) return null;

  return (
    <nav className={styles.container}>
      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &larr; Prev
      </button>

      <ul className={styles.list}>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <li key={`dots-${index}`} className={styles.dots}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(Number(pageNumber))}
                className={`${styles.pageItem} ${
                  currentPage === pageNumber ? styles.active : ""
                }`}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &rarr;
      </button>
    </nav>
  );
};
