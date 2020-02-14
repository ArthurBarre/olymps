import { Group, ObjectLoader } from 'three';
import MODEL from '../assets/fonts/img/lamap.obj';
import React from 'react';
import * as THREE from "three";
var OrbitControls = require('three-orbit-controls')(THREE);

class SvgMap extends React.Component {
  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 10);
    this.camera.position.z = 6;
    this.camera.position.x = 5;
    this.camera.position.y = 2;
    //
    this.controls = new OrbitControls(this.camera);
    this.controls.keys = { LEFT: 20, UP: 30, RIGHT: 20, BOTTOM: 4 };
    this.controls.noZoom = true;
    this.controls.minPolarAngle = 0.6;
    this.controls.maxPolarAngle = 0.8;
    this.controls.minAzimuthAngle = 1.2;
    this.controls.maxAzimuthAngle = 1.4;
    this.controls.dynamicDampingFactor = 4.5;
    var control_factor = 0.5;
    this.controls.rotateSpeed = -0.5 * control_factor;
    this.controls.zoomSpeed = 0.2 * control_factor;
    this.controls.panSpeed = 1 * control_factor;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(3, 0.1, 4);
    const material = new THREE.MeshNormalMaterial({ color: '#433F81' });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.start();
    //
  }
  //

  //
  onDocumentMouseMove(event) {
    this.controls.handleMouseMoveRotate(event);
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default SvgMap;
