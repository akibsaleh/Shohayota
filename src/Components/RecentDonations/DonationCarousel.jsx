import { useRef } from 'react';
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode } from 'swiper/modules';
import { BsCircleFill } from 'react-icons/bs';
import SlideContent from './SlideContent';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import DonationCarouselCard from './DonationCarouselCard';
import { useInView } from 'react-intersection-observer';

const DonationCarousel = () => {
  const { t, i18n } = useTranslation('global');
  const isBn = i18n.language === 'bn';
  const isEn = i18n.language === 'en';
  const [data, setData] = useState(null);
  const [startCrsl, setStartCrsl] = useState(false);
  const {ref: recentDonationCarousel , inView} = useInView();
  const donationSwiper = useRef(null);
  useEffect(() => {
    axios.get('https://shohayota.vercel.app/slider').then((res) => setData(res.data));
    const swiper = donationSwiper.current.swiper;
    if(inView) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [inView, setData]);

  console.log(data);

  return (
    <div ref={recentDonationCarousel} className="relative flex flex-col w-full items-center overflow-hidden">
      <div className="w-full h-0.5 bg-progressLine absolute top-[51px] z-00"></div>
      <div>
        <Swiper
        ref={donationSwiper}
          slidesPerView={5}
          spaceBetween={0}
          centeredSlides={true}
          slideToClickedSlide = {true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          // onLoadStart={'false'}
          className="donationSwiper max-w-[1920px] !overflow-hidden"
        >
          {data?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <DonationCarouselCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DonationCarousel;

// left-[7vw] sm:left-[26.5vw] lg:left-[30vw]

{
  /* <Swiper
slidesPerView={1}
spaceBetween={0}
loop={false}
centeredSlides={true}
className="donation-slide left-[7vw] sm:left-[26.5vw] lg:left-[30vw] max-w-screen-2xl mx-auto w-full relative !overflow-hidden"
// initialSlide={0}
modules={[FreeMode, Autoplay]}
freeMode={true}
>
{data?.map((item, idx) => (
  <SwiperSlide key={idx}>
    <SlideContent item={item} />
  </SwiperSlide>
))}
</Swiper> */
}
