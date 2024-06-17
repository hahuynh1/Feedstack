// functionality to click on an image to view it in a larger size.
import React from 'react';

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} />
        <h2>{image.title}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ImageModal;
