// import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles";
import * as THREE from "three";
// import Stats from 'three/examples/jsm/libs/stats.module';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../../components/header/Header"
// import Model1 from './Model1';
import ParticleImg from 'components/particle-image/ParticleImg';
import SlideImgItem from 'components/SlideImgItem';
import SkillService from 'components/SkillService';
 
const slide1_setting = {
  dots: true, arrows: false, infinite: true, speed: 2500, slidesToShow: 5, slidesToScroll: 1, autoplay: true, autoplaySpeed: 10,    
};
const slide2_setting = {
  dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000,    
};
class Home extends React.Component<{},{}> {   
  componentDidMount(){    
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0xff0000 );
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000  )
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setClearColor( 0xffffff, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    var diamond = new THREE.Object3D();
    let loader = new GLTFLoader();
    loader.load('assets/3d-models/scene.gltf', function(gltf){
      diamond=gltf.scene.children[0];              
      scene.add(gltf.scene);    
      diamond.scale.set(0.1, 0.1, 0.1);    
      diamond.position.set(0, -10, -10)      
    }, undefined, function ( error ) {
      console.error( error );
    });
    
    //========= light ==========
    // const ambient_light = new THREE.AmbientLight( 0xf0f0f0 ); // soft white light
    // scene.add( ambient_light );

    // const point_light = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
    // point_light.position.set( 0,300,300 );
    // scene.add( point_light );
    // const point_light1 = new THREE.PointLight( 0xFFFFFF, 1, 1000 );
    // point_light1.position.set( 0,-300,-300 );
    // scene.add( point_light1 );

    const directionalLight = new THREE.DirectionalLight( 0xffff00, 1);
    directionalLight.position.set(100,100,100)
    scene.add( directionalLight );
    const directionalLight1 = new THREE.DirectionalLight( 0xffff00, 1);
    directionalLight1.position.set(-100,100,100)
    scene.add( directionalLight1 );
    const directionalLight2 = new THREE.DirectionalLight( 0xffff00, 1);
    directionalLight2.position.set(100,-100,100)
    scene.add( directionalLight2 );
    const directionalLight3 = new THREE.DirectionalLight( 0xffff00, 1);
    directionalLight3.position.set(-100,-100,100)
    scene.add( directionalLight3 );
    const directionalLight4 = new THREE.DirectionalLight( 0xffff00, 1);
    directionalLight4.position.set(0,0,100)
    scene.add( directionalLight4 );

    window.addEventListener('resize', onWindowResize, false)
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
    }

    function lerp(x: number, y: number, a: number): number {
        return (1 - a) * x + a * y
    }

    // Used to fit the lerps to start and end at specific scrolling percentages
    function scalePercent(start: number, end: number) {
        return (scrollPercent - start) / (end - start)
    }

    const animationScripts: { start: number; end: number; func: () => void }[] = []

    //add an animation that flashes the diamond through 100 percent of scroll
    // animationScripts.push({
    //     start: 0,
    //     end: 101,
    //     func: () => {
    //         let g = material.color.g
    //         g -= 0.05
    //         if (g <= 0) {
    //             g = 1.0
    //         }
    //         material.color.g = g
    //     },
    // })

    //add an animation that moves the diamond through first 40 percent of scroll
    animationScripts.push({
        start: 0,
        end: 100,
        func: () => {
            camera.lookAt(diamond.position)
            camera.position.set(0, 0, 20)
            // diamond.position.z = lerp(-10, 0, scalePercent(0, 40))
            diamond.rotation.z = lerp(0, Math.PI, scalePercent(0, 100))
            //console.log(diamond.position.z)
        },
    })

    //add an animation that rotates the diamond between 40-60 percent of scroll
    // animationScripts.push({
    //     start: 40,
    //     end: 60,
    //     func: () => {
    //       camera.lookAt(diamond.position)
    //       camera.position.set(0, 1, 2)
    //       diamond.rotation.z = lerp(0, Math.PI, scalePercent(40, 60))
    //       //console.log(diamond.rotation.z)
    //     },
    // })

    //add an animation that moves the camera between 60-80 percent of scroll
    // animationScripts.push({
    //     start: 60,
    //     end: 80,
    //     func: () => {
    //         camera.position.x = lerp(0, 5, scalePercent(60, 80))
    //         camera.position.y = lerp(1, 5, scalePercent(60, 80))
    //         camera.lookAt(diamond.position)
    //         //console.log(camera.position.x + " " + camera.position.y)
    //     },
    // })

    //add an animation that auto rotates the diamond from 80 percent of scroll
    // animationScripts.push({
    //     start: 80,
    //     end: 101,
    //     func: () => {
    //         //auto rotate
    //         diamond.rotation.x += 0.01
    //         diamond.rotation.y += 0.01
    //     },
    // })

    function playScrollAnimations() {
        animationScripts.forEach((a) => {
            if (scrollPercent >= a.start && scrollPercent < a.end) {
                a.func()
            }
        })
    }

    let scrollPercent = 0

    document.body.onscroll = () => {
        //calculate the current scroll progress as a percentage
        scrollPercent =
            ((document.documentElement.scrollTop || document.body.scrollTop) /
                ((document.documentElement.scrollHeight ||
                    document.body.scrollHeight) -
                    document.documentElement.clientHeight)) *
            100
        ;
        // (document.getElementById('scrollProgress') as HTMLDivElement).innerText =   'Scroll Progress : ' + scrollPercent.toFixed(2)
    }

    // const stats = Stats()
    // document.body.appendChild(stats.dom)

    function animate() {
        requestAnimationFrame(animate)

        playScrollAnimations()

        render()

        // stats.update()
    }

    function render() {
        renderer.render(scene, camera)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
    animate()
  }
  render(){
    return (
      <div className="next">
        <Head>
          <title>My Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />                  
        </Head>
        <main className="glory-main-wraper relative" data-spy="scroll" data-target=".navbar" data-offset="51">

          {/* ----------here-------  */}
          <div id='here'>
            <div className='tsparticle w-full h-[100vh]'>
              <Particles options={particlesOptions as ISourceOptions}/>
            </div>        
            <Header />
            <div className='w-full h-[100vh] absolute left-0 top-[70px] md:top-0 grid grid-cols-1 md:grid-cols-2 z-10' >
              <div className='w-full h-full flex justify-center items-center md:p-16'>              
                  <img src="assets/img/text.png"  />              
              </div>
              <div className='flex justify-center h-[40vh] md:h-[100vh]'>
                <div className='md:h-full'>
                  <div className='hidden md:block h-[25%] w-full'></div>
                  <img src="assets/img/man.png" className='w-auto h-full md:h-[75%] '/>
                </div>
              </div>
            </div>
          </div>

          {/* ----------about-------  */}
          <div id='about' className="glory-about-me md:flex bg-white ">
            <div className='about-me-particle-image w-full md:w-2/6  flex justify-center items-center p-8'>
              <div className=''>
                <ParticleImg/>
              </div>
            </div>
            <div className='about-me-description w-full md:w-4/6 h-full px-4 md:pt-4 pb-4 flex items-center justify-center'>
              <div className='p-4'>
                <div className='text-28 md:text-45 text-black font-bold mb-4'>
                  Creative, Passionate and Efficient Developer
                </div>
                <div className='text-base md:text-xl font-bold text-gray-600'>
                  Creative, Passionate and Efficient full stack developer with over 9 years of experience in web, mobile and desktop applications design, development and maintenance. Possesses diverse experience of creating multiple highly scalable applications using different tech stacks. Leaded successful transition from LAMP Stack to MEAN Stack to reduce development time and improve system performance. Implemented 3D Scene, Virtual Reality with Three.js and Babylon.js. And have hands-on experience in web hosting & maintenance, Browser Automation and testing, Web Scraping & Crawling. Have worked in all phases of the project life cycle, using a wide variety of tools and frameworks.
                </div>
              </div>
            </div>
          </div>

          {/* ----------resume-------  */}
          <div id='resume' className="glory-resume w-full h-full md:h-[500px] overflow-visible">
              <iframe src="/glory/resume" className='w-full h-[100vh] md:h-[500px] overflow-visible '/>          
          </div>

          {/* ----------portfolio-------  */}
          <div id='portfolio' className="glory-portfolio bg-white flex justify-center items-center px-4 pt-4 pb-8">
            <div className='w-full h-full'>
              <div className='title w-full text-center font-bold text-32 md:text-45 text-gray-700' 
                // style={{color:'#FF6347'}}
              >
                Portfolio
              </div>
              <div className='h-2 md:h-4'></div>
              <div className='w-full hidden md:block'>            
                <Slider {...slide1_setting}>                
                  <SlideImgItem imgURL={"assets/img/portfolio/BlueJestic.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/cools.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/campoallecomete.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/exante.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/koenigandreas.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/lonelyplanet.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/ultranote.png"} imgLink={""} skillContent={""} />                
                </Slider>
              </div>
              
              <div className='w-full md:hidden'>            
                <Slider {...slide2_setting}>                
                  <SlideImgItem imgURL={"assets/img/portfolio/BlueJestic.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/cools.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/campoallecomete.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/exante.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/koenigandreas.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/lonelyplanet.png"} imgLink={""} skillContent={""} />
                  <SlideImgItem imgURL={"assets/img/portfolio/ultranote.png"} imgLink={""} skillContent={""} />                
                </Slider>
              </div>
            </div>
          </div>

          {/* ----------skill-------  */}
          <div id='skill' className="glory-skill ">
            <SkillService/>
          </div>

          {/* ----------contact-------  */}
          <div id='contact' className="glory-contact md:flex bg-black">
            <div className='w-2/6 flex justify-center items-center p-8'>
              <img src='assets/img/contact.png' className='w-full h-full'/>            
            </div>
            <div className='h-full w-4/6 text-white p-16 flex items-center justify-center'>
              <div className=''>
                <div className='text-lg font-semibold mb-4'>
                  To Contact Me
                </div>
                <div className='text-base font-normal'>
                  Creative, Passionate and Efficient full stack developer with over 9 years of experience in web, mobile and desktop applications design, development and maintenance. Possesses diverse experience of creating multiple highly scalable applications using different tech stacks. Leaded successful transition from LAMP Stack to MEAN Stack to reduce development time and improve system performance. Implemented 3D Scene, Virtual Reality with Three.js and Babylon.js. And have hands-on experience in web hosting & maintenance, Browser Automation and testing, Web Scraping & Crawling. Have worked in all phases of the project life cycle, using a wide variety of tools and frameworks.
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default Home
