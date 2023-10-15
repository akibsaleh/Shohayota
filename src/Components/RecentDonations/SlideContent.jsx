import { PiCircleFill, PiMapPinDuotone } from 'react-icons/pi';

const SlideContent = () => {
  return (
    <div>
      <p className="font-archivo text-sm font-semibold text-center pb-[30px]">27 December, 2022</p>
      <PiCircleFill className="absolute stroke-plant-700 text-snow top-8 left-1/2 -translate-x-1/2 stroke-[20px]" />
      <div className="relative w-full px-3 py-5 bg-donateBox bg-contain bg-no-repeat bg-center min-h-[152px] rounded-md text-center drop-shadow-md my-10 flex flex-col justify-center items-center">
        <div></div>
        <h3 className="flex justify-center items-center -ml-3 leading-[22px]">
          <PiMapPinDuotone className="mr-2" />
          <span className="font-archivo text-base font-semibold">Mohakhali, Dhaka</span>
        </h3>
        <p className="font-archivo text-xs font-semibold pb-[6px]">Amount: 4,500 BDT</p>
        <p className="font-archivo text-[10px] px-4">4,500 from us to solve personal and family related problems to an unnamed person.</p>
      </div>
    </div>
  );
};

export default SlideContent;
