import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/crear',
            name: 'crear',
            component: () => import('../components/Create.vue')
        },
        {
            path: '/editar',
            name: 'editar',
            component: () => import('../components/Edit.vue')
        },
        {
            path: '/listar',
            name: 'listar',
            component: () => import('../components/List.vue')
        },
        
    ]
})

export default router