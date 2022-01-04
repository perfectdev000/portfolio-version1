import * as React from "react";
import Link from 'next/link'
export default function SlideImgItem({imgURL, imgLink, skillContent}) {  
  return (
    <div className="w-full h-full p-2">      
      <Link href={imgLink}>
        <a target="_blank">
          <div className="relative h-full  border-4 border-white">
            <div className="relative w-full h-48 md:h-64 shadown-md  hover:cursor-pointer">
              <img src={imgURL} className="w-full h-full"/>
            </div>
            <div className="bg-red font-medium text-base text-white text-center p-2 h-16 flex justify-center items-center">
              <div className="">
                {skillContent}
              </div>
            </div>
            <div className="absolute bg-white left-0 top-0 w-full h-full opacity-0 hover:opacity-50 z-10"/>
          </div>
        </a>
      </Link>
    </div>
  );
}