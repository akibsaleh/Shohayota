import { useTranslation } from 'react-i18next';
import DonationCarousel from './DonationCarousel';
// import DonationSlick from './DonationSlick';

const RecentDonations = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  return (
    <div className="mt-[140px] mb-5">
      <div className="text-center gap-y-3 flex flex-col items-center pb-16">
        <h2 className={`text-thunder-700 ${isBn ? 'font-lss text-3xl md:text-[40px] leading-[50px]' : 'text-3xl md:text-[42px] leading-[56px] font-extrabold'}  px-5 md:px-0`}>
          {t('recentDonations.title')}
        </h2>
        <p className={` text-thunder-500 ${isBn ? 'text-lg md:text-[22px] max-w-[650px]' : 'text-lg md:text-[22px] md:leading-[34px] font-light max-w-[800px]'} px-5 md:px-0`}>
          {t('recentDonations.description')}
        </p>
      </div>
      <DonationCarousel />
    </div>
  );
};

export default RecentDonations;
