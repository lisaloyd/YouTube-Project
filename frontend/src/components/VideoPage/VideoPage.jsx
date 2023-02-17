import { useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const VideoPage = ({}) => {
  const { videoId } = useParams();

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        {/* <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe> */}
        <iframe
          src={
            "https://www.youtube.com/embed/VywxIQ2ZXw4"
          }
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
