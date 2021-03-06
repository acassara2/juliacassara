import React, { Fragment } from 'react';
import { Footer, NavBar, VideoPreview, VideoModal, YouTubeVideo } from '../components';

import videoList from '../data/videoList'; // faster load time

/* global document */

// TODO: Make grid container <ul> and all children <li> for easier debugging

class VideoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedVideo: '',
      videoList,
    };
  }

  // for using remote video list, slower load time

  // async componentDidMount() {
  //   const videoList = await this.getVideoList()
  //   this.setState({
  //     ...this.state,
  //     videoList,
  //   })
  // }
  //
  // async getVideoList = () => {
  //   const videoListFetch = await fetch(
  //     // google spreadsheet where users with access can change the order and links to videos
  //     'https://script.google.com/macros/s/AKfycbyQDYZlgiqWUTXnZ80iTBpSU1666VXrrH7-jLR09Ldhknaq2LGt/exec'
  //   )
  //   const videoListBlob = await videoListFetch.json()
  //   const videoList = videoListBlob.map(url => formatYouTubeVideo(url[0]))
  //   return videoList
  // }

  toggleModalClass = () => {
    const videoModal = document.getElementById('video-modal');
    if (this.state.modalVisible) {
      videoModal.classList.remove('visible');
      videoModal.classList.add('hidden');
    } else {
      videoModal.classList.remove('hidden');
      videoModal.classList.add('visible');
    }
  };

  toggleModal = async (video) => {
    this.toggleModalClass();
    await this.setState({
      modalVisible: !this.state.modalVisible,
      selectedVideo: video,
    });
  };

  render() {
    const videoGrid =
      this.state.videoList &&
      this.state.videoList.map((video) => <VideoPreview video={video} toggleModal={this.toggleModal} />);
    const selectedVideoType = this.state.selectedVideo;
    return (
      <div id="main">
        <NavBar />
        {videoGrid && (
          <Fragment>
            <div className="video-grid">{videoGrid}</div>
            <Footer />
          </Fragment>
        )}
        {!videoGrid && (
          <div
            style={{
              textAlign: 'center',
              margin: 'auto',
              height: '20vh',
              width: 'auto',
            }}
          />
        )}
        <VideoModal modalVisible={this.state.modalVisible}>
          <YouTubeVideo
            modalVisible={this.state.modalVisible}
            toggleModal={this.toggleModal}
            video={this.state.selectedVideo}
          />
        </VideoModal>
      </div>
    );
  }
}

export default VideoGrid;
