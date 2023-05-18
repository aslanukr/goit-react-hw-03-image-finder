import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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
        <ImageItem>
          <Image src={image} alt={tags} onClick={this.handleImgClick} />
        </ImageItem>
        {showModal && (
          <Modal onClose={this.toggleModal} src={modalImage} alt={tags}></Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  modalImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
