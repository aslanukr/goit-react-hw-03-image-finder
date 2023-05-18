import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalLayer, Overlay } from './Modal.styled';

// import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalLayer>
          <img src={src} alt={alt} />
        </ModalLayer>
      </Overlay>,
      modalRoot
    );
  }
}
