import slide_1 from '../../assets/img/carousel/banner.jpg';
import slide_2 from '../../assets/img/carousel/banner_2.jpg';
import slide_3 from '../../assets/img/carousel/banner_3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
  EffectCube,
} from 'swiper';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y, EffectCube]}
      autoplay={{ delay: 5000 }}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={'cube'}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      <SwiperSlide>
        <img src={slide_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide_3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
