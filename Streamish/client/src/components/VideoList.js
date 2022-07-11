import React, { useEffect, useState } from "react";
import Video from "./Video";
import { VideoForm } from "./VideoForm";
import { getAllVideos, searchVideos } from "../modules/videoManager";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  const getVideos = () => {
    getAllVideos().then((r) => setVideos(r));
  };

  const handleInput = (event) => {
    let searchInput = event.target.value;
    setSearch(searchInput);
  };

  const handleButtonClick = () => {
    searchVideos(search, false).then((r) => setVideos(r));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
      <div className="searchBar">
        <div className="searchEntry">
          <input
            type="text"
            placeholder="Search: "
            value={search}
            onChange={handleInput}
          />
          <button className="searchButton" onClick={handleButtonClick}>
            Submit
          </button>
        </div>
      </div>
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
