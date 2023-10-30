import { useTranslation } from 'react-i18next';
// import CarouselSlide from './CarouselSlide';
import DonationCarousel from './DonationCarousel';

const RecentDonations = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  

  return (
    <div className="my-[140px]">
      <div className="text-center gap-y-3 flex flex-col items-center pb-16">
        <h2 className={`text-thunder-700 ${isBn ? 'font-lss text-[40px] leading-[50px]' : 'text-[42px] leading-[56px] font-extrabold'}`}>{t('recentDonations.title')}</h2>
        <p className={` text-thunder-500 ${isBn ? 'text-[22px] max-w-[650px]' : 'text-[22px] leading-[34px] font-light max-w-[800px]'}`}>{t('recentDonations.description')}</p>
      </div>
      {/* <CarouselSlide /> */}
      <DonationCarousel />
    </div>
  );
};

export default RecentDonations;
