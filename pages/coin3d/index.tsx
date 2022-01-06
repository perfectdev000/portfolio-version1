import React from 'react';
import * as THREE from "three";
import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
class Home extends React.Component<{},{}> { 

  componentDidMount(){  
			let camera:any, scene:any, renderer:any, raycaster:any, pointer:any;			
			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;
      let mouseX:any, mouseY:any;
			let object:any, mesh:any, mesh2:any, helperMesh:any;
      var videoTexture:any, video:any;

			init();
			function init() {
        
				scene = new THREE.Scene();

        // creating camera
				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
				camera.position.z = 150;        
				scene.add( camera );

        // -------- add light ---------------
				const ambientLight = new THREE.AmbientLight( 0xffffff, 0.2 );
				scene.add( ambientLight );

				const pointLight1 = new THREE.PointLight( 0xffffff, 1 );
        pointLight1.position.set( -100, 400, 500 );
				scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 1 );
        pointLight2.position.set( 60, -200, 150 );
				scene.add( pointLight2 );

        const pointLight3 = new THREE.PointLight( 0xbbbbbb, 0.9 );
        pointLight3.position.set( 0, 0, 400 );
				scene.add( pointLight3 );
        // -------- end light ---------------
        
        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2(-Infinity, -Infinity);
        
        object = new THREE.Object3D();
        scene.add( object );

        helperMesh = new THREE.Mesh( new THREE.PlaneGeometry(140, 140),
            new THREE.MeshBasicMaterial({transparent: true,opacity: 1.0,color: 0x0000ff})
        )
        // scene.add( helperMesh );

        video = document.getElementById( 'video' );
				video.play();
				video.addEventListener( 'play', function () {	} );
        videoTexture = new THREE.VideoTexture( video );  
        
				// manager
				function loadModel() {				}
				const manager = new THREE.LoadingManager( loadModel );
				manager.onProgress = function ( item, loaded, total ) {console.log( item, loaded, total );};

				// texture
				const textureLoader = new THREE.TextureLoader( manager );
				const texture1 = textureLoader.load( 'assets/3d-models/tex_uv_inv_blur2_contrast.png' );
        const texture2 = textureLoader.load( 'assets/3d-models/tex_uv.png' );							
				const texture11 = textureLoader.load( 'assets/3d-models/1.png' );
        const texture22 = textureLoader.load( 'assets/3d-models/2.png' );

        // Add X Mesh
        const xMesh = new THREE.Mesh( new THREE.PlaneGeometry(150, 150),
            new THREE.MeshStandardMaterial({ transparent:true,  side: THREE.DoubleSide, color: 0x444444, map:texture11, bumpMap: texture22, alphaMap:texture22 ,bumpScale: 2, roughness: 0.3, metalness: 0.7,} )
        )        
        xMesh.position.y=7
        xMesh.position.z=-3
        xMesh.position.x=0
        xMesh.rotation.x = 3.141592/2;
        object.add(xMesh)

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
                mesh2.scale.multiplyScalar( 38 );
                mesh2.position.y = 6;
                // window.mesh2 = mesh2;
                object.add( mesh2 );
            }
					});
				}, onProgress, onError );

				//creating renderer
        const webglCanvas = document.getElementById("webgl-canvas");
				renderer = new THREE.WebGLRenderer( { canvas: webglCanvas, antialias: true, alpha: true });        
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
        <div id="container" style={{width:'100vw', height:'100vh', backgroundColor:'black',position:'relative'}}>
          <canvas id="webgl-canvas" style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}></canvas>
        </div>
        <video id="video" loop muted={true} autoPlay={true} style={{display:"none"}}>
          <source src="assets/3d-models/movie.mp4"/>
		    </video>
      </>
    );
  }
}

export default Home
