import { Icons } from "../Icons/Icons";
import css from "./Pagination.module.css";
import { useMemo } from "react";

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const pageNumbers = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }, [totalPages]);

  const visiblePages = useMemo(() => {
    if (pageNumbers.length <= 5) {
      return pageNumbers;
    }

    const visibleCount = 3;
    let start = Math.max(1, currentPage - Math.floor(visibleCount / 2));
    let end = Math.min(totalPages, start + visibleCount - 1);

    if (end - start + 1 < visibleCount) {
      start = Math.max(1, end - visibleCount + 1);
    }

    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }

    if (result[0] > 1) {
      result.unshift("...");
    }

    if (result[result.length - 1] < totalPages) {
      result.push("...");
    }

    return result;
  }, [currentPage, totalPages, pageNumbers]);

  const handlePageChange = (page) => {
    if (page === "...") return;
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={css.paginationWrap}>
      <button
        className={css.paginationBtn}
        onClick={handleFirstPage}
        disabled={currentPage === 1}
      >
        <Icons iconName="double-left" className={css.icons} />
      </button>
      <button
        className={css.paginationBtn}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <Icons iconName="left" className={css.icons} />
      </button>
      <ul className={css.pageList}>
        {visiblePages.map((page, index) => (
          <li key={index} className={css.pageItem}>
            <button
              className={`${css.pageLink} ${
                page === currentPage ? css.active : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={css.paginationBtn}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <Icons iconName="right" className={css.icons} />
      </button>
      <button
        className={css.paginationBtn}
        onClick={handleLastPage}
        disabled={currentPage === totalPages}
      >
        <Icons iconName="double-right" className={css.icons} />
      </button>
    </div>
  );
}
