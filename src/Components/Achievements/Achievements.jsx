import { useTranslation } from 'react-i18next';
const Achievements = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEng = i18n.language === 'en';

  return (
    <div className="relative max-w-screen-xl mx-auto bg-apache min-h-[212px] -mt-[106px] z-20 rounded-[20px] px-[60px] py-[50px] flex">
      <div>
        <h2 className="text-[42px] text-thunder-700 leading-snug font-bold">
          {isBn && (
            <span className="font-lss">
              এখন পর্যন্ত
              <br />
              আমাদের অর্জনসমূহ
            </span>
          )}
          {isEng && (
            <span className="font-archivo">
              Our Accomplishments
              <br />
              to Date
            </span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Achievements;
