import React from 'react'
import Breadcrums from './sections/Breadcrums'
import SearchSection from './sections/SearchSection'
import ProductList from './sections/ProductList'
import ProductFilter from './sections/ProductFilter'
import ProductListHeader from './sections/ProductListHeader'

function Products() {
    return (
        <div className="bg-white w-full relative">
            <div className="bg-[#F8FAFD]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <Breadcrums />
                </div>
            </div>
            <div className="bg-[#D5E3EE]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <SearchSection />
                </div>
            </div>
            <div className="bg-[#F8FAFD] relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className='py-14'>
                        <div className='grid grid-cols-4 gap-x-10'>
                            <div className='col-span-1'>
                                <div className='relative bg-white border border-[#F2F4F8] p-6'>
                                    <ProductFilter />
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className='flex flex-col justify-start '>
                                    <div>
                                        <ProductListHeader />
                                    </div>
                                    <div className='my-4'>
                                        <div>
                                            <ProductList />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products