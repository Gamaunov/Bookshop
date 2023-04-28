import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y, EffectCube } from 'swiper';
import slide_1 from '../../assets/img/carousel/banner.jpg';
import slide_2 from '../../assets/img/carousel/banner_2.jpg';
import slide_3 from '../../assets/img/carousel/banner_3.jpg';
import arrow from '../../assets/img/arrow.svg';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="main-slider">
      <Link to='/change-book'>
        <div className="slider-link slider-link--top">
          <p>Change old book on new</p>
          <span>
            <img className="link-arrow" src={arrow} alt="Arrow" />
          </span>
        </div>
      </Link>
      <Link to='/top-100' >
        <div className="slider-link slider-link--bottom">
          <p>top 100 books 2022</p>
          <span>
            <img className="link-arrow" src={arrow} alt="Arrow" />
          </span>
        </div>
      </Link>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y, EffectCube]}
        autoplay={{ delay: 5000000 }} //todo 5000
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect={'cube'}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        <SwiperSlide>
          <img className="slider-img" src={slide_1} alt="slide_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={slide_2} alt="slide_2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-img" src={slide_3} alt="slide_3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
