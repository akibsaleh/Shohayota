import { Link, useLoaderData } from "react-router-dom";
import BkashIcon from "../Application/bkashIcon";
import NagadIcon from "../Application/NagadIcon";
import { BsCheckLg, BsTrash } from "react-icons/bs";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom/dist";
import toast from "react-hot-toast";

// import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const RequestDetails = () => {
  const [loaderResponse, setLoaderResponse] = useState(useLoaderData());
  const [data] = loaderResponse;
  const navigate = useNavigate();
  const id = data?._id;

  const handleStatus = (status) => {
    const date = new Date(); // Create a Date object
    const month = date.getMonth() + 1; // Get the current month (0-based index)
    const year = date.getFullYear(); // Get the current year
    const formattedDate = `${month
      .toString()
      .padStart(2, "0")}/${year.toString()}`;
    const newData = { status, date: formattedDate };
    fetch(`https://shohahoyta-server.vercel.app/applications/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then(({ result, latestRequest }) => {
        if (result.modifiedCount > 0) {
          setLoaderResponse(latestRequest);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1500);
        }
        if (result.modifiedCount > 0)
          toast.success(`Declined request of ${data.name}`);
      });
  };

  // const x = data?.image.split('/')[4].toString();
  // console.log(/\.pdf$/i.test(x));

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <div className="pt-14 pb-5 w-full max-w-3xl flex justify-between items-center">
        <h1 className="font-bold text-xl">
          {data?.name}&#39;s Request Details{" "}
          <span
            className={`${
              data?.status === "declined" && "bg-red-200 text-red-800"
            } ${data?.status === "approved" && "bg-green-200 text-green-800"} ${
              data?.status === "pending" && "bg-yellow-200 text-yellow-800"
            } capitalize px-4 pt-2 pb-2.5 rounded-full`}
          >
            {data?.status}
          </span>
        </h1>
        <div className="inline-flex rounded-md shadow-sm">
          <Link
            to={`/dashboard/request/${id}/approvedForm`}
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-1 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-green-200 text-green-900 align-middle hover:bg-gray-50 focus:z-10 transition-all sm:p-4"
          >
            <BsCheckLg className="text-2xl" /> Approve
          </Link>
          <button
            onClick={() => handleStatus("declined")}
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-1 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-red-200 text-red-900 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none transition-all sm:p-4"
          >
            <BsTrash className="text-xl" /> Decline
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl border-[6px] rounded-xl shadow-lg border-gray-200 flex flex-col divide-y divide-gray-200">
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Name:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.name}</p>
        </div>
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Phone:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.phone}</p>
        </div>
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Payment Method:</p>
          <p className="w-full py-4 pl-5 font-semibold">
            {data?.paymentMethod === "বিকাশ" ||
            data?.paymentMethod === "Bkash" ? (
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
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Address:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.address}</p>
        </div>
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Reason:</p>
          <p className="w-full py-4 pl-5 font-semibold">{data?.reason}</p>
        </div>
        {data?.status === "approved" && (
          <>
            <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
              <p className="w-full py-4 pl-5 font-semibold">Amount:</p>
              <p className="w-full py-4 pl-5 font-semibold">
                {data?.amount} BDT
              </p>
            </div>
            <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
              <p className="w-full py-4 pl-5 font-semibold">Area:</p>
              <p className="w-full py-4 pl-5 font-semibold">{data?.area}</p>
            </div>
            <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
              <p className="w-full py-4 pl-5 font-semibold">Approved at:</p>
              <p className="w-full py-4 pl-5 font-semibold">{data?.approveDate}</p>
            </div>
          </>
        )}
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">NID/Passport:</p>
          <div className="w-full py-4 px-5 font-semibold">
            <a href={data?.mainFile} rel="noreferrer" target="_blank">
              {data?.mainFile &&
                (data?.mainFile.includes(".pdf") ? (
                  <Document
                    file={data?.mainFile}
                    className="overflow-hidden w-full h-96 border-[6px] border-gray-200 shadow-sm rounded"
                  >
                    <Page pageNumber={1} width={320} height={160} />
                  </Document>
                ) : (
                  <img
                    src={data?.mainFile}
                    className="w-48 h-auto border-[6px] border-gray-200 shadow-sm rounded"
                  />
                ))}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-[200px_auto] divide-x divide-gray-200">
          <p className="w-full py-4 pl-5 font-semibold">Other Documents:</p>
          <div className="w-full py-4 px-5 font-semibold flex flex-wrap gap-3">
            {Array.isArray(data?.others) ? (
              data?.others.map((img, idx) => (
                <a
                  key={idx}
                  href={img}
                  rel="noreferrer"
                  target="_blank"
                  className="max-w-[48%]"
                >
                  {img?.includes(".pdf") ? (
                    <Document
                      file={img}
                      className="overflow-hidden w-full h-48 border-[3px] border-gray-200 shadow-sm rounded"
                    >
                      <Page pageNumber={1} width={320} height={160} />
                    </Document>
                  ) : (
                    <img
                      src={img}
                      className="border-[3px] border-gray-200 shadow-sm rounded"
                    />
                  )}
                </a>
              ))
            ) : (
              <a
                href={data?.others}
                rel="noreferrer"
                target="_blank"
                className="max-w-[48%]"
              >
                {data?.others?.includes(".pdf") ? (
                  <Document
                    file={data?.others}
                    className="overflow-hidden w-full h-48 border-[3px] border-gray-200 shadow-sm rounded"
                  >
                    <Page pageNumber={1} width={320} height={160} />
                  </Document>
                ) : (
                  <img
                    src={data?.others}
                    className="border-[3px] border-gray-200 shadow-sm rounded"
                  />
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDetails;
