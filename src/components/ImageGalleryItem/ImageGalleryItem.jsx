import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImgClick = e => {
    this.toggleModal();
  };

  render() {
    const { modalImage, image, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={image}
            alt={tags}
            onClick={this.handleImgClick}
          />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal} src={modalImage} alt={tags}></Modal>
        )}
      </>
    );
  }
}
