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

import VanillaJsVsReact from '@/pages/VanillaJsVsReact'
import ExUseEffect from '@/pages/ExUseEffect'
import AxiosExample from '@/pages/AxiosExample'
import ProjectStructure from '@/pages/ProjectStructure'
import ClassVsFunction from '@/pages/ClassVsFunction'
import RowAndCol from '@/pages/RowAndCol'

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
            <Route element={<MainLayout />}></Route>

            {/* //--- lecture note menu start  */}
            <Route element={<MainLayout />}>
                <Route path="/note/1" element={<VanillaJsVsReact />} />
                <Route path="/note/2" element={<ExUseEffect />} />
                <Route path="/note/3" element={<AxiosExample />} />
                <Route path="/note/4" element={<Example1 />} />
                <Route path="/note/5" element={<ClassVsFunction />} />
            </Route>

            {/* //--- falcon menu start  */}
            <Route element={<MainLayout />}>
                <Route path="/falcon/1" element={<ProjectStructure />} />
                <Route path="/falcon/2" element={<RowAndCol />} />
            </Route>

            {/* //--- MainLayout end  */}
            {/* <Navigate to="/errors/404" /> */}
            <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
    )
}
export default FalconRoutes
