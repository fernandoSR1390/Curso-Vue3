import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contador',
      name: 'Contador',
      component: () => import('../modules/contador/components/ContadorV.vue')
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue')
    },
    {
      path: '/registrar',
      name: 'Registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue')
    },
    {
      path: '/calcular',
      name: 'Calcular',
      component: () => import('../modules/calcular/views/CalcularView.vue')
    }
  ]
})

export default router
