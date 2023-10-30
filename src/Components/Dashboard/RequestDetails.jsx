import { useLoaderData } from 'react-router-dom';
import BkashIcon from '../Application/bkashIcon';
import NagadIcon from '../Application/NagadIcon';
import { BsCheckLg, BsTrash } from 'react-icons/bs';

const RequestDetails = () => {
  const [data] = useLoaderData();
  console.log(data);
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <div className="pt-14 pb-5 w-full max-w-3xl flex justify-between items-center">
        <h1 className="font-bold text-xl">
          {data?.name}&#39;s Request Details{' '}
          <span className={`${data?.status === 'pending' ? 'bg-yellow-200 text-yellow-900' : 'bg-green-200 text-green-600'} px-4 py-2 rounded-3xl capitalize`}>{data?.status}</span>
        </h1>
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-1 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-green-200 text-green-900 align-middle hover:bg-gray-50 focus:z-10 transition-all sm:p-4"
          >
            <BsCheckLg className="text-2xl" /> Approve
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-1 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-red-200 text-red-900 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none transition-all sm:p-4"
          >
            <BsTrash className="text-xl" /> Decline
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl border-[6px] rounded-xl shadow-lg border-gray-200 flex flex-col divide-y divide-gray-200">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Name:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.name}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Phone:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.phone}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Payment Method:</p>
          <p className="w-full py-4 pl-5 font-semibold">
            {data?.paymentMethod === 'বিকাশ' || data?.paymentMethod === 'Bkash' ? (
              <span className="flex gap-x-2">
                <BkashIcon />
                {data?.paymentMethod}
              </span>
            ) : (
              <span className="flex gap-x-2">
                <NagadIcon />
                {data?.paymentMethod}
              </span>
            )}
          </p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Address:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.address}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Reason:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.reason}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">NID/Passport:</p>
          <div className="w-full py-4 pl-5 font-semibold">
            <img
              src={data.image}
              alt="nid/passport"
              className="w-48 max-w-full border-4 border-gray-400 rounded-lg shadow"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">NID/Passport:</p>
          <div className="w-full py-4 pl-5 font-semibold">
            {data?.others?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="nid/passport"
                className="w-48 max-w-full border-4 border-gray-400 rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDetails;
