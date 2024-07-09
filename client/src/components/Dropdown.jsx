import React, { memo, useEffect, useRef, useState } from 'react'
import { CrossIcon } from './Icons';

const Dropdown = ({ defaultValue, children, setCategory, category, onChange, onClear, required, lists, search }) => {
    const dropdownRef = useRef(null)
    // const [sortValue, setSortvalue] = useState('');
    const [filteredList, setFilteredList] = useState(lists);


    const handleChange = (e, value) => {
        setCategory(value)
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
        setCategory('');
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
                <div className='min-w-48 text-base font-medium text-[#3F5263] select-none'>{category !== '' ? category : defaultValue}</div>
                {category !== '' ? <CrossIcon onClick={handleClear} /> : <div>
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




export const DropdownComponent = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    // Function to handle clicks outside the dropdown
    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Effect to add click event listener on mount
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

   

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    useEffect(() => {
        if(value===''||value===null){
            setSelectedOption(null)
        }
    }, [value])
    return (
        <div ref={dropdownRef} className="relative inline-block text-left w-full ">
            {/* Dropdown button */}
            <div className='w-full'>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-primary "
                    onClick={toggleDropdown}
                >
                    <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
                    {/* Dropdown arrow */}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown menu */}
            <div
                className={`origin-top-left z-10 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="block px-4 py-2 text-base font-medium text-primary hover:text-secondary w-full text-left"
                            role="menuitem"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

