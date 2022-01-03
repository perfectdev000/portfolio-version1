import type { NextPage } from 'next'
import Particles from "react-tsparticles";
import particlesOptions from "./resume-particles.json";
import { ISourceOptions } from "tsparticles";

const Home: NextPage = () => {
  return (
    <div className='glory-resume-wraper relative w-[100vw] h-[100vh] overflow-visible'>
      <div className='tsparticle'>
        <Particles options={particlesOptions as ISourceOptions}/> 
      </div>
    </div>        
  )
}
export default Home
