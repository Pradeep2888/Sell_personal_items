import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import { useQuery } from '@tanstack/react-query';
import { GET_VALID_USER } from '../services/operations/authApi';
import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
import { useAuthStore } from '../store/AuthStore';
import Cookies from "js-cookie";


function Layout() {
    const loggedIn = Cookies.get("token");
    const login = useAuthStore((state) => state.login)
    const user = useAuthStore((state) => state.userData)
    const { isPending, error, data } = useQuery({
        queryKey: ['getuser'],
        queryFn: async () => {
            if (loggedIn) {
                let res = await GET_VALID_USER();
                login(res.user)
                return res
            }
            return null
        }
    });


    


    // if (error) {
    //     return <Navigate to={'/'} />
    // }

    console.log(user);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout