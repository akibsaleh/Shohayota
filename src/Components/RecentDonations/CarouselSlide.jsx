/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideContent from './SlideContent';
// import { PiMapPinDuotone } from 'react-icons/pi';
// import { Autoplay } from 'swiper/modules';

const CarouselSlide = () => {
  return (
    <div className="max-w-1440 mx-auto mt-[42px] relative">
      <div className="w-full max-w-1440 h-0.5 bg-progressLine absolute top-10"></div>
      <Swiper
        slidesPerView={5}
        autoplay={{ delay: 3000 }}
        spaceBetween={36}
        loop={true}
      >
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSlide;

// modules={[Autoplay]}
