import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import style from '../styles/ImageSlider.module.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings} className={style.carousel}>
      <div className={style.movieBanner}>
        <a href="w">
          <img className={style.movieImage} src="/images/slider-badging.jpg" alt="" />
        </a>
      </div>
      <div className={style.movieBanner}>
        <a href="w">
          <img className={style.movieImage} src="/images/slider-badag.jpg" alt="" />
        </a>
      </div>
      <div className={style.movieBanner}>
        <a href="w">
          <img className={style.movieImage} src="/images/slider-scale.jpg" alt="" />
        </a>
      </div>
      <div className={style.movieBanner}>
        <a href="w">
          <img className={style.movieImage} src="/images/slider-scales.jpg" alt="" />
        </a>
      </div>

    </Slider>
  );
}
