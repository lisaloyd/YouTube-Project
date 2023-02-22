const VideoPlayer = ({ videoId, videoDetails }) => {
  return (
    videoDetails && (
      <div className="videoPlayer">
        <iframe
          width="600"
          height="415"
          src={`https://www.youtube.com/embed/${videoId}`}
        ></iframe>
        <div>
          <h2>Title:</h2>
          <h3>{videoDetails.title}</h3>
          <h2>Description:</h2>
          <p>{videoDetails.description}</p>
        </div>
      </div>
    )
  );
};

export default VideoPlayer;
