import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'listado',
            component: () => import('../views/ListView.vue')
        },
        {
            path: '/create',
            name: 'crear',
            component: () => import('../views/CreateView.vue')
        },
        {
            path: '/edit/:id',
            name: 'editar',
            component: () => import('../views/EditView.vue')
        }
    ]
})

export default router;