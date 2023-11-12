import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ApprovedForm = () => {
  const [loaderResponse, setLoaderResponse] = useState(useLoaderData());
  const [data] = loaderResponse;
  const navigate = useNavigate();
  const id = data?._id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
        const date = new Date(); // Create a Date object
        const month = date.getMonth() + 1; // Get the current month (0-based index)
        const year = date.getFullYear(); // Get the current year
        const amount = data.amount;
        const area = data.area;
        console.log(amount, area);
        const formattedDate = `${month
          .toString()
          .padStart(2, "0")}/${year.toString()}`;
        const newData = { status: 'approved', date: formattedDate, amount, area };
        fetch(`${import.meta.env.VITE_API_URL}/applications/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((res) => res.json())
          .then(({ result, latestRequest }) => {
            console.log(result);
            console.log(latestRequest);
            if (result.modifiedCount > 0) {
              setLoaderResponse(latestRequest);
              toast.success(`Request approved`);
              setTimeout(() => {
                navigate("/dashboard");
              }, 1500);
            }
              
          });
  };

  
  return (
    <div className="max-w-[85rem] mx-auto space-y-10 mt-20">
      <h1 className="text-3xl text-center dont bold">Approval Info</h1>
      <div className="flex justify-center pt-10">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
            <div className="w-full font-medium md:text-lg text-thunder-500">
              <label>
                <span>Approved Amount</span>
              </label>
            </div>
            <div className="w-full">
              <input
                {...register("amount", { required: true })}
                type="text"
                placeholder="Please insert approved amount"
                className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
              />
              {errors.amount && (
                <p className="text-[#F02727] font-medium">
                  Please insert approved amount
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
            <div className="w-full font-medium md:text-lg text-thunder-500">
              <label>
                <span>Area</span>
              </label>
            </div>
            <div className="w-full">
              <input
                {...register("area", { required: true })}
                type="text"
                placeholder="Enter area of the applicant"
                className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
              />
              {errors.area && (
                <p className="text-[#F02727] font-medium">
                  Please insert Area info
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center gap-5 pt-5">
            <button
              type="submit"
              className={`text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7`}
            >
              <span className="h-8">Approve</span>
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ApprovedForm;