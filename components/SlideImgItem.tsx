import * as React from "react";
import Link from 'next/link'
export default function SlideImgItem({imgURL, imgLink, skillContent}) {  
  return (
    <div className="w-full h-full p-2">      
      <Link href={imgLink}>
        <a target="_blank">
          <div className="relative h-full  border-4 border-white hover:shadow-lg">
            <div className="relative w-full h-48 md:h-64 hover:cursor-pointer">
              {
                (imgURL==='my-portfolio')?
                <iframe src={imgLink} className="w-full h-full shadown-md "/>
                :
                <img src={imgURL} className="w-full h-full shadown-md "/>
              }              
            </div>
            <div className="bg-white font-medium text-base text-red text-center p-2 h-16 flex justify-center items-center">
              <div className="">
                {skillContent}
              </div>
            </div>
            <div className="absolute bg-white left-0 top-0 w-full h-full opacity-0 hover:opacity-50 z-10" style={{transition: "ease-out 0.5s"}}/>
          </div>
        </a>
      </Link>
    </div>
  );
}