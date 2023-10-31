/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/Shohayota-logo.svg';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = ({ elementsInViewport }) => {
  const [t, i18n] = useTranslation('global');
  const [btnStyle, setBtnStyle] = useState(true);
  const [visible, setVisible] = useState(false);

  const { aboutIsInViewport, homeIsInViewport, termsIsInViewport, contactIsInViewport } = elementsInViewport;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMenuItem = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-plant-700 border-b border-plant-600 z-50 px-2 lg:px-0 py-5 md:py-0">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 order-2 md:order-1 w-[136px] md:w-auto">
          <span>
            <img
              src={logo}
              alt="Shohayota"
              className="w-auto h-8 lg:h-10"
            />
          </span>
          <span className="font-bold font-lss text-white text-3xl lg:text-[40px] leading-none mt-1">সহায়তা</span>
        </div>
        <div className="hidden order-2 md:block">
          <div className="flex gap-x-5 lg:gap-x-12">
            <button
              onClick={() => handleMenuItem('home')}
              className={`pt-[22.5px] pb-[18.5px] block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 text-lg leading-10 ${
                homeIsInViewport ? 'border-white' : 'border-transparent'
              }`}
            >
              <span>{t('navbar.home')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('about')}
              className={`pt-[22.5px] pb-[18.5px] block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 text-lg leading-10 ${
                !homeIsInViewport && aboutIsInViewport ? 'border-white' : 'border-transparent'
              }`}
            >
              <span>{t('navbar.about')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('terms')}
              className={`pt-[22.5px] pb-[18.5px] block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 text-lg leading-10 ${
                !aboutIsInViewport && termsIsInViewport ? 'border-white' : 'border-transparent'
              }`}
            >
              <span>{t('navbar.terms')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('contact')}
              className={`pt-[22.5px] pb-[18.5px] block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 text-lg leading-10 ${
                !termsIsInViewport && contactIsInViewport ? 'border-white' : 'border-transparent'
              }`}
            >
              <span>{t('navbar.contact')}</span>
            </button>
          </div>
        </div>
        <div className="block order-1 md:order-3 w-[136px] md:w-auto">
          <div className="bg-plant-600 p-[3px] rounded-full w-fit">
            <button
              onClick={() => {
                handleLanguageChange('bn');
                setBtnStyle(true);
              }}
              className={`px-2 py-0.5 rounded-full font-nsb text-base w-[60px] text-center ${btnStyle ? 'bg-white text-thunder-700' : 'bg-plant-600 text-plant-300'}`}
            >
              {t('navbar.btnBangla')}
            </button>
            <button
              onClick={() => {
                handleLanguageChange('en');
                setBtnStyle(false);
              }}
              className={`px-2 py-0.5 rounded-full font-archivo text-base w-[60px] text-center ${!btnStyle ? 'bg-white text-thunder-700' : 'bg-plant-600 text-plant-300'}`}
            >
              {t('navbar.btnEnglish')}
            </button>
          </div>
        </div>
        <div className="md:hidden order-3 w-[136px] md:w-auto flex justify-end relative">
          <button
            className="p-2.5"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            <HiOutlineMenu className="text-white text-2xl" />
          </button>
          <div className={`${visible ? 'flex' : 'hidden'} flex-col gap-x-5 lg:gap-x-12 absolute top-16 z-50 bg-plant-600 w-52 rounded-lg`}>
            <button
              onClick={() => handleMenuItem('home')}
              className={`py-2.5 block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 ${homeIsInViewport ? 'border-white text-white' : 'border-transparent'}`}
            >
              <span>{t('navbar.home')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('about')}
              className={`py-2.5 block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 ${!homeIsInViewport && aboutIsInViewport ? 'border-white text-white' : 'border-transparent'}`}
            >
              <span>{t('navbar.about')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('terms')}
              className={`py-2.5 block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 ${!aboutIsInViewport && termsIsInViewport ? 'border-white text-white' : 'border-transparent'}`}
            >
              <span>{t('navbar.terms')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('contact')}
              className={`py-2.5 block text-[#87C6B6] font-medium border-b-4 transition-all duration-200 ${
                !termsIsInViewport && contactIsInViewport ? 'border-white text-white' : 'border-transparent'
              }`}
            >
              <span>{t('navbar.contact')}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
