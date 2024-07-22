import React from 'react'
import Breadcrums from './sections/Breadcrums'
import SearchSection from './sections/SearchSection'
import ProductList from './sections/ProductList'
import ProductFilter from './sections/ProductFilter'
import ProductListHeader from './sections/ProductListHeader'
import { GET_ALL_PRODUCTS, GET_PRODUCT_CATEGORY } from '../../services/operations/productsApi'
import { useQuery } from '@tanstack/react-query'
import ErrorUi from '../../components/ErrorUi'
import { useSearchParams } from 'react-router-dom'

function Products() {

    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    const searchParams = {}
    URLSearchParams?.forEach((value, key, parent) => {
        if (searchParams[key]) {
            searchParams[key] = value
        } else {
            searchParams[key] = value
        }
    });
    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCTS', searchParams],
        queryFn: async () => {
            const product = await GET_ALL_PRODUCTS(searchParams);
            return { products: product.products }
        }
    });



    if (error) {
        return <ErrorUi error={error.message} />
    }

    const products = data?.products
    return (
        <div className="bg-white w-full relative">
            <div className="bg-[#F8FAFD]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <Breadcrums />
                </div>
            </div>
            {/* <div className="bg-[#D5E3EE]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    {isPending ? <div className='min-h-10 animate-pulse bg-loader w-full rounded-3xl'></div> : <SearchSection />}
                </div>
            </div> */}
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
                                        <ProductListHeader count={products?.length} category={products?.category} isPending={isPending} />
                                    </div>
                                    <div className='my-4'>
                                        <div>
                                            <ProductList products={products} isPending={isPending} />
                                        </div>
                                    </div>
                                    <div>
                                        {isPending ? <div className='min-h-5 animate-pulse bg-loader w-full rounded-3xl'></div> : products.length > 0 && <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>{products?.length}</span> of <span className='text-[#374B5C] font-semibold'>{products?.length}</span> results</p>}
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


const productsLoadingUI = ({ isPending }) => {
    return (
        <>
            <div className="bg-[#D5E3EE]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <SearchSection isPending={isPending} />
                </div>
            </div>
            <div className="bg-[#F8FAFD] relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className='py-14'>
                        <div className='grid grid-cols-4 gap-x-10'>
                            <div className='col-span-1'>
                                <div className='relative bg-white border border-[#F2F4F8] p-6'>
                                    <ProductFilter isPending={isPending} />
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className='flex flex-col justify-start '>
                                    <div>
                                        <ProductListHeader isPending={isPending} />
                                    </div>
                                    <div className='my-4'>
                                        <div>
                                            <ProductList isPending={isPending} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[#73819E] w-1/2 h-3 animate-pulse'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}