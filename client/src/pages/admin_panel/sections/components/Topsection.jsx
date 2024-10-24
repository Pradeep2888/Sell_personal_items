import React, { useContext, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../../../auth/AuthContext';

function Topsection({ title }) {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)


    return (
        <div className='flex md:justify-between items-center mb-5 lg:mb-10'>
            <h1 className='text-2xl px-2 lg:px-0 md:text-3xl lg:text-4xl text-[#374B5C] font-semibold'>{title}</h1>
            {user.role === 'USER' && <div className='hidden lg:flex justify-between items-center gap-4 relative'>
                <div className='flex justify-between items-center border px-4 py-3 rounded border-[#D5E3EE]'>
                    <h6 className='text-[#374B5C] text-base font-medium mr-4'>Current Subscription:</h6>
                    <Link to={'/memberships'} className='text-sm text-[#374B5C] font-normal bg-[#FFB300] px-4 py-2 rounded'>Subscribe Now</Link>
                </div>
                <button className='rounded px-6 py-4 bg-[#537CD9] text-white text-lg font-semibold' onClick={() => navigate('/memberships')}>Buy the Package</button>
            </div>}
        </div>
    )
}

export default Topsection