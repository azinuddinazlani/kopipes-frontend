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
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitResumeView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue'),
    },
    {
      path: '/assessment',
      name: 'assessment',
      component: () => import('../views/AssessmentView.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/job-desc',
      name: 'job-desc',
      component: () => import('../views/JobDescView.vue'),
    },
    {
      path: '/admin/job-form',
      name: 'admin.job-form',
      component: () => import('../views/AdminJobFormView.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'admin.dashboard',
      component: () => import('../views/AdminDashboardView.vue'),
    },
    {
      path: '/user-type',
      name: 'user-type',
      component: () => import('../views/UserTypeSelectionView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/job-listing',
      name: 'job-listing',
      component: () => import('../views/JobListingView.vue'),
    },
    {
      path: '/assessment-result',
      name: 'assessment-result',
      component: () => import('../components/AssessmentResultPage.vue'),
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
