import React, { Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
// import './App.css'
import './index.css'
import { BrowserRouter, Navigate, useNavigate, useRoutes } from 'react-router-dom'
import { BackdropLoader, BackdropLoaderProvider, GlobalLoader } from './components/backdropLoader/BackdropLoader.jsx'
import { Toaster } from 'sonner'
import router from "./routes/main.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Cookies from "js-cookie";
import { useAuthStore } from './store/AuthStore.js'
import { AUTHENTICATEUSER, GET_VALID_USER } from './services/operations/authApi.js'
import { CookiesProvider } from 'react-cookie'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <BackdropLoaderProvider>
            <BackdropLoader>
              <Main />
            </BackdropLoader>
          </BackdropLoaderProvider>

          {/* <BackdropLoader /> */}
          <Toaster position="top-center" theme='light' richColors />
        </BrowserRouter>
      </QueryClientProvider>
    </CookiesProvider>
  // </React.StrictMode>,
)

export default function Main() {
  const content = useRoutes(router);


  return (

    // <Suspense fallback={<GlobalLoader/>}>
    <div>
      {content}
    </div>
    // </Suspense>
  );
}