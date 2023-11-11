import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <div className="bg-plant-800 py-4 px-12 text-center">
      <p className="text-white leading-6 font-archivo mt-1">{t('copyright.text')}</p>
    </div>
  );
};

export default Footer;
