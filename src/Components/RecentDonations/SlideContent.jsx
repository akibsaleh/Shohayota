/* eslint-disable react/prop-types */
// import { PiCircleFill, PiMapPinDuotone } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { PiMapPinDuotone } from 'react-icons/pi';

const SlideContent = ({ item }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEn = i18n.language === 'en';

  return (
    <>
      {/* <p className="font-archivo text-sm font-semibold text-center pb-[30px]">27 December, 2022</p>
      <PiCircleFill className="absolute stroke-plant-700 text-snow top-8 left-1/2 -translate-x-1/2 stroke-[20px]" /> */}
      <div className="slideContentContainer w-ful flex flex-col justify-center items-center">
        <div className="relative duration-200 transition-all slideContent w-[276px] h-[115px] px-3 py-5 bg-white shadow-donateBox rounded-md text-center drop-shadow-md flex flex-col justify-center items-center">
          <h3 className="flex justify-center items-center -ml-3 leading-[22px]">
            <PiMapPinDuotone className="mr-2" />
            <span className="font-archivo text-base font-semibold">{isBn ? item?.areaBangla : isEn ? item?.area : ''}</span>
          </h3>
          <p className="font-archivo text-xs font-semibold pb-[6px]">
            {t('recentDonations.amount')} {isBn ? item?.amount.toLocaleString('bn-BD') : isEn ? item?.amount : ''} {t('recentDonations.currency')}
          </p>
          <p className="font-archivo text-[10px] px-4">4,500 from us to solve personal and family related problems to an unnamed person.</p>
        </div>
      </div>
    </>
  );
};

export default SlideContent;
