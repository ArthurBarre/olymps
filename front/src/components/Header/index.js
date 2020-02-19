import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="soundContainer" />
        <div className="blackLayer">
          <div className="Intro">
            <h1 className="Title">Olymps</h1>
            <p className="Subtitle">An interactive Paralympics games data visualization</p>
            <p className="textIntro">Using data collected from the city of Paris and others differents sources like , this experiment analyses and visualizes the history of paralympics games from the start to now.</p>
            <div className="loaderContainer">
              <div className="loaderImg"></div>
              <p className="loaderText">Loading ...</p>
              <p className="Next">Continue</p>
            </div>
          </div>
          <div className="headphoneContainer">
            <div className="headphoneImg"></div>
            <p className="headphoneText">Headphones Recommended</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;