import React, { useEffect, useRef, useState } from 'react'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import { AdminIcon } from '../../../components/Icons'
import MensWhiteShoes300x267 from '../../../assets/Mens-White-Shoes-300x267.jpg'
import ErrorUi from '../../../components/ErrorUi'
import { GET_MODERATION_PRODUCT } from '../../../services/operations/adminApi'
import { useQuery } from '@tanstack/react-query';
import { IMAGEURL, getFormatedDate } from '../../../utils/constants'
import NoRecords from './components/NoRecords'

function ModerateProducts() {
  const dropdownRef = useRef(null);


  const { isPending, error, data } = useQuery({
    queryKey: ['getplans'],
    queryFn: async () => await GET_MODERATION_PRODUCT()
  });

  if (isPending) {
    return <LoadingUI />
  }

  if (error) {
    return <ErrorUi error={error.name} />
  }

  const draftProducts = data?.products.filter((item) => item.status === 'Draft')


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
          {
            data.products.length < 1 ?

              <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
                <NoRecords title={"No Moderations"} />
              </div> :

              <div className=''>
                <Topsection title={"Moderation"} />
                <div className='bg-[#FDFDFE]  p-10 mt-10'>
                  <ProductFilter draft={draftProducts.length} All={data?.products.length} Active={data?.products.filter((item) => item.status === 'Active').length} Pending={data?.products.filter((item) => item.status === 'Pending').length} Draft={draftProducts.length} />
                </div>
                <div className='bg-white border border-[#D5E3EE] rounded relative'>
                  <div className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                    <div className='col-span-6 p-6 text-[#374B5C] text-lg font-medium'>Product</div>
                    <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>User</div>
                    <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Status</div>
                    <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Actions</div>
                  </div>
                  {data.products.map((item) =>

                    <div key={item.id} className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                      <div className='col-span-6 border-r  border-[#D5E3EE]'>
                        <div className='grid grid-cols-3'>
                          <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                            <img className='rounded-lg' src={IMAGEURL + item.images[0].image} alt={item.name} />
                          </div>
                          <div className='col-span-2 flex justify-start items-center'>
                            <div className='flex flex-col justify-between items-start gap-2'>
                              <h3 className='text-primary font-medium'>{item.name}</h3>
                              <div className='flex flex-col justify-start items-start gap-1'>
                                <p className='text-primary font-medium'>Category: <span className='text-light font-normal'>{item.category}</span></p>
                                <p className='text-primary font-medium'>Added: <span className='text-light font-normal'>{getFormatedDate(item.createdAt)}</span></p>
                                <p className='text-primary font-medium'>Expires: <span className='text-light font-normal'>{getFormatedDate(item.expires) ? getFormatedDate(item.expires) : 'Never'}</span></p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                        <div className='flex justify-center items-center flex-col gap-3'>
                          <div className='rounded-full bg-[#F2F4F8] size-12 flex justify-center items-center '>
                            <AdminIcon color={"#D5E3EE"} />
                          </div>
                          <p>{item.user.name}</p>
                        </div>
                      </div>
                      <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                        <div className='flex justify-center items-center '>
                          <p className='py-1 px-4 rounded-md bg-active text-center text-white'>{item.status}</p>
                        </div>
                      </div>
                      <div className='col-span-2 relative p-4 flex justify-center items-center'>
                        <div className='relative group'>
                          <div className='border min-w-32 border-[#D5E3EE] flex justify-between items-center px-3 py-3 relative rounded-md' >
                            <div className='text-base font-medium text-[#3F5263]'>{"Actions"}</div>
                            <div className='relative'>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={7}
                                height={5}
                                viewBox="0 0 7 5"
                                fill="none"
                              >
                                <path
                                  d="M3.5 2.56768L5.87477 0.192917C6.13207 -0.0643854 6.54972 -0.0643854 6.80702 0.192917C7.06433 0.45022 7.06433 0.86787 6.80702 1.12517L3.9394 3.99279C3.6964 4.2358 3.30298 4.2358 3.0606 3.99279L0.192977 1.12517C-0.0643257 0.86787 -0.0643257 0.45022 0.192977 0.192917C0.45028 -0.0643854 0.86793 -0.0643854 1.12523 0.192917L3.5 2.56768Z"
                                  fill="#2A3946"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='hidden min-w-40 group-hover:block dropdownlist w-full border border-[#D5E3EE] px-5 py-2 absolute z-10 bg-white rounded-md'>
                            <ul>
                              <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Edit</li>
                              <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Switch to Draft</li>
                              <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Delete</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='mt-4'>
                  <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ModerateProducts



const LoadingUI = () => {
  return (<>
  </>)
}