import { useTranslation } from 'react-i18next';
import ApplicationForm from './ApplicationForm';

const Application = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  return (
    <div className='max-w-[794px] mx-auto pt-[140px]'>
      <h1 className='text-center text-[40px] mb-3'><span className={isBn && 'font-lss'}>{t('application.title')}</span></h1>
      <p className='text-center text-[22px]'>{t('application.description')}</p>
      <ApplicationForm />
    </div>
  );
};

export default Application;
