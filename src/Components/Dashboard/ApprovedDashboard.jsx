import RequestCard from './RequestCard';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PaginationCustom from './PaginationCustom';
// import { useTranslation } from 'react-i18next';

const ApprovedDashboard = () => {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(null);
  const [lastPage, setLastPage] = useState(1);

  const getData = async (page) => {
    try {
      const response = await axios.get(`https://shohahoyta-server.vercel.app/paginated-requests?page=${page}&status=approved`);
      setData(response?.data?.data);
      setCount(response?.data?.queryTotal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLastPage(Math.floor(parseInt(count) / 20));
    getData(pageNumber);
  }, [count, pageNumber]);

  const handlePagination = (page) => {
    setPageNumber(page);
  };

  const searchRef = useRef();
  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await axios.get(`https://shohahoyta-server.vercel.app/searchResult?search=${searchRef.current.value}`);
    setData(result?.data);
  };

  return (
    <section className="container mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col pt-10 pb-5 space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0">
        <div className="text-center">
          <h2 className="text-lg font-semibold">All Requests</h2>
          <p className="mt-1 text-sm text-gray-700">This is a list of all requests. You can also check the pending requests here and approved requests here.</p>
        </div>
      </div>
      <div className="w-full py-10 flex justify-center">
        <form
          onSubmit={handleSearch}
          className="max-w-xl w-full flex flex-col items-center"
        >
          <div className="w-full">
            <label
              htmlFor="searchInput"
              className="sr-only"
            >
              Search
            </label>
            <div className="flex rounded-lg shadow-sm w-full">
              <input
                ref={searchRef}
                type="text"
                id="searchInput"
                name="searchInput"
                className="py-3 px-4 block w-full border border-gray-200 shadow-sm rounded-s-md text-sm focus-within:outline-none"
              />
              <button
                type="submit"
                className="-ms-px py-3 px-4 inline-flex justify-center items-center gap-2 border font-medium bg-plant-700 hover:bg-plant-600 duration-200 transition-colors text-white border-plant-700 shadow-sm align-middle"
              >
                <FiSearch className="text-lg" /> Search
              </button>
              <button
                type="button"
                onClick={() => {
                  searchRef.current.value = '';
                  setPageNumber(1);
                  getData(pageNumber);
                }}
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-orange-700 text-white hover:bg-orange-700"
              >
                <AiOutlineCloseCircle className="text-xl" /> Clear
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span>Requester</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Payment Method
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative px-4 py-3.5"
                    >
                      <span className="sr-only">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.map((request, idx) => (
                    <RequestCard
                      key={idx}
                      request={request}
                    ></RequestCard>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-6 flex justify-center items-center">
        <PaginationCustom
          pageNumber={pageNumber}
          handlePagination={handlePagination}
          lastPage={lastPage}
        />
      </div>
      {/* <div>
        <p>
          {arr.map((item, idx) => (
            <span key={idx}>{t(`numbers.${item}`)}</span>
          ))}
        </p>
      </div> */}
    </section>
  );
};

export default ApprovedDashboard;
