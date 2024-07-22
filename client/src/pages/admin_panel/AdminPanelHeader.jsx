import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuthStore } from '../../store/AuthStore'
import { AuthContext } from '../../auth/AuthContext';

function AdminPanelHeader() {

    const { user } = useContext(AuthContext);

    const AdminNavLinkList = [
        { name: 'Add New', link: '/panel/create' },
        { name: 'Moderation', link: '/panel/moderation' },
        // { name: 'Donations', link: '/panel/donations' },
        // { name: 'Memberships', link: '/panel/memberships' },
        // { name: 'Users', link: '/panel/users' },
        { name: 'Orders', link: '/panel/orders' },
        { name: 'My Products', link: '/panel/my-products' },
        { name: 'Favorites', link: '/panel/favorites' },
        { name: 'Messages', link: '/panel/messages' },
        { name: 'My Orders', link: '/panel/my-orders' },
        { name: 'Settings', link: '/panel/settings' },
    ];
    let UserNavLinkList;

    if (user.seller) {
        UserNavLinkList = [
            { name: 'Add New', link: '/panel/create' },
            { name: 'My Products', link: '/panel/my-products' },
            { name: 'Favorites', link: '/panel/favorites' },
            // { name: 'Messages', link: '/panel/messages' },
            // { name: 'My Orders', link: '/panel/my-orders' },
            { name: 'Settings', link: '/panel/settings' },
        ]
    }
    if (user.donor) {
        UserNavLinkList = [
            // { name: 'Add New', link: '/panel/create' },
            { name: 'My Products', link: '/panel/my-products' },
            { name: 'Favorites', link: '/panel/favorites' },
            // { name: 'Messages', link: '/panel/messages' },
            // { name: 'My Orders', link: '/panel/my-orders' },
            { name: 'Settings', link: '/panel/settings' },
        ]
    }
    if (user.buyer) {
        UserNavLinkList = [
            // { name: 'Add New', link: '/panel/create' },
            // { name: 'My Products', link: '/panel/my-products' },
            { name: 'Favorites', link: '/panel/favorites' },
            { name: 'Messages', link: '/panel/messages' },
            { name: 'My Orders', link: '/panel/my-orders' },
            { name: 'Settings', link: '/panel/settings' },
        ]
    }
    if (user.buyer && user.donor) {
        UserNavLinkList = [
            // { name: 'Add New', link: '/panel/create' },
            { name: 'My Products', link: '/panel/my-products' },
            { name: 'Favorites', link: '/panel/favorites' },
            { name: 'Messages', link: '/panel/messages' },
            { name: 'My Orders', link: '/panel/my-orders' },
            { name: 'Settings', link: '/panel/settings' },
        ]
    }


    if (user.seller && user.seller && user.seller) {
        UserNavLinkList = [
            { name: 'Add New', link: '/panel/create' },
            // { name: 'Moderation', link: '/panel/moderation' },
            // { name: 'Orders', link: '/panel/orders' },
            { name: 'My Products', link: '/panel/my-products' },
            { name: 'Favorites', link: '/panel/favorites' },
            { name: 'Messages', link: '/panel/messages' },
            { name: 'My Orders', link: '/panel/my-orders' },
            { name: 'Settings', link: '/panel/settings' },
        ];
    }





    return (
        <div className="relative bg-[#FDFDFE]">
            <div className="max-w-[1200px] mx-auto py-14 tab-nav">
                <div className="flex justify-start items-center">
                    <ul className='flex justify-start items-center gap-4'>
                        {[...user.role === 'ADMIN' ? AdminNavLinkList : UserNavLinkList].map((navLink, index) => (
                            <li key={index}><NavLink className={({ isActive }) => {
                                return `text-nowrap text-lg font-semibold pb-6 px-2 pt-4 hover:text-[#537CD9] ${isActive ? "text-[#537CD9] border-b-[3px] border-[#537CD9]" : "text-[#374b5c]"}`
                            }} to={navLink.link}>{navLink.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelHeader