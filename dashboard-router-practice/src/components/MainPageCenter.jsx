import React from "react";
import Searchbar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class MainPageCenter extends React.Component {
  // state = { videos: [], selectedVideo: null };

  // componentDidMount() {
  //   this.onTermSubmit("buildings");
  // }

  // onTermSubmit = async term => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term
  //     }
  //   });
  //   // response.data.items;
  //   this.setState({
  //     videos: response.data.items,
  //     selectedVideo: response.data.items[0]
  //   });
  // };
  // onVideoSelect = video => {
  //   this.setState({ selectedVideo: video });
  // };

  render() {
    return (
      <div className="ui container">
        {"What up crackaas"}
        {/* <Searchbar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                //prop passed down and cb function named the same
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default MainPageCenter;
