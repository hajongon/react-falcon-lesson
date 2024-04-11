export const noteRoutes = {
    label: 'note',
    children: [
        {
            name: '바닐라 vs 리액트',
            icon: 'rocket',
            to: '/note/1',
            active: true,
        },
        {
            name: 'useEffect',
            icon: 'rocket',
            to: '/note/2',
            active: true,
        },
        {
            name: 'Axios',
            icon: 'rocket',
            to: '/note/3',
            active: true,
        },
        {
            name: 'state 변경',
            icon: 'rocket',
            to: '/note/4',
            active: true,
        },
        {
            name: '클래스 vs 함수',
            icon: 'rocket',
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
            icon: 'rocket',
            to: '/falcon/1',
            active: true,
        },
        {
            name: 'Row, Col',
            icon: 'rocket',
            to: '/falcon/2',
            active: true,
        },
        {
            name: '추상화',
            icon: 'rocket',
            to: '/falcon/3',
            active: true,
        },
    ],
}

// export const exampleRoutes = {
//     label: 'table',
//     children: [
//         {
//             name: 'basic-table',
//             icon: 'rocket',
//             to: '/table/basic-table',
//             active: true,
//         },
//         {
//             name: 'advance-table',
//             icon: 'rocket',
//             to: '/table/advance-table',
//             active: true,
//         },
//     ],
// }
