import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaMailBulk, FaSkype, FaGithub, FaDiscord, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="Footer bg-red border-t border-dashed w-full h-16 flex items-center">
      <div className='w-full flex justify-around items-center text-white w-full h-full'>
        <Link href={""}>
          <a target="_blank" className='h-full'><FaMailBulk className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://join.skype.com/invite/xZi9LkzgQzuG"}>
          <a target="_blank" className='h-full'><FaSkype className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://github.com/perfectdev000"}>
          <a target="_blank" className='h-full'><FaGithub className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={"https://discord.gg/YgNKvera"}>
          <a target="_blank" className='h-full'><FaDiscord className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={""}>
          <a target="_blank" className='h-full'><FaTelegram className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
        <Link href={""}>
          <a target="_blank" className='h-full'><FaLinkedin className='w-full h-full p-4 hover:p-3'/></a>
        </Link>
      </div>
    </div>
  )
}

export default Footer
