import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images &&
        images.map(({ id, largeImageURL, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            modalImage={largeImageURL}
            image={webformatURL}
            tags={tags}
          />
        ))}
    </ul>
  );
};
