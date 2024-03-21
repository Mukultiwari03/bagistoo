import React from 'react';

const Newbold = () => {
  return (
    <div className='w-screen mt-20 lg:mt-0 '>
      <div className='flex lg:flex-row-reverse flex-col items-center gap-10 justify-center lg:w-[80%] w-full lg:h-[40rem] h-[fit-cotent] mx-auto'>
        <div className='flex items-center justify-center lg:w-[50%]'>
          <img src="https://demo.bagisto.com/bagisto-common/storage/theme/10/GhiESeKgXxebvQ0nS4JBRd0Gbf0ASvQDaUFKS6uT.webp" alt="get ready img" className='rounded-[16px] lg:w-[632px] md:w-[535px] w-[366px]' />
        </div>
        <div className='flex flex-col lg:items-start gap-y-7 lg:w-[50%] w-full '>
          <h2 className='md:text-6xl text-5xl text-center lg:text-start font-bold' style={{ fontFamily: "DM Serif Display" }}>
            Get Ready for <br />our new Bold <br />Collections!
          </h2>
          <p className='text-[#6e6e6e] text-[20px] text-center lg:text-start sm:mx-auto mx-0 lg:mx-0 md:mx-0 lg:w-full lg:px-0 px-0 sm:w-[80] md:px-[10rem]'>Introducing Our New Bold Collections! Elevate your style with daring designs and vibrant statements. Explore striking patterns and bold colors that redefine your wardrobe. Get ready to embrace the extraordinary!</p>
          <button className='bg-black text-white lg:self-start self-center text-[20px] px-5 py-3 rounded-lg pointer w-[7rem]'>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Newbold;
