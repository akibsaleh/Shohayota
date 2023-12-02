import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SlideContentSlick from './SlideContentSlick';
import axios from 'axios';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DonationSlick = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://shohayota.vercel.app/slider').then((res) => setData(res.data));
  }, [setData]);

  const settings = {
    centerMode: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="relative flex flex-col w-full items-center overflow-hidden">
      <div className="w-full h-0.5 bg-progressLine absolute top-[51px] z-00"></div>
      <div className='w-full min-w-[1920px]'>
        <Slider {...settings}>
          {data?.map((item, idx) => (
            <div key={idx} className='min-h-[300px]'>
              <SlideContentSlick item={item}></SlideContentSlick>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DonationSlick;
