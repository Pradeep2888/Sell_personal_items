import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AdminIcon, EmailIcon, LockIcon, MobileIcon, UserNameIcon } from '../../components/Icons';
import Dropdown from '../../components/Dropdown';
import { LOGIN, SIGNUP } from '../../services/operations/authApi';
import { BASEURL, getFormData } from '../../utils/constants';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { useGlobalState } from '../../store/AuthStore';



function Login_Signup() {

    const navigate = useNavigate();
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    const checkLoginActive = () => URLSearchParams.get("tab") === 'login'
    // const loginActive = checkLoginActive();

    const [loginActive, setLoginActive] = useState(checkLoginActive());
    const dropdownRef = useRef(null)
    const inputrefs = useRef([]);
    const signupinputrefs = useRef([]);
    const [sortValue, setSortvalue] = useState("Recipient")
    const loading = useGlobalState(state => state.loading);
    const setLoading = useGlobalState(state => state.setLoading);


    const handleChange = (value) => {
        setSortvalue(value);
    };

    const handleCloseSortSelect = () => {
        // handle close sort select
        if (dropdownRef?.current.children[1] && !dropdownRef?.current.contains(event.target)) {
            // console.log(dropdownRef.current)
            dropdownRef.current.children[1].style.display = 'none'
        }
    };
    const handleToggle = () => {
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };

    useEffect(() => {
        if (dropdownRef && dropdownRef.current && !checkLoginActive()) {
            document.addEventListener('click', handleCloseSortSelect);
        }
        return () => removeEventListener('click', handleCloseSortSelect)
    }, []);

    const toggleForm = (id) => {
        if (id === 'login') {
            setLoginActive(true)
        } else {
            setLoginActive(false)
        }
    };

    useEffect(() => {
        if (checkLoginActive()) {
            setLoginActive(true)
        } else {
            setLoginActive(false)
        }
    }, [URLSearchParams])


    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     if (loginActive) {
    //         setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
    //     } else {
    //         setSignupFormData((prevData) => ({ ...prevData, [name]: value }));
    //     }
    // }
    // const checkValidation = (formdata) => {
    //     let keys = Object.keys(formdata);
    //     let _toast;
    //     for (let i = 0; i < keys.length; i++) {
    //         if (formdata[keys[i]] === '' || formdata[keys[i]] === null) {
    //             _toast = toast.error(`Please enter ${keys[i]}`);
    //             break
    //         }
    //     }
    //     return _toast

    // }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formdata = await getFormData(inputrefs);
        // await checkValidation(formdata)
        let res = await LOGIN(formdata);
        setLoading(false)
        console.log(res);
        if (res?.status === 'success') {
            Cookies.set('_session', res.token)
            navigate("/panel/my-products");
            toast.success("Login successful.");
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formdata = await getFormData(signupinputrefs)
        let res = await SIGNUP({ ...formdata, userType: sortValue, countryCode: "+91" });
        setLoading(false)
        console.log(res);
        if (res?.status === 'success') {
            Cookies.set('_session', res.token)
            navigate("/panel/my-products");
            toast.success("Signup successful.");
        }

    };


    return (
        <div className='w-full relative bg-[#697885]'>
            <div className='flex justify-center items-center relative'>
                <div className='max-w-[500px] w-full flex flex-col    my-14'>
                    <div className='flex justify-between items-end overflow-hidden gap-2'>
                        <button onClick={() => toggleForm('login')} className={` text-base text-[#374B66] font-medium w-full py-3 relative rounded-t rounded-b-none transition ease-in-out transform ${loginActive ? 'translate-y-0 bg-white' : 'translate-y-2  bg-[#F9FAFB]'}`}>Login</button>
                        <button onClick={() => toggleForm('signup')} className={` text-base text-[#374B66] font-medium w-full py-3 relative rounded-t rounded-b-none transition ease-in-out transform ${!loginActive ? 'translate-y-0 bg-white' : 'translate-y-2  bg-[#F9FAFB]'}`}>Sign Up</button>
                    </div>
                    {loginActive ?
                        <form className='w-full relative bg-white flex justify-center items-start rounded-b p-4 lg:p-12'>
                            <div className='flex w-full flex-col gap-6'>
                                <div className='relative'>
                                    <input ref={ref => inputrefs.current[0] = ref} className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="email" placeholder="Email or Username" name='usernameoremail' />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.0332031 7.5C0.0332031 3.36453 3.39773 0 7.5332 0C11.6687 0 15.0332 3.36453 15.0332 7.5C15.0332 11.6355 11.6687 15 7.5332 15C3.39773 15 0.0332031 11.6355 0.0332031 7.5ZM13.9075 7.5C13.9075 3.97252 11.06 1.125 7.53247 1.125C4.00499 1.125 1.15747 3.97252 1.15747 7.5C1.15747 11.0275 4.00499 13.875 7.53247 13.875C11.06 13.875 13.9075 11.0275 13.9075 7.5ZM7.53338 2.25C4.64042 2.25 2.28338 4.60705 2.28338 7.5C2.28338 10.393 4.64042 12.75 7.53338 12.75C8.18105 12.75 8.80398 12.6325 9.37835 12.4167C9.56879 12.3478 9.70745 12.1817 9.74137 11.982C9.77529 11.7823 9.69925 11.5798 9.54227 11.4518C9.38529 11.3238 9.17162 11.2901 8.98284 11.3635C8.53271 11.5326 8.04521 11.625 7.53338 11.625C5.24833 11.625 3.40838 9.78505 3.40838 7.5C3.40838 5.21495 5.24833 3.375 7.53338 3.375C9.81842 3.375 11.6584 5.21495 11.6584 7.5V8.0625C11.6584 8.58683 11.2452 9 10.7209 9C10.1965 9 9.78338 8.58683 9.78338 8.0625V5.4375C9.78564 5.15149 9.57294 4.90931 9.28903 4.87464C9.00512 4.83997 8.74039 5.02385 8.67376 5.302C8.29412 5.0341 7.84001 4.875 7.34588 4.875C5.97645 4.875 4.90838 6.0853 4.90838 7.5C4.90838 8.9147 5.97645 10.125 7.34588 10.125C8.03991 10.125 8.65548 9.81305 9.0949 9.32227C9.47345 9.80853 10.0621 10.125 10.7209 10.125C11.8533 10.125 12.7834 9.19492 12.7834 8.0625V7.5C12.7834 4.60705 10.4263 2.25 7.53338 2.25ZM8.65867 7.5C8.65867 6.63995 8.04449 6 7.34617 6C6.64785 6 6.03367 6.63995 6.03367 7.5C6.03367 8.36005 6.64785 9 7.34617 9C8.04449 9 8.65867 8.36005 8.65867 7.5Z"
                                                fill="#475B6B"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className='relative'>
                                    <input ref={ref => inputrefs.current[1] = ref} className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="password" placeholder="Password" name='password' />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={13}
                                            height={16}
                                            viewBox="0 0 13 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M6.09524 0C3.56281 0 1.52381 2.039 1.52381 4.57143V5.33333C0.691 5.33333 0 6.02433 0 6.85714V14.4762C0 15.309 0.691 16 1.52381 16H10.6667C11.4995 16 12.1905 15.309 12.1905 14.4762V6.85714C12.1905 6.02433 11.4995 5.33333 10.6667 5.33333V4.57143C10.6667 2.039 8.62766 0 6.09524 0ZM6.09524 1.52381C7.82948 1.52381 9.14286 2.83719 9.14286 4.57143V5.33333H3.04762V4.57143C3.04762 2.83719 4.361 1.52381 6.09524 1.52381ZM1.52381 6.85714H10.6667V14.4762H1.52381V6.85714ZM6.09524 9.14286C5.25714 9.14286 4.57143 9.82857 4.57143 10.6667C4.57143 11.5048 5.25714 12.1905 6.09524 12.1905C6.93333 12.1905 7.61905 11.5048 7.61905 10.6667C7.61905 9.82857 6.93333 9.14286 6.09524 9.14286Z"
                                                fill="#475B6B"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className='relative flex justify-between w-full items-center'>
                                    <div className='flex justify-between items-center font-medium'>
                                        <input className='border size-4 border-[#D5E3EE] outline-[#D5E3EE] rounded hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                                        <span className='ml-2 text-[#374b5c]'>Remember me</span>
                                    </div>
                                    <div><Link className='text-[#ffb300] font-semibold' to={'/forget-password'}>Forget Password?</Link></div>
                                </div>
                                <button onClick={handleLogin} className='rounded w-full px-8 py-4 bg-[#537CD9] text-white font-bold'>{loading ? "Loading..." : "Login"}</button>
                            </div>
                        </form> :
                        <form className='w-full relative bg-white flex justify-center items-start rounded-b p-4 lg:p-12' >
                            <div className='flex w-full flex-col gap-6'>
                                <div className='relative'>
                                    <input ref={ref => signupinputrefs.current[0] = ref} name='username' className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="Username *" />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <UserNameIcon color={"#475B6B"} />
                                    </span>
                                </div>
                                <div className='relative'>
                                    <input ref={ref => signupinputrefs.current[1] = ref} name='name' className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="Name *" />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <AdminIcon color={"#475B6B"} />
                                    </span>
                                </div>
                                <div className='relative'>
                                    <input ref={ref => signupinputrefs.current[2] = ref} name='email' className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="email" placeholder="E-mail *" />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <EmailIcon color={"#475B6B"} />
                                    </span>
                                </div>
                                <div className='relative flex'>
                                    {/* <div className='flex py-4 w-full px-14 border border-[#D5E3EE] rounded'> */}
                                    {/* <SelectCountryCode /> */}
                                    <input ref={ref => signupinputrefs.current[3] = ref} name='contactNumber' className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="tel" placeholder="Phone" />
                                    {/* </div> */}
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <MobileIcon color={"#475B6B"} />
                                    </span>
                                </div>
                                <div className='relative'>
                                    <input ref={ref => signupinputrefs.current[4] = ref} name='password' className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="password" placeholder="Password" />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <LockIcon color={"#475B6B"} />
                                    </span>
                                </div>
                                <div className='relative'>
                                    {/* <div className='py-4 w-full pl-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium'> */}
                                    <div className='py-4 w-full pl-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' ref={dropdownRef} onClick={handleToggle}>
                                        <div className='w-full justify-between items-center flex pr-4'>
                                            <div className='min-w-48 text-base font-medium text-[#3F5263]'>{sortValue}</div>
                                            <div>
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
                                            </div>
                                        </div>
                                        <div className='hidden w-1/2 dropdownlist shadow-xl px-5 py-3 absolute z-10 bg-white rounded-md left-0 top-16'>
                                            <ul>
                                                <li className={`text-base font-medium ${sortValue === 'Most Relevant' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Recipient')}>Recipient</li>
                                                <li className={`text-base font-medium ${sortValue === 'Date Listed: Newest' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Donor')}>Donor</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <i className="far fa-address-card text-[#475B6B]" />
                                    </span>
                                </div>
                                <div className='relative flex justify-between w-full items-center'>
                                    <div className='flex justify-between items-center font-medium'>
                                        <input name='' className='border transition ease-in-out size-4 border-[#D5E3EE] outline-[#D5E3EE] rounded hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                                        <span className='ml-2 text-[#374b5c]'>I accept the{" "}
                                            <Link className='text-[#ffb300] font-medium' to={'/privacy-policy'}>Privacy Policy</Link>
                                        </span>
                                    </div>

                                </div>
                                <button onClick={handleSignup} className={`w-full rounded px-8 py-4 bg-[#537CD9] text-white font-bold`}>{loading ? "Loading" : "Regitser"}</button>
                            </div>
                        </form>}
                </div>
            </div>

        </div>
    )
}

export default Login_Signup