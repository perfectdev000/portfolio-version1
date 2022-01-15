import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import SlideImgItem from './SlideImgItem';
// Example items, to simulate fetching from another resources.
const items = [
    <SlideImgItem imgURL={"/assets/img/portfolio/BlueJestic.png"} imgLink={"https://bluejestic.com/"} skillContent={"React + React Hook + Next.js + TypeScript + Node.js + TailwindCSS + SCSS + GraphQL"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/test.momnpophub.png"} imgLink={"https://test.momnpophub.com/"} skillContent={"React + Redux + Node.js + Express.js + MongoDB"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/campoallecomete.png"} imgLink={"http://www.campoallecomete.it"} skillContent={"Three.js + WebGL"} />,
    <SlideImgItem imgURL={"my-portfolio"} imgLink={"https://perfectdev000.github.io/Particle-Image/"} skillContent={"Node.js + WebGL + Three.js"} />,
    <SlideImgItem imgURL={"my-portfolio"} imgLink={"https://my-portfolio-pi-black.vercel.app/rotating-cube.html"} skillContent={"Node.js + WebGL"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/alethea.png"} imgLink={"https://alethea.ai/"} skillContent={"React + Node.js + WebGL + Video.js + BlockChain + NFT"} />,
    <SlideImgItem imgURL={"my-portfolio"} imgLink={"/coin3d"} skillContent={"Next.js + TypeScript + Three.js + NFT token"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/exante.png"} imgLink={"https://exante.eu"} skillContent={"Backbone.js + particle.js + GoogleAPI + Python + Django"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/lusion.png"} imgLink={"https://lusion.co/"} skillContent={"Three.js + WebGL"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/UpayChat.png"} imgLink={"https://upaychat.com/"} skillContent={"Web/React + Mobile:React Native"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/koenigandreas.png"} imgLink={"https://koenigandreas.com"} skillContent={"BootStrap4 + particle.js + PHP"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/lonelyplanet.png"} imgLink={"https://www.lonelyplanet.com"} skillContent={"React + Next.js + Node.js"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/ultranote.png"} imgLink={"https://cloud.ultranote.org"} skillContent={"React + Chart.js + BlockChain + UltraNote"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/bluestarcoffeeroasters.png"} imgLink={"https://bluestarcoffeeroasters.com/"} skillContent={"React + tailwindCSS + Shopify"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/dnb.png"} imgLink={"https://dnb.ru/"} skillContent={"BootStrap + Python/Django"} />,
    <SlideImgItem imgURL={"/assets/img/portfolio/cools.png"} imgLink={"https://cools.com"} skillContent={"PHP/Laravel"} />,
  ];                
function Items({ currentItems }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 relative gap-8'>
      {currentItems &&
        currentItems.map((item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal) => (
          <div>
            {item}
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function SkillsView(){
  return (
    <>
      <div className='hidden md:block'>
        <PaginatedItems itemsPerPage={6}/>
      </div>
      <div className='md:hidden'>
        <PaginatedItems itemsPerPage={100}/>
      </div>
    </>
  );
}