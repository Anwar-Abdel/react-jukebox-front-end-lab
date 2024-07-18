import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ tracks, onEdit, onDelete, onPlay, playingTrack }) => {
  const navigate = useNavigate();

  const handleEditClick = (track) => {
    onEdit(track);
    navigate(`/edit-track/${track._id}`);
  };

  const handleAddClick = () => {
    navigate('/add-track');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleAddClick}>Add Track</button>
      <div>
        <h2>Track List</h2>
        <ul>
          {tracks.map((track) => (
            <li key={track._id}>
              <span>{track.title}</span>
              <button onClick={() => handleEditClick(track)}>Edit</button>
              <button onClick={() => onDelete(track._id)}>Delete</button>
              <button onClick={() => onPlay(track)}>Play</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
