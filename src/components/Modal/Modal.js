import React, { useEffect } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, []);

  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const clickOnModal = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={clickOnModal}>
      <div className={s.modal}>{this.props.children}</div>
    </div>,
    modalRoot,
  );
}

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.hendleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hendleKeyDown);
//   }

// hendleKeyDown = e => {
//   if (e.code === 'Escape') {
//     this.props.onClose();
//   }
// };

// clickOnModal = event => {
//   if (event.target === event.currentTarget) {
//     this.props.onClose();
//   }
// };

//   render() {
//     return createPortal(
//       <div className={s.overlay} onClick={this.clickOnModal}>
//         <div className={s.modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }
