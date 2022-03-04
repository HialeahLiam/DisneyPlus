import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styles from '../styles/CardSlider.module.css';

export default function CardSlider({ children }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings} className={styles.carousel}>
      {children}
    </Slider>
  );
}

CardSlider.propTypes = {
  children: PropTypes.node.isRequired,
};
