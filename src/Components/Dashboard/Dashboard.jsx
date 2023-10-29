import { useLoaderData } from 'react-router-dom';
import RequestCard from './RequestCard';

const Dashboard = () => {
  const data = useLoaderData();
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col pt-10 pb-5 space-y-4 md:flex-row md:items-center md:justify-center md:space-y-0">
        <div className="text-center">
          <h2 className="text-lg font-semibold">All Requests</h2>
          <p className="mt-1 text-sm text-gray-700">This is a list of all requests. You can also check the pending requests here and approved requests here.</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col">
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
                  {data.map((request, idx) => (
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
    </section>
  );
};

export default Dashboard;
