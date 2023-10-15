import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEng = i18n.language === 'en';
  return (
    <div className="relative w-full bg-plant-700 min-h-[719px] pt-[85.2px] flex justify-center items-center ">
      <div className="bg-heroBanner w-full h-full absolute inset-0 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-y-4">
        <h1 className="font-bold text-white leading-snug text-5xl">
          {isBn && <span className="font-lss">পরিচয় গোপন রেখে ক্ষুদ্র আর্থিক সহায়তা</span>}
          {isEng && <span className="font-archivo">A Small, Anonymous Financial Assistance</span>}
        </h1>
        <p className="text-plant-100 text-sxl max-w-[830px] text-center">
          {isBn && <span className="font-nsb">আমাদের সীমিত আর্থিক সহায়তা যদি আপনার বা আপনার পরিবারের প্রশস্তি দিতে সক্ষম হয়, আমরা সর্বত্তম চেষ্টা করবো আপনার বা আপনার পরিবারের পাশে দাঁড়াতে।</span>}
          {isEng && (
            <span className="font-archivo font-light">
              We believe in the power of small acts of kindness. We provide discreet financial assistance to those in need, ensuring your identity remains confidential. Together, we make a difference,
              one small helping hand at a time.
            </span>
          )}
        </p>
        <button className="bg-white text-2xl leading-snug font-semibold py-3 px-8 rounded-full mt-12">
          {isBn && <span className="font-nsb">{t('banner.button')}</span>}
          {isEng && <span className="font-archivo">{t('banner.button')}</span>}
        </button>
      </div>
    </div>
  );
};

export default Banner;
