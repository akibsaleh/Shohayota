/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import TermsCard from './TermsCard';

const Terms = ({ termsRef }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const termsCount = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div
        id="terms"
        className="max-w-1440 mx-auto px-10"
      >
        <div className="text-left gap-y-3 flex flex-col items-start pb-16 pt-[90px]">
          <h2 className={`text-thunder-700 ${isBn ? 'font-lss text-[40px] leading-[50px]' : 'text-[42px] leading-[56px] font-extrabold'}`}>{t('terms.title')}</h2>
          <p className={` text-thunder-500 ${isBn ? 'text-[22px] max-w-[650px]' : 'text-[22px] leading-[34px] font-light max-w-[800px]'}`}>{t('terms.description')}</p>
        </div>
        <div
          ref={termsRef}
          className="grid grid-cols-4 gap-6"
        >
          {termsCount.map((i, idx) => (
            <TermsCard
              key={idx}
              num={i}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[86px]"></div>
    </>
  );
};

export default Terms;
