import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import ErrorLayout from '@/layouts/ErrorLayout'

import Error404 from '@/components/errors/Error404'
import Error500 from '@/components/errors/Error500'
import Home from '@/pages/Home'
import BasicTable from '@/pages/BasicTable'
import AdvancedTable from '@/pages/AdvancedTable'
import Example1 from '@/pages/Example1'
import LectureNote from '@/pages/LectureNote'

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

            {/* //--- table menu start  */}
            <Route element={<MainLayout />}>
                <Route path="/table/basic-table" element={<BasicTable />} />
                <Route
                    path="/table/advance-table"
                    element={<AdvancedTable />}
                />
            </Route>

            {/* //--- state menu start  */}
            <Route element={<MainLayout />}>
                <Route path="/state/example-1" element={<Example1 />} />
            </Route>

            {/* //--- lecture note menu start  */}
            <Route element={<MainLayout />}>
                <Route path="/note/1" element={<LectureNote />} />
            </Route>

            {/* //--- MainLayout end  */}
            {/* <Navigate to="/errors/404" /> */}
            <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
    )
}
export default FalconRoutes
