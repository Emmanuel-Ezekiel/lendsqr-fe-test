import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";
import "../../styles/component/pagination.scss";

type Props = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 items in pagination range we shall not render the component
  if (!currentPage || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage: number | undefined;
  if (paginationRange.length) {
    lastPage = paginationRange[paginationRange.length - 1];
  }

  return (
    <ul
    className={classnames("pagination-container", { className })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: any) => (
        <li
          className={classnames("pagination-item", {
            selected: pageNumber === currentPage,
          })}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber === DOTS ? "..." : pageNumber}
        </li>
      ))}
      {/*  Right Navigation arrow */}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
