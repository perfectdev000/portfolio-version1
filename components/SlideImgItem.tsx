import * as React from "react";
import Link from 'next/link'
export default function SlideImgItem({imgURL, imgLink, skillContent}) {  
  return (
    <div className="w-full h-full">
      <Link href={imgLink}>
        <a target="_blank">
          <div className="relative w-full h-full shadown-md  hover:cursor-pointer">
            <img src={imgURL} className="w-full h-full"/>
            <div className="absolute bg-white left-0 top-0 w-full h-full opacity-0 hover:opacity-50 z-10"/>
          </div>
        </a>
      </Link>
    </div>
  );
}