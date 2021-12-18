import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './pages/home.vue';
import login from './pages/login.vue';
import Doctors from './pages/doctors.vue'

import './style.css';
import { compile } from '@vue/compiler-dom';

const router = createRouter({
    routes:[
        { path: '/', component: Home},
    {path: '/login', component: login },
    {path: '/doctors', component: Doctors},
    ],
    history:createWebHistory()
});
const app = createApp(App);
app.use(router);
app.mount('#app');