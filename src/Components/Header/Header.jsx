import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/Shohayota-logo.svg';

const Header = () => {
  const [t, i18n] = useTranslation('global');
  const [btnStyle, setBtnStyle] = useState(true);

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
    <header className="fixed w-full bg-plant-700 border-b border-plant-600 z-50">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              src={logo}
              alt="Shohayota"
              className="w-auto h-10"
            />
          </span>
          <span className="font-bold font-lss text-white text-[40px] leading-none mt-1">সহায়তা</span>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-x-12">
            <button className="pt-[22.5px] pb-[18.5px] block text-white font-medium border-b-4  text-lg leading-10 border-white">
              <span>{t('navbar.home')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('about')}
              className="pt-[22.5px] pb-[18.5px] block text-white font-medium border-b-4  text-lg leading-10 border-white"
            >
              <span>{t('navbar.about')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('terms')}
              className="pt-[22.5px] pb-[18.5px] block text-white font-medium border-b-4  text-lg leading-10 border-white"
            >
              <span>{t('navbar.terms')}</span>
            </button>
            <button
              onClick={() => handleMenuItem('contact')}
              className="pt-[22.5px] pb-[18.5px] block text-white font-medium border-b-4  text-lg leading-10 border-white"
            >
              <span>{t('navbar.contact')}</span>
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-plant-600 p-[3px] rounded-full">
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
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer"
          >
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
            ></line>
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
            ></line>
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
            ></line>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
