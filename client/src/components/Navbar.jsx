import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo-6.png'
import { AddIcon, AdminIcon, LikeIcon, LoginIcon, MessageIcon, ModerateIcon, OrdersIcon, SettingIcon } from './Icons'
import { LOGOUTUSER } from '../services/operations/authApi';
import { toast } from 'sonner';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';


// const cookies = new Cookies();
const Navbar = () => {

    const navigate = useNavigate()

    const { user, logout } = useContext(AuthContext);
    const loggedIn = user ? true : false

    const handleLogout = async () => {
        const res = await LOGOUTUSER();
        if (res) {
            logout()
            toast.success(res.message);
            navigate('/');
        }
    };

    const AdminNavLinkList = [
        { icons: <AddIcon />, name: 'Add New', link: '/panel/create' },
        { icons: <ModerateIcon />, name: 'Moderation', link: '/panel/moderation' },
        { icons: <OrdersIcon />, name: 'Orders', link: '/panel/orders' },
        { icons: <OrdersIcon />, name: 'My Products', link: '/panel/my-products' },
        { icons: <LikeIcon />, name: 'Favorites', link: '/panel/favorites' },
        { icons: <MessageIcon />, name: 'Messages', link: '/panel/messages' },
        { icons: <OrdersIcon />, name: 'My Orders', link: '/panel/my-orders' },
        { icons: <SettingIcon />, name: 'Settings', link: '/panel/settings' },
    ]
    let UserNavLinkList;

    if (user) {
        if (user.buyer) {
            UserNavLinkList = [
                // { icons: <AddIcon />, name: 'Add New', link: '/panel/create' },
                // { icons: <OrdersIcon />, name: 'My Products', link: '/panel/my-products' },
                { icons: <LikeIcon />, name: 'Favorites', link: '/panel/favorites' },
                { icons: <MessageIcon />, name: 'Messages', link: '/panel/messages' },
                { icons: <OrdersIcon />, name: 'My Orders', link: '/panel/my-orders' },
                { icons: <SettingIcon />, name: 'Settings', link: '/panel/settings' },
            ]
        }
        if (user.donor) {
            UserNavLinkList = [
                // { icons: <AddIcon />, name: 'Add New', link: '/panel/create' },
                { icons: <OrdersIcon />, name: 'My Products', link: '/panel/my-products' },
                { icons: <LikeIcon />, name: 'Favorites', link: '/panel/favorites' },
                { icons: <MessageIcon />, name: 'Messages', link: '/panel/messages' },
                { icons: <OrdersIcon />, name: 'My Orders', link: '/panel/my-orders' },
                { icons: <SettingIcon />, name: 'Settings', link: '/panel/settings' },
            ]
        }
        if (user.seller) {
            UserNavLinkList = [
                { icons: <AddIcon />, name: 'Add New', link: '/panel/create' },
                { icons: <OrdersIcon />, name: 'My Products', link: '/panel/my-products' },
                { icons: <LikeIcon />, name: 'Favorites', link: '/panel/favorites' },
                { icons: <MessageIcon />, name: 'Messages', link: '/panel/messages' },
                { icons: <OrdersIcon />, name: 'My Orders', link: '/panel/my-orders' },
                { icons: <SettingIcon />, name: 'Settings', link: '/panel/settings' },
            ]
        }
        // if (user.seller && user.donor && user.buyer) {
        //     UserNavLinkList = [
        //         { icons: <AddIcon />, name: 'Add New', link: '/panel/create' },
        //         { icons: <OrdersIcon />, name: 'My Products', link: '/panel/my-products' },
        //         { icons: <LikeIcon />, name: 'Favorites', link: '/panel/favorites' },
        //         { icons: <MessageIcon />, name: 'Messages', link: '/panel/messages' },
        //         { icons: <OrdersIcon />, name: 'My Orders', link: '/panel/my-orders' },
        //         { icons: <SettingIcon />, name: 'Settings', link: '/panel/settings' },
        //     ]
        // }
    }

    console.log(user);


    return (
        <header className="bg-white h-[90px] flex items-center box-border max-w-[1700px] mx-auto">
            <div className="flex justify-between items-center w-full px-4 lg:px-0">
                <div className="lg:hidden">
                    <div className='flex justify-center items-center relative overflow-hidden transition-all text-nowrap font-medium py-4 h-[50px] w-[50px] rounded-full border border-black'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 4.16668C2.38958 4.16512 2.27994 4.18552 2.17747 4.2267C2.07499 4.26787 1.98173 4.32901 1.90308 4.40655C1.82444 4.48408 1.762 4.57648 1.71937 4.67836C1.67675 4.78024 1.6548 4.88957 1.6548 5.00001C1.6548 5.11045 1.67675 5.21979 1.71937 5.32167C1.762 5.42355 1.82444 5.51594 1.90308 5.59348C1.98173 5.67102 2.07499 5.73215 2.17747 5.77333C2.27994 5.81451 2.38958 5.83491 2.5 5.83335H17.5C17.6104 5.83491 17.7201 5.81451 17.8225 5.77333C17.925 5.73215 18.0183 5.67102 18.0969 5.59348C18.1756 5.51594 18.238 5.42355 18.2806 5.32167C18.3233 5.21979 18.3452 5.11045 18.3452 5.00001C18.3452 4.88957 18.3233 4.78024 18.2806 4.67836C18.238 4.57648 18.1756 4.48408 18.0969 4.40655C18.0183 4.32901 17.925 4.26787 17.8225 4.2267C17.7201 4.18552 17.6104 4.16512 17.5 4.16668H2.5ZM2.5 9.16668C2.38958 9.16512 2.27994 9.18552 2.17747 9.2267C2.07499 9.26787 1.98173 9.32901 1.90308 9.40655C1.82444 9.48408 1.762 9.57648 1.71937 9.67836C1.67675 9.78024 1.6548 9.88957 1.6548 10C1.6548 10.1104 1.67675 10.2198 1.71937 10.3217C1.762 10.4235 1.82444 10.5159 1.90308 10.5935C1.98173 10.671 2.07499 10.7322 2.17747 10.7733C2.27994 10.8145 2.38958 10.8349 2.5 10.8333H17.5C17.6104 10.8349 17.7201 10.8145 17.8225 10.7733C17.925 10.7322 18.0183 10.671 18.0969 10.5935C18.1756 10.5159 18.238 10.4235 18.2806 10.3217C18.3233 10.2198 18.3452 10.1104 18.3452 10C18.3452 9.88957 18.3233 9.78024 18.2806 9.67836C18.238 9.57648 18.1756 9.48408 18.0969 9.40655C18.0183 9.32901 17.925 9.26787 17.8225 9.2267C17.7201 9.18552 17.6104 9.16512 17.5 9.16668H2.5ZM2.5 14.1667C2.38958 14.1651 2.27994 14.1855 2.17747 14.2267C2.07499 14.2679 1.98173 14.329 1.90308 14.4065C1.82444 14.4841 1.762 14.5765 1.71937 14.6784C1.67675 14.7802 1.6548 14.8896 1.6548 15C1.6548 15.1104 1.67675 15.2198 1.71937 15.3217C1.762 15.4235 1.82444 15.5159 1.90308 15.5935C1.98173 15.671 2.07499 15.7321 2.17747 15.7733C2.27994 15.8145 2.38958 15.8349 2.5 15.8333H17.5C17.6104 15.8349 17.7201 15.8145 17.8225 15.7733C17.925 15.7321 18.0183 15.671 18.0969 15.5935C18.1756 15.5159 18.238 15.4235 18.2806 15.3217C18.3233 15.2198 18.3452 15.1104 18.3452 15C18.3452 14.8896 18.3233 14.7802 18.2806 14.6784C18.238 14.5765 18.1756 14.4841 18.0969 14.4065C18.0183 14.329 17.925 14.2679 17.8225 14.2267C17.7201 14.1855 17.6104 14.1651 17.5 14.1667H2.5Z"
                                fill="#2A3946">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-8 w-full">
                    <Link to={'/'} className="logo"><img width={"auto"} height={"100%"} src={logo} /></Link>
                    <nav className='ml-[45px]'>
                        {user ? <ul className='flex items-center '>
                            <li className='font-[lexend deca] text-primary font-medium text-base py-2 '><Link to={''}>Home</Link></li>
                            <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/memberships'}>Memberships</Link></li>
                            <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/qualified-items-list'}>Qualified Items</Link></li>
                            {user.donor && <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={user ? '/donate' : "/login-register?tab=login"} state={user ? { to: "/" } : { to: "/donate" }}>Donate Items</Link></li>}
                            {/* <><li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/products?type=sale'}>Items for Sale</Link></li>
                                <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/products?type=donation'}>Items for Donation</Link></li></> */}

                            {/* <li className='font-[lexend deca] font-medium text-base py-2 ml-[45px] '><Link to={'/blogs'}>Blog</Link></li>
                            <li className='font-[lexend deca] font-medium text-base py-2 ml-[45px] '><Link to={'/contact-us'}>Contact US</Link></li> */}
                        </ul> :
                            <ul className='flex items-center '>
                                <li className='font-[lexend deca] text-primary font-medium text-base py-2 '><Link to={''}>Home</Link></li>
                                <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/memberships'}>Memberships</Link></li>
                                <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/qualified-items-list'}>Qualified Items</Link></li>
                                <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={user ? '/donate' : "/login-register?tab=login"} state={{ to: "/donate", "for": 'donor' }}>Donate Items</Link></li>
                                {/* <><li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/products?type=sale'}>Items for Sale</Link></li>
                                    <li className='font-[lexend deca] text-primary font-medium text-base py-2 ml-[45px] '><Link to={'/products?type=donation'}>Items for Donation</Link></li></> */}

                                {/* <li className='font-[lexend deca] font-medium text-base py-4 ml-[45px] '><Link to={'/blogs'}>Blog</Link></li>
                        <li className='font-[lexend deca] font-medium text-base py-4 ml-[45px] '><Link to={'/contact-us'}>Contact US</Link></li> */}
                            </ul>
                        }
                    </nav>
                </div>
                <div className='hidden lg:block'>
                    <div className="flex items-center justify-end gap-4 w-full">
                        <div className='account flex justify-center items-center gap-4 relative group'>
                            {loggedIn && <Link to={loggedIn ? '/panel/my-products' : '/login-register'} className={`flex justify-center items-center relative overflow-hidden transition-all text-nowrap font-medium py-4 h-[50px] w-[50px] 
                            rounded-full 
                            border
                             border-primary
                            `}>
                                <AdminIcon className={'stroke-primary'} />
                            </Link>}

                            {!loggedIn ?
                                <>
                                    <Link to={'/login-register?tab=login'} className='text-nowrap font-medium py-4 text-primary'>
                                        Log In
                                    </Link>
                                    <hr className="w-8 h-[2px] mx-auto my-auto  border-0 rounded md:my-10 bg-primary rotate-90"></hr>
                                    <Link to={'/login-register?tab=register'} className='py-4 font-medium text-primary'>Register</Link>

                                </>
                                :
                                <>
                                    <p className='text-nowrap font-medium py-4 text-primary'>{user?.username}</p>
                                    <div className='hidden group-hover:block bg-transparent transition ease-in-out  absolute top-12 cursor-pointer z-10  py-3'>
                                        <ul className='py-2 mt-4  bg-white shadow-lg min-w-60 flex flex-col justify-between items-start'>
                                            {[user?.role === 'ADMIN' ? [...AdminNavLinkList] : [...UserNavLinkList]][0].map((list, i) => <li key={i} className='py-2 w-full hover:bg-[#f8fafd] text-nowrap flex justify-between items-start '>
                                                <Link to={list.link} className='px-10 w-full flex items-start gap-2'>
                                                    {list.icons}
                                                    <span className='text-sm font-medium text-primary'>{list.name}</span>
                                                </Link>
                                            </li>)}
                                            <hr className='text-primary' />
                                            <li className='py-1 w-full hover:bg-[#f8fafd] text-nowrap flex justify-start items-start '>
                                                <button onClick={handleLogout} className='px-10 flex items-center gap-2'>
                                                    <LoginIcon className={" text-primary text-sm"} />
                                                    <span className='text-base font-medium text-primary'>{"Logout"}</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </>
                            }

                        </div>

                        {user && user.seller && <div className='post_product_button'>
                            <Link to={loggedIn ? '/panel/create' : '/login-register?tab=login'} state={{ to: "/panel/create" }} className='bg-btn-primay px-4 py-3 rounded-md flex items-center justify-between w-full gap-4 button'>
                                <span className='text-nowrap text-primary'>Post Your Product</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5.00488 11.525V7.075H0.854883V5.125H5.00488V0.65H7.00488V5.125H11.1549V7.075H7.00488V11.525H5.00488Z" fill="#000"></path></svg>
                            </Link>
                        </div>}
                        {!user && <Link to={loggedIn ? '/panel/create' : '/login-register?tab=login'} state={{ to: "/panel/create", "for": "sell" }} className='bg-btn-primay px-4 py-3 rounded-md flex items-center justify-between w-full gap-4 button'>
                            <span className='text-nowrap text-primary'>Post Your Product</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5.00488 11.525V7.075H0.854883V5.125H5.00488V0.65H7.00488V5.125H11.1549V7.075H7.00488V11.525H5.00488Z" fill="#000"></path></svg>
                        </Link>}
                    </div>
                </div>
                <div className='block lg:hidden'>
                    <div className='account flex justify-center items-center gap-4'>
                        <Link to={'/login-register?tab=login'} className='flex justify-center items-center relative overflow-hidden transition-all text-nowrap font-medium py-4 h-[50px] w-[50px] rounded-full border border-black'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 0C5.53008 0 2.7 2.83008 2.7 6.3C2.7 8.46914 3.80742 10.3957 5.48438 11.5312C2.27461 12.9094 0 16.0945 0 19.8H1.8C1.8 17.1984 3.17461 14.9344 5.23125 13.6687C5.83594 15.1523 7.30898 16.2 9 16.2C10.691 16.2 12.1641 15.1523 12.7688 13.6687C14.8254 14.9344 16.2 17.1984 16.2 19.8H18C18 16.0945 15.7254 12.9094 12.5156 11.5312C14.1926 10.3957 15.3 8.46914 15.3 6.3C15.3 2.83008 12.4699 0 9 0ZM9 1.8C11.4961 1.8 13.5 3.80391 13.5 6.3C13.5 8.79609 11.4961 10.8 9 10.8C6.50391 10.8 4.5 8.79609 4.5 6.3C4.5 3.80391 6.50391 1.8 9 1.8ZM11.1094 12.9094C10.4414 12.7055 9.73828 12.6 9 12.6C8.26172 12.6 7.55859 12.7055 6.89062 12.9094C7.20352 13.7777 8.01914 14.4 9 14.4C9.98086 14.4 10.7965 13.7777 11.1094 12.9094Z" fill="#000">
                                </path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar


