import { useTranslation } from 'react-i18next';
import ApplicationForm from './ApplicationForm';

const Application = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  return (
    <>
      <span id="application-form"></span>
      <div className="max-w-[794px] mx-auto mt-[96px]">
        <h1 className="text-center text-[40px] mb-3 font-bold">
          <span className={isBn && 'font-lss'}>{t('application.title')}</span>
        </h1>
        <p className="text-center text-base md:text-[22px] px-20 mb-12">{t('application.description').split('\n\n')}</p>
        <ApplicationForm />
      </div>
    </>
  );
};

export default Application;
