import React, { Component } from "react";

import VideoListItem from '../components/VideoListItem'

const VideoList = (props) => {
  console.log('props videos', props.videos)

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <div className="col-md-4 " >
      <ul className="list-group">
        {videoItems}
      </ul>
    </div >
  );
}


export default VideoList;