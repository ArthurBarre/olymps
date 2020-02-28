import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import MapInfos from './MapInfos';

function Canvas() {

  let renderer = null;
  let group = new THREE.Group();
  let camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  let scene = new THREE.Scene();
  let currentURL = null;
  let raycaster;
  let mouse = new THREE.Vector2();
  const target = new THREE.Vector2();
  let tampon = null;
  let light = null;
  const [displayInfos, setDisplayInfos] = useState(false);
  const [arrdt, setArrdt] = useState(null);

  useEffect(_ => {
    init();
    animate();
  }, []);

  const init = () => {

    // SELECT CANVAS CONTAINER
    let container = document.getElementById('container');

    // INITIATE CAMERA
    camera.position.set(40, 0, 230)

    // INITATE RAYCASTER
    raycaster = new THREE.Raycaster();

    // INITATE RENDER
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // EVENTS
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('wheel', onMouseWheel, false);

    window.addEventListener('resize', onWindowResize, false)
    document.addEventListener('mousemove', onMouseMove, false)
    document.addEventListener('wheel', onMouseWheel, false)

    //SVG URL
    currentURL = './themap.svg'
    loadSVG(currentURL, () => {
      console.log('scene', scene)
    })
  }

  const loadSVG = (url, cb) => {
    let loader = new SVGLoader();
    loader.load(url, function (paths) {
      // Object parameters
      group.scale.multiplyScalar(0.25);
      group.position.x = -130;
      group.position.y = 90;
      group.scale.y *= -1;
      group.rotateX(-0.5);
      group.receiveShadows = true;
      group.castShadows = true;
      group.name = 'group';
      for (let i = 0; i < paths.paths.length; i++) {
        // Create object from svg paths
        let path = paths.paths[i];
        const arrdt = path.userData.node.dataset.arrdt;
        let shapes = path.toShapes(true);
        // Extrude function 
        for (let j = 0; j < shapes.length; j++) {
          let shape = shapes[j]
          let extrGeometry = new THREE.ExtrudeGeometry(shape, {
            depth: 20,
            steps: 20,
            bevelThickness: 3,
            bevelSize: 3,
            bevelEnabled: true,
            bevelSegments: 50,
          })
          let uvs = extrGeometry.faceVertexUvs[0]
          for (let ii = 0; ii < uvs.length; ii++) {
            let uv = uvs[ii]
            for (let jj = 0; jj < uv.length; jj++) {
              let u = uv[jj]
              u.x = (u.x - 0) / 700
              u.y = (u.y - 0) / 700
            }
          }
          // Object parameters
          let material1 = new THREE.MeshBasicMaterial({ color: 0x5B5B5B, opacity: 0.4 });
          let material2 = new THREE.MeshMatcapMaterial({ color: 0xF1F1F1, opacity: 0.4 });
          let mesh = new THREE.Mesh(extrGeometry, [material1, material2]);
          mesh.arrdt = arrdt;
          group.add(mesh);
        }
      }
      // Initiate Light
      light = new THREE.DirectionalLight(0xfffffff, 1);
      light.position.set(0, 1, 0);
      light.castShadow = true;
      light.shadow.mapSize.width = 512;
      light.shadow.mapSize.height = 512;
      light.shadow.camera.near = 0.5;
      light.shadow.camera.far = 500;
      light.target = group;
      console.log('light', group);
      scene.add(group, light);
      if (cb && typeof cb === 'function') {
        cb()
      }
    })
  }

  // Get mouse move for Raycaster
  const onMouseMove = event => {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    // changeDistrict(arrdt)
  }

  // Camera orbite on mouse move
  const onMouseWheel = event => {
    camera.position.z += event.deltaY * 0.1
    camera.position.y += event.deltaY * 0.1
  }

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  const animate = () => {
    target.x = (4 - mouse.x) * 0.01
    target.y = (4 - mouse.y) * 0.01
    camera.rotation.x += 0.5 * (target.y - camera.rotation.x)
    camera.rotation.y += 0.5 * (target.x - camera.rotation.y)
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    render()
  }

  // Raycaster
  const render = () => {
    raycaster.setFromCamera(mouse, camera)
    var intersects = raycaster.intersectObjects(scene.children)
    if (scene.getObjectByName('group')) {
      intersects = raycaster.intersectObjects(
        scene.getObjectByName('group').children
      )
      if (intersects && intersects.length > 0) {
        let district = intersects[0].object.arrdt
        setArrdt(district)
        // console.log(arrdt)
        // console.log(intersects[0].object.arrdt)
        setDisplayInfos(true)
        for (let i = 0; i < intersects.length; i++) {
          if (!tampon) {
            tampon = intersects[0].object
            return false
          }
          if (tampon != intersects[0].object) {
            tampon.position.z = 0 // position base
            tampon.material[0].color.set(0x5b5b5b) // color base
            intersects[0].object.material[0].color.set(0xb3b3b3) // color on hover
            if (intersects[0].object.position.z > 60) {
              return
            }
            intersects[0].object.translateZ(1) // position on hover
            tampon = intersects[0].object
          } else {
            if (intersects[0].object.position.z > 60) {
              return
            }
            intersects[0].object.translateZ(1) // position on hover
            intersects[0].object.material[0].color.set(0xb3b3b3) // color on hover
          }
        }
      } else {
        setDisplayInfos(false)
      }
    }
  }

  return (
    <div className="wrapper">
      <div id="container"></div>
      {displayInfos && <MapInfos data={districtData} arrdt={arrdt} />}
    </div>
  )
}

export default Canvas
