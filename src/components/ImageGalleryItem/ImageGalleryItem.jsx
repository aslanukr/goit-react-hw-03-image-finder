import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ modalImage, image, tags }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={image} alt={tags} />
    </li>
  );
};
