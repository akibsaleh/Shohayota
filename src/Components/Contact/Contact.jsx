/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import ContactForm from './ContactForm';
import footerBG from '../../assets/footer-bg.jpg';

const Contact = ({ contactRef }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const backgroundImage = {
    backgroundImage: `url(${footerBG})`,
  };
  return (
    <div className="pt-[206px]">
      <div className="mt-[140px] ">
        <div
          className="flex justify-center w-full bg-plant-700 pb-[120px] bg-contain bg-no-repeat bg-center"
          style={backgroundImage}
        >
          <div className="shadow-contactBox max-w-[794px] p-10 flex flex-col gap-y-10 bg-white rounded-xl -mt-[180px]">
            <div className="text-center gap-y-3 flex flex-col items-center">
              <h2 className={`text-thunder-700 ${isBn ? 'font-lss text-[40px] leading-[50px]' : 'text-[42px] leading-[56px] font-extrabold'}`}>{t('contact.title')}</h2>
              <p className={` text-thunder-500 ${isBn ? 'text-[22px] max-w-[650px]' : 'text-[22px] leading-[34px] font-light max-w-[800px]'}`}>{t('contact.description')}</p>
            </div>
            <ContactForm contactRef={contactRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
