import React, { useState } from 'react'
import './MembershipPurchase.css'
import { GETPLANSBYID } from '../../services/operations/membershipApi';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

function MembershipPurchase({ _planID }) {


    const [SearchParams, setSearchParams] = useSearchParams()

    const planID = _planID ? _planID : SearchParams.get('planId')

    const { isPending, error, data } = useQuery({
        queryKey: ['getplans'],
        queryFn: async () => await GETPLANSBYID(planID)
    });

    const [PaymentType, setPaymentType] = useState('monthly');
    const includedFeatures = data?.plans?.features?.map((itm) => itm.feature.name)

    const handleToggle = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setPaymentType(e.target.value)
    };


    const handleCheckout = (e) => {
        e.preventDefault()
        console.log('checkout')
        toast.error('There is no payment gateway to checkout!')
    }

    return (

        <div className={`bg-white  ${_planID ? "" : "py-12 sm:py-16"}`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className='w-full flex justify-center'>
                    <div className="modal">
                        <form className="form">
                            <div className="banner-membership" />
                            <label className="title">Offers</label>
                            <p className="description m-auto">
                                Auto Withdrawal are available for monthly fee payments.
                            </p>
                            <div className='w-full flex justify-center items-center mt-5'>
                                <div className="flex w-fit py-2 gap-2 px-2  bg-light bg-opacity-60 rounded-[30px] shadow-2xl">
                                    <label className={`bg-white px-6 py-2 rounded-[30px] text-primary font-medium text-center cursor-pointer hover:ring-2 hover:ring-helper ${PaymentType === 'monthly' && 'shadow-md ring-2 ring-blue-600'}`} htmlFor="monthly">Monthly
                                        <input type="radio" name="membership" id="monthly" className="hidden" value={'monthly'} checked={PaymentType === 'monthly'} onChange={handleToggle} />
                                    </label>
                                    <label className={`bg-white px-6 py-2 rounded-[30px] text-primary font-medium text-center cursor-pointer hover:ring-2 hover:ring-helper ${PaymentType === 'onetime' && 'shadow-md ring-2 ring-blue-600'}`} htmlFor="onetime">One Time
                                        <input type="radio" name="membership" id="onetime" className="hidden" value={'onetime'} checked={PaymentType === 'onetime'} onChange={handleToggle} />
                                    </label>
                                </div>
                            </div>

                            <div className='lg:flex lg:items-center lg:justify-between'>
                                <div className="benefits w-full">
                                    <span className='text-primary'>What we offer</span>
                                    <ul className='w-full'>
                                        {isPending && [...Array(3)].map((feature, index) => (
                                            <li key={index} className="flex bg-light bg-opacity-60 items-center gap-2 animate-pulse h-5 rounded-3xl w-full"></li>
                                        ))}
                                        {includedFeatures?.map((feature, index) =>
                                            <li key={index}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 16 16"
                                                    height={16}
                                                    width={16}
                                                >
                                                    <rect className='fill-primary' rx={8} height={16} width={16} />
                                                    <path
                                                        strokeLinejoin="round"
                                                        strokeLinecap="round"
                                                        strokeWidth="1.5"
                                                        stroke="white"
                                                        d="M5 8.5L7.5 10.5L11 6"
                                                    />
                                                </svg>
                                                <span className='text-primary'>{feature}</span>
                                            </li>
                                        )
                                        }
                                    </ul>
                                </div>
                                {PaymentType === 'onetime' &&
                                    <div className='flex justify-center items-center w-1/2'>
                                        <div className='bg-helper size-20 rounded-full flex justify-center items-center  text-center text-white font-bold shadow-lg'>
                                            <span className=' text-center p-5'>Saved 31%</span>
                                        </div>
                                    </div>}
                            </div>
                            <div className="modal--footer">
                                {
                                    PaymentType === 'onetime' &&
                                    <>
                                        <label className="text-nowrap text-lg font-bold lg:text-2xl lg:font-extrabold">
                                            <span className=''>Total: $</span>{data?.plans?.offerValue} only
                                        </label>

                                        <button onClick={(e) => handleCheckout(e)} className="bg-secondary text-white font-medium leading-10 rounded-md h-10 px-6 hover:bg-opacity-70 shadow-md text-nowrap">Proceed To Checkout</button>
                                    </>
                                }
                                {PaymentType === 'monthly' &&
                                    <div className='w-full '>
                                        <div className={`${isPending ? "" : 'flex justify-end items-start'}`}>
                                            {isPending ? [...Array(3)].map((feature, index) => (
                                                <li key={index} className="flex bg-light bg-opacity-60 items-center gap-2 animate-pulse h-5 rounded-3xl w-full mt-2"></li>
                                            )) :
                                                <table className=''>
                                                    <tbody className='rounded '>
                                                        <tr className='text-end text-primary'>
                                                            <th className='p-2 '>Price</th>
                                                            <td className='p-2 text-sm font-medium text-primary'>${data?.plans?.price} per {data?.plans?.priceRate} </td>
                                                        </tr>
                                                        <tr className='text-end text-primary border-b'>
                                                            <th className='p-2 '>Plan Duration</th>
                                                            <td className='p-2  text-sm font-medium text-primary'>{data?.plans?.duration} {data?.plans?.priceRate}</td>
                                                        </tr>
                                                        <tr className='text-end text-primary'>
                                                            <th className='p-2 text-lg font-bold'>Total Amount</th>
                                                            <td className='p-2  text-sm font-medium text-primary'>{data?.plans?.duration} X {data?.plans?.price} = <span className='text-lg font-bold'>${data?.plans?.price * data?.plans.duration}</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            }
                                        </div>
                                        <div>
                                            <button onClick={(e) => handleCheckout(e)} className="bg-secondary w-full mt-4 text-white font-medium leading-10 rounded-md h-10 px-6 hover:bg-opacity-70 shadow-md">Proceed To Checkout</button>
                                        </div>
                                        <p className="description text-balance mt-4 mx-auto">
                                            Save upto 31% on onetime payment.
                                        </p>
                                    </div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default MembershipPurchase