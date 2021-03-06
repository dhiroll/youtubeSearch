import React, { Component } from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="col-md-8">
      <div classname="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div className="media-heading">
            {video.snippet.title}
          </div>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
}


export default VideoDetail; 