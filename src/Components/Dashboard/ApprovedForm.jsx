import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ApprovedForm = () => {
  const [loaderResponse, setLoaderResponse] = useState(useLoaderData());
  const [data] = loaderResponse;
  const navigate = useNavigate();
  const id = data?._id;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    const amount = data.amount;
    const area = data.area;
    const areaBangla = data.areaBangla;

    const formatedDate = data.approveDate.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",  
    });

    const formatedBanglaDate = data.approveDate.toLocaleString("bn-BD", {
      month: "long",
      day: "2-digit",
      year: "numeric",  
    });

    const newData = { status: "approved", amount, area, areaBangla, formatedDate, formatedBanglaDate };
    fetch(`${import.meta.env.VITE_API_URL}/applications/${id}`, {
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

            <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
              <div className="w-full font-medium md:text-lg text-thunder-500">
                <label>
                  <span>এলাকা</span>
                </label>
              </div>
              <div className="w-full">
                <input
                  {...register("areaBangla", { required: true })}
                  type="text"
                  placeholder="আবেদনকারীর এলাকা"
                  className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
                />
                {errors.area && (
                  <p className="text-[#F02727] font-medium">
                  আবেদনকারীর এলাকাটি লিখুন
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[210px_auto] gap-x-6 gap-y-2 md:gap-6 items-center">
              <div className="w-full font-medium md:text-lg text-thunder-500">
                <label>
                  <span>Approval Date</span>
                </label>
              </div>
              <div className="w-full">
                <Controller
                  name="approveDate"
                  control={control}
                  defaultValue={new Date()}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => {
                        field.onChange(date);
                        setValue("approveDate", date);
                      }}
                      className="w-full md:w-[480px] px-3 py-2 bg-haze border-[1px] border-plant-100 rounded-md text-thunder-700 focus-visible: outline-none md:text-lg"
                    />
                  )}
                />
                {errors.approveDate && (
                  <p className="text-[#F02727] font-medium">
                    Please Select a Date
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
