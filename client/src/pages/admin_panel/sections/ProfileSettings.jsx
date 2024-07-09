import { useState } from 'react';
import Accordion from '../../../components/Accordian';
import { DropdownComponent } from '../../../components/Dropdown';
import FileUpload from '../../../components/FileUpload';
import PhoneNumber from '../../../components/PhoneNumber';
import { FacebookIcon, InstagramIcon, LinkedInIcon, Telegram, TiktokIcon, TwitterIcon, UploadImageIcon, YoutubeIcon } from '../../../components/Icons';
import { useQuery } from '@tanstack/react-query';



const AccountDetailForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        accountType: '',
        phoneNumber: '',
        countryCode: "",
        address: '',
    })

    const options = [
        { value: 'Recipient', label: 'Recipient' },
        { value: 'Donor', label: 'Donor' },
    ];

    const handleChange = (value) => {
        console.log(`selected ${value}`)
    }
    const handleSaveChanges = (e) => {

    }


    return (
        <div className='px-6'>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">{'Display Name'} <span></span></label>
                <input type="text" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none' name='productName' />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">{'Account Type'} <span></span></label>
                <DropdownComponent options={options} onChange={handleChange} value={'Recipient'} className='p-4' />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">{'Phone Number'} <span></span></label>
                <PhoneNumber value={''} onchange={handleChange} />
                <div className='flex justify-start items-center font-medium my-2'>
                    <input name='' className='border transition ease-in-out size-[18px] border-[#D5E3EE] outline-[#D5E3EE] rounded-lg hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                    <span className='ml-2 text-[#374b5c]'>WhatsApp</span>
                </div>
                <div className='flex justify-start items-center font-medium'>
                    <input name='' className='border transition ease-in-out size-[18px] border-[#D5E3EE] outline-[#D5E3EE] rounded-lg hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                    <span className='ml-2 text-[#374b5c]'>Viber</span>
                </div>
            </div>

            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">{'Profile Description'} <span></span></label>
                <textarea name='items' onChange={handleChange} className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-24 px-8 focus:outline-none placeholder:text-[#374b5c]  font-medium' type="text" placeholder="Write something about yourself" />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">{'Address'} <span></span></label>
                <input type="text" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none' name='address' />
            </div>
            <div className='mt-8 flex justify-end'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Save Changes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    )
};

const ProfileImage = () => {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState(null);

    console.log(files, "files");
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = [...e.dataTransfer.files];
        handleFiles(files);
    };

    const handleFiles = (files) => {

    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFiles(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        let ele = document.getElementById('profile');
        ele.value = '';
    }


    const handleSaveChanges = () => {
        console.log(files, "files");
    }

    return (
        <>
            <div
                className={`relative border flex justify-start gap-5 border-[#D5E3EE] p-4 mt-4 mx-6 rounded ${dragging ? 'bg-blue-50' : ""}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input className='opacity-0 absolute' type="file" id={'profile'} onChange={(e) => handleFileChange(e)} />
                <label
                    htmlFor={'profile'}
                    className={`border w-1/2 border-dashed cursor-pointer relative border-[#D5E3EE] rounded p-2  flex flex-col justify-center items-center gap-5 }`}>
                    <UploadImageIcon />
                    <p className='text-lg text-primary font-semibold'><span className='text-helper'>Choose Profile Photo </span><span>or drag it here</span></p>
                </label>
                {files && <div className='relative flex justify-center items-center gap-5 mb-5'>
                    <div className=' overflow-hidden rounded-full'>
                        <img src={files} alt="Preview" className='size-32 rounded border object-cover' />
                        <span onClick={(e) => setFiles(null)} className='absolute z-10 cursor-pointer top-0 right-0 p-2 size-5 flex justify-center items-center bg-secondary text-base font-medium rounded-full text-white'>X</span>
                        {/* {file.progress > 0 && <progress value={file.progress} max="100" />} */}
                    </div>

                </div>}
            </div>
            <div className='mt-8 flex justify-end items-end px-6'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Save Changes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

const SocialMediaForm = ({ socialMediaLinks }) => {

    const [links, setLinks] = useState(() => socialMediaLinks)


    const handleChange = (e, i) => {
        const { name, value } = e.target
        setLinks(prev => {
            const newLinks = [...prev]
            newLinks[i]['link'] = value
            return newLinks
        })
    };

    console.log(links)


    const handleSaveChanges = (e) => {
        e.preventDefault();
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-y-4 gap-x-6 p-4'>
            {
                links.map((link, index) =>
                    <div key={index} className='flex flex-col '>
                        <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor={link.label}>{link.label} <span></span></label>
                        <div className='relative'>
                            <input className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder={`Enter the url to your ${link.label} profile`} name={link.label} value={link.url} onChange={(e) => handleChange(e, index)} />
                            <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                {link.icons}
                            </span>
                        </div>
                    </div>
                )
            }
            <div className='mt-8 col-span-2 flex justify-end'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Save Changes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const EmailChangeForm = () => {
    const handleSaveChanges = (e) => {
        e.preventDefault();

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-5 px-6'>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="currentEmail">{'Current Email'} <span></span></label>
                <input type="Email" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none text-primary font-medium placeholder:font-medium placeholder:text-[#374b5c] text-base  disabled:text-light' name='oldPassword' placeholder='Enter your current email' disabled={true} value={'Admin@gmail.com'} />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="newEmail">{'New Email'} <span></span></label>
                <input type="Email" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' name='newPassword' placeholder='Enter your new email' />
            </div>
            <div className='col-span-2 flex justify-end mt-5'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Change Email</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const ChangePasswordForm = () => {


    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSaveChanges = (e) => {
        e.preventDefault();

    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-x-5 px-6'>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="oldPassword">{'Old Password'} <span></span></label>
                <input type="password" autoComplete='off' className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' id='oldPassword' placeholder='Enter your old password' value={formData.oldPassword} onChange={handleChange} />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="newPassword">{'New Password'} <span></span></label>
                <input type="password" autoComplete='off' className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' id='newPassword' placeholder='Enter your new password' value={formData.newPassword} onChange={handleChange} />
            </div>
            <div className='col-span-2 flex justify-end mt-5'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Change Password</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



function ProfileSettings() {

    // const {isLoading, error, data} = useQuery({
    //     queryKey: ['profile'],
    //     queryFn: async () => {
    //         await GETPROFILE()
    // })

    const socialMediaLinks = [
        {
            label: "Facebook",
            link: "",
            icons: <FacebookIcon />,
        },
        {
            label: "Twitter",
            link: "",
            icons: <TwitterIcon />,
        },
        {
            label: "Instagram",
            link: "",
            icons: <InstagramIcon />,
        },
        {
            label: "Youtube",
            link: "",
            icons: <YoutubeIcon />,
        },
        {
            label: "LinkedIn",
            link: "",
            icons: <LinkedInIcon />,
        },
        {
            label: "TikTok",
            link: "",
            icons: <TiktokIcon />,
        },
        {
            label: "Telegram",
            link: "",
            icons: <Telegram />,
        },
    ]

    const items = [
        {
            title: 'Account Details',
            content: <AccountDetailForm />
        },
        {
            title: 'Profile Image',
            content: <ProfileImage />
        },
        {
            title: 'Social Links',
            content: <SocialMediaForm socialMediaLinks={socialMediaLinks} />
        },
        {
            title: 'Change Password',
            content: <ChangePasswordForm />
        },
        {
            title: 'Change Email',
            content: <EmailChangeForm />
        }
    ];


    return (
        <div>
            <div className="">
                <Accordion items={items} />
            </div>
        </div>
    )
}

export default ProfileSettings




