import React, { useEffect, useRef, useState } from 'react'

function ProductFilter({ draft, All, Active, Pending, setActiveFilter, activeFilter }) {

    const dropdownRef = useRef(null)
    const [sortValue, setSortvalue] = useState('Newest')

    const handleChange = (value) => {
        setSortvalue(value)
    };
    const handleCloseSortSelect = () => {
        // handle close sort select
        if (dropdownRef.current) {
            if (dropdownRef?.current.children[1] && !dropdownRef?.current.contains(event.target)) {
                dropdownRef.current.children[1].style.display = 'none'
            }
        }
    };
    const handleToggle = () => {
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };

    useEffect(() => {
        document.addEventListener('click', handleCloseSortSelect);
        return () => removeEventListener('click', handleCloseSortSelect)
    });

    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-start items-center gap-3'>
                {All > 0 && <div onClick={() => setActiveFilter(null)} className={`flex justify-center items-center text-[#374B5C] font-medium ${activeFilter === null ? "bg-secondary" : "bg-[#D5E3EE]"}  px-4 py-4 rounded cursor-pointer`}>
                    All <span className='flex justify-center items-center rounded-full size-4 p-3 bg-white ml-2'>{All}</span>
                </div>}
                {Active > 0 && <div onClick={() => setActiveFilter('Active')} className={`flex justify-center items-center text-[#374B5C] font-medium ${activeFilter === 'Active' ? "bg-secondary" : "bg-[#D5E3EE]"}  px-4 py-4 rounded cursor-pointer`}>
                    Active <span className='flex justify-center items-center rounded-full size-4 p-3 bg-white ml-2'>{Active}</span>
                </div>}
                {Pending > 0 && <div onClick={() => setActiveFilter('Pending')} className={`flex justify-center items-center text-[#374B5C] font-medium ${activeFilter === 'Pending' ? "bg-secondary" : "bg-[#D5E3EE]"}  px-4 py-4 rounded cursor-pointer`}>
                    Pending <span className='flex justify-center items-center rounded-full size-4 p-3 bg-white ml-2'>{Pending}</span>
                </div>}
                {draft > 0 && <div onClick={() => setActiveFilter('Draft')} className={`flex justify-center items-center text-[#374B5C] font-medium ${activeFilter === 'Draft' ? "bg-secondary" : "bg-[#D5E3EE]"}  px-4 py-4 rounded cursor-pointer`}>
                    Draft <span className='flex justify-center items-center rounded-full size-4 p-3 bg-white ml-2'>{draft}</span>
                </div>}
            </div>
            <div className='flex gap-3'>
                <div className='flex items-center justify-between gap-4'>
                    <div className='text-[#000018] font-medium'>Sort By:</div>
                    <div ref={dropdownRef} className='relative' onClick={handleToggle}>
                        <div className='border border-[#D5E3EE] flex justify-between items-center px-4 py-4 gap-4 rounded-md' >
                            <div className='text-nowrap text-base font-medium text-[#3F5263]'>{sortValue}</div>
                            <div>
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
                        <div className='hidden dropdownlist w-full border border-[#D5E3EE] px-5 py-2 absolute z-10 bg-white rounded-md'>
                            <ul>
                                <li className={`min-w-48 text-base font-medium ${sortValue === 'Newest' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Newest')}>Newest</li>
                                <li className={`min-w-48 text-base font-medium ${sortValue === 'Oldest' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Oldest')}>Oldest</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <input className='border border-[#D5E3EE] flex justify-between items-center px-4 py-4 gap-4 rounded-md focus:outline-none placeholder:text-[#3F5263] placeholder:font-medium' type="search" placeholder='Search...' />
            </div>
        </div>
    )
}

export default ProductFilter