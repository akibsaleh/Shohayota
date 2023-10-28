/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import FileIcon from './FileIcon';

const UploadButton = () => {
  const { t, i18n } = useTranslation('global');
  return (
    <div className="w-80 h-40 flex flex-col gap-1 justify-center items-center rounded-md bg-haze border border-thunder-300">
      <p className="flex items-start gap-2 text-xl leading-6 text-thunder-700 font-semibold">
        <FileIcon /> <span>{t('applicationFormStep2.upload')}</span>
      </p>
      <p className="leading-7 text-base text-thunder-500">{t('applicationFormStep2.fileType')}</p>
      
    </div>
  );
};

export default UploadButton;
