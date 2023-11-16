/* eslint-disable react/prop-types */
// import { PiCircleFill, PiMapPinDuotone } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { BsCircleFill } from 'react-icons/bs';
import { PiCircleFill, PiMapPinDuotone } from 'react-icons/pi';

const SlideContent = ({ item }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEn = i18n.language === 'en';

  return (
    <div className="flex flex-col items-center">
      <p className={`${isBn ? 'font-lss' : 'font-archivo'} text-thunder-700/60 [.swiper-slide-active_&]:text-thunder-700`}>{isBn ? item?.approveBanglaDate : isEn ? item?.approveDate : undefined}</p>
      <div className="pt-5 pb-14 relative">
        <PiCircleFill className="absolute [.swiper-slide-active_&]:text-plant-700 stroke-snow text-snow top-[21px] left-1/2 -translate-x-1/2 stroke-[20px] text-sm" />
        <BsCircleFill className="border-[2px] border-plant-700 -mt-[1px] text-snow rounded-full text-lg" />
      </div>

      <div className="slideContentContainer w-ful flex flex-col justify-center items-center text-thunder-700/60 [.swiper-slide-active_&]:text-thunder-700">
        <div className="relative duration-200 transition-all slideContent w-[276px] h-[115px] px-3 py-5 bg-white shadow-donateBox rounded-md text-center drop-shadow-md flex flex-col justify-center items-center">
          <h3 className="flex justify-center items-center -ml-3 leading-[22px]">
            <PiMapPinDuotone className="mr-2" />
            <span className={`${isBn ? 'font-lss' : 'font-archivo'} text-base font-semibold`}>{isBn ? item?.areaBangla : isEn ? item?.area : undefined}</span>
          </h3>
          <p className="font-archivo text-xs font-semibold pb-[6px]">
            {t('recentDonations.amount')} {isBn ? item?.amount.toLocaleString('bn-BD') : isEn ? item?.amount : ''} {t('recentDonations.currency')}
          </p>
          <p className="font-archivo text-[10px] px-4">
            {isBn
              ? `নাম অপ্রকাশিত একজনকে ব্যাক্তিগত এবং পরিবারজনিত সমস্যা সমাধানের জন্যে আমাদের থেকে ${item?.amount.toLocaleString('bn-BD')} টাকা প্রদান করা হয়।`
              : isEn
              ? `We extended a sum of ${item?.amount} BDT to an individual to address personal and family-related challenges.`
              : undefined}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
