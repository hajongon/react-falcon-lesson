import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import AppContext from '@/context/Context'
import FalconRoutes from '@/routes'
import { CloseButton } from '@/components/common/Toast'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => {
    const HTMLClassList = document.getElementsByTagName('html')[0].classList
    const {
        config: { navbarPosition },
    } = useContext(AppContext)

    useEffect(() => {
        // 운영 체제 감지
        const detectOS = async () => {
            let platform = ''
            if (navigator.userAgentData) {
                const platformInfo =
                    await navigator.userAgentData.getHighEntropyValues([
                        'platform',
                    ])
                platform = platformInfo.platform.toLowerCase()
            } else {
                // Fallback for older browsers
                platform = navigator.userAgent.toLowerCase()
            }

            if (platform.includes('windows')) {
                HTMLClassList.add('windows')
            }
        }

        detectOS()

        // 브라우저 감지
        const userAgent = navigator.userAgent.toLowerCase()
        if (userAgent.includes('chrome') && !userAgent.includes('edge')) {
            HTMLClassList.add('chrome')
        }
        if (userAgent.includes('firefox')) {
            HTMLClassList.add('firefox')
        }
        if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
            HTMLClassList.add('safari')
        }
    }, [HTMLClassList])

    useEffect(() => {
        if (navbarPosition === 'double-top') {
            HTMLClassList.add('double-top-nav-layout')
        }
        return () => HTMLClassList.remove('double-top-nav-layout')
    }, [navbarPosition])

    return (
        <Router basename="/react-falcon-lesson">
            <FalconRoutes />
            <ToastContainer
                closeButton={CloseButton}
                icon={false}
                position={toast.POSITION.BOTTOM_LEFT}
            />
        </Router>
    )
}

export default App
