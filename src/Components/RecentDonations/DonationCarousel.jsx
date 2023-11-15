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
      <div className="w-full max-w-screen-2xl h-0.5 bg-progressLine absolute top-[51px] z-00"></div>
      <Swiper
        onSwiper={setThumbsSwiper}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={'auto'}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="donate-Swiper max-w-screen-2xl mx-auto h-24 w-full"
        loop={true}
        initialSlide={6}
        loopedSlides={6}
      >
        {data?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full flex flex-col justify-center items-center gap-y-5">
              <p className={`${isBn ? 'font-lss' : 'font-archivo'} text-thunder-500`}>{isBn ? item?.approveBanglaDate : isEn ? item?.approveDate : undefined}</p>
              <div>
                <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Autoplay, FreeMode, Thumbs]}
        loop={true}
        className="date-swiper max-w-screen-2xl mx-auto w-full"
        initialSlide={6}
        loopedSlides={6}
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
