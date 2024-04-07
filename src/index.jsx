import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainStore from './MainStore'
import '@/helpers/initFA'

import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './assets/css/theme.css'
import './assets/css/user.css'

// DOMContentLoaded 이벤트 리스너를 추가하여 DOM 로딩 완료 후 실행되도록 함
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('main')
    const root = ReactDOM.createRoot(container)

    root.render(
        <MainStore>
            <App />
        </MainStore>
    )
})
