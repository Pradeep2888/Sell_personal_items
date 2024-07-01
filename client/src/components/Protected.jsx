import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { AUTHENTICATEUSER } from '../services/operations/authApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/AuthStore';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

function Protected({ children }) {
    const [message, setMessage] = useState('');
    const [cookies, setCookie] = useCookies(['_access_token']);
    const navigate = useNavigate()

    const authorise = useAuthStore((state) => state.authorise);
    const unauthorise = useAuthStore((state) => state.unauthorise);


    const { isPending, error, data } = useQuery({
        queryKey: ['authentiate'],
        queryFn: async () => await AUTHENTICATEUSER()
    });

    if (isPending) {
        toast.loading('Loading')
    }

    if (error) {
        unauthorise()
        toast.error('Error occurred while authenticating user')
        return <Navigate to={'/'} />
    }

    authorise()
    // console.log(cookies)

    // const fetchData = async () => {
    //     try {
    //         const response = await AUTHENTICATEUSER()
    //         await authorise()
    //         setMessage(response.message);
    //         console.log(response, "protected");
    //     } catch (error) {
    //         await unauthorise()
    //         navigate('/unauthorized')
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        children
    );
}

export default Protected