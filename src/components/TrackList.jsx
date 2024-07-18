
function TrackList({ tracks, onDelete, onEdit, onPlay }) {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track._id}>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
          <button onClick={() => onPlay(track)}>Play</button>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
