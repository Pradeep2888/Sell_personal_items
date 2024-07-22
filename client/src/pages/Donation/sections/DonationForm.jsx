import { useContext, useState } from 'react'
import { AddIcon, CalenderIcon, EmailIcon, LocationIcon, MobileIcon, UserNameIcon } from '../../../components/Icons'
import { CREATEDONATION } from '../../../services/operations/donationApi';
import { toast } from 'sonner';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { DropdownList, SelectGroupOne } from '../../../components/Dropdown';
import EditorComponent from '../../../components/CKEEditor';
import FileUpload from '../../../components/FileUpload';
import { AuthContext } from '../../../auth/AuthContext';
import Table from '../../../components/Table';


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

    const { user } = useContext(AuthContext);


    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        otherAmount: false,
        amount: '',
        name: "",
        email: '',
        countryCode: "+91",
        phone: '',
        pickupAddress: '',
        pickupDate: '',
    });

    const [items, setItems] = useState([]);
    const [itemsData, setItemData] = useState({
        name: '',
        category: "",
        quantity: '',
        description: '',
        image: []
    });

    const [selectedOption, setSelectedOption] = useState("");
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [category, setCategory] = useState('')

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };


    console.log(itemsData, "itemsData");
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

    console.log(items, "itemsmms");

    const handleDonation = async (e) => {
        e.preventDefault();
        let res = await CREATEDONATION({ ...formData, items: items.length !== 0 ? items : [itemsData] });
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

    const handleGallary = async (files) => {

        if (!files || files.length === 0) return;

        try {
            const promises = Array.from(files).map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onload = () => resolve({ fileName: file.name, url: reader.result });
                    reader.onerror = error => reject(error);

                    reader.readAsDataURL(file);
                });
            });
            const base64Results = await Promise.all(promises);
            setItemData((prev) => ({ ...prev, image: base64Results }))

        } catch (error) {
            console.error('Error converting files to base64:', error);
        }
    }


    const handleRemoveGallary = async (e, i) => {
        let list = [...itemsData.image];
        // let res = await DELETEUPLOADS(list[i].filename);
        // if (res.status) {
        list.splice(i, 1);
        setItemData((prev) => ({ ...prev, image: list }))
        toast.success('Image removed successfully')
        // }
    }

    const handleReset = () => {
        setItemData((prev) => ({
            name: '',
            category: "",
            quantity: '',
            description: '',
            image: []
        }));
        setItemData((prev) => ({ ...prev, category: '', categoryName: '' }))

    }


    const disable = formData.name === '' || formData.email === '' || formData.countryCode === '' || formData.phone === '' ||
        formData.pickupAddress === '' || formData.pickupDate === '' || itemsData.category === '' || itemsData.description === ''
        || itemsData.quantity === '' || itemsData.name === '' || itemsData.image.length === 0;


    const handleAddNew = (e) => {
        e.preventDefault();
        setItems((prev) => ([{ ...itemsData }, ...prev]));
        handleReset()
    }

    // const handleDelete
    // console.log(disable);

    return (
        <form className='flex flex-col justify-between items-start'
        // onSubmit={handleSubmit(handleDonation)}
        >
            <div className='grid grid-cols-1 w-full gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {/* {!user ? <> */}
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
                    <label htmlFor='pickupDate' className={`${formData.pickupDate?"hidden":'absolute mb-2 block ml-2 pb-1 font-medium text-primary bg-white z-20 left-12 top-4 w-1/2'}`}>Pickup Date *</label>
                    <input value={formData.pickupDate} name='pickupDate' id='pickupDate' onChange={handleChange} className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium' type="date" placeholder="Pickup Date *" />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <CalenderIcon color={"#475B6B"} />

                    </span>

                </div>
                {/* </> : <></>} */}
                <div className='relative col-span-3 text-primary mt-2'>
                    <h3 className='font-semibold ml-5'>Add Items *</h3>
                </div>
                <div className='relative text-primary'>
                    <div className="w-full">
                        <label className="mb-2 block ml-2 font-medium text-primary">
                            Product Name *
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={itemsData.name}
                            onChange={(e) => setItemData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-primary outline-none transition focus:border-helper active:border-helper disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input"
                        />
                    </div>
                </div>

                {/* <div className='relative'>
                    <label className="mb-2 block text-primary ml-2 font-medium">
                        {" "}
                        Product Category{" "}
                    </label>

                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select
                            value={selectedOption}
                            onChange={(e) => {
                                setSelectedOption(e.target.value);
                                changeTextColor();
                            }}
                            className={`relative z-20 w-full appearance-none font-medium rounded border border-stroke text-primary bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark  ${isOptionSelected ? "text-black" : ""
                                }`}
                        >
                            <option value="" className="text-body dark:text-bodydark font-medium">
                                Select Product Category
                            </option>
                            <option value="USA" className="text-body dark:text-bodydark">
                                USA
                            </option>
                            <option value="UK" className="text-body dark:text-bodydark">
                                UK
                            </option>
                            <option value="Canada" className="text-body dark:text-bodydark">
                                Canada
                            </option>
                        </select>

                        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                            <svg
                                className="fill-current"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g opacity="0.8">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill=""
                                    ></path>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div> */}
                <div className='relative'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Category *
                    </label>
                    <DropdownList label={'Select Product Category'} value={itemsData.category} onChange={(value) => setItemData((prev) => ({ ...prev, category: value.id, categoryName: value.name }))} />
                </div>
                <div className='relative text-primary'>
                    <div className="w-full">
                        <label className="mb-2 block ml-2 font-medium text-primary">
                            Quantity *
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={itemsData.quantity}
                            onChange={(e) => setItemData((prev) => ({ ...prev, quantity: e.target.value }))}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-primary outline-none transition focus:border-helper active:border-helper disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input"
                        />
                    </div>
                </div>
                <div className='relative col-span-3'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Description *
                    </label>
                    <EditorComponent data={itemsData.description} onChange={(value) => setItemData((prev) => ({ ...prev, description: value }))} />
                </div>
                <div className='relative col-span-3'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Image Upload *
                    </label>
                    <FileUpload files={itemsData.image} progress={0} onUploadFile={handleGallary} handleRemove={handleRemoveGallary} type={"images"} name={"Gallery"} id={"Gallery"} setFiles={(img) => setItemData((prev) => ({ ...prev, image: [...prev.image, img] }))} />
                </div>
                {/* <div className='relative'>
                    <textarea name='items' onChange={handleChange} className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-24 px-8 focus:outline-none placeholder:text-[#374b5c]  font-medium' type="text" placeholder="Items *" />
                </div> */}
                {/* <div className='relative'>
                    <label className='text-primary text-sm font-bold text-nowrap' htmlFor="selectAmout">Select Amount (Optional)</label>
                    <div className='bg-white border border-gray-200 px-5 py-3 rounded flex justify-between items-start gap-2 flex-wrap relative mt-2'>
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
                            <span onClick={(e) => setFormData((prev) => ({ ...prev, otherAmount: true, amount: '' }))} className={`cursor-pointer py-2 px-4 ${formData.otherAmount === true ? "bg-helper text-white" : "text-primary"} text-sm font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded-full  flex justify-center items-center`} htmlFor="other">Other</span>
                        </div>
                    </div>
                    {formData.otherAmount === true &&
                        <div className='relative mt-2'>
                            <input className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium' type="text" placeholder="Enter Amount *" name='amount' onChange={handleChange} />
                            <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'></span>
                        </div>}
                </div> */}
                {/* <div className='relative col-span-1'>
                    <button onClick={handleAddNew} className='bg-secondary text-white font-semibold'>Add New Item</button>
                </div> */}

                {items.length > 0 && <div className='relative col-span-3'>
                    <Table setItems={setItems} items={items} />
                </div>}

            </div>
            <button onClick={handleDonation} disabled={disable || !items.length > 0} className='mt-10 block w-full rounded-md bg-indigo-600 disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:cursor-not-allowed px-3 py-2 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Donate Now</button>
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