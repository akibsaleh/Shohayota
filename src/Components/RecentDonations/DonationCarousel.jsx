/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsCircleFill } from 'react-icons/bs';
import SlideContent from './SlideContent';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const DonationCarousel = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEn = i18n.language === 'en';
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://shohahoyta-server.vercel.app/slider').then((res) => setData(res.data));
  }, [setData]);

  return (
    <div className="relative flex flex-col w-full items-center">
      <div className="w-full h-0.5 bg-progressLine absolute top-[51px] z-00"></div>
      <Swiper
        slidesPerView={'auto'}
        loop={true}
        className="donation-slide max-w-screen-2xl mx-auto w-full relative left-[7vw] sm:left-[26.5vw] lg:left-[30vw] !overflow-visible"
        initialSlide={3}
      >
        {data?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <SlideContent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DonationCarousel;
