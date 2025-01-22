import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitResumeView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
    },
  ],
})

export default router

// import { createRouter, createWebHistory } from 'vue-router'
// import DefaultLayout from '../layouts/DefaultLayout.vue'
// import BlankLayout from '../layouts/BlankLayout.vue'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       component: DefaultLayout,
//       children: [
//         {
//           path: '', // this will be the default route
//           name: 'home',
//           component: HomeView,
//         },
//         {
//           path: 'about',
//           name: 'about',
//           component: () => import('../views/AboutView.vue'),
//         },
//         {
//           path: 'submit',
//           name: 'submit',
//           component: () => import('../views/SubmitResumeView.vue'),
//         },
//       ],
//     },
//     {
//       path: '/auth',
//       component: BlankLayout,
//       children: [
//         {
//           path: 'signup',
//           name: 'signup',
//           component: () => import('../views/SignUpView.vue'),
//         },
//       ],
//     },
//   ],
// })

// export default router
