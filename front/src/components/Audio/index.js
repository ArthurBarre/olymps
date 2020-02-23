// import React from 'react'
// import ReactDOM from 'react-dom'
// import Sketch from 'react-p5'
// import { loadSound } from '../../lib/p5/addons/p5.sound'
// // let song;
// // export default class Audio extends React.Component {
// //   y = 0
// //   direction = '^'
// //   // song = new Master();
// //   render() {
// //     return (
// //       <Sketch
// //         preload={() => {
// //           song = loadSound('respire.mp3')
// //         }}
// //         setup={(p5, parentRef) => {
// //           p5.createCanvas(100, 100).parent(parentRef)
// //         }}
// //         draw={p5 => {
// //           p5.background(0)
// //           p5.fill(255, this.y * 1.3, 0)
// //           p5.ellipse(p5.width / 2, this.y, 50)
// //           if (this.y > p5.height) this.direction = ''
// //           if (this.y < 0) {
// //             this.direction = '^'
// //           }
// //           if (this.direction === '^') this.y += 8
// //           else this.y -= 4
// //         }}
// //       />
// //     )
// //   }
// // }
// import script from './PureSketch'
// export default class Audio extends React.Component {
//   componentDidMount() {
//     const script = document.createElement('script')
//     script.async = true
//     script.src = script
//     this.div.appendChild(script)
//   }
//   render() {
//     return (
//       <div className="App" ref={el => (this.div = el)}>
//         <h1>Hello react</h1>
//   <script src="https://cdn.jsdelivr.net/npm/p5@0.10.2/lib/p5.js"></script>

//         {/* Script is inserted here */}
//       </div>
//     )
//   }
// }

// // export default class App extends Component {
// //   x = 50;
// //   y = 50;

// //   setup = (p5, canvasParentRef) => {
// //     p5.createCanvas(500, 500).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
// //   };
// //   draw = p5 => {
// //     p5.background(0);
// //     p5.ellipse(this.x, this.y, 70, 70);
// //     // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
// //     this.x++;
// //   };

// //   render() {
// //     return <Sketch setup={this.setup} draw={this.draw} />;
// //   }
// // }
import React from 'react'

import Audio from './sketch'
import Provider from './AppStateProvider'
export default () => {
  return (
    <Provider>
      <Audio />
    </Provider>
  )
}
