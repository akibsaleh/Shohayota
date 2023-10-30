import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { BsCircleFill } from 'react-icons/bs';
import SlideContent from './SlideContent';

const DonationCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  

  return (
    <div className="relative flex flex-col w-full items-center">
      <div className="w-full max-w-screen-2xl h-0.5 bg-progressLine absolute top-[51px] z-00"></div>
      <Swiper
        onSwiper={setThumbsSwiper}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={'auto'}
        freeMode={false}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="donate-Swiper max-w-screen-2xl mx-auto h-24"
        loop={true}
      >
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 17,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 18,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 19,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 20,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 21,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 22,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 23,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 24,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 25,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 26,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 26,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 26,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 26,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col justify-center items-center gap-y-5">
            <p>January 26,2023</p>
            <div>
              <BsCircleFill className="text-white border-2 border-plant-700 rounded-full text-base" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Autoplay, FreeMode, Thumbs]}
        loop={true}
        className="date-swiper max-w-screen-2xl mx-auto"
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

export default DonationCarousel;
