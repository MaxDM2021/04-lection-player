import React, { Component } from "react";
import  VideoList  from './components/VideoList/VideoList';
import  Player from './components/Player/Player';
import videos from './videos.json';
import Reader from './components/Reader/Reader'

import publications from './publications.json'

class App extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });





  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} />
        <Reader items={publications}/>
        </div>
    );
  }
}

export default App;