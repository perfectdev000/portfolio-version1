import * as React from "react";

export default function SlideImgItem({imgURL, imgLink, skillContent}) {  
  return (
    <div className="p-4 hover:p-2 hover:cursor-pointer w-full h-full">
      <div className="w-full h-full shadown-md">
        <img src={imgURL} />
      </div>
    </div>
  );
}