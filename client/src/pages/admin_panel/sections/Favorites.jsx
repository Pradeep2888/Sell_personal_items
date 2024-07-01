import React from 'react'
import NoRecords from './components/NoRecords'

function Favorites() {
  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
          <NoRecords title={"You don't have favorite Products yet"} />
        </div>
      </div>
    </div>
  )
}

export default Favorites