import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  return (
    <div className="relative w-full bg-plant-700 min-h-[719px] pt-[85.2px] flex justify-center items-center ">
      <div className="bg-heroBanner w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-y-4">
        <h1 className="font-bold text-white leading-snug text-5xl">
          <span className={isBn ? 'font-lss' : 'font-archivo'}>{t('banner.title')}</span>
        </h1>
        <p className="text-plant-100 text-sxl max-w-[830px] text-center">
        <span>{t('banner.description')}</span>
        </p>
        <button className="bg-white text-2xl leading-snug font-semibold py-3 px-8 rounded-full mt-12">
          <span>{t('banner.button')}</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
