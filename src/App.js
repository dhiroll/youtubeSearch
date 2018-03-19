import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../src/components/SearchBar";
import VideoDetail from "../src/components/VideoDetail";
import VideoList from "../src/components/VideoList";
import YTSearch from "youtube-api-search";
import _ from "lodash";

const API_KEY = 'AIzaSyAK4cKGL4NCkSQABj1BCsgDt1HuUC3agfs';

// eslint-disable
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Imagine dragons');
  }

  videoSearch(term) {
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return <div className="container">
      <h1 className="title">Youtube search</h1>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos} />

    </div>
      ;
  }
}


export default App;
