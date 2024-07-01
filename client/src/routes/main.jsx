import { ReactNode } from "react";

import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Blog from "../pages/Blog/Blog";
import ContactUs from "../pages/contactus/ContactUs";
import Login_Signup from "../pages/login_signup/Login_Signup";
import AdminPanel from "../pages/admin_panel/AdminPanel";
import CreateProduct from "../pages/admin_panel/sections/CreateProduct";
import ModerateProducts from "../pages/admin_panel/sections/ModerateProducts";
import Orders from "../pages/admin_panel/sections/Orders";
import MyProducts from "../pages/admin_panel/sections/MyProducts";
import Favorites from "../pages/admin_panel/sections/Favorites";
import Messages from "../pages/admin_panel/sections/Messages";
import MyOrders from "../pages/admin_panel/sections/MyOrders";
import Settings from "../pages/admin_panel/sections/Settings";
import Membership from "../pages/Mambership/Membership";
import Donation from "../pages/Donation/Donation";
import Protected from "../components/Protected";
import Unauthorised from "../components/Unauthorised";
import ErrorUi from "../components/ErrorUi";





// eslint-disable-next-line react-refresh/only-export-components
// const PrivateRoutes = ({ children }) => {
//     const state = JSON.parse(localStorage.getItem("authStore")! ?? {});
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!state.state.userToken) {
//             navigate(BASEROUTE + "/sign-in");
//         } else if (window.location.pathname === BASEROUTE + "/sign-in") {
//             navigate(BASEROUTE);
//         }
//     }, [state.state.userToken, navigate]);

//     return <>{children}</>;
// };

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            // {
            //     path: "server-error",
            //     element: <ErrorUi />,
            // },
            {
                path: "about-us",
                element: <About />,
            },
            {
                path: "ads",
                element: <Products />,
            },
            {
                path: "blogs",
                element: <Blog />,
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "login-register",
                element: <Login_Signup />,
            },
            {
                path: "/protected",
                element: <Protected />
            },
            {
                path: "memberships",
                element: <Membership />,
            },
            {
                path: "donate",
                element: <Donation />,
            },
            {
                path: 'unauthorized',
                element: <Unauthorised />
            },
            {
                path: "panel",
                element: <Protected>
                    <AdminPanel />
                </Protected>,
                children: [

                    {
                        path: 'create',
                        element: <CreateProduct />
                    },
                    {
                        path: 'moderation',
                        element: <ModerateProducts />
                    },
                    {
                        path: 'orders',
                        element: <Orders />
                    },
                    {
                        path: 'my-products',
                        element: <MyProducts />
                    },
                    {
                        path: 'favorites',
                        element: <Favorites />
                    },
                    {
                        path: 'Messages',
                        element: <Messages />
                    },
                    {
                        path: 'my-orders',
                        element: <MyOrders />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                ]
            },
            //       {
            //         path: "user-profile",
            //         element: <UserProfile />,
            //         children: [
            //           {
            //             path: "detail",
            //             element: <UserDetailPage />,
            //           },
            //           {
            //             path: "reviews",
            //             element: <UserReviewsPage />,
            //           },
            //           {
            //             path: "updatepassword",
            //             element: <PasswordUpatePage />,
            //           },
            //         ],
            //       },
            //       {
            //         path: "search",
            //         element: <CompanySearch />,
            //       },
            //       {
            //         path: "blogs",
            //         element: <BlogsPage />,
            //       },
            //       {
            //         path: "blog/:id",
            //         element: <BlogDetailPage />,
            //       },
            //       {
            //         path: "listing/:id",
            //         element: <ListingDetailPage />,
            //       },
        ],
    },
    // {
    //     path: "/sign-in",
    //     element: (
    //         <PrivateRoutes>
    //             <Signin />
    //         </PrivateRoutes>
    //     ),
    // },
    // {
    //     path: "/sign-up",
    //     element: <Signup />,
    // },
];

export default routes;
