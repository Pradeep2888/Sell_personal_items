import { useState } from 'react'
import { CalenderIcon, EmailIcon, LocationIcon, MobileIcon, UserNameIcon } from '../../../components/Icons'
import { CREATEDONATION } from '../../../services/operations/donationApi';
import { toast } from 'sonner';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';


const donationSchema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        countryCode: yup.string().length(10),
        phone: yup.string().required(),
        pickupAddress: yup.string().required(),
        pickupDate: yup.string().required(),
        otherAmount: yup.bool(),
        amount: yup.number().positive().required()
    })
    .required()

function DonationForm() {

    const [formData, setFormData] = useState({
        otherAmount: false,
        amount: '',
        name: "",
        email: '',
        countryCode: "",
        phone: '',
        pickupAddress: '',
        pickupDate: '',
    });

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(donationSchema),
    // })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // console.log(formData);

    const handleDonation = async (e) => {
        e.preventDefault();
        let res = await CREATEDONATION(formData);
        if (res) {
            setFormData({
                otherAmount: false,
                amount: '10',
                name: "",
                email: '',
                countryCode: "",
                phone: '',
                pickupAddress: '',
                pickupDate: '',
            })
            toast.success(res.message);
        }
    }


    return (
        <form className='flex flex-col justify-between items-start px-3 lg:px-0'
        // onSubmit={handleSubmit(handleDonation)}
        >
            <div className='flex w-full flex-col gap-6'>
                <div className='relative'>
                    <input
                        name='name'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium'
                        type="text"
                        placeholder="Name *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <UserNameIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative'>
                    <input
                        name='email'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium'
                        type="email"
                        placeholder="E-mail *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <EmailIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative flex'>
                    {/* <SelectCountryCode /> */}
                    <input
                        name='phone'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium'
                        type="tel"
                        placeholder="Phone *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <MobileIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative'>
                    <input
                        name='pickupAddress'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium'
                        type="text"
                        placeholder="Pickup Address *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <LocationIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative'>
                    <input name='pickupDate' onChange={handleChange} className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium' type="date" placeholder="Pickup Date *" />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <CalenderIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative'>
                    <textarea name='items' onChange={handleChange} className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-24 px-8 focus:outline-none placeholder:text-[#374b5c]  font-medium' type="text" placeholder="Items *" />
                </div>
                <label className='text-primary text-sm font-bold text-nowrap' htmlFor="selectAmout">Select Amount (Optional)</label>
                <div className='bg-white border border-gray-200 px-5 py-3 rounded flex justify-between items-start gap-2 flex-wrap relative'>
                    <div>
                        <input className='opacity-0 absolute' type="radio" name="amount" id="10" value={'10'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer size-10 p-2 ${formData.amount === '10' ? " bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="10">$ 10</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="20" value={'20'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer size-10 p-2 ${formData.amount === '20' ? "bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="20">$ 20</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="30" value={'30'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer size-10 p-2 ${formData.amount === '30' ? "bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="30">$ 30</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="40" value={'40'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer size-10 p-2 ${formData.amount === '40' ? "bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="40">$ 40</label>
                    </div>
                    <div>
                        {/* <input className='opacity-0 absolute' type="radio" name="amount" id="other" value={'other'} onChange={handleChange} /> */}
                        <label onClick={(e) => setFormData((prev) => ({ ...prev, otherAmount: true, amount: '' }))} className={`cursor-pointer py-2 px-4 ${formData.otherAmount === true ? "bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="other">Other</label>
                    </div>
                </div>
                {formData.otherAmount === true && <div className='relative'>
                    <input className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium' type="text" placeholder="Enter Amount *" name='amount' onChange={handleChange} />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>

                    </span>
                </div>}
            </div>
            <button onClick={handleDonation} className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Donate Now</button>
        </form>
    )
}

export default DonationForm




// < header >
// <h4 className='text-xl font-medium text-primary'>Gift Frequency</h4>
//             </header >
//             <div className='bg-[#F0F4FA] border border-gray-200 px-5 py-3 rounded-[4rem] flex justify-between gap-4 relative'>
//                 <div className='py-2 px-4 rounded-3xl bg-white flex justify-center items-center'>
//                     <input className='opacity-0' type="radio" name="frequency" id="Monthly" />
//                     <label className='mr-3' htmlFor="Monthly">Monthly</label>
//                 </div>
//                 <div className='py-2 px-4 rounded-3xl bg-white'>
//                     <input className='opacity-0' type="radio" name="frequency" id="one-time" />
//                     <label className='mr-3' htmlFor="one-time">One Time</label>
//                 </div>
//             </div>
//             <header>
//                 <h4>What want's to donate</h4>
//             </header>
//             <div>
//                 <div>
//                     <input type="radio" name="donationType" id="items" />
//                     <label htmlFor="items">Items</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="donationType" id="money" />
//                     <label htmlFor="money">Money</label>
//                 </div>
//             </div>
//             <header>
//                 <h4>Selct amount (in US dollar)</h4>
//             </header>
//             <div>
//                 <div>
//                     <input type="radio" name="amount" id="10" />
//                     <label htmlFor="10">$ 10</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="20" />
//                     <label htmlFor="20">$ 20</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="30" />
//                     <label htmlFor="30">$ 30</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="40" />
//                     <label htmlFor="40">$ 40</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="other" />
//                     <label htmlFor="other">$ 40</label>
//                 </div>
//                 <div>
//                     <label htmlFor="other">Other Amount</label>
//                     <input type="text" name="amount" id="other" />
//                 </div>
//             </div>

//             <div>
//                 <div>
//                     <input type="checkbox" name="amount" id="10" />
//                     <label htmlFor="10">Yes, I’ll generously add $0.75 each month to cover the transaction fees.</label>
//                 </div>
//             </div>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" name="name" />
//                 <a href="/">Click here to give in honor of other person</a>
//             </div>