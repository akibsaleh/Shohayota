/* eslint-disable react/prop-types */
import whyhelping from '../../assets/whyhelping.png';
import arrowTopLeft from '../../assets/VectorArrowTopLeft.svg';
import arrowBottomRight from '../../assets/VectorArrowBottomRight.svg';
import { useTranslation } from 'react-i18next';
const About = ({ aboutRef }) => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';

  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row max-w-1440 mx-auto w-full justify-center items-center gap-x-[80px] -mt-[86px] pt-[146px] pb-[90px]"
    >
      <div className="w-full lg:w-1/3 flex lg:block justify-center pb-10 lg:pb-0">
        <img
          src={whyhelping}
          className="w-auto h-auto lg:h-[500px] object-fill z-10"
        />
      </div>
      <div className="w-full lg:w-3/4 max-w-[682px] relative text-center lg:text-left space-y-4">
        <img
          src={arrowTopLeft}
          className="absolute -top-24 right-0"
        />
        <h2
          ref={aboutRef}
          className={`pb-4 ${isBn ? 'font-lss text-3xl md:text-[40px]' : 'font-archivo text-3xl md:text-[42px] font-extrabold leading-[56px]'} px-5 md:pb-3`}
        >
          {t('about.title')}
        </h2>
        <p className={`px-5 md:pb-0 pb-3 ${isBn ? 'font-nsb md:text-[22px]' : 'font-archivo md:text-[22px] font-light leading-[34px]'}`}>{t('about.description1')}</p>
        <p className={`px-5 md:pb-0 ${isBn ? 'font-nsb md:text-[22px]' : 'font-archivo md:text-[22px] font-light md:leading-[34px]'}`}>{t('about.description2')}</p>
        <img
          src={arrowBottomRight}
          className="absolute -bottom-24 left-0 lg:-left-28"
        />
      </div>
    </div>
  );
};

export default About;
