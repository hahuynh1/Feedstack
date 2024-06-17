import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

function UploadPage() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle file upload
    console.log(files);
  };

  return (
    <div className="upload-page">
      <div className="back-button" onClick={() => navigate('/')}>
        ← Back
      </div>
      <h1>Upload 1-3 design files.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadPage;
