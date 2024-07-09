import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useQuery } from '@tanstack/react-query';
import { GET_VALID_USER, LOGOUTUSER } from '../services/operations/authApi';
import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
import { useAuthStore, useGlobalState } from '../store/AuthStore';
import Cookies from "js-cookie";
import { useCookies } from 'react-cookie';


function Layout() {

    


    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout