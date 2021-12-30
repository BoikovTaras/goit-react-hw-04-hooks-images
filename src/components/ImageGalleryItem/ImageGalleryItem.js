import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ src, alt, openModal, largeUrl }) {
  return (
    <li className={s.galleryItem} onClick={openModal}>
      <img
        className={s.galleryItemImage}
        src={src}
        alt={alt}
        onClick={largeUrl}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  openModal: PropTypes.func,
  largeUrl: PropTypes.func,
};
