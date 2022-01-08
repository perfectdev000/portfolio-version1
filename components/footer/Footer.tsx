import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaMailBulk, FaSkype, FaGithub, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = ({}) => {
   
  const sendEmail = () => {    
    window.open("mailto:darkrut22@gmail.com?subject=About Project");
  };
  return (
    <div className="Footer bg-black border-t border-dashed w-full ">
      <div className='w-full flex justify-center items-center text-white w-full h-16'>
        <Link href={"#"}>
          <a className='h-full md:px-8' onClick={()=>sendEmail()}><FaMailBulk className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://join.skype.com/invite/xZi9LkzgQzuG"}>
          <a target="_blank" className='h-full md:px-8'><FaSkype className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://github.com/perfectdev000"}>
          <a target="_blank" className='h-full md:px-8'><FaGithub className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://discord.gg/YgNKvera"}>
          <a target="_blank" className='h-full md:px-8'><FaDiscord className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"#"}>
          <a target="_blank" className='h-full md:px-8'><FaTelegram className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"#"}>
          <a target="_blank" className='h-full md:px-8'><FaLinkedin className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
      </div>
      <div className='w-full text-center text-white p-2'>
        © Copyright 2020 By <span className='text-yellow-500'>Andrey Erhsov</span>
      </div>
    </div>
  )
}

export default Footer
