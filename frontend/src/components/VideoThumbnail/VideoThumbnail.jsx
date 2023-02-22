import { Link } from "react-router-dom";
import "./VideoThumbnail.css";

const VideoThumbnail = ({ video }) => {
  return (
    <div style={{ display: "inline-block", width: "50%" }}>
  <div key={video.id} style={{ width: "100%" }}>
    <Link to={`/video/${video.id}`}>
      <img
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        style={{ width: "100%", height: "200px" }}
      />
      <div
        style={{
          width: "100%",
          height: "75px",
          padding: "5px",
          textAlign: "center"
        }}
      >
        <h3 style={{ fontSize: "16px", margin: "0", color: "white" }}>
          {video.snippet.title}
        </h3>
      </div>
    </Link>
  </div>
</div>
  );
};

export default VideoThumbnail;
{/* <div style={{ display: "inline-block" }}>
<div key={video.id}>
  <Link to={`/video/${video.id}`}>
    <img
      src={video.snippet.thumbnails.high.url}
      alt={video.snippet.title}
      style={{ width: "340px", height: "235px", display: "inline-block" }}
    />
    <div
      style={{
        display: "inline-block",
        width: "240px",
        height: "50px",
        padding: "10px",
      }}
    >
      <h3 style={{ fontSize: "16px", margin: "0" }}>
        {video.snippet.title}
      </h3>
    </div>
  </Link>
</div>
</div> */}