import React from 'react'
import NoRecords from './components/NoRecords'

function MyOrders() {
  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
          <NoRecords title={"You don't have any order"} />
        </div>
      </div>
    </div>
  )
}

export default MyOrders