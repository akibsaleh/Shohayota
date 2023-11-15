/* eslint-disable react/no-unknown-property */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideContent from './SlideContent';
// import { BsCircleFill } from 'react-icons/bs';
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';

const CarouselSlide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="max-w-1440 mx-auto mt-[42px] relative w-full overflow-hidden">
      <div className="w-full max-w-1440 h-0.5 bg-progressLine absolute top-[11px] z-10"></div>
      <div className="w-[1440px] ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={5}
          autoplay={{ delay: 2000 }}
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Autoplay, EffectCoverflow, FreeMode, Navigation, Thumbs]}
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
        </Swiper>
        <swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={5}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
        >
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>Hello</p>
          </SwiperSlide>
        </swiper>
      </div>
    </div>
  );
};

export default CarouselSlide;

// modules={[Autoplay]}
