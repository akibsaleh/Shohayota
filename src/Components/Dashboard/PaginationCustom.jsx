/* eslint-disable react/prop-types */
// import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
const PaginationCustom = ({ pageNumber, handlePagination, lastPage }) => {
  console.log(lastPage);
  return (
    <nav className="flex items-center -space-x-px">
      {pageNumber > 5 && (
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          <FiChevronsLeft />
        </button>
      )}
      <button
        onClick={() => handlePagination(pageNumber - 1)}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center bg-gray-50 items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-900 hover:bg-gray-100"
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
      {pageNumber - 4 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber - 4}
        </button>
      )}
      {pageNumber - 3 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber - 3}
        </button>
      )}

      {pageNumber - 2 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber - 2}
        </button>
      )}

      {pageNumber - 1 > 0 && (
        <button
          onClick={() => handlePagination(pageNumber - 1)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber - 1}
        </button>
      )}

      <button
        onClick={() => handlePagination(pageNumber)}
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
        aria-current="page"
      >
        {pageNumber}
      </button>

      {pageNumber + 1 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber + 1)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber + 1}
        </button>
      )}

      {pageNumber !== lastPage && pageNumber + 2 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber + 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber + 2}
        </button>
      )}
      {pageNumber !== lastPage && pageNumber + 3 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber + 3)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber + 3}
        </button>
      )}
      {pageNumber !== lastPage && pageNumber + 4 <= lastPage && (
        <button
          onClick={() => handlePagination(pageNumber + 4)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          {pageNumber + 4}
        </button>
      )}

      <button
        onClick={() => handlePagination(pageNumber < lastPage ? pageNumber + 1 : pageNumber)}
        type="button"
        className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center bg-gray-10 bg-gray-50 items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-900 hover:bg-gray-100"
        disabled={pageNumber + 4 < lastPage ? true : false}
      >
        <FiChevronRight />
        <span
          aria-hidden="true"
          className="sr-only"
        >
          Next
        </span>
      </button>
      {pageNumber < 6 && (
        <button
          onClick={() => handlePagination(lastPage)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-50 text-gray-900 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none hover:bg-gray-100"
          aria-current="page"
        >
          <FiChevronsRight />
        </button>
      )}
    </nav>
  );
};

export default PaginationCustom;
