import { createRouter, createWebHistory } from 'vue-router';
import AdminLogin from '../components/AdminLogin.vue';
import HomePage from '../components/HomePage.vue';
import AdminDashboard from '../components/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/admin', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin-dashboard', name: 'AdminDashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;