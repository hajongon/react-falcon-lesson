import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ErrorLayout from '@/layouts/ErrorLayout'

import Error404 from '@/components/errors/Error404'
import Error500 from '@/components/errors/Error500'
import Home from '../pages/Home'

const FalconRoutes = () => {
    return (
        <Routes>
            <Route element={<ErrorLayout />}>
                <Route path="errors/404" element={<Error404 />} />
                <Route path="errors/500" element={<Error500 />} />
            </Route>
            {/* //--- MainLayout start  */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
            {/* //--- MainLayout end  */}
            {/* <Navigate to="/errors/404" /> */}
            <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
    )
}
export default FalconRoutes
