import React, { memo, useEffect, useRef, useState } from 'react'
import { CrossIcon } from './Icons';

const Dropdown = ({ defaultValue, children, onChange, onClear, required, lists, search }) => {
    const dropdownRef = useRef(null)
    const [sortValue, setSortvalue] = useState('');
    const [filteredList, setFilteredList] = useState(lists);


    const handleChange = (e, value) => {
        setSortvalue(value)
        onChange(value)
        dropdownRef.current.children[1].style.display = 'none'
    };

    const handleCloseSelect = (e, value) => {
        if (dropdownRef.current) {
            if (dropdownRef?.current.children[1] && !dropdownRef?.current.children[1].contains(event.target)) {
                dropdownRef.current.children[1].style.display = 'none'
            }
        }
    };
    const handleToggle = (e) => {
        e.stopPropagation();
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };

    const handleSearch = (e) => {
        console.log(e.target.value, lists);
        const searchValue = e.target.value.toLowerCase();
        const filteredList = lists.filter((item) => item.label.toLowerCase().includes(searchValue));
        setFilteredList(filteredList)
    }

    const handleClear = (e) => {
        e.stopPropagation()
        setSortvalue('');
        onChange('')
        onClear && onClear('')
    }


    useEffect(() => {
        document.addEventListener('click', handleCloseSelect);
        return () => removeEventListener('click', handleCloseSelect)
    }, []);
    return (
        <div ref={dropdownRef} className='relative' >
            <div className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md' onClick={handleToggle}>
                <div className='min-w-48 text-base font-medium text-[#3F5263] select-none'>{sortValue !== '' ? sortValue : defaultValue}</div>
                {sortValue !== '' ? <CrossIcon onClick={handleClear} /> : <div>
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
                </div>}
            </div>
            <div className='hidden dropdownlist w-full border border-[#D5E3EE] px-5 py-3 absolute z-10 bg-white rounded-md shadow-lg'>
                <input type="search" placeholder='Search...' onChange={handleSearch} className='relative border border-[#D5E3EE] focus:outline-none w-full rounded py-1 px-2' />
                <ul className='mt-4 scroll-smooth max-h-96 select-none'>
                    {
                        filteredList.map((list, i) =>
                            <li key={i} onClick={(e) => handleChange(e, list.value)} className='text-primary font-semibold py-1 cursor-pointer transition ease-in-out hover:text-secondary'>{list.label}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default memo(Dropdown)