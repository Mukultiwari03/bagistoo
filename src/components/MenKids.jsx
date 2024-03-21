import React from 'react'
import Men from "../assests/men.webp"
import Women from "../assests/women.webp"
import Kids from "../assests/kids.webp"
const MenKids = () => {
  return (
    <div className='flex flex-row items-center justify-evenly lg:w-[50%] w-full mx-auto lg:h-[15rem] h-[15rem]'>
        <div className='flex flex-col items-center justify-center '>
            <img src={Men} alt="" className='rounded-full w-[100px] h-[100px]' />
            <p className='md:text-xl text-md font-semibold md:mt-3 mt-1'>Men</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Women} alt="" className='rounded-full w-[100px] h-[100px]' />
            <p className='md:text-xl text-md font-semibold md:mt-3 mt-1 mx-5'>Women</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Kids} alt="" className='rounded-full w-[100px] h-[100px]' />
            <p className='md:text-xl text-md font-semibold md:mt-3 mt-1 mx-5'>Kids</p>
        </div>
    </div>
  )
}

export default MenKids