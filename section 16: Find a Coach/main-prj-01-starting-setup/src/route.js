import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachRegistation from './pages/coaches/CoachRegister.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');

const CoachRegistration = () => import('./pages/coaches/CoachRegister.vue');

const ContactCoach = () => import('./pages/requests/ContactCoach.vue');

const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');

const UserAuth = () => import('./pages/auth/UserAuth.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requireAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requireAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requireUnauth: true } },
    { path: '/:notfound(.*)', component: NotFound },
  ],
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requireUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});
export default router;
