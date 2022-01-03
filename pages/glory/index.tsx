// import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import Script from 'next/script'
// import * as THREE from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
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
  // componentDidMount(){    
  //   const scene = new THREE.Scene()
  //   // scene.background = new THREE.Color( 0xff0000 );
  //   const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000  )
  //   const renderer = new THREE.WebGLRenderer({ alpha: true })
  //   renderer.setClearColor( 0xffffff, 0 );
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  //   document.body.appendChild(renderer.domElement)

  //   var diamond = new THREE.Object3D();
  //   let loader = new GLTFLoader();
  //   loader.load('assets/3d-models/scene.gltf', function(gltf){
  //     diamond=gltf.scene.children[0];              
  //     scene.add(gltf.scene);    
  //     diamond.scale.set(0.1, 0.1, 0.1);    
  //     diamond.position.set(0, -10, -10)      
  //   }, undefined, function ( error ) {
  //     console.error( error );
  //   });
    
  //   //========= light ==========
  //   const ambient_light = new THREE.AmbientLight( 0xf0f0f0 ); // soft white light
  //   ambient_light.position.set(0,0,100)
  //   scene.add( ambient_light );

  //   const directionalLight2 = new THREE.DirectionalLight( 0xffff00, 1);
  //   directionalLight2.position.set(100,0,30)
  //   scene.add( directionalLight2 );
  //   const directionalLight3 = new THREE.DirectionalLight( 0xffff00, 1);
  //   directionalLight3.position.set(-100,0,30)
  //   scene.add( directionalLight3 );
  //   const directionalLight4 = new THREE.DirectionalLight( 0xffff00, 1);
  //   directionalLight4.position.set(0,0,100)
  //   scene.add( directionalLight4 );

  //   window.addEventListener('resize', onWindowResize, false)
  //   function onWindowResize() {
  //       camera.aspect = window.innerWidth / window.innerHeight
  //       camera.updateProjectionMatrix()
  //       renderer.setSize(window.innerWidth, window.innerHeight)
  //       render()
  //   }

  //   function lerp(x: number, y: number, a: number): number {
  //       return (1 - a) * x + a * y
  //   }

  //   // Used to fit the lerps to start and end at specific scrolling percentages
  //   function scalePercent(start: number, end: number) {
  //       return (scrollPercent - start) / (end - start)
  //   }

  //   const animationScripts: { start: number; end: number; func: () => void }[] = []


  //   animationScripts.push({
  //       start: 0,
  //       end: 100,
  //       func: () => {
  //           camera.lookAt(diamond.position)
  //           camera.position.set(0, 0, 40)
  //           // diamond.position.z = lerp(-10, 0, scalePercent(0, 40))
  //           diamond.rotation.z = lerp(0, Math.PI, scalePercent(0, 20))
  //           // diamond.position.x = Math.sin(scalePercent(0, 10)+3.141592) * 100
  //           //console.log(diamond.position.z)
  //       },
  //   })
  //   function playScrollAnimations() {
  //       animationScripts.forEach((a) => {
  //           if (scrollPercent >= a.start && scrollPercent < a.end) {
  //               a.func()
  //           }
  //       })
  //   }

  //   let scrollPercent = 0

  //   document.body.onscroll = () => {
  //       //calculate the current scroll progress as a percentage
  //       scrollPercent =
  //           ((document.documentElement.scrollTop || document.body.scrollTop) /
  //               ((document.documentElement.scrollHeight ||
  //                   document.body.scrollHeight) -
  //                   document.documentElement.clientHeight)) *
  //           100
  //       ;
  //       // (document.getElementById('scrollProgress') as HTMLDivElement).innerText =   'Scroll Progress : ' + scrollPercent.toFixed(2)
  //   }

  //   // const stats = Stats()
  //   // document.body.appendChild(stats.dom)

  //   function animate() {
  //       requestAnimationFrame(animate)

  //       playScrollAnimations()

  //       render()

  //       // stats.update()
  //   }

  //   function render() {
  //       renderer.render(scene, camera)
  //   }

  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  //   animate()
  // }

  render(){
    return (
      <>
        <Head>
          <title>My Web</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        
        <main className="glory-main-wraper relative" data-spy="scroll" data-target=".navbar" data-offset="70">
          {/* ----------here-------  */}
          <div id='here' className='w-full h-[100vh]'>
            <iframe src="/assets/pages/threejs-particle-rotate/index.html" className='absolute top-0 left-0 w-full h-[100vh]'/>
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
          <div id='about' className="glory-about-me bg-white ">
            <div className='text-xl md:text-45 text-center text-gray-700 font-bold p-8'>Creative, Passionate and Efficient Developer</div>
            <div className='md:flex md:items-center'>
              <div className='about-me-particle-image w-full md:w-2/6 px-8 md:py-8  flex justify-center items-center'>
                <ParticleImg/>                
              </div>
              <div className='about-me-description w-full md:w-4/6 h-full p-8 flex items-center justify-center'>                
                  <div className='text-base md:text-xl font-normal text-gray-500'>
                    Creative, Passionate and Efficient full stack developer with over 9 years of experience in web, mobile and desktop applications design, development and maintenance. Possesses diverse experience of creating multiple highly scalable applications using different tech stacks. Leaded successful transition from LAMP Stack to MEAN Stack to reduce development time and improve system performance. Implemented 3D Scene, Virtual Reality with Three.js and Babylon.js. And have hands-on experience in web hosting & maintenance, Browser Automation and testing, Web Scraping & Crawling. Have worked in all phases of the project life cycle, using a wide variety of tools and frameworks.
                  </div>
                
              </div>
            </div>
          </div>

          {/* ----------resume-------  */}
          <div id='resume' className="glory-resume w-full relative">
            <div className='w-full h-full flex items-center justify-center text-gray-500' > 
              <div>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-auto '>
                  <div className='resume-description h-full flex items-center justify-center'>
                    <div className='pt-8 md:pb-8 pl-8 pr-8 md:pr-0'>
                      <div className='text-lg font-semibold mb-3'>Education</div>
                      <div className='text-lg font-semibold mb-3 text-gray-700'>
                        <b className='text-red'>Bachelor of Computer Science</b><br/>Kuban State Technological University
                      </div>
                      <div className='text-base font-medium'>
                        Kuban State Technological University, also referred to as the Kuban
                        State University of Technology, is a Russian public technical university
                        located in Krasnodar, one of the first higher educational institutions
                        established in the southern region of Russia.<br/>
                        <b>Relevant Coursework</b> : Operating Systems Architecture, Linux/Unix
                        Programming, Usability in Website and Software Design, C++
                        Programming, Web Page Development, Relational Database Design &
                        SQL, Data Engineering, Advanced Software Programming
                      </div>
                    </div>
                  </div>       
                  <div className='resume-description h-full flex items-center md:items-start justify-center'>
                    <div className='pt-8 md:pb-8 pl-8 pr-8 md:pr-0'>
                      <div className='text-lg font-semibold text-gray-700 mb-3'>
                        Experience | Frontend Developer <br/><b className='text-red'>ASPIRITY</b> From 2014 to 2017
                      </div>
                      <div className='text-base font-normal'>
                        <ul>
                          <li>✔ Implemented responsive web pages and mobile UI from concept through deployment</li>
                          <li>✔ Implemented efficient and reusable front-end modules that drive complex web applications</li>
                          <li>✔ Implemented 3D Scene, 3D Animation, Augmented reality(AR) and Virtual Reality(VR) with Three.js and Babylon.js</li>
                          <li>✔ Implemented new responsive, mobile-first approach which increased mobile traffic by 10%.</li>
                        </ul>
                      </div>
                    </div>
                  </div>      
                  <div className='resume-description h-full flex items-center md:items-start justify-center'>
                    <div className='p-8'>
                      <div className='text-lg font-semibold text-gray-700 mb-3'>
                        Experience | Full Stack Developer <br/><b className='text-red'>Artezio</b> From 2017 to 2020
                      </div>
                      <div className='text-base font-normal'>
                        <ul>
                          <li>✔ Improved the performance of whole system with efficiency memory usage, multithreading, distributed computing, and other various ideas.</li>
                          <li>✔ Developed app integration with RESTful and other APIs for Google Maps, social media logins, payment processors, blockchain wallet, and other services.</li>
                          <li>✔ Implemented various bots, browser automation, and automation scripts.</li>
                        </ul>
                      </div>
                    </div>
                  </div>   
                </div>
              </div>    
            </div>
          </div>

          {/* ----------portfolio-------  */}
          <div id='portfolio' className="glory-portfolio bg-transparent flex justify-center items-center px-4 pt-4 pb-8 relative">
            <div className='w-full h-full z-10'>              
              <div className='title w-full text-center font-bold text-32 md:text-45 text-white'>
                My Excellent Portfolio
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
            <iframe src='/assets/pages/tsparticle/index.html' className='absolute left-0 top-0 w-full h-full z-0'/>
          </div>

          {/* ----------skill-------  */}
          <div id='skill' className="glory-skill ">
            <SkillService/>
          </div>

          {/* ----------contact-------  */}
          <div id='contact' className="glory-contact" style={{backgroundColor:'#ff0000'}}>            
            <div className='md:flex items-center'>
              <div className='hidden md:block w-2/6 justify-center items-center p-8'>
                <img src='assets/img/contact.png' className='w-full h-full p-8'/>   
              </div>
              <div className='h-full w-full md:w-4/6 text-base font-medium text-white p-8 flex items-center justify-center'>
                  <div className="contact-form w-full h-full">
                    <div id="success"></div>
                    <form name="sentMessage w-full h-full" id="contactForm">
                        <div className="control-group">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" data-validation-required-message="Please enter your name" />
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" data-validation-required-message="Please enter your email" />
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" data-validation-required-message="Please enter a subject" />
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <textarea className="form-control" id="message" placeholder="Message" data-validation-required-message="Please enter your message" rows={3}></textarea>
                          <p className="help-block"></p>
                        </div>
                        <div className='mt-8 w-full'>
                          <button className="btn w-full md:w-auto bg-white hover:bg-red border-2 border-white font-medium hover:text-white text-red px-6 py-2" type="submit" id="sendMessageButton"
                            style={{transition: "ease-out 0.3s"}}>Send Message</button>
                        </div>
                    </form>
                  </div>
              </div>
            </div>
          </div>

        </main>
        {/* <Script src="assets/js/jquery-3.4.1.min.js"/> */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js"/>        
        <Script src="assets/lib/easing/easing.js"/>
        <Script src="assets/js/main.js"/>
      </>
    );
  }
}

export default Home
