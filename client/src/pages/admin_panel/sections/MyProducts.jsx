import React from 'react'
import NoRecords from './components/NoRecords'
import { AdminIcon, DeleteIcon, EditIcon, LikeIcon, MobileIcon, ViewIcon } from '../../../components/Icons'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import MensWhiteShoes300x267 from '../../../assets/Mens-White-Shoes-300x267.jpg'

function MyProducts() {
  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        {/* <div className='relative bg-white border border-[#F2F4F8] rounded flex flex-col justify-center items-center min-h-80'>
          <NoRecords title={"No Orders"} />
        </div> */}
        <div className="relative bg-[#F8FAFD]">
          <div className="max-w-[1200px] mx-auto py-14">
            <div className='relative'>
              <div className=''>
                <Topsection title={"My Products"} />
                <div className='bg-[#FDFDFE]  p-10 mt-10'>
                  <ProductFilter />
                </div>
                <div className='bg-white border border-[#F2F4F8] rounded relative'>
                  <div className='grid grid-cols-12'>
                    <div className='col-span-10 border-r border-[#F2F4F8]'>
                      <div className='grid grid-cols-3'>
                        <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                          <img className='rounded-lg' src={MensWhiteShoes300x267} alt="" />
                        </div>
                        <div className='col-span-2 flex justify-start items-start p-4'>
                          <div className='flex flex-col justify-between items-start gap-2'>
                            <h3 className='text-primary font-medium text-2xl'>Product Name</h3>
                            <div className='flex flex-col justify-start items-start gap-2'>
                              <p className='text-primary font-normal border border-[#F2F4F8] py-2 px-6 rounded-md'>Electronics & Media</p>
                              <div className='flex justify-evenly gap-4 items-center'>
                                <p className='text-helper font-medium'>Added: <span className='text-light font-normal'>June 15, 2024</span></p>
                                <p className='text-helper font-medium'>Expires: <span className='text-light font-normal'>Never</span></p>
                              </div>
                              <div className='bg-[#F2F4F8] flex justify-between items-center px-2 py-1 rounded-md gap-4'>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <ViewIcon className='fill-light' />
                                  <span className='text-light font-medium'>9</span>
                                </div>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <MobileIcon className='fill-light' />
                                  <span className='text-light font-medium'>3</span>
                                </div>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <LikeIcon className='fill-light' />
                                  <span className='text-light font-medium'>0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-span-2 relative p-4 flex justify-start items-start'>
                      <ul>
                        <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} ><EditIcon />Edit</li>
                        <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} ><DeleteIcon />Delete</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default MyProducts