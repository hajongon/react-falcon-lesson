import React, { useContext } from 'react'
import NavbarDropdown from './NavbarDropdown'
import { domainRoutes } from '@/routes/siteMaps'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { flatRoutes } from '@/helpers/utils'

import AppContext from '@/context/Context'

const NavbarTopDropDownMenus = () => {
    const {
        config: { navbarCollapsed, showBurgerMenu },
        setConfig,
        // useContext(AppContext)
        // communityRoutes,
    } = useContext(AppContext)

    //useContext(AppContext) 아래

    const handleDropdownItemClick = () => {
        if (navbarCollapsed) {
            setConfig('navbarCollapsed', !navbarCollapsed)
        }
        if (showBurgerMenu) {
            setConfig('showBurgerMenu', !showBurgerMenu)
        }
    }
    return (
        <>
            <NavbarDropdown title="Domain">
                {flatRoutes(domainRoutes.children).map((route) => (
                    <Dropdown.Item
                        key={route.name}
                        as={Link}
                        className={route.active ? 'link-600' : 'text-500'}
                        to={route.to}
                        onClick={handleDropdownItemClick}
                    >
                        {route.name}
                    </Dropdown.Item>
                ))}
            </NavbarDropdown>
        </>
    )
}

export default NavbarTopDropDownMenus
