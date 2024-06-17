import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome({ onSubmit }) {
  const [participantId, setParticipantId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (participantId >= '00' && participantId <= '15') {
      onSubmit(participantId);
      navigate('/upload');
    } else {
      alert('Please enter a valid participant ID (00-15).');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Feedstack!</h1>
      <p>Please upload your participant ID.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={participantId}
          onChange={(e) => setParticipantId(e.target.value)}
          placeholder="Participant ID"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Welcome;
