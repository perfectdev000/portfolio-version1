
import { FaHome, FaPortrait, FaCamera, FaServicestack, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Header = () => {
  
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    setScrolled((offset>70)?true:false);
  }    
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const navbarClasses = (scrolled)?'navbar-header sticky relative':'navbar-header relative';
  return (
    <div className={navbarClasses}>
      <div className="navbar-nav w-full h-full flex justify-around items-center text-white ">
        <Link href="#here">
          <a className="nav-item nav-link active">
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="md:mr-4">            
                <FaHome className='w-8 h-8'/>
              </div>
              <div className="hidden md:block text-xl">Home</div>
            </div>
          </a>
        </Link>

        <Link href="#about">
          <a className="nav-item nav-link">
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="md:mr-4">            
                <FaPortrait className='w-8 h-8'/>
              </div>
              <div className="hidden md:block text-xl">About</div>
            </div>
          </a>
        </Link>
                
        <Link href="#portfolio">
          <a className="nav-item nav-link">
          <div className="flex justify-center items-center hover:cursor-pointer">
            <div className="md:mr-4">            
              <FaCamera className='w-8 h-8'/>
            </div>
            <div className="hidden md:block text-xl">Portfolio</div>
          </div>
          </a>
        </Link>

        <Link href="#skill">
          <a className="nav-item nav-link">
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="md:mr-4">            
                <FaServicestack className='w-8 h-8'/>
              </div>
              <div className="hidden md:block text-xl">Skills Service</div>
            </div>
          </a>
        </Link>

        <Link href="#contact">
          <a className="nav-item nav-link">
            <div className="flex justify-center items-center hover:cursor-pointer">
              <div className="md:mr-4">            
                <FaMailBulk className='w-8 h-8'/>
              </div>
              <div className="hidden md:block text-xl">Contact</div>
            </div>
          </a>
        </Link>

      </div>
    </div>
  )
}

export default Header
