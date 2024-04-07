export const noteRoutes = {
    label: 'note',
    children: [
        {
            name: 'note 1',
            icon: 'rocket',
            to: '/note/1',
            active: true,
        },
    ],
}

export const stateRoutes = {
    label: 'state',
    children: [
        {
            name: 'example 1',
            icon: 'rocket',
            to: '/state/example-1',
            active: true,
        },
    ],
}

export const exampleRoutes = {
    label: 'table',
    children: [
        {
            name: 'basic-table',
            icon: 'rocket',
            to: '/table/basic-table',
            active: true,
        },
        {
            name: 'advance-table',
            icon: 'rocket',
            to: '/table/advance-table',
            active: true,
        },
    ],
}

export default [stateRoutes, exampleRoutes]
