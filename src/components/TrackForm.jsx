import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TrackForm({ onSubmit, track, onCancel }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (track) {
      setTitle(track.title || '');
      setArtist(track.artist || '');
    }
  }, [track]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ _id: track?._id, title, artist });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Artist:</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} required />
      </div>
      <button type="submit">{track ? 'Update' : 'Add'} Track</button>
      <button type="button" onClick={() => {
        onCancel();
        navigate('/');
      }}>Cancel</button>
    </form>
  );
}

export default TrackForm;
