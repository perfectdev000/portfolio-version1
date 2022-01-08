import React from 'react';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
class Home extends React.Component<{},{}> { 

  componentDidMount(){        
    let container:any, clock:any;
    let camera:any, scene:any, renderer:any, model:any;

    init();
    animate();

    function init() {
      container = document.getElementById( 'container' );
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.01, 2000 );      
      

      const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
      scene.add( ambientLight );
      const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
      directionalLight.position.set( 1, 1, 0 ).normalize();
      scene.add( directionalLight );
      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setClearColor(0x000000);
      renderer.setSize( window.innerWidth, window.innerHeight );
      
      const controls = new OrbitControls( camera, renderer.domElement );
			
			controls.update();
			controls.enablePan = false;
			controls.enableDamping = true;
      container.appendChild( renderer.domElement );
      window.addEventListener( 'resize', onWindowResize );
      
      clock = new THREE.Clock();      
      const loader = new GLTFLoader();
      loader.load( 'assets/3d-models/mail_icon/scene.gltf', function ( gltf ) {
        model = gltf.scene.children[0];
        scene.add( gltf.scene );
        model.scale.set(0.3, 0.3, 0.3)
        model.position.set(0,0,0)
        camera.position.set(0,1,2)
        camera.lookAt(model.position.x,model.position.y,model.position.z)
        controls.target.set(model.position.x,model.position.y,model.position.z)

      }, undefined, function ( error ) {
        console.error( error );
      } );

    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {
      requestAnimationFrame( animate );
      render();      
    }

    function render() {
      const delta = clock.getDelta();
      if ( model !== undefined ) {
        model.rotation.z += delta * 0.5;
      }
      renderer.render( scene, camera );
    }
  }

  render(){
    return (
      <>
        <div id="container"></div>
      </>
    );
  }
}

export default Home
