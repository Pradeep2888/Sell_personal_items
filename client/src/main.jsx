import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { BackdropLoader, BackdropLoaderProvider } from './components/backdropLoader/BackdropLoader.jsx'
import { Toaster } from 'sonner'
import router from "./routes/main.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <BackdropLoaderProvider>
          <BackdropLoader>
            <Main />
          </BackdropLoader>
        </BackdropLoaderProvider>

        {/* <BackdropLoader /> */}
        <Toaster position="top-center" theme='light' richColors  />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)

export default function Main() {
  const content = useRoutes(router);
  return <div>{content}</div>;
}