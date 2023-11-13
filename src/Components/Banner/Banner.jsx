import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const handleApplicationButton = () => {
    const element = document.getElementById('application-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative w-full bg-plant-700 min-h-[550px] md:min-h-[719px] pt-[85.2px] mb-[44px] flex justify-center items-center ">
      <div className="bg-heroBanner w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-y-4">
        <h1 className="font-bold text-white leading-snug text-4xl md:text-5xl text-center px-5 md:px-0">
          <span className={isBn ? 'font-lss' : 'font-archivo'}>{t('banner.title')}</span>
        </h1>
        <p className="text-plant-100 text-base md:text-sxl leading-9 max-w-[830px] text-center px-5 md:px-0">
          <span>{t('banner.description')}</span>
        </p>
        <button
          onClick={handleApplicationButton}
          className="bg-white text-2xl leading-snug font-semibold py-3 px-8 rounded-full mt-4 sm:mt-12 text-[#215A4D]"
        >
          <span>{t('banner.button')}</span>
        </button>
      </div>
    </div>
  );
};

Banner.displayName = 'Banner';

export default Banner;
