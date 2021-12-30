import { useState, useEffect } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import imageApi from '../../servises/image-api.js';

export default function ImageGallery({ name }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [largeUrl, setLargeUrl] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setPage(1);
  }, [name]);

  useEffect(() => {
    if (name === '') {
      setStatus('idle');
    } else {
      setStatus('pending');
      imageApi
        .fetchImage(name, page)
        .then(images => setImages(images.hits), setStatus('resolved'))
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [name, page]);

  const toggleModal = e => {
    setShowModal(!showModal);
  };

  const getLargeUrl = url => setLargeUrl(url.target.alt);

  const loadMore = () => setPage(page + 1);

  if (status === 'idle') {
    return <h2 className={s.title}>Let's find some images</h2>;
  }
  if (status === 'pending') {
    return <Loader />;
  }
  if (status === 'rejected') {
    return <h2 className={s.title}>{error.message}</h2>;
  }
  if (status === 'resolved') {
    return (
      <>
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeUrl} alt="www" />
          </Modal>
        )}
        <ul className={s.gallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.largeImageURL}
              openModal={toggleModal}
              largeUrl={getLargeUrl}
            />
          ))}
        </ul>

        <Button onClick={loadMore} />
      </>
    );
  }
}
