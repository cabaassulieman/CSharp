import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './pages/home.vue';
import login from './pages/login.vue';
import Doctors from './pages/doctors.vue';
import setup from './pages/signup.vue';
import contact from './pages/contact.vue';
import bookingOne from './pages/booking1.vue';

import './style.css';
import { compile } from '@vue/compiler-dom';

const router = createRouter({
    routes:[
        { path: '/', component: Home},
    {path: '/login', component: login },
    {path: '/doctors', component: Doctors},
    {path: '/signup', component:setup},
    {path: '/contact', component:contact},
    {path: '/booking1', component:bookingOne}
    ],
    history:createWebHistory()
});
const app = createApp(App);
app.use(router);
app.mount('#app');