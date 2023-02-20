// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const VideoPage = ({ getSearchResults }) => {
//   const { videoId } = useParams();
//   const [videoDetails, setVideoDetails] = useState();
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     const fetchVideoDetails = async (videoId) => {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyCEBP1iWGyipUuzpaU04MlWKUIlOxLOfsA`
//       );
//       const data = response.data;
//       if (data && data.items && data.items.length > 0) {
//         const video = response.data.items[0];
//         setVideoDetails(video.snippet);
//       }
//     };
//     fetchVideoDetails();
//   }, [videoId]);

//   const handleVideoClick = () => {
//     setShowVideo(true);
//   };

//   return (
//     <div>
//       <div>
//         <SearchBar getSearchResults={getSearchResults} />
//       </div>
//       {videoDetails && (
//         <div>
//             <iframe
//             width="400"
//             height="315"
//             src={`https://www.youtube.com/embed/${videoId}`}
//           ></iframe>
//           <div>
//             <h2>{videoDetails.title}</h2>
//             <p>{videoDetails.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoPage;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SearchBar = ({ getSearchResults }) => {
//   const [searchTerm, setSearchTerm] = useState("");


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (typeof getSearchResults === "function") {
//       getSearchResults(searchTerm);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Search Bar</label>
//       <input
//         type="search"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       <button to="/my-search">Search</button>
      
//     </form>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import VideoPage from "../VideoPage/VideoPage";
// import axios from "axios";

// const SearchPage = ({ searchResults, setSearchResults, getSearchResults }) => {
//   const [selectedVideoId, setSelectedVideoId] = useState(null);

//   function handleVideoSelect(videoId) {
//     setSelectedVideoId(videoId);
//   }

//   return (
//     <div>
//       {selectedVideoId ? (
//         <VideoPage videoId={selectedVideoId} />
//       ) : (
//         <div>
//           <SearchBar getSearchResults={getSearchResults} />
//           <div>
//             {searchResults.map((video) => (
//               <div key={video.id}>
//                 <Link
//                   to="/video/:videoId"
//                   onClick={() => handleVideoSelect(video.id)}
//                 >
//                   <iframe
//                     width={video.snippet.thumbnails.high.width}
//                     height={video.snippet.thumbnails.high.height}
//                     src={video.snippet.thumbnails.high.url}
//                     title={video.snippet.title}
//                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     // allowFullScreen
//                   ></iframe>
//                   <h2>{video.snippet.title}</h2>
//                   <p>{video.snippet.description}</p>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchPage;




// // General Imports
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import React, { useState } from 'react';


// // Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";

// // Component Imports
// import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
// import SearchPage from "./components/SearchPage/SearchPage"
// import VideoPage from "./components/VideoPage/VideoPage"


// // Util Imports
// import PrivateRoute from "./utils/PrivateRoute";
// import axios from "axios";
// import { useEffect } from "react";

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   async function getSearchResults(searchTerm) {
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchTerm}&type=video&key=AIzaSyCEBP1iWGyipUuzpaU04MlWKUIlOxLOfsA`
//     );
//     if (response.data.items) {
//       setSearchResults(
//         response.data.items.map((item) => ({
//           id: item.id.videoId,
//           snippet: item.snippet,
//         }))
//       );
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <PrivateRoute>
//               <HomePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/my-search" element={<SearchPage searchResults={searchResults} setSearchResults={setSearchResults}  getSearchResults={getSearchResults}/>} />
//         <Route path="/video/:videoId" element={<VideoPage />} />
//         {/* <Route path="/search" element={<SearchBar />} /> */}
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;
