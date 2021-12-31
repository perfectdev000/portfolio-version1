import type { NextPage } from 'next'
import Particles from "react-tsparticles";
import particlesOptions from "./resume-particles.json";
import { ISourceOptions } from "tsparticles";

const Home: NextPage = () => {
  return (
    <div className='glory-resume-wraper relative w-[100vw] h-[100vh] overflow-visible'>
      <div className='tsparticle'>
        <Particles options={particlesOptions as ISourceOptions}/>                 
        <div className='w-full h-[100vh] absolute left-0 top-0 z-10 flex items-center justify-center overflow-visible' > 
          <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full md:h-auto overflow-visible'>
            <div className='resume-description h-full text-white flex items-center justify-center'>
              <div className='pt-8 md:pb-8 pl-8 pr-8 md:pr-0'>
                <div className='text-lg font-semibold mb-3'>Education</div>
                <div className='text-lg font-semibold mb-3'>
                  <b className='text-red-900'>Bachelor of Computer Science</b><br/>Kuban State Technological University
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
            <div className='resume-description h-full text-white flex items-center md:items-start justify-center'>
              <div className='pt-8 md:pb-8 pl-8 pr-8 md:pr-0'>
                <div className='text-lg font-semibold mb-3'>
                  Experience | Frontend Developer <b className='text-red-900'>ASPIRITY</b> From 2014 to 2017
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
            <div className='resume-description h-full text-white flex items-center md:items-start justify-center'>
              <div className='p-8'>
                <div className='text-lg font-semibold mb-3'>
                  Experience | Full Stack Developer <b className='text-red-900'>Artezio</b> From 2017 to 2020
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
  )
}
export default Home
