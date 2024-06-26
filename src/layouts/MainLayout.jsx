import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppContext from '@/context/Context'
import classNames from 'classnames'
import NavbarTop from '@/components/navbar/top/NavbarTop'

const MainLayout = () => {
    const { hash, pathname } = useLocation()
    const isKanban = pathname.includes('kanban')

    const {
        config: { isFluid, navbarPosition },
    } = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                    })
                }
            }
        }, 0)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className={isFluid ? 'container-fluid' : 'container'}>
            {(navbarPosition === 'vertical' || navbarPosition === 'combo') && (
                <></>
            )}

            <div className={classNames('content', { 'pb-0': isKanban })}>
                <NavbarTop />
                {/*------ Main Routes ------*/}
                <Outlet className="pb-0" />
                {/* {!isKanban && <Footer />} */}
            </div>
        </div>
    )
}

export default MainLayout
