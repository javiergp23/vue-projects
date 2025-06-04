import {createRouter, createWebHistory} from 'vue-router'
import LibrosView from '../views/LibrosView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: LibrosView
        },
        {
            path: '/nuevoLibro',
            name: 'nuevoLibro',
            component: () => import('../views/NuevoLibroView.vue')
        }
        
    ]
})

export default router;