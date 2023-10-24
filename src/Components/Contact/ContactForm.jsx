import BangladeshIcon from './BangladeshIcon';

const ContactForm = () => {
  return (
    <div>
      <form className="flex flex-col gap-y-5">
        <div className="form-control flex gap-x-6">
          <label className="label w-40 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className="label-text">Your Full Name:</span>
            <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            placeholder="ex: Rakibul Islam"
            className="input leading-[26px] w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze"
          />
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-40 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className="label-text">Mobile Number:</span>
            <span className="text-red-600">*</span>
          </label>
          <div className="flex items-center justify-start w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze divide-x divide-solid gap-x-2.5">
            <span className="flex gap-x-1 leading-[26px] text-thunder-500 font-archivo">
              <span className="mt-[3px]">
                <BangladeshIcon />
              </span>
              <span>+880</span>
            </span>
            <input
              type="text"
              placeholder="Write here"
              className="input w-full bg-haze pl-2.5 leading-[26px]"
            />
          </div>
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-40 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className="label-text">Email Address:</span>
          </label>
          <input
            type="text"
            placeholder="ex: rakibulislam@gmail.com"
            className="input leading-[26px] w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze"
          />
        </div>
        <div className="form-control flex gap-5">
          <label className="label w-40 text-thunder-500 font-archivo leading-[26px] pt-2 pb-1.5">
            <span className="label-text">Your Message:</span>
            <span className="text-red-600">*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24 w-full pt-2 pb-1.5 px-3 rounded-md border-thunder-300 border bg-haze"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <div className="form-control flex justify-center gap-5 pt-10">
          <button
            type="submit"
            className="text-xl font-semibold leading-8 text-white bg-plant-700 rounded-[70px] py-2.5 px-7 font-archivo"
          >
            <span className="h-8">Submit Message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
