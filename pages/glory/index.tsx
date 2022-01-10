import React from 'react';
import Head from 'next/head'
import Script from 'next/script'

import { FaAngleUp, FaFileInvoice } from 'react-icons/fa';

import Header from "components/header/Header"
import Footer from 'components/footer/Footer';

import ParticleImg from 'components/ParticleImg';
import SlideImgItem from 'components/SlideImgItem';
import SkillViewChart from 'components/SkillViewChart';
import SkillsView from 'components/SkillsView';
import Link from 'next/link';

type Props = {  
}

type ContactState = {
  yourname:string,
  email:string,
  subject:string,
  message:string,
}
class Home extends React.Component<Props, ContactState> { 

  form = React.createRef<HTMLFormElement>();
  
  constructor(props:Props) {
    super(props)
  }
  state: ContactState = {yourname:'', email:'', subject:'', message:''};  
  
  handleChange = (event: { target: { name: string; value: string; }; }) => {
    let inputname:string = event.target.name
    let inputvalue:string = event.target.value;
    if (inputname==='yourname')  this.setState({yourname:inputvalue})
    if (inputname==='email')  this.setState({email:inputvalue})
    if (inputname==='subject')  this.setState({subject:inputvalue})
    if (inputname==='message')  this.setState({message:inputvalue})
  }  
  sendEmail = () => {
    console.log("submit");    
    console.log(this.state.yourname);
    window.open("mailto:darkrut22@gmail.com?subject=" + this.state.subject + "&body=" + this.state.message + "\n" + this.state.yourname);
  };

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
          <div id='here' className='w-full h-[100vh] md:h-[700px] relative'>            
            <Header />
            <div className='grid grid-cols-1 md:grid-cols-2 h-[100vh] md:h-[700px] pt-[70px] relative z-10'>              
                <div className='flex justify-center items-center p-8 relative'>
                  <div className='relative'>
                    <img src="assets/img/text.png" className='h-[25vh] md:h-auto'/>
                    <div className='md:w-full flex justify-center'>
                      <button className="btn btn-here bg-white hover:bg-black border-2 border-white font-medium hover:text-white text-black px-6 py-3" type="submit" id="sendMessageButton"
                        style={{transition: "ease-out 0.3s",boxShadow: "rgba(0, 0, 0, 0.7) 3px 6px 5px"}}>Contact Me</button>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-start md:items-center relative p-8'>
                  <img src="assets/img/man1.png" className='w-[50%] h-auto'/>                  
                </div>
            </div>
            
            <iframe src="/assets/pages/threejs-particle-rotate/index.html" className='absolute top-0 left-0 w-full h-full' />
          </div>

