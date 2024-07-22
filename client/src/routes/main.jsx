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
import Unauthorised from "../components/Unauthorised";
import ErrorUi from "../components/ErrorUi";
import ProductDetails from "../pages/admin_panel/sections/ProductDetails";
import ProductPage from "../pages/admin_panel/sections/ProductPage";
import Donations from "../pages/admin_panel/sections/Donations";
import MembershipPlans from "../pages/Mambership/MembershipPlans";
import MembershipPurchase from "../pages/Mambership/MembershipPurchase";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import Protected from "../auth/Protected";
import LoginSignupReview from "../pages/login_signup/LoginSignupReview";
import ProductDetail from "../pages/products/ProductDetail";
import QualifiedItemsList from "../pages/QualifiedListItems/QualifiedItemsList";
import AdminLogin from "../pages/admin_panel/AdminLogin";


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
                path: "/admin/login",
                element: <AdminLogin />,
            },
            {
                path: "qualified-items-list",
                element: <QualifiedItemsList />,
            },
            {
                path: "login-signup-review",
                element: <LoginSignupReview />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "/products/:slug",
                element: <ProductDetail />,
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
                path: "privacy-policy",
                element: <PrivacyPolicy />,
            },
            {
                path: "terms-and-conditions",
                element: <TermsAndConditions />,
            },
            {
                path: "refund-policy",
                element: <RefundPolicy />,
            },
            {
                path: "login-register",
                element: <Login_Signup />,
            },
            {
                path: "memberships",
                element: <Membership />,
                children: [
                    {
                        path: "",
                        element: <MembershipPlans />,
                    },
                    {
                        path: "purchase",
                        element: <MembershipPurchase />,
                    }
                ]
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
                        path: 'moderation/edit',
                        element: <ProductDetails />
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
                        path: 'my-products/:slug',
                        element: <ProductPage />
                    },
                    {
                        path: 'my-products/edit',
                        element: <ProductDetails />
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
                        path: 'plans-and-features',
                        element: <Settings />
                    },
                    {
                        path: 'donations',
                        element: <Donations />
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
