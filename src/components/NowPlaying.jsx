
function NowPlaying({ track }) {
  return (
    <div>
      <h2>Now Playing</h2>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
    </div>
  );
}

export default NowPlaying;
