import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

function Gallery({ images, onImageClick }) {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">
      <div className="back-button" onClick={() => navigate('/upload')}>
        ← Back
      </div>
      <h1>Design Gallery</h1>
      <div className="gallery">
        {images.map(image => (
          <div key={image.id} className="gallery-item" onClick={() => onImageClick(image)}>
            <h2>{image.title}</h2>
            <img src={`http://127.0.0.1:8000${image.image}`} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
