import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {layout: 'main'},
        component: () => import('@/pages/Dashboard')
    },
    {
        path: '/',
        name: 'Courses',
        meta: {layout: 'main'},
        component: () => import('@/pages/Courses'),
        children: [
            {
                path: '/',
                component: () => import('@/components/Tab-1')
            },
            {
                path: 'tab_2',
                component: () => import('@/components/Tab-2')
            },
            {
                path: 'tab_3',
                component: () => import('@/components/Tab-3')
            }
        ]
    },
    {
        path: '/resources',
        name: 'Resources',
        meta: {layout: 'main'},
        component: () => import('@/pages/Resources')
    },
    {
        path: '/friends',
        name: 'Friends',
        meta: {layout: 'main'},
        component: () => import('@/pages/Friends')
    },
    {
        path: '/chats',
        name: 'Chats',
        meta: {layout: 'main'},
        component: () => import('@/pages/Chats')
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: {layout: 'main'},
        component: () => import('@/pages/Settings')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
