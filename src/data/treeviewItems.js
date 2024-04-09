export const treeviewItems = [
    {
        name: 'public',
        id: '1',
        children: [],
    },
    {
        name: 'src',
        id: '32',
        children: [
            {
                name: 'apis',
                id: '2',
                desc: '서비스에서 사용하는 api들을 유형 별로 정리합니다.',
                children: [],
            },
            {
                name: 'assets',
                id: '3',
                desc: 'CSS 파일, 이미지 등 프로젝트에 필요한 자산을 포함합니다.',
                children: [
                    {
                        name: 'img',
                        id: '4',
                        children: [],
                    },
                ],
            },
            {
                name: 'components',
                id: '5',
                desc: '재사용 가능한 컴포넌트들이 위치합니다. 공통 컴포넌트는 `common`에, 특정 페이지에 속하는 컴포넌트는 해당 페이지 이름의 폴더에 배치하는 것이 좋습니다.',
                children: [
                    {
                        name: 'common',
                        id: '6',
                        desc: `Pages에 페이지 컴포넌트를 하나 추가할 때마다, components에 해당 페이지에 대한 폴더를 생성합니다.`,
                        children: [],
                    },
                    {
                        name: 'errors',
                        id: '7',
                        children: [],
                    },
                    {
                        name: 'navbar',
                        id: '8',
                        children: [],
                    },
                ],
            },
            {
                name: 'context',
                id: '9',
                desc: 'React의 Context API를 사용하여 전역 상태 관리를 위한 파일들을 포함합니다.',
                children: [
                    {
                        name: 'Context.jsx',
                        icon: ['fab', 'react'],
                        iconClass: 'text-info',
                        id: '10',
                        desc: '전역 상태 관리',
                    },
                ],
            },
            {
                name: 'data',
                id: '11',
                children: [],
            },
            {
                name: 'helpers',
                id: '12',
                desc: '유틸리티 함수들을 모아둔 디렉토리',
                children: [
                    {
                        name: 'utils.js',
                        icon: ['fab', 'js-square'],
                        iconClass: 'text-warning',
                        id: '13',
                    },
                ],
            },
            {
                name: 'hooks',
                id: '14',
                desc: '커스텀 훅을 정의하는 디렉토리',
                children: [],
            },
            {
                name: 'layouts',
                id: '15',
                desc: '애플리케이션의 전반적인 레이아웃 정의. 에러 페이지나 메인 레이아웃(어떤 페이지든 항상 존재해야 하는 요소. navbar 등)',
                children: [
                    {
                        name: 'MainLayout.jsx',
                        icon: ['fab', 'react'],
                        iconClass: 'text-info',
                        id: '16',
                        code: `const MainLayout = () => {
    const { hash, pathname } = useLocation()

    // URL의 해시 값이 변경될 때 해당 해시에 해당하는 DOM 요소로 부드럽게 스크롤 이동합니다. 
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

    // 경로가 변경될 때(pathname이 변경될 때), 페이지를 최상단으로 스크롤합니다.
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
            <>
                <NavbarTop />
                {/*------ Main Routes ------*/}
                {/*------ Outlet은 부모 라우트 내에서 정의된 자식 라우트를 렌더링하는 위치 지정 ------*/}
                <Outlet className="pb-0" />
            </>
    )
}

export default MainLayout`,
                    },
                    {
                        name: 'ErrorLayout.jsx',
                        icon: ['fab', 'react'],
                        iconClass: 'text-info',
                        id: '17',
                    },
                ],
            },
            {
                name: 'pages',
                id: '18',
                desc: '실제로 라우팅되는 각 페이지의 컴포넌트',
                children: [],
            },
            {
                name: 'reducers',
                dsec: '',
                id: '19',
                children: [
                    {
                        name: 'configReducer.js',
                        icon: ['fab', 'js-square'],
                        iconClass: 'text-warning',
                        id: '20',
                    },
                ],
            },
            {
                name: 'routes',
                id: '21',
                desc: '애플리케이션의 라우팅을 관리합니다.',
                children: [
                    {
                        name: 'index.jsx',
                        icon: ['fab', 'react'],
                        iconClass: 'text-info',
                        id: '22',
                        code: `const FalconRoutes = () => {
    return (
        <Routes>
            <Route element={<ErrorLayout />}>
                <Route path="errors/404" element={<Error404 />} />
                <Route path="errors/500" element={<Error500 />} />
            </Route>

            {/* 상단 메뉴 1  */}
            <Route element={<MainLayout />}>
                <Route path="/note/1" element={<바닐라vs리액트 />} />
                <Route path="/note/2" element={<유즈이펙트 />} />
                <Route path="/note/3" element={<액시오스 />} />
                <Route path="/note/4" element={<비동기처리 />} />
            </Route>
            <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
    )
}
export default FalconRoutes`,
                    },
                    {
                        name: 'siteMaps.js',
                        icon: ['fab', 'js-square'],
                        iconClass: 'text-warning',
                        id: '23',
                        code: `export const noteRoutes = {
    label: 'note',
    children: [
        {
            name: '바닐라 vs 리액트',
            to: '/note/1',
            active: true,
        },
        {
            name: 'useEffect',
            to: '/note/2',
            active: true,
        },
        {
            name: 'Axios',
            to: '/note/3',
            active: true,
        },
        {
            name: 'state 비동기 처리',
            to: '/note/4',
            active: true,
        },
        {
            name: '클래스 vs 함수',
            to: '/note/5',
            active: true,
        },
    ],
}

export const projectRoutes = {
    label: 'project',
    children: [
        {
            name: 'Structure',
            to: '/falcon/1',
            active: true,
        },
        {
            name: 'Row, Col',
            to: '/falcon/2',
            active: true,
        },
    ],
}`,
                    },
                ],
            },
            {
                name: 'App.jsx',
                icon: ['fab', 'react'],
                iconClass: 'text-info',
                id: '24',
                code: `const App = () => {
    return (
        <Router basename={'/'}>
            // 라우팅 정보 
            <FalconRoutes />
        </Router>
    )
}`,
            },
            {
                name: 'config.js',
                icon: ['fab', 'js-square'],
                iconClass: 'text-warning',
                id: '25',
            },
            {
                name: 'index.jsx',
                icon: ['fab', 'react'],
                iconClass: 'text-info',
                id: '26',
                code: `// DOMContentLoaded 이벤트 리스너를 추가하여 DOM 로딩 완료 후 실행되도록 함
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('main')
    const root = ReactDOM.createRoot(container)        
        root.render(
            // 전역 상태
            <MainStore>
                <App />
            </MainStore>
        )
})`,
                desc: '',
            },
            {
                name: 'MainStore.jsx',
                icon: ['fab', 'react'],
                iconClass: 'text-info',
                id: '27',
                code: `const MainStore = (props) => {
    const [exampleState, setExampleState] = useState()

    return (
        // Provider 컴포넌트는 value prop을 받아서 이 값을 하위에 있는 컴포넌트에게 전달합니다.
        // 여기서 props.children은 <App /> 컴포넌트.

        // <App /> 컴포넌트에서는 AppContext를 통해 value로 정의된 값에 접근할 수 있습니다.
        <AppContext.Provider
            value={{
                exampleState,
                setExampleState,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}`,
            },
        ],
    },

    {
        name: 'index.html',
        icon: ['fab', 'html5'],
        iconClass: 'text-danger',
        id: '28',
    },
    {
        name: 'package.json',
        icon: ['fab', 'node-js'],
        iconClass: 'text-success',
        id: '29',
    },
    {
        name: 'package-lock.json',
        icon: ['fab', 'node-js'],
        iconClass: 'text-success',
        id: '30',
    },
    {
        name: 'README.md',
        icon: 'exclamation-circle',
        iconClass: 'text-primary',
        id: '31',
    },
]
