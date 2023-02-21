const VideoPlayer = ({ videoId, videoDetails }) => {
  return (
    videoDetails && (
      <div>
        <iframe
          width="400"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
        <div>
          <h2>{videoDetails.title}</h2>
          <p>{videoDetails.description}</p>
        </div>
      </div>
    )
  );
};

export default VideoPlayer;
