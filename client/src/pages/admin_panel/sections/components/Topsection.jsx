import React from 'react'
import { Link } from 'react-router-dom'

function Topsection({ title }) {
    return (
        <div className='flex md:justify-between items-center mb-10'>
            <h1 className='text-4xl text-[#374B5C] font-semibold'>{title}</h1>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-between items-center border px-4 py-3 rounded border-[#D5E3EE]'>
                    <h6 className='text-[#374B5C] text-base font-medium mr-4'>Current Subscription:</h6>
                    <Link to={'/subscriptions'} className='text-sm text-[#374B5C] font-normal bg-[#FFB300] px-4 py-2 rounded'>Subscribe Now</Link>
                </div>
                <button className='rounded px-6 py-4 bg-[#537CD9] text-white text-lg font-semibold'>Buy the Package</button>
            </div>
        </div>
    )
}

export default Topsection