import whyhelping from '../../assets/whyhelping.png';
import arrowTopLeft from '../../assets/VectorArrowTopLeft.svg';
import arrowBottomRight from '../../assets/VectorArrowBottomRight.svg';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  return (
    <div className="flex max-w-1440 mx-auto w-full justify-center items-center gap-x-[80px] py-[62px]">
      <div className="w-1/3">
        <img
          src={whyhelping}
          className="w-auto h-[500px] object-fill"
        />
      </div>
      <div className="w-3/4 max-w-[682px] relative">
        <img
          src={arrowTopLeft}
          className="absolute -top-24 right-0"
        />
        <h2 className={`pb-4 ${isBn ? 'font-lss text-[40px]' : 'font-archivo text-[42px] font-extrabold leading-[56px]'}`}>{t('about.title')}</h2>
        <p className={`pb-3 ${isBn ? 'font-nsb text-[22px]' : 'font-archivo text-[22px] font-light leading-[34px]'}`}>{t('about.description1')}</p>
        <p className={isBn ? 'font-nsb text-[22px]' : 'font-archivo text-[22px] font-light leading-[34px]'}>{t('about.description2')}</p>
        <img
          src={arrowBottomRight}
          className="absolute -bottom-24 -left-28"
        />
      </div>
    </div>
  );
};

export default About;
