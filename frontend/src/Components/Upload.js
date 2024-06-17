import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    axios.post('http://127.0.0.1:8000/api/images/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Image uploaded successfully:', response.data);
    })
    .catch(error => {
      console.error('There was an error uploading the image!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files[0])} 
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default Upload;
