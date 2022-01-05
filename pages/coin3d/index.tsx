import React from 'react';
import * as THREE from "three";
import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
class Home extends React.Component<{},{}> { 

  componentDidMount(){    
			let container:any;
			let camera:any, scene:any, renderer:any, raycaster:any, pointer:any;
			let mouseX = 0, mouseY = 0;
			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;
			let object:any, object_video:any, mesh:any, mesh2:any, helperMesh:any;
      var videoTexture:any, video:any;

			init();
			function init() {
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
				camera.position.z = 250;
				scene = new THREE.Scene();

				const ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
				scene.add( ambientLight );

				const pointLight1 = new THREE.PointLight( 0xffffff, 1 );
        pointLight1.position.set( -100, 400, 500 );
				scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 1 );
        pointLight2.position.set( 60, -200, 150 );
				scene.add( pointLight2 );

        // const pointLight3 = new THREE.PointLight( 0xffffff, 0.8 );
        // pointLight3.position.set( 100, 400, 500 );
				// scene.add( pointLight3 );

				scene.add( camera );

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2(-Infinity, -Infinity);
        helperMesh = new THREE.Mesh( new THREE.PlaneGeometry(140, 140),
            new THREE.MeshBasicMaterial({transparent: true,opacity: 0.0,color: 0x0000ff})
        )
        scene.add( helperMesh );
        video = document.getElementById( 'video' );
				video.play();
				video.addEventListener( 'play', function () {	} );

        videoTexture = new THREE.VideoTexture( video );
        // window.videoTexture = videoTexture;
        object = new THREE.Object3D();
        scene.add( object );

				// manager
				function loadModel() {				}

				const manager = new THREE.LoadingManager( loadModel );

				manager.onProgress = function ( item, loaded, total ) {console.log( item, loaded, total );};

				// texture
				const textureLoader = new THREE.TextureLoader( manager );
				const texture1 = textureLoader.load( 'assets/3d-models/tex_uv_inv_blur2_contrast.png' );
        const texture2 = textureLoader.load( 'assets/3d-models/tex_uv.png' );
				// model
				function onProgress( xhr:any ) {
					if ( xhr.lengthComputable ) {
						const percentComplete = xhr.loaded / xhr.total * 100;
						console.log( 'model ' + Math.round( percentComplete ) + '% downloaded' );
					}
				}
				function onError() {}
				// const loader = new THREE.OBJLoader( manager );
        const loader = new OBJLoader();
				loader.load( 'assets/3d-models/coin22.obj', function ( obj:any ) {
					obj.traverse( function ( child:any ) {
						if ( child.isMesh ) {
                // child.geometry.computeVertexNormals();                
                const mat = new THREE.MeshStandardMaterial( {  color: 0x444444, map: texture2, bumpMap: texture1, bumpScale: 2, roughness: 0.3, metalness: 0.7,} );
                mesh = child;                            
                mesh.material = mat;
                mesh.position.y = 0;
                mesh.scale.multiplyScalar( 40 );
                //mesh.rotation.x = Math.PI/2;
                // window.mesh = mesh;
                object.add( mesh );
                animate();
            }
					});
				}, onProgress, onError );

        loader.load( 'assets/3d-models/coin_vidlayer4.obj', function ( obj:any ) {
          obj.traverse( function ( child:any ) {
						if ( child.isMesh ) {
                // child.geometry.computeVertexNormals();                            
                const mat = new THREE.MeshStandardMaterial( { 
                    color: 0x444444,                                
                    map: videoTexture,                                
                    roughness: 0.5,
                    metalness: 0.3,
                } );
                mesh2 = child;                            
                mesh2.material = mat;
                mesh2.position.y = 0;
                mesh2.scale.multiplyScalar( 38 );
                mesh2.position.y = 5.65;
                //mesh2.rotation.x = Math.PI/2;
                // window.mesh2 = mesh2;
                object.add( mesh2 );
            }
					});
				}, onProgress, onError );
				//
        const webglCanvas = document.getElementById("webgl-canvas");
				renderer = new THREE.WebGLRenderer( { canvas: webglCanvas, antialias: true, alpha: true });
        // renderer.setClearColor(0x000000);
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.addEventListener( 'mousemove', onDocumentMouseMove );
				window.addEventListener( 'resize', onWindowResize );
        document.addEventListener( 'pointermove', onPointerMove );
			}

			function onWindowResize() {
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function onDocumentMouseMove( event:any ) {
				mouseX = ( event.clientX - windowHalfX ) / 2;
				mouseY = ( event.clientY - windowHalfY ) / 2;
			}

      function onPointerMove( event:any ) {
				pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}

			function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function render() {
        object.rotation.z -= 0.02;
        raycaster.setFromCamera( pointer, camera );
				const intersects = raycaster.intersectObject( helperMesh );

				if ( intersects.length > 0 ) {
					const intersect = intersects[ 0 ];
					const face = intersect.face;
          object.rotation.z = - intersect.point.x / 22;
          object.rotation.x = Math.PI/2 - intersect.point.y / 120;
				} else {
					object.rotation.x = Math.PI/2;
				}
				renderer.render( scene, camera );
			}

  }

  render(){
    return (
      <>
        <div id="container">
          <canvas id="webgl-canvas"></canvas>
        </div>
        <video id="video" loop muted={true} autoPlay={true} style={{display:"none"}}>
          <source src="assets/3d-models/ouput_s1.mov"/>
		    </video>
      </>
    );
  }
}

export default Home
