import type { NextPage } from 'next'
import Particles from "react-tsparticles";
import particlesOptions from "./resume-particles.json";
import { ISourceOptions } from "tsparticles";

const Home: NextPage = () => {
  return (
    <div className='glory-resume-wraper relative tsparticle w-full h-full overflow-visible'>
      <Particles options={particlesOptions as ISourceOptions}/>                 
      <div className='w-full h-full absolute left-0 top-0 grid grid-cols-1 md:grid-cols-2 z-10' >
        <div className='w-full h-full flex justify-center items-center p-20'>
          {/* <img src="../assets/img/text.png" className='w-full h-full' /> */}
        </div>
        <div className='resume-description h-full text-white p-16 flex items-center justify-center'>
          <div className=''>
            <div className='text-lg font-semibold mb-4'>
              My Resume
            </div>
            <div className='text-base font-normal'>
              Creative, Passionate and Efficient full stack developer with over 9 years of experience in web, mobile and desktop applications design, development and maintenance. Possesses diverse experience of creating multiple highly scalable applications using different tech stacks. Leaded successful transition from LAMP Stack to MEAN Stack to reduce development time and improve system performance. Implemented 3D Scene, Virtual Reality with Three.js and Babylon.js. And have hands-on experience in web hosting & maintenance, Browser Automation and testing, Web Scraping & Crawling. Have worked in all phases of the project life cycle, using a wide variety of tools and frameworks.
            </div>
          </div>
        </div>          
      </div>
    </div>        
  )
}
export default Home
