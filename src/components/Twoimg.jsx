import React from 'react'

const Twoimg = () => {
  return (
    <div>
        <div className='md:mt-[3rem] mt-[1rem] mb-12'>
            <p className=' sm:text-6xl text-5xl font-bold text-center  py-5' style={{fontFamily:" DM Serif Display"}}>
            The game with our <br/>new additions!</p>
        </div>

       <div className='flex flex-row flex-wrap items-center justify-center gap-5'>
        <div className=''>
          <img src="https://demo.bagisto.com/bagisto-common/storage/theme/8/UQrrhngMrjNBrOtX9O2T63zFsWbTAEAgsZliWQfI.webp" alt="get ready img" className='rounded-[16px] lg:w-[632px] md:w-[535px] w-[366px]' />
          <p className=' sm:text-5xl text-5xl font-bold text-center  py-5 italic' style={{fontFamily:" DM Serif Display"}}>
           Our Collections </p>
        </div>
        <div className=''>
          <img src="https://demo.bagisto.com/bagisto-common/storage/theme/8/A4LcK6YbIWuHLzM8ajzyc8QTFoJQUIvZzhqjGx95.webp" alt="get ready img" className='rounded-[16px] lg:w-[632px] md:w-[535px] w-[366px]' />
          <p className=' sm:text-5xl text-5xl font-bold text-center italic  py-5' style={{fontFamily:" DM Serif Display"}}>
           Our collections </p>
        </div>
        </div>  
    </div>
  )
}

export default Twoimg