import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ExpandingCard.module.css';

// PARAMETERS:
// image: string representing path to image
// alt: string assigned to alt attribute
export default function ExpandingCard({ image, alt, initialBorder }) {
  useEffect(() => {
  }, []);

  function initializeContainerClassName() {
    if (initialBorder) {
      return styles.containerWithInitialBorder;
    }
    return styles.container;
  }
  return (
    <div
      className={initializeContainerClassName()}
    >
      <img
        className={styles.image}
        src={image}
        alt={alt}
      />
    </div>
  );
}

ExpandingCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  initialBorder: PropTypes.bool,
};

ExpandingCard.defaultProps = {
  image: '',
  alt: 'image',
  initialBorder: false,
};
