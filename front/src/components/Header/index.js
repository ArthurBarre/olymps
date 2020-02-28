import React from 'react'
import Nav from './Nav'
import Loader from 'react-loader-spinner'
import VideoHeader from './Video'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import PlayerAudio from '../Audio/Audio'

// import Audio from '../Audio';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let windowtest = document.querySelector('.loader_div')
    console.log(windowtest)
    windowtest.style.display = 'block'
    setTimeout(() => {
      windowtest.style.display = 'none'
    }, 12000)
  }
  render() {
    const skip = this.props
    return (
      <div className="Header">
        <div className="videoheader">
          <VideoHeader />
        </div>
        <div className="blackLayer">
          <div className="Intro">
            <h1 className="Title">Olymps</h1>
            {/* <Nav/> */}
            <p className="Subtitle">
              An interactive Paralympics games data visualization
            </p>
            <p className="textIntro">
              Using data collected from the city of Paris and others differents
              sources like , this experiment analyses and visualizes the history
              of paralympics games from the start to now.
            </p>
            <div className="loaderContainer">
              <div class="loader_div">
                <div class="loader blue_loader">
                  <Loader
                    type="Oval"
                    color="#fff"
                    height="100%"
                    width="100%" /*timeout={1000000}*/
                  />
                </div>
                <div class="loader yellow_loader bottom">
                  <Loader
                    type="Oval"
                    color="#fff"
                    height="100%"
                    width="100%" /*timeout={1000000}*/
                  />
                </div>
                <div class="loader black_loader">
                  <Loader
                    type="Oval"
                    color="#fff"
                    height="100%"
                    width="100%" /*timeout={1000000}*/
                  />
                </div>
                <div class=" loader green_loader bottom">
                  <Loader
                    type="Oval"
                    color="#fff"
                    height="100%"
                    width="100%" /*timeout={1000000}*/
                  />
                </div>
                <div class="loader red_loader">
                  <Loader
                    type="Oval"
                    color="#fff"
                    height="100%"
                    width="100%" /*timeout={1000000}*/
                  />
                </div>
              </div>
              <p className="loaderText">Loading ...</p>
              {/* <div onClick={() => skip} className="Next">
                Skip
              </div> */}
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

export default Header
