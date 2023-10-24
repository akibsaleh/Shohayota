import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TermsCard = ({ num }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  return (
    <div className="p-5 rounded-xl flex flex-col bg-white text-left gap-y-2.5 shadow-termsBox h-fit">
      <h4 className={`text-plant-700 text-[40px] leading-[44px] ${isBn ? 'font-lss ' : 'font-black'}`}>{t(`terms.c${num}t`)}</h4>
      <p className={` text-thunder-700 text-lg ${isBn ? 'leading-[30px]' : 'leading-[28px] font-light'}`}>{t(`terms.c${num}d`)}</p>
    </div>
  );
};

export default TermsCard;

TermsCard.propTypes = {
  num: PropTypes.number.isRequired,
};
