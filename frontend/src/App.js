import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Upload from './Components/Upload';
import ImageModal from './Components/ImageModal';
import Welcome from './Components/Welcome';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [participantId, setParticipantId] = useState(null);

  useEffect(() => {
    if (participantId) {
      axios.get('http://127.0.0.1:8000/api/images/')
        .then(response => {
          setImages(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There was an error fetching the images!', error);
          setLoading(false);
        });
    }
  }, [participantId]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (!participantId) {
    return <Welcome onSubmit={setParticipantId} />;
  }

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <Upload />
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="gallery">
          {images.map(image => (
            <div key={image.id} className="gallery-item" onClick={() => handleImageClick(image)}>
              <h2>{image.title}</h2>
              <img src={`http://127.0.0.1:8000${image.image}`} alt={image.title} />
            </div>
          ))}
        </div>
      )}
      <ImageModal image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
}

export default App;