import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function ProductFilter() {
    const [urlSearchParams, setUrlSearchParams] = useSearchParams();
    const searchParams = {}
    urlSearchParams?.forEach((value, key, parent) => {
        if (searchParams[key]) {
            searchParams[key].push(value)
        } else {
            searchParams[key] = [value]
        }
    });
    const [category, setcategory] = useState(() => searchParams?.category ? searchParams?.category[0] : 'Any');

    console.log(searchParams);

    const handleChange = (e) => {
        setcategory(e.target.value);
        if (e.target.value !== 'Any') {
            setUrlSearchParams({ category: e.target.value });
        } else {
            setUrlSearchParams({});
        }
    }

    const lists = [
        {
            label: 'Any',
            value: 'Any',
            disable: true
        },
        {
            label: 'Clothing, Shoes, & Accessories',
            value: 'Clothing, Shoes, & Accessories',
            disable: true
        },
        {
            label: 'Collections & Art',
            value: 'Collections & Art',
            disable: true
        },
        {
            label: 'Electronics & Media',
            value: 'Electronics & Media',
            disable: true
        },
        {
            label: 'Home & Garden',
            value: 'Home & Garden',
            disable: true
        },
        {
            label: 'Baby & Kids',
            value: 'Baby & Kids',
            disable: false
        },
        {
            label: 'Furniture',
            value: 'Furniture',
            disable: false
        },
        {
            label: 'Health & Beauty',
            value: 'Health & Beauty',
            disable: false
        },
        {
            label: 'Sport & Outdoor',
            value: 'Sport & Outdoor',
            disable: false
        },
        {
            label: 'Toys, Games, & Hobbies',
            value: 'Toys, Games, & Hobbies',
            disable: false
        },
        {
            label: 'Vehicle',
            value: 'Vehicle',
            disable: false
        },

    ]
    return (
        <div className='relative'>
            <h3 className='text-base font-medium text-[#374B5C] flex justify-between items-center'><span>Category</span><div className='h-3 w-3 rounded-full bg-[#D5E3EE]'></div></h3>
            <ul className='mt-4'>
                {
                    lists.map((list, i) =>
                        <li className='py-2' key={i}>
                            <div className='flex justify-start items-center gap-3'>
                                <input id={list.label.replaceAll(' ')} className='size-4' value={list.value} checked={list.value === category} onChange={handleChange} type="radio" />
                                <label className='font-medium text-sm text-[#374B5C]' htmlFor={list.label.replaceAll(' ')}>{list.label}<span>(6)</span></label>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductFilter