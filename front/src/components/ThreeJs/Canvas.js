import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

function Canvas() {
  let renderer = null;
  let group = new THREE.Group();
  let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  let scene, currentURL = null;
  let raycaster;
  let INTERSECTED;
  let mouse = new THREE.Vector2();
  const target = new THREE.Vector2();
  let intersects = null;
  let controls = null;
  let groupName = null;
  let fitOffset = 1.2;
  let tmp = null;

  useEffect(_ => {
    init();
    animate();
  }, []);

  const init = () => {
    let container = document.getElementById('container');
    // INITIATE CAMERA
    camera.position.set(35, 0, 310);
    // CANVAS ON RESIZE
    raycaster = new THREE.Raycaster();
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    document.addEventListener('mousedown', onDocumentMouseDown, false);
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('wheel', onMouseWheel, false);

    //SVG URL
    currentURL = './themap.svg';
    loadSVG(currentURL, () => {
      console.log('scene', scene);
    });


  };

  const loadSVG = (url, cb) => {
    scene = new THREE.Scene();
    let loader = new SVGLoader();
    loader.load(url, function (paths) {
      group.scale.multiplyScalar(0.25);
      group.position.x = -130;
      group.position.y = 90;
      group.scale.y *= -1;
      group.rotateX(-0.5);
      group.name = 'group';
      for (let i = 0; i < paths.paths.length; i++) {
        let path = paths.paths[i];
        let shapes = path.toShapes(true);
        for (let j = 0; j < shapes.length; j++) {
          let shape = shapes[j];
          let extrGeometry = new THREE.ExtrudeGeometry(shape, {
            depth: 10,
            steps: 20,
            bevelThickness: 3,
            bevelSize: 2,
            bevelEnabled: true,
            bevelSegments: 50
          });
          let uvs = extrGeometry.faceVertexUvs[0];
          for (let ii = 0; ii < uvs.length; ii++) {
            let uv = uvs[ii];
            for (let jj = 0; jj < uv.length; jj++) {
              let u = uv[jj];
              u.x = (u.x - 0) / 700;
              u.y = (u.y - 0) / 700;
            }
          }
          let material1 = new THREE.MeshBasicMaterial({ color: 0x7A7A7A, opacity: 0.5 });
          let material2 = new THREE.MeshBasicMaterial({ color: 0xfcfcfc });
          let mesh = new THREE.Mesh(extrGeometry, [material1, material2]);
          group.add(mesh);
        }
      }
      scene.add(group);
      if (cb && typeof cb === 'function') {
        cb();
      }
    });
  };

  const onMouseMove = event => {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onDocumentMouseDown = event => {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
  };

  const onMouseWheel = event => {
    camera.position.z += event.deltaY * 0.1;
    camera.position.y += event.deltaY * 0.1;
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    target.x = (2 - mouse.x) * 0.01;
    target.y = (2 - mouse.y) * 0.01;
    camera.rotation.x += 0.1 * (target.y - camera.rotation.x);
    camera.rotation.y += 0.1 * (target.x - camera.rotation.y);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    render();
  };

  const render = () => {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (scene.getObjectByName('group')) {
      intersects = raycaster.intersectObjects(scene.getObjectByName('group').children);
      if (intersects && intersects.length > 0) {
        for (let i = 0; i < intersects.length; i++) {
          if (!tmp) {
            tmp = intersects[0].object;
            return false;
          }
          if (tmp != intersects[0].object) {
            // intersects[0].translateZ(-100);
            tmp.material[0].color.set(0x7A7A7A);
            intersects[0].object.material[0].color.set(0x545454);
            tmp = intersects[0].object;
          } else intersects[0].object.material[0].color.set(0x545454);
        }
      }
    }
  };

  return <div id='container'></div>
}

export default Canvas

