import { createRouter, createWebHistory } from 'vue-router'

const router = crateRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'listado',
            componenet: () => import('../views/ListView.vue')
        },
        {
            path: '/create',
            name: 'crear',
            componenet: () => import('../views/CreateView.vue')
        },
        {
            path: '/edit/:id',
            name: 'editar',
            componenet: () => import('../views/EditView.vue')
        }
    ]
})

export default router;