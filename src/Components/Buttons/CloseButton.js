import React from 'react';

const CloseButton = ({ onClose }) => {
  return (
    <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
  )
};

export default CloseButton;