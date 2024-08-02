import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { createSearchParams, Navigate, Outlet, redirect, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import { useQuery } from '@tanstack/react-query';
import { GET_VALID_USER, LOGOUTUSER } from '../services/operations/authApi';
import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
import { useGlobalState } from '../store/AuthStore';
// import Cookies from "js-cookie";
import { Cookies } from 'react-cookie';
import Tooltip from '../components/Tooltip';
import { UnAuthorisedUi } from '../components/ErrorUi';
import { AuthContext } from '../auth/AuthContext';
import { useBrowserFocus } from '../hooks/Hooks';

const cookie = new Cookies()

const token = localStorage.getItem('_sell_Token');
function Layout() {
    const { user, logout, checkSession, loading } = useContext(AuthContext);

    const [sidebarOpen,setSidebarOpen] = useState(false)

    // useBrowserFocus(() => {
    //     checkSession();
    // });

    useEffect(() => {
        if (user) {
            checkSession();
        } else {
            logout();
        }
    }, [])

    return (
        <div>
            <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout