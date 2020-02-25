import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

function Canvas() {
  let renderer,
    scene,
    camera,
    currentURL = null;
  let group = new THREE.Group();
  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();
  let intersects = null;
  let controls = null;
  let fitOffset = 1.2;
  let target = new THREE.Vector2();
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

  useEffect(_ => {
    init();
    animate();
  }, []);

  const init = () => {

    let container = document.getElementById('container');

    // INITIATE CAMERA
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 250;
    console.log('camera', camera);

    // CANVAS ON RESIZE
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);

    //SVG URL
    currentURL = './themap.svg';
    loadSVG(currentURL, () => {
      console.log('scene', scene.getObjectByName('testgroup').children[0]);
    });

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('wheel', onMouseWheel, false);
    window.requestAnimationFrame(render);
  };

  const loadSVG = (url, cb) => {
    //INITATE SCENE
    scene = new THREE.Scene();
    //SVG LOADER
    let loader = new SVGLoader();
    loader.load(url, function (paths) {
      group.scale.multiplyScalar(0.25);
      group.position.x = -160;
      group.position.y = 90;
      group.scale.y *= -1;
      group.rotateX(-0.5);
      group.name = 'testgroup';
      //EXTRUDE FUNCTION
      for (let i = 0; i < paths.paths.length; i++) {
        let path = paths.paths[i];
        let shapes = path.toShapes(true);
        for (let j = 0; j < shapes.length; j++) {
          let shape = shapes[j];
          let extrGeometry = new THREE.ExtrudeGeometry(shape, {
            depth: 13,
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
    mouse.x = (event.clientX - windowHalf.x);
    mouse.y = (event.clientY - windowHalf.x);
  };

  const onMouseWheel = event => {
    camera.position.z += event.deltaY * 0.1;
  };

  const onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    windowHalf.set(width / 2, height / 2);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };


  const animate = () => {
    target.x = (1 - mouse.x) * 0.002;
    target.y = (1 - mouse.y) * 0.002;

    camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
    camera.rotation.y += 0.05 * (target.x - camera.rotation.y);

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
    render();
  };

  const render = () => {
    raycaster.setFromCamera(mouse, camera);
    if (scene.getObjectByName('testgroup')) {
      intersects = raycaster.intersectObjects(
        scene.getObjectByName('testgroup').children
      );
    }
    renderer.render(scene, camera);
  };

  window.addEventListener('click', () => {
    if (intersects && intersects.length > 0) {
      for (let i = 0; i < intersects.length; i++) {
        const box = new THREE.Box3();
        intersects[0].object.material[0].color.set(0x545454);
        intersects[0].object.translateZ(100);
        // console.log(character);
        // character.group.position.copy(intersection.point);
        // character.group.updateMatrix();
        // // SET OBJECT BOX
        // box.expandByObject(intersects[i].object);
        // const size = box.getSize(new THREE.Vector3());
        // const center = box.getCenter(new THREE.Vector3());
        // const maxSize = Math.max(size.x, size.y, size.z);
        // const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
        // const fitWidthDistance = fitHeightDistance / camera.aspect;
        // const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance);
        // // // CHANGE CONTROLE TO FIXE ON BOX
        // const direction = controls.target.clone()
        //   .sub(camera.position)
        //   .normalize()
        //   .multiplyScalar(distance);
      }
    }
    renderer.render(scene, camera);
  });

  return <div id='container'></div>
}


export default Canvas


