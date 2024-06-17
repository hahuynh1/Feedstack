import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Upload from './Components/Upload';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/images/')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the images!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <Upload />
      <div>
        {images.map(image => (
          <div key={image.id}>
            <h2>{image.title}</h2>
            <img src={`http://127.0.0.1:8000${image.image}`} alt={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