          {/* ----------about-------  */}
          <div id='about' className="glory-about-me p-8 flex justify-center" style={{backgroundColor:'#D9EEE1'}} >
            <div style={{maxWidth:'1200px'}}>
              <div className='text-xl md:text-40 text-center text-gray-700 font-bold md:mt-8 mb-8'>ABOUT ME</div>
              <div className='md:flex md:items-center md:mb-8 ' >
                <div className='text-base md:text-lg font-medium text-gray-500 md:px-8 mb-4'>
                  I&apos;m Andrey from Russia and have 10+ years of hands-on experience in Web, Mobile and Desktop App.<br/>
                  I got my Bachelor of Computer Science in 2011 and I&apos;ve been working as a professional software developer since 2012. During that time, I learned and experienced related technologies and improved myself and accumulated strong skills and a wealth of experience in my skill fields.<br/>
                  Implemented Web & Mobile Development from concept through deployment and worked on lots of small and large scale projects.<br/>
                  I am honest and hardworking and always like new technology and challenge.<br/>
                  I prefer to build trust and a long-term relationships.<br/>
                  <br/>
                  ✅ Education | <span className='text-red'>Bachelor of Computer Science</span> | Kuban State Technological University | 2011<br/>
                  ✅ Experience | Frontend Developer | <span className='text-red'>ASPIRITY</span> | From 2013 to 2017<br/>
                  ✅ Experience | Full Stack Developer | <span className='text-red'>Artezio</span> | From 2017 to 2020<br/>
                  <br/>
                  <Link href={"https://cvdesignr.com/p/618960fde7a23"}>
                    <a target={"_blank"} className='text-base font-medium text-blue-800 underline hover:text-blue-900 flex justify-start items-center pl-8'>
                      <FaFileInvoice/><div className=' font-semibold'>&nbsp;My Resume</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* ----------portfolio-------  */}
          <div id='portfolio' className="glory-portfolio bg-transparent flex justify-center items-center p-8 relative">
            <div className='w-full h-full z-10'>              
              <div className='title w-full text-center font-bold text-32 md:text-45 text-white mb-8 md:mt-8'>
                My Excellent Portfolio
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 relative gap-8'>
                <SlideImgItem imgURL={"assets/img/portfolio/BlueJestic.png"} imgLink={"https://bluejestic.com/"} skillContent={"React + React Hook + Next.js + TypeScript + Node.js + TailwindCSS + SCSS + GraphQL"} />
                <SlideImgItem imgURL={"assets/img/portfolio/campoallecomete.png"} imgLink={"http://www.campoallecomete.it"} skillContent={"Three.js + WebGL"} />
                <SlideImgItem imgURL={"assets/img/portfolio/alethea.png"} imgLink={"https://alethea.ai/"} skillContent={"React + Node.js + WebGL + Video.js + BlockChain + NFT"} />
                <SlideImgItem imgURL={"assets/img/portfolio/exante.png"} imgLink={"https://exante.eu"} skillContent={"Backbone.js + particle.js + GoogleAPI + Python + Django"} />
                <SlideImgItem imgURL={"my-portfolio"} imgLink={"/coin3d"} skillContent={"Next.js + Node.js + TypeScript + Three.js + NFT token"} />
                <SlideImgItem imgURL={"my-portfolio"} imgLink={"https://perfectdev000.github.io/Particle-Image/"} skillContent={"Node.js + WebGL + Three.js"} />
                <SlideImgItem imgURL={"assets/img/portfolio/test.momnpophub.png"} imgLink={"https://test.momnpophub.com/"} skillContent={"React + Redux + Node.js + Express.js + MongoDB"} />
                <SlideImgItem imgURL={"assets/img/portfolio/koenigandreas.png"} imgLink={"https://koenigandreas.com"} skillContent={"BootStrap4 + particle.js + PHP"} />
                <SlideImgItem imgURL={"assets/img/portfolio/lonelyplanet.png"} imgLink={"https://www.lonelyplanet.com"} skillContent={"React + Next.js + Node.js"} />
                <SlideImgItem imgURL={"assets/img/portfolio/ultranote.png"} imgLink={"https://cloud.ultranote.org"} skillContent={"React + Chart.js + BlockChain + UltraNote"} />
                <SlideImgItem imgURL={"assets/img/portfolio/bluestarcoffeeroasters.png"} imgLink={"https://bluestarcoffeeroasters.com/"} skillContent={"React + tailwindCSS + Shopify"} />
                <SlideImgItem imgURL={"assets/img/portfolio/lusion.png"} imgLink={"https://lusion.co/"} skillContent={"Three.js + WebGL"} />
                <SlideImgItem imgURL={"assets/img/portfolio/dnb.png"} imgLink={"https://dnb.ru/"} skillContent={"BootStrap + Python/Django"} />
                <SlideImgItem imgURL={"assets/img/portfolio/cools.png"} imgLink={"https://cools.com"} skillContent={"PHP/Laravel"} />
              </div>
            </div>
            {/* <iframe src='/assets/pages/tsparticle/index.html' className='absolute left-0 top-0 w-full h-full z-0'/> */}
            <iframe src='/resume' className='absolute left-0 top-0 w-full h-full z-0'/>
          </div>

          {/* ----------skill-------  */}
          <div id='skill' className="glory-skill p-8" style={{backgroundColor:'#D9EEE1'}}>
            <div className='title w-full text-center font-bold text-32 md:text-45 text-gray-700 pb-8 md:mt-8'>Skill Service</div>
            <SkillViewChart/>
            <SkillsView/>
          </div>

          {/* ----------contact-------  */}
          <div id='contact' className="glory-contact" style={{backgroundColor:'#000000'}}>            
            <div className='md:flex items-center'>
              <div className='hidden md:block w-1/6'></div>
              <div className='md:w-2/6 justify-center items-center p-8 h-[350px]'>
                {/* <img src='assets/img/contact.png' className='w-full h-full p-8'/> */}
                <iframe src='/mailbox' className='w-full h-full '/>
              </div>
              <div className='h-full w-full md:w-2/6 text-base font-medium text-white p-8 flex items-center justify-center'>
                  <div className="contact-form w-full h-full">
                    <div id="success"></div>
                    <form name="sentMessage w-full h-full" id="contactForm" ref={this.form} >
                        <div className="control-group">
                          <input type="text" className="form-control" name="yourname" id="name" placeholder="Your Name" data-validation-required-message="Please enter your name"  onChange={this.handleChange.bind(this)}/>
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-validation-required-message="Please enter a subject"  onChange={this.handleChange.bind(this)}/>
                          <p className="help-block"></p>
                        </div>
                        <div className="control-group">
                          <textarea className="form-control" name="message" id="message" placeholder="Message" data-validation-required-message="Please enter your message" rows={3} onChange={this.handleChange.bind(this)}></textarea>
                          <p className="help-block"></p>
                        </div>
                        <div className='mt-8 w-full flex justify-center md:justify-start'>
                          <button className="btn w-auto bg-white hover:bg-black border-2 border-white font-medium hover:text-white text-black px-6 py-2" type="button" id="sendMessageButton" onClick={()=>this.sendEmail()}
                            style={{transition: "ease-out 0.3s"}} >Send Message</button>
                        </div>
                    </form>
                  </div>
              </div>
              <div className='hidden md:block w-1/6'></div>
            </div>
          </div>

          {/* -- Back to top button -- */}
          <a href="#" className="btn back-to-top" ><FaAngleUp /></a>
          <Footer/>
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
