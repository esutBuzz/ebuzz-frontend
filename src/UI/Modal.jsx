import React from 'react';
import './Modal.scss';

function Modal({children}) {
  return (
    <div id='modal' >
      {children}
    </div>
  )
}

export default Modal
