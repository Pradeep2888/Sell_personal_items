import React, { useState } from 'react'
import NoRecords from './components/NoRecords'
import { AdminIcon, DeleteIcon, EditIcon, LikeIcon, MobileIcon, ViewIcon } from '../../../components/Icons'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import MensWhiteShoes300x267 from '../../../assets/Mens-White-Shoes-300x267.jpg'
import { useQuery } from '@tanstack/react-query'
import ErrorUi from '../../../components/ErrorUi'
import { GET_MY_PRODUCT } from '../../../services/operations/adminApi'
import { IMAGEURL, getFormatedDate } from '../../../utils/constants'

function MyProducts() {


  const [refresh, setRefresh] = useState(false)

  const { isPending, error, data } = useQuery({
    queryKey: ['GET_MODERATION_PRODUCT', refresh],
    queryFn: async () => await GET_MY_PRODUCT()
  });

  if (isPending) {
    return <LoadingUI />
  }

  if (error) {
    return <ErrorUi error={error.name} />
  }

  const handlePromote = () => {
    setRefresh(!refresh)

  }

  // const draftProducts = data?.products?.filter((item) => item.status === 'Draft')


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        {
          data.products.length < 1 ?

            <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
              <NoRecords title={"You don't have any products."} />
            </div> :

            <div className="relative bg-[#F8FAFD]">
              <div className="max-w-[1200px] mx-auto py-14">
                <div className='relative'>
                  <div className=''>
                    <Topsection title={"My Products"} />
                    <div className='bg-[#FDFDFE]  p-10 mt-10'>
                      <ProductFilter />
                    </div>
                    <div className='bg-white border border-[#F2F4F8] rounded relative'>
                      {data?.products.map((item) => <div key={item.post_id} className='grid grid-cols-12'>
                        <div className='col-span-10 border-r border-[#F2F4F8]'>
                          <div className='grid grid-cols-3'>
                            <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                              <img className='rounded-lg' src={IMAGEURL + item?.images[0]?.image} alt="" />
                            </div>
                            <div className='col-span-2 flex justify-start items-start p-4'>
                              <div className='flex flex-col justify-between items-start gap-2'>
                                <h3 className='text-primary font-medium text-2xl'>{item.name}</h3>
                                <div className='flex flex-col justify-start items-start gap-2'>
                                  <p className='text-primary font-normal border border-[#F2F4F8] py-2 px-6 rounded-md'>{item.category}</p>
                                  <div className='flex justify-evenly gap-4 items-center'>
                                    <p className='text-helper font-medium'>Added: <span className='text-light font-normal'>{getFormatedDate(item.createdAt)}</span></p>
                                    <p className='text-helper font-medium'>Expires: <span className='text-light font-normal'>{item.expires ? getFormatedDate(item.expires) : "Never"}</span></p>
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

                        <div className='col-span-2 relative p-4 flex justify-between items-start flex-col'>
                          <ul>
                            <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out flex justify-start gap-2 items-center`} ><EditIcon />Edit</li>
                            <li className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out flex justify-start gap-2 items-center`} ><DeleteIcon />Delete</li>
                          </ul>
                          <div className='mx-auto'>
                            <button onClick={() => handlePromote(item.post_id, 'Pending')} className='bg-helper text-white font-semibold'>
                              Promote
                            </button>
                          </div>
                        </div>
                      </div>)}
                    </div>
                    <div className='mt-4'>
                      <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
      </div >
    </div >
  )
}

export default MyProducts


const LoadingUI = () => {
  return (
    <>
    </>
  )
}