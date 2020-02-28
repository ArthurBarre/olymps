import React from 'react'
import Loader from 'react-loader-spinner'
import './loader.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Loader_circle extends React.Component {
  state = {
    blue: '#1277bd',
    yellow: '#fac43b',
    black: '#000000',
    green: '#47b37c',
    red: '#ea2021',
    white: '#ffffff',
  }
  render() {
    return (
      <div class="loader_div">
        <div class="loader blue_loader">
          <Loader
            type="Oval"
            color={this.state.white}
            height="100%"
            width="100%"
            //timeout={1000000}
          />
        </div>
        <div class="loader yellow_loader bottom">
          <Loader
            type="Oval"
            color={this.state.white}
            height="100%"
            width="100%"
            //timeout={1000000}
          />
        </div>
        <div class="loader black_loader">
          <Loader
            type="Oval"
            color={this.state.white}
            height="100%"
            width="100%"
            //timeout={1000000}
          />
        </div>
        <div class=" loader green_loader bottom">
          <Loader
            type="Oval"
            color={this.state.white}
            height="100%"
            width="100%"
            //timeout={1000000}
          />
        </div>
        <div class="loader red_loader">
          <Loader
            type="Oval"
            color={this.state.white}
            height="100%"
            width="100%"
            //timeout={1000000}
          />
        </div>
      </div>
    )
  }
}
export default Loader_circle
