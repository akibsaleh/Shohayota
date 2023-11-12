/* eslint-disable react/prop-types */
// import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const PaginationCustom = ({ pageNumber, handlePagination, lastPage }) => {
  return (
    <nav className="flex items-center -space-x-px">
      <button
        onClick={() => handlePagination(pageNumber - 1)}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100"
        disabled={pageNumber === 1 ? true : false}
      >
        <FiChevronLeft />
        <span
          aria-hidden="true"
          className="sr-only"
        >
          Previous
        </span>
      </button>

      {pageNumber - 2 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
          aria-current="page"
        >
          {pageNumber - 2}
        </button>
      )}

      {pageNumber - 1 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 1)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
          aria-current="page"
        >
          {pageNumber - 1}
        </button>
      )}

      <button
        onClick={() => handlePagination(pageNumber)}
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
        aria-current="page"
      >
        {pageNumber}
      </button>

      {pageNumber + 1 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
          aria-current="page"
        >
          {pageNumber + 1}
        </button>
      )}

      {pageNumber !== lastPage && pageNumber + 2 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
          aria-current="page"
        >
          {pageNumber + 2}
        </button>
      )}

      <button
        onClick={() => handlePagination(pageNumber + 1)}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100"
        disabled={pageNumber + 2 === 8 ? true : false}
      >
        <FiChevronRight />
        <span
          aria-hidden="true"
          className="sr-only"
        >
          Next
        </span>
      </button>
    </nav>
  );
};

export default PaginationCustom;
