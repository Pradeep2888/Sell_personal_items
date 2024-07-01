import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function AdminPanelHeader() {

    const NavLinkList = [
        { name: 'Add New', link: '/panel/create' },
        { name: 'Moderation', link: '/panel/moderation' },
        { name: 'Orders', link: '/panel/orders' },
        { name: 'My Products', link: '/panel/my-products' },
        { name: 'Favorites', link: '/panel/favorites' },
        { name: 'Messages', link: '/panel/messages' },
        { name: 'My Orders', link: '/panel/my-orders' },
        { name: 'Settings', link: '/panel/settings' },
    ]

    return (
        <div className="relative bg-[#FDFDFE]">
            <div className="max-w-[1200px] mx-auto py-14">
                <div className="flex justify-start items-center">
                    <ul className='flex justify-start items-center gap-4'>
                        {NavLinkList.map((navLink, index) => (
                            <li key={index}><NavLink className={({ isActive }) => {
                                return `text-lg font-semibold pb-6 px-2 pt-4 hover:text-[#537CD9] ${isActive ? "text-[#537CD9] border-b-[3px] border-[#537CD9]" : "text-[#374b5c]"}`
                            }} to={navLink.link}>{navLink.name}</NavLink></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelHeader