import React, { useContext, useEffect, useRef, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import classNames from 'classnames'
import AppContext from '@/context/Context'
import Logo from '@/components/common/Logo'
import NavbarTopDropDownMenus from './NavbarTopDropDownMenus'
import { navbarBreakPoint, topNavbarBreakpoint } from '@/config'
import TopNavRightSideNavItem from './TopNavRightSideNavItem'
import { useLocation } from 'react-router-dom'

const NavbarTop = () => {
    const { pathname } = useLocation()
    const {
        config: { showBurgerMenu, navbarPosition, navbarCollapsed },
        setConfig,
    } = useContext(AppContext)

    const isChat = pathname.includes('chat')

    const [showDropShadow, setShowDropShadow] = useState(false)

    const handleBurgerMenu = () => {
        ;(navbarPosition === 'top' || navbarPosition === 'double-top') &&
            setConfig('navbarCollapsed', !navbarCollapsed)
        ;(navbarPosition === 'vertical' || navbarPosition === 'combo') &&
            setConfig('showBurgerMenu', !showBurgerMenu)
    }

    const setDropShadow = () => {
        const el = document.documentElement
        if (el.scrollTop > 0) {
            setShowDropShadow(true)
        } else {
            setShowDropShadow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setDropShadow)
        return () => window.removeEventListener('scroll', setDropShadow)
    }, [])

    const burgerMenuRef = useRef()

    return (
        <Navbar
            className={classNames(
                'navbar-glass fs--1 navbar-top sticky-kit mb-1',
                {
                    // 'navbar-glass-shadow': showDropShadow
                    'navbar-glass-shadow': showDropShadow && !isChat,
                }
            )}
            expand={
                navbarPosition === 'top' ||
                navbarPosition === 'combo' ||
                navbarPosition === 'double-top'
                    ? topNavbarBreakpoint
                    : true
            }
        >
            {navbarPosition === 'double-top' ? (
                <div className="w-100">
                    <div className="d-flex flex-between-center">
                        <NavbarTopElements
                            navbarCollapsed={navbarCollapsed}
                            navbarPosition={navbarPosition}
                            handleBurgerMenu={handleBurgerMenu}
                            burgerMenuRef={burgerMenuRef}
                        />
                    </div>
                    <hr className="my-2 d-none d-lg-block" />
                    <Navbar.Collapse
                        in={navbarCollapsed}
                        className="scrollbar py-2"
                    >
                        <Nav navbar>
                            <NavbarTopDropDownMenus />
                        </Nav>
                    </Navbar.Collapse>
                </div>
            ) : (
                <NavbarTopElements
                    navbarCollapsed={navbarCollapsed}
                    navbarPosition={navbarPosition}
                    handleBurgerMenu={handleBurgerMenu}
                    burgerMenuRef={burgerMenuRef}
                />
            )}
        </Navbar>
    )
}

const NavbarTopElements = ({
    navbarPosition,
    handleBurgerMenu,
    navbarCollapsed,
}) => {
    const burgerMenuRef = useRef()
    return (
        <>
            <Navbar.Toggle
                ref={burgerMenuRef}
                className={classNames('toggle-icon-wrapper me-md-3 me-2', {
                    'd-lg-none':
                        navbarPosition === 'top' ||
                        navbarPosition === 'double-top',
                    [`d-${navbarBreakPoint}-none`]:
                        navbarPosition === 'vertical' ||
                        navbarPosition === 'combo',
                })}
                as="div"
            >
                <button
                    className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
                    onClick={handleBurgerMenu}
                    id="burgerMenu"
                >
                    <span className="navbar-toggle-icon">
                        <span className="toggle-line" />
                    </span>
                </button>
            </Navbar.Toggle>

            <Logo at="navbar-top" id="topLogo" />

            {navbarPosition === 'top' || navbarPosition === 'combo' ? (
                <Navbar.Collapse
                    in={navbarCollapsed}
                    className="scrollbar pb-3 pb-lg-0"
                >
                    <Nav navbar>
                        <NavbarTopDropDownMenus />
                    </Nav>
                </Navbar.Collapse>
            ) : (
                <Nav
                    navbar
                    className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
                    as="ul"
                ></Nav>
            )}
            <TopNavRightSideNavItem />
        </>
    )
}

export default NavbarTop
