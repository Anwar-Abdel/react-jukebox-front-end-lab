import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TrackForm from './components/TrackForm';
import api from './api';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [editingTrack, setEditingTrack] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await api.get('/');
        setTracks(response.data);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    fetchTracks();
  }, []);

  const handleTrackSubmit = async (track) => {
    try {
      if (track._id) {
        const response = await api.put(`/${track._id}`, track);
        setTracks(tracks.map((t) => (t._id === track._id ? response.data : t)));
      } else {
        const response = await api.post('/', track);
        setTracks([...tracks, response.data]);
      }
      setEditingTrack(null);
    } catch (error) {
      console.error('Error submitting track:', error);
    }
  };

  const handleTrackDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      setTracks(tracks.filter((track) => track._id !== id));
    } catch (error) {
      console.error('Error deleting track:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tracks={tracks}
              onEdit={setEditingTrack}
              onDelete={handleTrackDelete}
              onPlay={setPlayingTrack}
              playingTrack={playingTrack}
            />
          }
        />
        <Route
          path="/add-track"
          element={
            <TrackForm
              onSubmit={handleTrackSubmit}
              track={null}
              onCancel={() => setEditingTrack(null)}
            />
          }
        />
        <Route
          path="/edit-track/:trackId"
          element={
            <TrackForm
              onSubmit={handleTrackSubmit}
              track={editingTrack}
              onCancel={() => setEditingTrack(null)}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
