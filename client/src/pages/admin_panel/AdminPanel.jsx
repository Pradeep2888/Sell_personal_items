import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminPanelHeader from './AdminPanelHeader'

function AdminPanel() {

    return (
        <>
            <AdminPanelHeader />
            <Outlet />
        </>
    )
}

export default AdminPanel