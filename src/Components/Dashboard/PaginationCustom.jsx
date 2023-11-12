/* eslint-disable react/prop-types */
import { BiDotsHorizontalRounded } from 'react-icons/bi';
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
      <button
        onClick={() => handlePagination(pageNumber)}
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none"
        aria-current="page"
      >
        {pageNumber}
      </button>
      <button
        onClick={() => handlePagination(pageNumber + 1)}
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg"
      >
        {pageNumber + 1}
      </button>
      {pageNumber + 2 < lastPage && (
        <button
          onClick={() => handlePagination(pageNumber + 2)}
          type="button"
          className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg"
        >
          {pageNumber + 2}
        </button>
      )}
      {pageNumber + 3 < lastPage && (
        <div className="hs-tooltip inline-block border border-gray-200">
          <button
            onClick={() => handlePagination(pageNumber + 3)}
            type="button"
            className="hs-tooltip-toggle group min-h-[36px] min-w-[36px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm"
          >
            <span className="hidden text-xs">•••</span>
            <BiDotsHorizontalRounded />
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-slate-700"
              role="tooltip"
            >
              Next 3 pages
            </span>
          </button>
        </div>
      )}
      <button
        type="button"
        className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg"
      >
        {lastPage}
      </button>
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
