import React from 'react'
import { AdminIcon, CompareIcon, LikeIcon, ViewIcon } from '../../../components/Icons'
import MensWhiteShoes from '../../../assets/Mens-White-Shoes.jpg'

function ProductList() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <div className="relative flex flex-col rounded-lg group cursor-pointer">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg box-border">
            <img width={"100%"} height={'100%'} loading="lazy" className="transform object-cover  hover:scale-100 transition ease-in-out scale-105 border-0 shadow-none overflow-hidden aspect-[360/240]" src={MensWhiteShoes} alt="" />
          </div>
        </div>
        <div className=" border  border-[#F2F4F8] rounded-b-lg  transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
          <div className=" flex flex-col justify-between">
            <div className="p-6">
              <h1 className="text-xl font-semibold min-h-[56px] text-start text-[#4E606F]"> Mens White Shoes </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between items-center px-3 border-t border-[#F2F4F8] py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="rounded-full border w-8 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <ViewIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <CompareIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <LikeIcon />
              </div>
            </div>
            <div className='text-end'>
              <p className="text-sm font-medium text-[#9A818C]">5 views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col rounded-lg group cursor-pointer">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg box-border">
            <img width={"100%"} height={'100%'} loading="lazy" className="transform object-cover  hover:scale-100 transition ease-in-out scale-105 border-0 shadow-none overflow-hidden aspect-[360/240]" src={MensWhiteShoes} alt="" />
          </div>
        </div>
        <div className="border  border-[#F2F4F8] rounded-b-lg  transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
          <div className=" flex flex-col justify-between">
            <div className="p-6">
              <h1 className="text-xl font-semibold min-h-[56px] text-start text-[#4E606F]"> Mens White Shoes </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between items-center px-3 border-t border-[#F2F4F8] py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="rounded-full border w-8 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <ViewIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <CompareIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <LikeIcon />
              </div>
            </div>
            <div className='text-end'>
              <p className="text-sm font-medium text-[#9A818C]">5 views</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col rounded-lg group cursor-pointer">
        <div className="relative">
          <div className="overflow-hidden rounded-t-lg box-border">
            <img width={"100%"} height={'100%'} loading="lazy" className="transform object-cover  hover:scale-100 transition ease-in-out scale-105 border-0 shadow-none overflow-hidden aspect-[360/240]" src={MensWhiteShoes} alt="" />
          </div>
        </div>
        <div className="border  border-[#F2F4F8] rounded-b-lg  transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
          <div className=" flex flex-col justify-between">
            <div className="p-6">
              <h1 className="text-xl font-semibold min-h-[56px] text-start text-[#4E606F]"> Mens White Shoes </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between items-center px-3 border-t border-[#F2F4F8] py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="rounded-full border w-8 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <ViewIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <CompareIcon />
              </div>
              <div className="rounded-full border w-8 p-2 h-8  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                <LikeIcon />
              </div>
            </div>
            <div className='text-end'>
              <p className="text-sm font-medium text-[#9A818C]">5 views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList