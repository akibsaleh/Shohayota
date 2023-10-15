import { useTranslation } from 'react-i18next';
import people from '../../assets/people-fill.svg';
import gift from '../../assets/gift-fill.svg';
const Achievements = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEng = i18n.language === 'en';

  return (
    <div className="relative max-w-screen-xl mx-auto bg-apache min-h-[212px] -mt-[106px] z-20 rounded-[20px] px-[60px] py-[50px] flex">
      <div className="w-6/12">
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
      <div className="w-6/12 flex items-center">
        <div className="w-1/2 flex items-center justify-center gap-x-6 text-thunder-700">
          <img
            src={people}
            alt="Assited"
            className="w-[68] h-auto p-[14px] bg-white/40 rounded-[20px]"
          />
          <div>
            <p className="text-2xl font-medium leading-[36px] -mb-[5px]">{t('achieve.assist')}</p>
            <p className="text-[26px] font-bold leading-[48px]">
              {t('achieve.assist_no')} {isBn ? 'জন' : 'Individuals'}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center gap-x-6 text-thunder-700">
          <img
            src={gift}
            alt="Donated"
            className="w-[68] h-auto p-[14px] bg-white/40 rounded-[20px]"
          />
          <div>
            <p className="text-2xl font-medium leading-[36px] -mb-[5px]">{t('achieve.donate')}</p>
            <p className="text-[26px] font-bold leading-[48px]">
              {t('achieve.donated_amount')} {isBn ? 'টাকা' : 'BDT'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
