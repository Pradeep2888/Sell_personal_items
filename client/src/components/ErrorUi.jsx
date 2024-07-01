import React from 'react'
import { Link } from 'react-router-dom'

function ErrorUi({ error }) {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full">
                        <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 w-full lg:flex lg:flex-col lg:justify-center lg:py-16 ">
                            <div className="mx-auto px-8 w-full">
                                <h4 className='text-primary text-2xl text-nowrap font-bold text-center w-full'>{"Sorry for the Inconvenience"}</h4>
                                <p className='text-light text-lg font-semibold text-center'>{'Something went wrong!'}</p>
                                <p className='text-light text-sm font-medium text-center'>{'It will be resolved soon.'}</p>
                            </div>
                            <div className=' mt-10'>
                                <Link to={'/'} className='text-helper text-lg font-medium ring-1 ring-inset ring-helper rounded-2xl px-6 py-2 hover:'>Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorUi