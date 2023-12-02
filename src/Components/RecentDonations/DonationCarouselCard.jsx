/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import { BsCircleFill } from 'react-icons/bs';
import { PiCircleFill, PiMapPinDuotone } from 'react-icons/pi';

import donationBg from '../../assets/donationCarouselbg.svg';
const DonationCarouselCard = ({ item }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEn = i18n.language === 'en';
  return (
    <div className="w-full flex flex-col items-center text-slate-900 h-[300px] overflow-visible">
      <p className={`${isBn ? 'font-lss' : 'font-archivo'} text-thunder-700 opacity-50 delay-100 duration-200 transition-all [.swiper-slide-active_&]:opacity-100`}>{isBn ? item?.approveBanglaDate : isEn ? item?.approveDate : undefined}</p>
      <div className="pt-5 pb-8 relative">
        <PiCircleFill className="absolute delay-100 duration-200 transition-all [.swiper-slide-active_&]:text-plant-700 stroke-snow text-snow top-[21px] left-1/2 -translate-x-1/2 stroke-[20px] text-sm" />
        <BsCircleFill className="border-[2px] border-plant-700 -mt-[1px] text-snow rounded-full text-lg" />
      </div>
      <div
        style={{ backgroundImage: `url(${donationBg})` }}
        className="px-3 pb-10 bg-contain bg-center bg-no-repeat overflow-visible flex flex-col justify-center items-center delay-100 duration-200 transition-all [.swiper-slide-active_&]:scale-100 scale-[0.85]"
      >
        <div className="relative duration-200 transition-all slideContent text-center mt-12">
          <h3 className="flex justify-center items-center -ml-3 text-2xl pb-2 delay-100 duration-200 transition-all [.swiper-slide-active_&]:opacity-100 opacity-50">
            <PiMapPinDuotone className="mr-2" />
            <span className={`${isBn ? 'font-lss' : 'font-archivo'} font-semibold`}>{isBn ? item?.areaBangla : isEn ? item?.area : undefined}</span>
          </h3>
          <p className="font-archivo font-semibold pb-[10px] delay-100 duration-200 transition-all [.swiper-slide-active_&]:opacity-100 opacity-50">
            {t('recentDonations.amount')} {isBn ? item?.amount.toLocaleString('bn-BD') : isEn ? item?.amount : ''} {t('recentDonations.currency')}
          </p>
          <p className="font-archivo text-xs px-4 delay-100 duration-200 transition-all [.swiper-slide-active_&]:opacity-100 opacity-50">
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

export default DonationCarouselCard;
