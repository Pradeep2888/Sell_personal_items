import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { AUTHENTICATEUSER, GET_VALID_USER, LOGOUTUSER } from '../services/operations/authApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthStore, useGlobalState } from '../store/AuthStore';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { GlobalLoader } from './backdropLoader/BackdropLoader';
import Cookies from 'js-cookie'

function Protected({ children }) {

    // const [loading, setLoading] = useState(true);
    // const [cookies, setCookie] = useCookies(['token']);
    // const navigate = useNavigate()

    // console.log(cookies);






    const loggedIn = useGlobalState((state) => state.loggedIn);
    // const token = Cookies.get("token");
    // const loggedIn = token ? true : false;

    if (!loggedIn) {
        return <Navigate to="/login-register?tab=login" replace={true} />

    }

    // useEffect(() => {
    //     (
    //         async () => {
    //             try {
    //                 // console.log(loggedIn, "loggedIn");
    //                 if (loggedIn) {
    //                     setLoading(true)
    //                     if (userData.state.userData) {
    //                         login(userData.state.userData);
    //                     } else {
    //                         const res = await AUTHENTICATEUSER();
    //                         if (res) {
    //                             login(res.user);
    //                         } else {
    //                             const res = await LOGOUTUSER();
    //                             if (res) {
    //                                 logout();
    //                                 navigate('/login-register?tab=login');
    //                             }
    //                         }
    //                     }
    //                 } else {
    //                     // navigate('/login-register?tab=login');
    //                     // const res = await AUTHENTICATEUSER();
    //                     // if (res) {
    //                     //   login(res.user);
    //                     // } else {
    //                     const res = await LOGOUTUSER();
    //                     if (res) {
    //                         logout();
    //                         navigate('/login-register?tab=login');
    //                     }
    //                     // }
    //                 }
    //             } catch (error) {
    //                 logout();
    //                 navigate('/')
    //             } finally {
    //                 setLoading(false)
    //             }
    //         }
    //     )()
    // }, [])






    // useEffect(() => {
    //     if (!cookies.token) {
    //         navigate('/login-register?tab=login')
    //     }
    // }, [])

    // if (loading) {
    //     return <div className='min-h-screen flex justify-center items-center'>
    //         <GlobalLoader />
    //     </div>
    // }

    return (
        children
    );
}

export default Protected