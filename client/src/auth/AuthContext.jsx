import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { CHECK_SESSION, LOGIN } from '../services/operations/authApi';
import { toast } from 'sonner';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
import { adminLogin } from '../services/operations/adminApi';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState(null);

  // const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('_sell_Token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    setLoading(false)
  }, []);

  const login = async (formData) => {
    const res = await LOGIN(formData);
    if (res) {
      toast.success('Login successfull');
      const { token, data } = res;
      localStorage.setItem('_sell_Token', token);
      const decoded = jwtDecode(token);
      setUser({ ...decoded, ...data });
    } else {
      localStorage.removeItem('_sell_Token');
      setUser(null);
    }
    return res
  };
  const AdminLogin = async (formData) => {
    const res = await adminLogin(formData);
    if (res) {
      toast.success('Login successfull');
      const { token, data } = res;
      localStorage.setItem('_sell_Token', token);
      const decoded = jwtDecode(token);
      setUser({ ...decoded, ...data });
    } else {
      localStorage.removeItem('_sell_Token');
      setUser(null);
    }
    return res
  };

  const logout = () => {
    localStorage.removeItem('_sell_Token');
    setUser(null);
  };

  const checkSession = async () => {
    try {
      // setLoading(true)
      // Optionally, you could make a request to the server to verify the token
      // await axios.get('/auth/verify', { headers: { Authorization: `Bearer ${token}` } });
      let res = await CHECK_SESSION()
      setRes(res)
      setUser(res.user);
    } catch (error) {
      setUser(null);
      localStorage.removeItem('_sell_Token');
    } finally {
      // setLoading(false)
    }

  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setUser, checkSession, res, loading,AdminLogin }}>
      {loading ? <GlobalLoader /> : children}

    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

// AuthContext.js
// import React, { createContext, useState, useEffect } from 'react';

// import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
// import authService from '../services/operations/authApi';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const login = async (bodyData) => {
//     const data = await authService.login(bodyData);
//     setUser({ ...data.data });
//     setLoading(false)
//     return data
//   };

//   const logout = () => {
//     setUser(null);
//     setLoading(false)
//   };

//   const refreshAccessToken = async () => {
//     const data = await authService.refreshToken();
//     setUser({ accessToken: data.accessToken });
//     setLoading(false)
//     return data
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       refreshAccessToken();
//     }, 14 * 60 * 1000); // Refresh the token every 14 minutes
//     setLoading(false)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {loading ? <GlobalLoader /> : children}
//     </AuthContext.Provider>
//   );
// };

