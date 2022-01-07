import React from 'react';
import * as THREE from "three";
import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'

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
				const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.2 );
        scene.add( ambientLight );

        const pointLight1 = new THREE.PointLight( 0xffffff, 0.8 );
        pointLight1.position.set( -100, 400, 500 );
        scene.add( pointLight1 );

        const pointLight2 = new THREE.PointLight( 0xffffff, 0.8 );
        pointLight2.position.set( 60, -200, 150 );
        scene.add( pointLight2 );
        // -------- end light ---------------
        
        scene.add( camera );

        raycaster = new THREE.Raycaster();

        pointer = new THREE.Vector2(-Infinity, -Infinity);

        helperMesh = new THREE.Mesh( new THREE.PlaneGeometry(140, 140),
            new THREE.MeshBasicMaterial({
                transparent: true,
                opacity: 0.0,
                color: 0x0000ff
            })
        )

        scene.add( helperMesh );

        object = new THREE.Object3D();

        scene.add( object );

        video = document.getElementById( 'video' );
				video.play();
				video.addEventListener( 'play', function () {	} );
        videoTexture = new THREE.VideoTexture( video );  
        // window.videoTexture = videoTexture;

				// manager
				const manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };
        // texture

        const textureLoader = new THREE.TextureLoader( manager );
        const texture1 = textureLoader.load( 'assets/3d-models/coin3d/tex_uv_inv_blur2_contrast.png' );
        const texture2 = textureLoader.load( 'assets/3d-models/coin3d/tex_uv.png' );
        // model

        function onProgress( xhr:any ) {
            if ( xhr.lengthComputable ) {
                const percentComplete = xhr.loaded / xhr.total * 100;
                console.log( 'model ' + Math.round( percentComplete ) + '% downloaded' );
            }
        }

        function onError(e:any) {
            console.log( e );
        }

        const loader = new OBJLoader( manager );
        loader.load( 'assets/3d-models/coin3d/coin24.obj', function ( obj ) {
            obj.traverse( function ( child:any ) {
                if ( child.isMesh ) {                    
                    const mat = new THREE.MeshStandardMaterial( { 
                        color: 0xffffff,
                        map: texture2,
                        //map: videoTexture,
                        bumpMap: texture1,
                        bumpScale: 2,
                        roughness: 0.3,
                        metalness: 0.7,
                        // transparent: true,
                        // opacity: 0.8,
                        // side: THREE.DoubleSide
                    } );
                    mesh = child;                    
                    mesh.material = mat;
                    mesh.position.y = 0;
                    mesh.scale.multiplyScalar( 40 );                    
                    // window.mesh = mesh;
                    object.add( mesh );
                    animate();
                }
            } );
        }, onProgress, onError );

        loader.load( 'assets/3d-models/coin3d/coin_vidlayer7.obj', function ( obj ) {                        

            obj.traverse( function ( child:any ) {

                if ( child.isMesh ) {
                    // child.geometry.computeVertexNormals();                    
                    const mat = new THREE.MeshStandardMaterial( { 
                        color: 0xffffff,
                        map: videoTexture,
                        roughness: 0.5,
                        metalness: 0.3,
                    } );

                    mesh2 = child;                    
                    mesh2.material = mat;
                    mesh2.position.y = 0;
                    mesh2.scale.multiplyScalar( 38.5 );
                    mesh2.position.y = 3.35;
                    // window.mesh2 = mesh2;
                    object.add( mesh2 );
                }
            } );
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
        object.rotation.z -= 0.01;
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
        <div id="container" style={{width:'100vw', height:'100vh', backgroundColor:'#444444',position:'relative'}}>
          <canvas id="webgl-canvas" style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}></canvas>
        </div>
        <video id="video" loop muted={true} autoPlay={true} style={{display:"none"}}>
          <source src="assets/3d-models/coin3d/movie.mp4"/>
		    </video>
      </>
    );
  }
}

export default Home